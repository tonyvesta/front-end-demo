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
    coverageAnalysis: 'off',
    "thresholds": { "high": 80, "low": 60, "break": 90 }
    // mutator: {
    //   plugins: ['@babel/plugin-syntax-jsx'],
    // },
  }
