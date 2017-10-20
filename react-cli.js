#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

'use strict';

var commander = require('commander');
var help = require('./help');
commander
.command('generate <required> [type] [name] ', 'Command to create files. Types: react-component , redux , native-component')
.alias('g')
.command('project <required> [type] [name] ', 'Command to init a project')
.alias('p')
.command('set <required> [action] [value] ', 'Command to init a project')
.alias('s')
// .command('search [query]', 'search with optional query').alias('s')
.on('--help', help );
commander.parse(process.argv)

if (commander.rawArgs.length <= 2) {
    commander.help()
}
