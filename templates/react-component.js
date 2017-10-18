var component = function(stateless, name) {
  if(stateless){
    return "" +
      "import React from 'react'\n\n" +
      "const "+ name +" = ({}) => (\n" +
      " <div>HELLO CLI SIEIRO</div>\n" +
      ");\n\n" +
      "export default "+ name + ";";
  } else {
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

module.exports = component;
