var fs = require('fs');
var colors = require('colors');

var createFile = function(pathFolder, pathFile,  fileString ) {
  var stream = fs.createWriteStream(pathFolder + pathFile );

  stream.once('open', function(fd) {
    stream.write(fileString);
    stream.end();
    console.log(colors.green("File Created! at ")+pathFolder+pathFile );
  });
}


 module.exports = createFile;
