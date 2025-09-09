Jenkins helper files — deploy and pipeline notes

Overview
- This folder contains CI helper scripts and pipeline snippets used by the project's Jenkins pipeline:
  - accessibility-stage.groovy — runs axe-playwright + LHCI against the built preview
  - deploy-to-pages.sh — safely publishes built site to a Git-backed Cloudflare Pages branch

Deploy script expectations
- The deploy script (.jenkins/deploy-to-pages.sh) expects:
  - To be executed from the Jenkins workspace root.
  - SSH access to GitHub via an SSH deploy key or Jenkins SSH credential.
  - Remote repo: git@github.com:abhishekmendiratta/novaqy-site.git (overrideable by passing a third arg).
  - Source dir: web/dist (default) — adjust Jenkinsfile if your build output differs.

Recommended Jenkins credential setup (SSH deploy key)
1. On the Jenkins server / controller:
   - Generate an SSH key pair (ed25519 or rsa):
     ssh-keygen -t ed25519 -C "jenkins-pages-deploy" -f /var/jenkins_home/.ssh/pages_deploy
   - Copy the private key contents.

2. In Jenkins (Manage Jenkins → Credentials → (global) → Add Credentials):
   - Kind: SSH Username with private key
   - Username: git (or leave as default)
   - Private Key: Enter directly — paste contents of private key
   - ID: github-ssh (or pick a descriptive id; update the Jenkinsfile environment var GITHUB_SSH_CREDENTIAL accordingly)
   - Description: SSH key for pushing built artifacts to GitHub pages branch

3. Add the public key as a Deploy Key on GitHub:
   - Go to the repository Settings → Deploy keys → Add deploy key
   - Title: jenkins-pages-deploy
   - Key: paste the public key (pages_deploy.pub)
   - Check "Allow write access" (required to push)
   - Save.

Notes
- If you prefer using a Personal Access Token (PAT), store it as a "Username with password" credential and adapt the deploy script to use HTTPS auth (not provided here).
- The Jenkinsfile expects credential id stored in environment var GITHUB_SSH_CREDENTIAL (default 'github-ssh').
- Cloudflare Pages: configure the Pages site to use branch "cloudflare-pages" (create in Pages UI and point to this repo). With Git integration Pages will build automatically on pushes to that branch. Alternatively let Jenkins push built files to that branch (recommended for exact artifact control).

Rollback & safety
- The deploy script force-pushes to the target branch to ensure the branch matches the built output.
- If you need a non-destructive approach, modify the script to create a tag or use a different branch policy.

Troubleshooting
- If "Permission denied (publickey)" occurs on push: verify Jenkins' private key is correct and public key added to GitHub deploy keys with write access.
- For connectivity/firewall issues, ensure the Jenkins agent can reach github.com on port 22.
