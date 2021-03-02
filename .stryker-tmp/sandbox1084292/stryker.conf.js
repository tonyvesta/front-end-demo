/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
    mutate: ['js/*.js*'],
    concurrency: 8,
    // testRunner: 'jest',
    // mutator: 'javascript',
    commandRunner: {
      command: 'npm run test:ci',
    },
    reporters: ['progress', 'clear-text', 'html'],
    coverageAnalysis: 'all',
    // mutator: {
    //   plugins: ['@babel/plugin-syntax-jsx'],
    // },
  }