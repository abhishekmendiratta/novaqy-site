-- Migration: 010_create_zoho_sign_documents.sql
-- Purpose: Add table to persist Zoho Sign requests and signed documents metadata

BEGIN;

-- Ensure pgcrypto extension exists for gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS public.zoho_sign_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id text,
  recipient_email text,
  recipient_name text,
  status text,
  zoho_transaction_id text,
  zoho_sign_url text,
  signed_file_path text,
  signed_file_url text,
  metadata jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Trigger to update updated_at timestamp on row update
CREATE OR REPLACE FUNCTION public.trigger_set_timestamp()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS set_timestamp ON public.zoho_sign_documents;
CREATE TRIGGER set_timestamp
  BEFORE UPDATE ON public.zoho_sign_documents
  FOR EACH ROW
  EXECUTE PROCEDURE public.trigger_set_timestamp();

COMMIT;
