var colors = require('colors');
var help = function() {
  console.log('');
  console.log('');
  console.log(' Examples:'.green);
  console.log('');
  console.log(' COMMANDS');
  console.log('');
  console.log(' project | p:'.magenta);
  console.log('');
  console.log('   React Project');
  console.log('');
  console.log(colors.yellow('       react-cli p react MyProject') + '   ( Generates a react project at ~actualPath~/MyProject ) ');
  console.log('');
  console.log('   React Native Project');
  console.log('');
  console.log(colors.yellow('       react-cli p native MyProject') + '   ( Generates a react native project at ~actualPath~/MyProject ) ');
  console.log('');
  console.log(' generate | g:'.magenta);
  console.log('');
  console.log('   React Component');
  console.log('');
  console.log(colors.yellow('       react-cli g react-component MyComponent') + '   ( Generates a state component at ./src/components/MyComponent/index.js ) ');
  console.log('');
  console.log(colors.yellow('       react-cli g react-component MyComponent -s'));
  console.log(colors.yellow('       react-cli g react-component MyComponent -stateless') + '   ( Generates a stateless component at ./src/components/myComponent/index.js ')
  console.log('');
  console.log(colors.yellow('       react-cli g react-component MyComponent  -c'))
  console.log(colors.yellow('       react-cli g react-component MyComponent  -connected') + '   ( Generates a component connected to redux store at ./src/components/myComponent/index.js ')
  console.log('');
  console.log(colors.yellow('       react-cli g react-component MyComponent  -c -s'))
  console.log(colors.yellow('       react-cli g react-component MyComponent  -connected -stateless') + '   ( Generates a stateless component connected to redux store at ./src/components/myComponent/index.js ')
  console.log('');
  console.log('   React Native Component');
  console.log('');
  console.log(colors.yellow('       react-cli g native-component MyComponent') + '   ( Generates a state component at ./src/components/MyComponent/index.js ) ');
  console.log('');
  console.log(colors.yellow('       react-cli g native-component MyComponent -s'));
  console.log(colors.yellow('       react-cli g native-component MyComponent -stateless') + '   ( Generates a stateless component at ./src/components/myComponent/index.js ) ')
  console.log('');
  console.log(colors.yellow('       react-cli g native-component MyComponent  -c'))
  console.log(colors.yellow('       react-cli g native-component MyComponent  -connected') + '   ( Generates a component connected to redux store at ./src/components/myComponent/index.js ')
  console.log('');
  console.log(colors.yellow('       react-cli g native-component MyComponent  -c -s'))
  console.log(colors.yellow('       react-cli g native-component MyComponent  -connected -stateless') + '   ( Generates a stateless component connected to redux store at ./src/components/myComponent/index.js ')
  console.log('');
  console.log('   Redux Actions / ActionType / Selectors / Reducer');
  console.log('');
  console.log(colors.yellow('       react-cli g redux MyReduxFiles ') + '     ( Generates files: actions.js, actionsTypes.js, reducer.js and selectors.js for redux apps at ./src/store/myReduxFiles )');
  console.log('');
  console.log('   Other Options');
  console.log('');
  console.log(colors.yellow('       option -l | -local') + '  ( Generate files at actual folder / path )');
  console.log('');
  console.log(' set | s:'.magenta);
  console.log('');
  console.log('   Components destination folder');
  console.log('');
  console.log(colors.yellow('       react-cli s component-path /new/path/ ') );
  console.log(colors.yellow('       react-cli set component-path /new/path/ ') + '  ( Change the default components destination folder (  "/src/components/"   )');
  console.log('');
  console.log('   Store destination folde');
  console.log('');
  console.log(colors.yellow('       react-cli s store-path /new/path/  ') );
  console.log(colors.yellow('       react-cli set store-path /new/path/  ') + '  ( Change the default store destination folder (  "/src/store/  ")   )');
  console.log('');
  console.log('   ---------------------------------');
  console.log('');
}

module.exports = help;
