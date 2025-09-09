/*
Jenkins pipeline stage snippet: Accessibility checks (axe-playwright + LHCI)
Usage: include this file in your Jenkinsfile or pipeline library to run accessibility checks.
Assumptions:
- Working directory is the repo root.
- Node.js and npm are available on the agent.
- The agent can run headless browsers (install Playwright deps or run inside Playwright Docker image).
- PORT 4321 is free for preview; adjust if needed.

Declarative pipeline example (to include in Jenkinsfile):
stage('Accessibility Tests') {
  steps {
    script {
      def nodeCmd = isUnix() ? 'bash' : 'cmd'
      sh '''
        set -e
        cd web
        npm ci
        npm run prepare:assets || true
        npx playwright install --with-deps
        npm run build
        # start preview in background and capture PID
        npm run preview -- --port 4321 > tmp/astro_preview.log 2>&1 & echo $! > /tmp/astro_preview.pid
        # wait for preview to come up
        n=0; until curl -sS http://localhost:4321 >/dev/null || [ $n -ge 15 ]; do n=$((n+1)); sleep 1; done
        # run axe-playwright (exits 2 on violations, 0 on ok)
        node ../scripts/run-axe-playwright.js http://localhost:4321
        AXE_EXIT=$?
        if [ $AXE_EXIT -ne 0 ]; then
          echo "axe-playwright exited with code $AXE_EXIT"
          EXIT_CODE=$AXE_EXIT
        fi
        # run Lighthouse CI (will fail the build if assertions fail)
        npx lhci autorun
        LHCI_EXIT=$?
        if [ $LHCI_EXIT -ne 0 ]; then
          echo "LHCI exited with code $LHCI_EXIT"
          # prefer axe exit if already set, otherwise set to LHCI exit
          if [ -z "${EXIT_CODE}" ]; then
            EXIT_CODE=$LHCI_EXIT
          fi
        fi
        # stop preview
        kill $(cat /tmp/astro_preview.pid) || true
        # propagate exit code if set
        if [ -n "$EXIT_CODE" ]; then exit $EXIT_CODE; fi
      '''
    }
  }
  post {
    always {
      // Archive standardized reports directory only (axe + LHCI outputs)
      archiveArtifacts artifacts: 'web/reports/**', allowEmptyArchive: true
      junit allowEmptyResults: true, testResults: 'web/test-results/**/*.xml'
    }
  }
}

Notes:
- The script uses `npx playwright install --with-deps` to ensure browser binaries are available.
- For faster, more hermetic CI consider using a Playwright Docker image or a pre-baked CI image that includes Playwright browsers.
- LHCI configuration (lhci.config.js) can be added to the repo to control thresholds; `lhci autorun` is included here as optional and non-fatal.
- Adjust timeouts and retry counts based on CI environment speed.
*/
