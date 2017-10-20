#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

'use strict';

var subCommand = require('commander');

var colors = require('colors');
var createFile = require('./utils/createFile');
var paths = require('./utils/paths');
var templatesPaths = require('./templates/paths');

subCommand
.action( function(option, value ) {
  switch (option) {
    case 'component-path':
      paths.componentsDir = value;
      createFile(__dirname + "/utils/", '/paths.js', templatesPaths(paths) );
      break;
    case 'store-path':
      paths.reduxStoreDir = value;
      createFile(__dirname + "/utils/", '/paths.js', templatesPaths(paths) );
      break;
    default:
  }
});

subCommand.parse(process.argv);
