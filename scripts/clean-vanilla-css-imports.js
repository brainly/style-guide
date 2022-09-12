const replace = require('replace');

replace({
  regex: /require\(.*\.css'\);/g,
  replacement: '',
  paths: ['./vanilla-mapping'],
  include: '*.js',
  recursive: true,
  silent: false,
});

replace({
  regex: /require\(.*\.css'\);/g,
  replacement: '',
  paths: ['./commonjs'],
  include: '*.js',
  recursive: true,
  silent: false,
});

replace({
  regex: /import.*\.css';/g,
  replacement: '',
  paths: ['./esm'],
  include: '*.js',
  recursive: true,
  silent: false,
});
