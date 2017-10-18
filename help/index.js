var colors = require('colors');
var help = function() {
  console.log('');
  console.log('');
  console.log(' Examples:'.green);
  console.log('');
  console.log(' generate:');
  console.log('');
  console.log(colors.yellow('   react-cli g MyComponent react-component') + '   (generates a state component on ./src/components/MyComponent/index.js) ');
  console.log('');
  console.log(colors.yellow('   react-cli g MyComponent react-component -s'));
  console.log(colors.yellow('   react-cli g MyComponent react-component -stateless') + '   (generates a stateless component on ./src/components/MyComponent/index.js) ')
  console.log('');
  console.log(colors.yellow('   react-cli g MyReduxFiles redux') + '     ( generates a files: actions.js, actionsTypes.js, reducer.js and selectors.js for redux apps on ./src/store/myReduxFiles )');
  console.log('');
  console.log('');
  console.log(colors.yellow('   option -l | -local'));
  console.log('   generate files on actual folder / path');
  console.log('');
  console.log('');
  console.log('   ---------------------------------');
  console.log('');
}

module.exports = help;
