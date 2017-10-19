#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

'use strict';

var subCommand = require('commander');
var reactComponent = require('./templates/react-component');
var storeComponents = require('./templates/store');
var nativeComponent = require('./templates/native');
var fs = require('fs');
var colors = require('colors');
var checkPath = require('./utils/checkPath');
var createFile = require('./utils/createFile');

subCommand
.option('-s, -stateless [optional]', 'create a stateless component')
.option('-c, -connected [optional]', 'create a component connected to the redux store')
.option('-l, -local [optional]', 'create files on actual location')
.action( function(type, name , args) {
  var folderName = name.charAt(0).toLowerCase() + name.slice(1);


  switch(type) {
    case 'react-component':
      var componentsDir = process.cwd()+'/src/components/'+folderName;
      var filePath = "/index.js";
      args.Local ? componentsDir = "." : null;

      checkPath(componentsDir);
      createFile(componentsDir, filePath, reactComponent(args.Stateless, args.Connected, name));
      break;
    case 'redux':
      var storeDir = process.cwd()+'/src/store/'+folderName;
      var filePath ;
      args.Local ? storeDir = "." : null;

      checkPath(storeDir);
      filePath = "/actions.js";
      createFile(storeDir, filePath, storeComponents.actions());
      filePath = "/actionTypes.js";
      createFile(storeDir, filePath, storeComponents.actionTypes());
      filePath = "/reducer.js";
      createFile(storeDir, filePath, storeComponents.reducer());
      filePath = "/selectors.js";
      createFile(storeDir, filePath, storeComponents.selectors());
      break;
    case 'native-component':
      var componentsDir = process.cwd()+'/src/components/'+folderName;
      var filePath = "/index.js";
      args.Local ? componentsDir = "." : null;

      checkPath(componentsDir);
      createFile(componentsDir, filePath, nativeComponent(args.Stateless,  args.Connected, name));
      break;
  }

})

subCommand.parse(process.argv);
