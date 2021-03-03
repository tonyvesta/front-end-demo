module.exports = (on, config) => {
    //require('@cypress/code-coverage/task')(on, config)
    require('./node_modules/@cypress/code-coverage/task')(on, config)
 
    // include any other plugin code...
    on('file:preprocessor', require('../../node_modules/@cypress/code-coverage/task'))
    // It's IMPORTANT to return the config object
    // with any changed environment variables
    return config
  }