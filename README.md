Requires node.js 6.10+

**Commands**
=======

project | p
-------

----------
**React Project**

There are a sample projects, not required for generate command

    react-cli p react MyProject  

*Generates a react project component at ~actualPath~/MyProject*

**React Native Project**

    react-cli p native MyProject  

*Generates a react native project component at ~actualPath~/MyProject*

----------

----------

generate | g
-------

----------

**React Component**

    react-cli g react-component MyComponent  

  *Generates a state component at ./src/components/MyComponent/index.js*


**Stateless React Component**

      react-cli g react-component MyComponent  -s
      react-cli g react-component MyComponent  -stateless   

  *Generates a stateless component at ./src/components/myComponent/index.js*

**React Connected Component / React Stateless Connected Component**

    react-cli g react-component MyComponent  -c
    react-cli g react-component MyComponent  -connected
    react-cli g react-component MyComponent  -s -c
    react-cli g react-component MyComponent  -stateless -connected
 *Generates a component connected to redux store at ./src/components/myComponent/index.js*

----------

----------

**React Native Component**

    react-cli g native-component MyComponent  

  *Generates a state component at ./src/components/MyComponent/index.js*


**Stateless React Native Component**

      react-cli g native-component MyComponent  -s
      react-cli g native-component MyComponent  -stateless   

  *Generates a stateless component at ./src/components/myComponent/index.js*


**React Native Connected Component / React Native Stateless Connected Component**

    react-cli g native-component MyComponent  -c
    react-cli g native-component MyComponent  -connected
    react-cli g native-component MyComponent  -s -c
    react-cli g native-component MyComponent  -stateless -connected
 *Generates a component connected to redux store at ./src/components/myComponent/index.js*

----------

----------

**Redux Actions / ActionType / Selectors / Reducer**

      react-cli g redux MyReduxFiles

*Generates files: actions.js, actionsTypes.js, reducer.js and selectors.js for redux apps at ./src/store/myReduxFiles*

----------

----------

----------
***Other options:***


     option -l | -local

*Generate files at actual folder / path*


----------

set | s
-------

----------

**Components destination folder**

      react-cli s component-path /new/path/
      react-cli set component-path /new/path/

*Change the default components destination folder (  "/src/components/"  )*


----------


**Store destination folder**

      react-cli s store-path /new/path/
      react-cli set store-path /new/path/

  *Change the default store destination folder (  "/src/store/  ")*
