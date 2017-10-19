var nativeComponent = function (stateless, connected, name) {
  console.log(stateless);
  if(stateless){

    if(connected) {
      return "" +
        "import React, { Component } from 'react';\n" +
        "import { Text, View } from 'react-native';\n\n" +

        "const "+ name +" = () => (\n" +
        "  <View>\n" +
        "    <Text>\n" +
        "      HELLO CLI SIEIRO\n" +
        "    </Text>\n" +
        "  </View>\n" +
        ");\n\n" +
        "const mapStateToProps = (state) => {\n" +
          " return { };\n" +
        "}\n\n" +
        "const mapDispatchToProps = dispatch => {\n" +
          " return { };\n" +
        "}\n\n" +
        "export default connect(mapStateToProps, mapDispatchToProps)("+ name +");\n";
    } else {
      return "" +
        "import React, { Component } from 'react';\n" +
        "import { Text, View } from 'react-native';\n\n" +

        "const "+ name +" = () => (\n" +
        "  <View>\n" +
        "    <Text>\n" +
        "      HELLO CLI SIEIRO\n" +
        "    </Text>\n" +
        "  </View>\n" +
        ");\n\n" +
        "export default "+ name +";"
    }
  }else {
    if(connected) {
      return "" +
        "import React, { Component } from 'react;';\n" +
        "import { Text, View } from 'react-native';\n\n" +

        "class "+ name +" extends Component {\n" +
        " render() {\n" +
        "   return (\n" +
        "     <View>\n" +
        "       <Text>\n" +
        "          HELLO CLI SIEIRO\n" +
        "       </Text>\n" +
        "     </View>\n" +
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
        "import React, { Component } from 'react;';\n" +
        "import { Text, View } from 'react-native';\n\n" +

        "export default class "+ name +" extends Component {\n" +
        " render() {\n" +
        "   return (\n" +
        "     <View>\n" +
        "       <Text>\n" +
        "          HELLO CLI SIEIRO\n" +
        "       </Text>\n" +
        "     </View>\n" +
        "   );\n" +
        " }\n" +
        "};";
    }
  }

}


module.exports = nativeComponent;
