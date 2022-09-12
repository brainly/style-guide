const glob = require('glob');
const path = require('path');

const classNamesMap = glob
  .sync('components/**/*.vanilla-mapping.js', {
    cwd: path.join(__dirname),
  })
  .reduce((acc, next) => {
    const key = path.basename(next).split('.')[0];

    acc[key] = next;
    return acc;
  }, {});

const output = `${Object.keys(classNamesMap).reduce((acc, next) => {
  return `${acc}
  import * as ${next} from './${classNamesMap[next]}';`;
}, '')}

export default {${Object.keys(classNamesMap).map(key => {
  return `...${key}.default`;
})}};
`;

module.exports = output;
