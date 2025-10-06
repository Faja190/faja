#!/bin/bash
# Deployment workflow for portfolio site
# Default: build & deploy
# Flags:
#   --preview   Run local preview before deploy
#   --fast      Skip preview (default behavior)
#   --clean     Wipe gh-pages & force push

set -e  # exit on error

MODE="fast"  # default mode

# Parse flag
if [[ $1 == "--preview" ]]; then
  MODE="preview"
elif [[ $1 == "--clean" ]]; then
  MODE="clean"
fi

if [[ $MODE == "clean" ]]; then
  echo "🧹 Clean deploy: wiping gh-pages branch..."
  git checkout gh-pages
  git rm -rf .
  git commit -m "Clean gh-pages deployment" || echo "No files to remove"
  git push origin gh-pages --force
  git checkout main
fi

echo "🔄 Checking out main branch..."
git checkout main

echo "⬇️ Pulling latest changes from origin/main..."
git pull origin main

echo "⬆️ Pushing any local commits to origin/main..."
git push origin main

echo "🛠️ Building project..."
npm install
npm run build

if [[ $MODE == "preview" ]]; then
  echo "👀 Starting local preview..."
  npm run preview &
  PREVIEW_PID=$!

  sleep 3
  echo "✅ Preview running at http://localhost:4173/"
  echo "Press ENTER when you're done previewing to deploy..."
  read

  kill $PREVIEW_PID
elif [[ $MODE == "fast" ]]; then
  echo "⚡ Fast mode — skipping preview."
elif [[ $MODE == "clean" ]]; then
  echo "🧹 Clean mode — skipping preview."
fi

echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo "🎉 Deployment complete!"
echo "🌍 Live site:"
echo "  GitHub Pages: https://faja190.github.io/faja/"
echo "  Custom Domain: https://fatimaajabukar.dev"