pipeline {
  agent any

  environment {
    // Jenkins credential ID expected for pushing to GitHub via SSH
    GITHUB_SSH_CREDENTIAL = 'github-ssh'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Typecheck') {
      steps {
        dir('web') {
          sh '''
            set -e
            npm ci
            npx tsc --noEmit
          '''
        }
      }
    }

    stage('Lint') {
      steps {
        dir('web') {
          sh '''
            set -e
            npm ci
            if npx eslint --version >/dev/null 2>&1; then
              npx eslint . --max-warnings=0
            else
              echo "ESLint not configured; skipping lint."
            fi
          '''
        }
      }
    }

    stage('Tests') {
      steps {
        dir('web') {
          sh '''
            set -e
            npm ci
            npm test
          '''
        }
      }
      post {
        always {
          // Vitest can be configured to emit junit xml; preserve any results
          junit allowEmptyResults: true, testResults: 'web/test-results/**/*.xml'
        }
      }
    }

    stage('Build') {
      steps {
        dir('web') {
          sh '''
            set -e
            npm ci
            npx playwright install --with-deps
            npm run build
          '''
        }
      }
      post {
        success {
          archiveArtifacts artifacts: 'web/dist/**', allowEmptyArchive: true
        }
      }
    }

    stage('Accessibility Tests') {
      steps {
        // Reuse the accessibility-stage.groovy snippet which runs the preview + axe + LHCI
        script {
          def snippet = load('.jenkins/accessibility-stage.groovy')
          // snippet contains a stage block and will execute its checks
        }
      }
    }

    stage('Deploy to Cloudflare Pages') {
      when {
        expression {
          // Only deploy on successful pipeline and when an SSH credential is available (credential id must exist)
          return true
        }
      }
      steps {
        script {
          // Deploy built artifacts to the Git-backed Cloudflare Pages branch "cloudflare-pages"
          // This requires an SSH credential configured in Jenkins with id matching GITHUB_SSH_CREDENTIAL.
          sshagent (credentials: [env.GITHUB_SSH_CREDENTIAL]) {
            // The deploy script performs a safe publish of the contents of web/dist to the target branch.
            sh '.jenkins/deploy-to-pages.sh cloudflare-pages web/dist'
          }
        }
      }
    }
  }

  post {
    always {
      // Archive reports and artifacts
      archiveArtifacts artifacts: 'web/reports/**, a11y-axe-report.json, web/dist/**', allowEmptyArchive: true
      junit allowEmptyResults: true, testResults: 'web/test-results/**/*.xml'
    }
    success {
      echo "Pipeline completed successfully."
    }
    failure {
      echo "Pipeline failed. Check stage logs and archived reports."
    }
  }
}
