const replace = require('replace');

replace({
  regex: /import.*\.css';/g,
  replacement: '',
  paths: ['./esm'],
  include: '*.js',
  recursive: true,
  silent: false,
});
