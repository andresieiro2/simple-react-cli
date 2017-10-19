var component = function(stateless, connected, name) {
  if(stateless){

    if(connected){
      return "" +
        "import React from 'react'\n" +
        "import { connect } from 'react-redux';\n\n" +
        "const "+ name +" = () => (\n" +
          " <div>HELLO CLI SIEIRO</div>\n" +
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
        "import React from 'react'\n\n" +
        "const "+ name +" = () => (\n" +
        " <div>HELLO CLI SIEIRO</div>\n" +
        ");\n\n" +
        "export default "+ name + ";";
    }

  } else {
    if(connected) {
      return "" +
      "import React from 'react'\n" +
      "import { connect } from 'react-redux';\n\n" +
      "class " + name + " extends React.Component {\n" +
      " render() {\n" +
      "   return (\n" +
      "     <div>HELLO CLI SIEIRO</div>\n" +
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
        "import React from 'react'\n\n" +
        "export default class "+ name +" extends React.Component {\n" +
        " render() {\n" +
        "   return (\n" +
        "     <div>HELLO CLI SIEIRO</div>\n" +
        "   );\n" +
        " }\n" +
        "};";
    }
  }
}

module.exports = component;
