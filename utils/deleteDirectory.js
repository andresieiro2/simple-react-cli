var fs = require('fs');

var deleteDirectory = function (path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function(file, index){
      var curPath = path + "/" + file;
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteDirectory(curPath);
      } else { 
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}

module.exports = deleteDirectory;
