Examples:

Commands:

generate
  react-cli g MyComponent react-component  
  (generates a state component on ./src/components/MyComponent/index.js)

  react-cli g MyComponent react-component -s
  react-cli g MyComponent react-component -stateless   
  (generates a stateless component on ./src/components/myComponent/index.js)

  react-cli g MyReduxFiles redux
  ( generates a files: actions.js, actionsTypes.js, reducer.js and selectors.js for redux apps on ./src/store/myReduxFiles  )

  option -l | -local
    generate files on actual folder / path
