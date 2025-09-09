#!/bin/sh
# Deploy built site directory to a Git-backed Cloudflare Pages branch.
# Usage: ./deploy-to-pages.sh <target-branch> <source-dir>
#
# Notes:
# - Expects SSH access to GitHub (git@github.com:owner/repo.git) via Jenkins SSH credential.
# - Run from repo workspace root (Jenkinsfile uses sshagent then runs this script).
# - This script force-updates the target branch with the exact contents of the built site.
# - Be careful: this will overwrite the target branch history on push (safe for a Pages deploy branch).

set -e
set -u
set -o pipefail

TARGET_BRANCH="${1:-cloudflare-pages}"
SOURCE_DIR="${2:-web/dist}"
REMOTE_REPO="${3:-git@github.com:abhishekmendiratta/novaqy-site.git}"

WORKDIR="$(mktemp -d /tmp/pages-deploy.XXXXXX)"
echo "Deploying $SOURCE_DIR -> $TARGET_BRANCH (remote: $REMOTE_REPO) using temp dir $WORKDIR"

cleanup() {
  rc=$?
  if [ -d "$WORKDIR" ]; then
    rm -rf "$WORKDIR"
  fi
  exit $rc
}
trap cleanup INT TERM EXIT

# Ensure source exists
if [ ! -d "$SOURCE_DIR" ]; then
  echo "Source directory '$SOURCE_DIR' not found. Nothing to deploy."
  exit 1
fi

cd "$WORKDIR"
git init >/dev/null 2>&1
git remote add origin "$REMOTE_REPO"

# If branch exists on remote, fetch it; otherwise create orphan branch
if git ls-remote --exit-code --heads origin "$TARGET_BRANCH" >/dev/null 2>&1; then
  echo "Remote branch $TARGET_BRANCH exists — fetching and checking out"
  git fetch origin "$TARGET_BRANCH" --depth=1 >/dev/null 2>&1 || true
  git checkout -b "$TARGET_BRANCH" FETCH_HEAD 2>/dev/null || git checkout --orphan "$TARGET_BRANCH"
else
  echo "Remote branch $TARGET_BRANCH does not exist — creating orphan branch"
  git checkout --orphan "$TARGET_BRANCH"
fi

# Remove any existing files in the branch
git rm -rf . >/dev/null 2>&1 || true

# Copy published files into temp repo (preserve dotfiles)
echo "Copying files from workspace: $PWD -> $WORKDIR"
# Use rsync if available for robustness, otherwise fallback to tar
if command -v rsync >/dev/null 2>&1; then
  rsync -a --delete --exclude='.git' "$PWD/../$SOURCE_DIR/" ./ 
else
  tar -C "$PWD/../$SOURCE_DIR" -cf - . | tar -C . -xf -
fi

# If no files to add, exit gracefully
if [ -z "$(git status --porcelain)" ]; then
  echo "No changes detected in built artifacts. Nothing to push."
  exit 0
fi

git add -A
COMMIT_MSG="CI: deploy to Cloudflare Pages - ${TARGET_BRANCH} - ${BUILD_NUMBER:-manual} ${GIT_COMMIT:-}"
git commit -m "$COMMIT_MSG" || true

# Force push to target branch
echo "Pushing to origin $TARGET_BRANCH"
git push --force origin "HEAD:$TARGET_BRANCH"

echo "Deploy complete."
