var mkdirp = require('mkdirp');
var fs = require('fs');
var checkPath = function (url) {
  if (!fs.existsSync(url)){
    mkdirp.sync(url, '0777' );
  };
}

module.exports = checkPath;
