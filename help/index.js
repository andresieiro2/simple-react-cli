var colors = require('colors');
var help = function() {
  console.log('');
  console.log('');
  console.log(' Examples:'.green);
  console.log('');
  console.log(' COMMANDS');
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
  console.log(colors.yellow('       react-cli g native-component MyComponent') + '   ( Generates a state component at ./src/components/MyComponent/index.js ) ');
  console.log('');
  console.log('   React Native Component');
  console.log('');
  console.log(colors.yellow('       react-cli g native-component MyComponent -s'));
  console.log(colors.yellow('       react-cli g native-component MyComponent -stateless') + '   ( Generates a stateless component at ./src/components/myComponent/index.js ) ')
  console.log('');
  console.log('   Redux Actions / ActionType / Selectors / Reducer');
  console.log('');
  console.log(colors.yellow('       react-cli g redux MyReduxFiles ') + '     ( Generates files: actions.js, actionsTypes.js, reducer.js and selectors.js for redux apps at ./src/store/myReduxFiles )');
  console.log('');
  console.log('   Other Options');
  console.log('');
  console.log(colors.yellow('     option -l | -local') + '  ( Generate files at actual folder / path )');
  console.log('');
  console.log('');
  console.log('   ---------------------------------');
  console.log('');
}

module.exports = help;
