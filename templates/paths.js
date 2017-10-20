var createPathFile = function (path) {
  return ""+
    "var componentsDir = '"+ path.componentsDir +"';\n" +
    "var reduxStoreDir = '"+ path.reduxStoreDir +"';\n\n" +

    "module.exports = {\n" +
      " componentsDir,\n" +
      " reduxStoreDir,\n" +
    "};";
}


module.exports = createPathFile;
