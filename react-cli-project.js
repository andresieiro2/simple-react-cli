#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

'use strict';

var subCommand = require('commander');
var colors = require('colors');
var createFile = require('./utils/createFile');
var clone = require('git-clone');
var deleteDirectory =  require('./utils/deleteDirectory');

subCommand
.action( function(type, name, args) {
  var path = process.cwd()+"/"+name
  var gitUrl = "";
  switch (type) {
    case 'react':
      gitUrl = 'https://github.com/andresieiro2/react-base';
      break;
      case 'native':
        gitUrl = 'https://github.com/andresieiro2/react-native-base';
        break;
    default:
      return false;
  }
  clone(
    gitUrl ,
    path ,
    { shallow: true },
    function () {
      deleteDirectory(path+'/.git');
      console.log( colors.green("PROJECT CREATED")+ " at "+ path );
    }
  );
})

subCommand.parse(process.argv);
