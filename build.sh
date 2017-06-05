#!/bin/sh
yarn version
newVersion=$(node version-number.js)
yarn build
rm -rf ~/Documents/GIT/marclefrancois.github.io/*
cp -R build/ ~/Documents/GIT/marclefrancois.github.io/
cd ~/Documents/GIT/marclefrancois.github.io/
git add .
git commit -m "deploy $(date "+%FT%T") $newVersion"
git push
cd ~/Documents/GIT/countdown/
git push
