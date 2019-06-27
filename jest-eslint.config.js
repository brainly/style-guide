module.exports = {
  displayName: 'lint',
  runner: 'jest-runner-eslint',
  cacheDirectory: '/tmp/jest_cache',
  testMatch: ['**/*.json', '**/*.js', '**/*.jsx'],
};
