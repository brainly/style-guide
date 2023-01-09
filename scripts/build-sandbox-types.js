const fs = require('fs');
const path = require('path');

const src = fs.readFileSync(
  path.join(__dirname, '../types/brainly-style-guide.d.ts'),
  'utf-8'
);

const dist = src.replace(/export/g, '');

if (!fs.existsSync(path.join(__dirname, '../dist/sandbox-types'))) {
  fs.mkdirSync(path.join(__dirname, '../dist/sandbox-types'));
}

fs.writeFileSync(
  path.join(
    __dirname,
    '../dist/sandbox-types/brainly-style-guide-sandbox.d.ts'
  ),
  dist
);
