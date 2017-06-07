let versionSplitter = '.'
let packageInfo = require('./package.json');
let versionInfo = packageInfo.version.split(versionSplitter)
console.log(versionInfo[0] + versionSplitter + versionInfo[1] + versionSplitter + (parseInt(versionInfo[2]) + 1));
