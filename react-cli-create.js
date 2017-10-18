#!/usr/bin/env node
'use strict';

var subCommand = require('commander');
var fs = require('fs');
var reactComponent = require('./templates/react-component');
var mkdirp = require('mkdirp');
var colors = require('colors');
subCommand
.option('-s, -stateless [optional]', 'create a stateless component')
.action( function(type, name , args) {

  var stream ;
  var folderName = name.charAt(0).toLowerCase() + name.slice(1);
  var componentsDir = process.cwd()+'/src/components/'+folderName+"/";

  if (!fs.existsSync(componentsDir)){
    mkdirp.sync(componentsDir, '0777' );
  }

  console.log();
  switch(type) {
    case 'react-component':
      console.log(colors.green("Creating")+" " +colors.yellow(name+".js"));
      stream = fs.createWriteStream(componentsDir+"/index.js");

      stream.once('open', function(fd) {
        stream.write(reactComponent(args.Stateless, name));
        stream.end();
        console.log(colors.green("Component Created! on ")+componentsDir+"/index.js");
      });


      break;
  }

})

subCommand.parse(process.argv);
