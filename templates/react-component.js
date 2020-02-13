var component = function (stateless, connected, name, styledFile) {
  if (stateless) {

    if (connected) {
      return "" +
        "import React from 'react';\n" +
        "import { connect } from 'react-redux';\n" +
        "import Styled from '." + styledFile + "'; \n\n" +
        "const " + name + " = () => (\n" +
        ' <Styled className="' + name + '">\n   ' + name + '\n </Styled>\n' +
        ");\n\n" +
        "const mapStateToProps = (state) => {\n" +
        " return { };\n" +
        "}\n\n" +
        "const mapDispatchToProps = dispatch => {\n" +
        " return { };\n" +
        "}\n\n" +
        "export default connect(mapStateToProps, mapDispatchToProps)(" + name + ");\n";
    } else {
      return "" +
        "import React from 'react';\n" +
        "import Styled from '." + styledFile + "'; \n\n" +
        "const " + name + " = () => (\n" +
        ' <Styled className="' + name + '" >\n   ' + name + '\n </Styled>\n' +
        ");\n\n" +
        "export default " + name + ";";
    }

  } else {
    if (connected) {
      return "" +
        "import React from 'react';\n" +
        "import { connect } from 'react-redux';\n" +
        "import Styled from '." + styledFile + "'; \n\n" +
        "class " + name + " extends React.Component {\n" +
        " render() {\n" +
        "   return (\n" +
        '     <Styled className="' + name + '" >\n      ' + name + '\n     </Styled>\n' +
        "   );\n" +
        " }\n" +
        "};\n\n" +
        "const mapStateToProps = (state) => {\n" +
        " return { };\n" +
        "}\n\n" +
        "const mapDispatchToProps = dispatch => {\n" +
        " return { };\n" +
        "}\n\n" +
        "export default connect(mapStateToProps, mapDispatchToProps)(" + name + ");\n";
    } else {
      return "" +
        "import React from 'react';\n" +
        "import Styled from '." + styledFile + "'; \n\n" +
        "export default class " + name + " extends React.Component {\n" +
        " render() {\n" +
        "   return (\n" +
        '     <Styled className="' + name + '" >\n      ' + name + '\n     </Styled>\n' +
        "   );\n" +
        " }\n" +
        "};";
    }
  }
}

module.exports = component;
