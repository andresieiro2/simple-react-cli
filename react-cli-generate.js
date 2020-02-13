#!/bin/sh
":"; //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

"use strict";

var subCommand = require("commander");
var reactComponent = require("./templates/react-component");
var styledTemplate = require("./templates/styled");
var storeComponents = require("./templates/store");
var nativeComponent = require("./templates/native");
var fs = require("fs");
var colors = require("colors");
var checkPath = require("./utils/checkPath");
var createFile = require("./utils/createFile");
var paths = require("./utils/paths");

subCommand
  .option("-s, -stateless [optional]", "create a stateless component")
  .option(
    "-c, -connected [optional]",
    "create a component connected to the redux store"
  )
  .option("-l, -local [optional]", "create files on actual location")
  .action(function (type, name, args) {
    switch (type) {
      case "react-component":
        var folderName;
        var componentsDir = process.cwd() + paths.componentsDir;
        var filePath = name.split("/");
        var styledFile;

        if (filePath.length > 1) {
          name = filePath[filePath.length - 1];
          filePath.pop();
          folderName = filePath.join("/") + "/";
          filePath = name + ".js";
          styledFile = "/styled-" + name + ".js";
        } else {
          folderName = name;
          filePath = "/index.js";
          styledFile = "/styled.js";
        }

        folderName = folderName.charAt(0).toLowerCase() + folderName.slice(1);
        componentsDir += folderName;
        args.Local ? (componentsDir = ".") : null;

        checkPath(componentsDir);
        createFile(
          componentsDir,
          filePath,
          reactComponent(args.Stateless, args.Connected, name, styledFile)
        );
        createFile(componentsDir, styledFile, styledTemplate(name));
        break;
      case "redux":
        folderName = name.charAt(0).toLowerCase() + name.slice(1);
        var storeDir = process.cwd() + paths.reduxStoreDir + folderName;
        var filePath;
        args.Local ? (storeDir = ".") : null;

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
      case "native-component":
        var folderName;
        var componentsDir = process.cwd() + paths.componentsDir;
        var filePath = name.split("/");

        if (filePath.length > 1) {
          name = filePath[filePath.length - 1];
          filePath.pop();
          folderName = filePath.join("/") + "/";
          filePath = name + ".js";
        } else {
          folderName = name;
          filePath = "/index.js";
        }

        folderName = folderName.charAt(0).toLowerCase() + folderName.slice(1);
        componentsDir += folderName;
        args.Local ? (componentsDir = ".") : null;

        checkPath(componentsDir);
        createFile(
          componentsDir,
          filePath,
          nativeComponent(args.Stateless, args.Connected, name)
        );
        break;
      default:
        return false;
    }
  });

subCommand.parse(process.argv);
