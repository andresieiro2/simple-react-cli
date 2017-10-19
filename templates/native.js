var nativeComponent = function (stateless, name) {
  console.log(stateless);
  if(stateless){
    return "" +
      "import React, { Component } from 'react';\n" +
      "import { Text, View } from 'react-native';\n\n" +

      "const "+ name +" = () => (\n" +
      "  <View>\n" +
      "    <Text>\n" +
      "      HELLO CLI SIEIRO\n" +
      "    </Text>\n" +
      "  </View>\n" +
      ");";

  }else {
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
      "};";
  }

}


module.exports = nativeComponent;
