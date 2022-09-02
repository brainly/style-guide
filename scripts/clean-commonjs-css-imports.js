const replace = require('replace');

replace({
  regex: /import.*\.css';/g,
  replacement: '',
  paths: ['./commonjs'],
  include: '*.js',
  recursive: true,
  silent: false,
});
