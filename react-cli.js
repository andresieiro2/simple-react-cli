#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

'use strict';

var commander = require('commander');

var help = require('./help');
commander
.version('1.0.0')
.command('create <required> [name] [type]', 'create files , types: react-component , redux , native-component')
// .command('search [query]', 'search with optional query').alias('s')
.on('--help', help );
commander.parse(process.argv)

if (commander.rawArgs.length <= 2) {
    commander.help()
}
