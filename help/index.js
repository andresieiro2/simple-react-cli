var colors = require('colors');
var help = function() {
  console.log('');
  console.log('');
  console.log(' Examples:'.green);
  console.log('');
  console.log(' create:');
  console.log(colors.yellow('   react-cli create MyComponent react-component') + '   (generates a state component on ./src/components/MyComponent/index.js) ')
  console.log(colors.yellow('   react-cli create MyComponent react-component -stateless') + '   (generates a stateless component on ./src/components/MyComponent/index.js) ')
  console.log('');
}

module.exports = help;
