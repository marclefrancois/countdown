#!/bin/sh
newVersion=$(node version-number.js)
echo "$newVersion" | yarn version
yarn install
yarn build
rm -rf ~/Documents/GIT/marclefrancois.github.io/*
cp -R build/ ~/Documents/GIT/marclefrancois.github.io/
cd ~/Documents/GIT/marclefrancois.github.io/
git add .
git commit -m "deploy version $newVersion ($(date "+%FT%T"))"
git push
cd ~/Documents/GIT/countdown/
git push
