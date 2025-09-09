#!/usr/bin/env bash
# 009_rls_test.sh
# Simple curl-based integration checks for migration 009 (schemas + RLS).
#
# Usage:
#   SUPABASE_URL="https://xyzcompany.supabase.co" \
#   SUPABASE_ANON_KEY="anon-key" \
#   SUPABASE_SERVICE_KEY="service-role-key" \
#   SAMPLE_JWT="eyJ..." \
#   bash supabase/tests/009_rls_test.sh
#
# The script performs:
# 1) anonymous INSERT into contact_submissions (expect 201)
# 2) anonymous SELECT contact_submissions (expect 403)
# 3) service-role INSERT into orders (expect 201)
# 4) attempt authenticated SELECT of orders as SAMPLE_JWT (best-effort; requires matching email)
# 5) attempt authenticated PATCH on orders as SAMPLE_JWT (expect 403)
# 6) service-role INSERT into call_requests (expect 201)
#
# Note: This is a lightweight smoke-check. For CI use, adapt timeouts, error handling, and real JWTs.
set -euo pipefail

SUPABASE_URL="${SUPABASE_URL:-}"
ANON_KEY="${SUPABASE_ANON_KEY:-}"
SERVICE_KEY="${SUPABASE_SERVICE_KEY:-}"
SAMPLE_JWT="${SAMPLE_JWT:-}"
TEST_EMAIL="${TEST_EMAIL:-alice@example.com}"

if [[ -z "$SUPABASE_URL" || -z "$ANON_KEY" || -z "$SERVICE_KEY" ]]; then
  echo "Missing required env vars. Set SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_KEY"
  exit 2
fi

curl_json() {
  curl -sS -w "\n%{http_code}" "$@" 
}

echo "1) ANON INSERT -> contact_submissions (expect 201)"
body='{"name":"Smoke Test","email":"anon+test@example.com","message":"hello test","preferred_contact_time":"Morning"}'
resp=$(curl -s -o /tmp/anon_insert_body.txt -w "%{http_code}" -X POST "${SUPABASE_URL}/rest/v1/contact_submissions" \
  -H "apikey: ${ANON_KEY}" \
  -H "Authorization: Bearer ${ANON_KEY}" \
  -H "Content-Type: application/json" \
  -H "Prefer: return=representation" \
  -d "${body}")
if [[ "$resp" -ge 200 && "$resp" -lt 300 ]]; then
  echo "  PASS: anonymous insert returned $resp"
else
  echo "  FAIL: anonymous insert returned $resp"
  cat /tmp/anon_insert_body.txt || true
fi

echo "2) ANON SELECT -> contact_submissions (expect 403)"
resp=$(curl -s -o /tmp/anon_select_body.txt -w "%{http_code}" -X GET "${SUPABASE_URL}/rest/v1/contact_submissions" \
  -H "apikey: ${ANON_KEY}" \
  -H "Authorization: Bearer ${ANON_KEY}")
if [[ "$resp" == "403" ]]; then
  echo "  PASS: anonymous select blocked (403)"
else
  echo "  FAIL: anonymous select returned $resp"
  cat /tmp/anon_select_body.txt || true
fi

echo "3) SERVICE ROLE INSERT -> orders (expect 201)"
service_body='{"stripe_session_id":"sess_smoke_'"$(date +%s)"'","customer_name":"'"${TEST_EMAIL}"'","customer_email":"'"${TEST_EMAIL}"'","plan_type":"individual","amount_cents":24900,"currency":"usd"}'
resp=$(curl -s -o /tmp/service_insert_body.txt -w "%{http_code}" -X POST "${SUPABASE_URL}/rest/v1/orders" \
  -H "apikey: ${SERVICE_KEY}" \
  -H "Authorization: Bearer ${SERVICE_KEY}" \
  -H "Content-Type: application/json" \
  -H "Prefer: return=representation" \
  -d "${service_body}")
if [[ "$resp" -ge 200 && "$resp" -lt 300 ]]; then
  echo "  PASS: service insert into orders returned $resp"
  ORDERS_CREATED_ROW=$(cat /tmp/service_insert_body.txt)
  echo "  Inserted row: ${ORDERS_CREATED_ROW}"
else
  echo "  FAIL: service insert returned $resp"
  cat /tmp/service_insert_body.txt || true
fi

if [[ -n "$SAMPLE_JWT" ]]; then
  echo "4) AUTHENTICATED SELECT -> orders filtered by customer_email (best-effort)"
  resp=$(curl -s -o /tmp/auth_select_body.txt -w "%{http_code}" -X GET "${SUPABASE_URL}/rest/v1/orders?customer_email=eq.${TEST_EMAIL}" \
    -H "apikey: ${ANON_KEY}" \
    -H "Authorization: Bearer ${SAMPLE_JWT}")
  if [[ "$resp" == "200" ]]; then
    echo "  PASS: authenticated select returned 200 (rows may be empty)"
    cat /tmp/auth_select_body.txt
  else
    echo "  NOTE: authenticated select returned $resp - adjust SAMPLE_JWT or TEST_EMAIL to match a real user"
    cat /tmp/auth_select_body.txt || true
  fi

  echo "5) AUTHENTICATED PATCH -> orders (expect 403)"
  # Try to patch the payment_status of the row created via service role (not owner update)
  stripe_session_id=$(echo "${ORDERS_CREATED_ROW}" | sed -n 's/.*"stripe_session_id":"\([^"]*\)".*/\1/p' || true)
  if [[ -z "$stripe_session_id" ]]; then
    echo "  Skipping PATCH test: could not parse stripe_session_id from inserted row"
  else
    patch_body='{"payment_status":"paid"}'
    resp=$(curl -s -o /tmp/auth_patch_body.txt -w "%{http_code}" -X PATCH "${SUPABASE_URL}/rest/v1/orders?stripe_session_id=eq.${stripe_session_id}" \
      -H "apikey: ${ANON_KEY}" \
      -H "Authorization: Bearer ${SAMPLE_JWT}" \
      -H "Content-Type: application/json" \
      -d "${patch_body}")
    if [[ "$resp" == "403" || "$resp" == "401" ]]; then
      echo "  PASS: authenticated client PATCH blocked ($resp)"
    else
      echo "  FAIL: authenticated PATCH returned $resp"
      cat /tmp/auth_patch_body.txt || true
    fi
  fi
else
  echo "4/5) SKIPPED authenticated tests - set SAMPLE_JWT env var to run them"
fi

echo "6) SERVICE ROLE INSERT -> call_requests (expect 201)"
cr_body='{"order_id":null,"customer_email":"'"${TEST_EMAIL}"'","phone":"1234567890","status":"pending","notes":"smoke test"}'
resp=$(curl -s -o /tmp/service_callreq_body.txt -w "%{http_code}" -X POST "${SUPABASE_URL}/rest/v1/call_requests" \
  -H "apikey: ${SERVICE_KEY}" \
  -H "Authorization: Bearer ${SERVICE_KEY}" \
  -H "Content-Type: application/json" \
  -H "Prefer: return=representation" \
  -d "${cr_body}")
if [[ "$resp" -ge 200 && "$resp" -lt 300 ]]; then
  echo "  PASS: service insert into call_requests returned $resp"
  echo "  Row: $(cat /tmp/service_callreq_body.txt)"
else
  echo "  FAIL: service insert into call_requests returned $resp"
  cat /tmp/service_callreq_body.txt || true
fi

echo "SMOKE TESTS COMPLETE"
