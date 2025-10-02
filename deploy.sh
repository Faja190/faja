#!/bin/bash
# workflow for updating the website
# push/pull any anew changes onto main branch -> build project -> preview -> deploy

# Normal workflow : ./deploy.sh
# Fast workflow (skip review) : ./deploy.sh --fast

set -e  # exit on error

FAST_MODE=false

# check if --fast flag was passed
if [[ $1 == "--fast" ]]; then
  FAST_MODE=true
fi

echo "Checking out main branch..."
git checkout main

echo "Pulling latest changes from origin/main..."
git pull origin main

echo "Pushing any local commits to origin/main..."
git push origin main

echo "Building project..."
npm run build

if [ "$FAST_MODE" = false ]; then
  echo "Starting local preview..."
  npm run preview &
  PREVIEW_PID=$!

  sleep 3
  echo "Preview running at http://localhost:4173/"
  echo "Press ENTER when you're done previewing to deploy..."
  read

  kill $PREVIEW_PID
else
  echo "Fast mode enabled — skipping preview."
fi

echo "Deploying to GitHub Pages..."
npm run deploy

echo "Deployment complete!"
echo "Check live site at:"
echo "GitHub Pages: https://faja190.github.io/faja/"
echo "Custom Domain: https://fatimaajabukar.dev"
