var component = function(stateless, connected, name, scssFile) {
  if(stateless){

    if(connected){
      return "" +
        "import React from 'react';\n" +
        "import { connect } from 'react-redux';\n" +
        "import '." + scssFile + "'; \n\n" +
        "const "+ name +" = () => (\n" +
        ' <div className="'+name+'">\n   '+ name +'\n </div>\n' +
        ");\n\n" +
        "const mapStateToProps = (state) => {\n" +
          " return { };\n" +
        "}\n\n" +
        "const mapDispatchToProps = dispatch => {\n" +
          " return { };\n" +
        "}\n\n" +
        "export default connect(mapStateToProps, mapDispatchToProps)("+ name +");\n";
    }else {
      return "" +
        "import React from 'react';\n" +
        "import '." + scssFile + "'; \n\n" +
        "const "+ name +" = () => (\n" +
        ' <div className="'+name+'" >\n   '+ name +'\n </div>\n' +
        ");\n\n" +
        "export default "+ name + ";";
    }

  } else {
    if(connected) {
      return "" +
      "import React from 'react';\n" +
      "import { connect } from 'react-redux';\n" +
      "import '." + scssFile + "'; \n\n" +
      "className " + name + " extends React.Component {\n" +
      " render() {\n" +
      "   return (\n" +
      '     <div className="'+name+'" >\n      '+ name +'\n     </div>\n' +
      "   );\n" +
      " }\n" +
      "};\n\n" +
      "const mapStateToProps = (state) => {\n" +
      " return { };\n" +
      "}\n\n" +
      "const mapDispatchToProps = dispatch => {\n" +
      " return { };\n" +
      "}\n\n" +
      "export default connect(mapStateToProps, mapDispatchToProps)("+ name +");\n";
    }else {
      return "" +
        "import React from 'react';\n" +
        "import '." + scssFile + "'; \n\n" +
        "export default className "+ name +" extends React.Component {\n" +
        " render() {\n" +
        "   return (\n" +
        '     <div className="'+name+'" >\n      '+ name +'\n     </div>\n' +
        "   );\n" +
        " }\n" +
        "};";
    }
  }
}

module.exports = component;
