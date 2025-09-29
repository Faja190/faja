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

echo "Checking out main branch...\n"
git checkout main

echo "\nPulling latest changes from origin/main...\n"
git pull origin main

echo "\nPushing any local commits to origin/main...\n"
git push origin main

echo "\nBuilding project...\n"
npm run build

if [ "$FAST_MODE" = false ]; then
  echo "Starting local preview..."
  npm run preview &
  PREVIEW_PID=$!

  sleep 3
  echo "\nPreview running at http://localhost:4173/\n"
  echo "\nPress ENTER when you're done previewing to deploy...\n"
  read

  kill $PREVIEW_PID
else
  echo "\nFast mode enabled — skipping preview.\n"
fi

echo "\nDeploying to GitHub Pages...\n"
npm run deploy

echo "\nDeployment complete!\n"
echo "Check live site at:"
echo "GitHub Pages: https://faja190.github.io/faja/"
echo "Custom Domain (when ready): https://fatimaajabukar.dev"
