#!/bin/bash
# workflow for updating the website
# push/pull any anew changes onto main branch -> build project -> preview -> deploy

# Normal workflow : ./deploy.sh
# Fast workflow (skip review) : ./deploy.sh --fast
# Clean workflow (wipe gh-pages & force push): ./deploy.sh --clean

set -e  # exit on error

MODE="normal"

# check which flag was passed
if [[ $1 == "--fast" ]]; then
  MODE="fast"
elif [[ $1 == "--clean" ]]; then
  MODE="clean"
fi

if [[ $MODE == "clean" ]]; then
  echo "Clean deploy: wiping gh-pages branch..."
  git checkout gh-pages
  git rm -rf .
  git commit -m "Clean gh-pages deployment" || echo "No files to remove"
  git push origin gh-pages --force
  git checkout main
fi

echo "Checking out main branch..."
git checkout main

echo "Pulling latest changes from origin/main..."
git pull origin main

echo "Pushing any local commits to origin/main..."
git push origin main

echo "🛠️ Building project..."
npm install
npm run build

if [[ $MODE == "normal" ]]; then
  echo "Starting local preview..."
  npm run preview &
  PREVIEW_PID=$!

  sleep 3
  echo "Preview running at http://localhost:4173/"
  echo "Press ENTER when you're done previewing to deploy..."
  read

  kill $PREVIEW_PID
elif [[ $MODE == "fast" ]]; then
  echo "Fast mode enabled — skipping preview."
elif [[ $MODE == "clean" ]]; then
  echo "Clean mode enabled — skipping preview."
fi

echo "Deploying to GitHub Pages..."
npm run deploy

echo "Deployment complete!"
echo "Check live site at:"
echo "GitHub Pages: https://faja190.github.io/faja/"
echo "Custom Domain: https://fatimaajabukar.dev"
