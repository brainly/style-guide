const csstree = require('css-tree');
const fs = require('fs');

// parse CSS to AST
const ast = csstree.parse(
  fs.readFileSync(`dist-vanilla-css/vanilla.css`, 'utf8')
);

// scrap css class names
const classNames = [];

csstree.walk(ast, node => {
  if (node.type === 'ClassSelector') {
    classNames.push(node.name);
  }
});

fs.writeFileSync(
  `vanilla-mapping/vanilla-classlist.js`,
  `
    module.exports = ${JSON.stringify(classNames)};
`
);
