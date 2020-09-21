module.exports = (wallaby) => ({
  files: [
    'src/*/*.js',
    { pattern: 'src/*/*.test.js', ignore: true },
  ],
  tests: [
    'src/*/*.test.js',
  ],

  env: {
    type: 'node',
    runner: 'node',
  },

  testFramework: {
    type: 'jest',
    path: './node_modules/@jest',
  },

  // debug: true,
});
