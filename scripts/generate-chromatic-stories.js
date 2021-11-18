const fs = require('fs');
const path = require('path');
const fg = require('glob');

const storiesPaths = fg.sync('src/**/*.stories.jsx');

storiesPaths.forEach(storiesPath => {
  const parsedPath = path.parse(storiesPath);
  const componentName = parsedPath.name.split('.')[0];

  if (
    !fs.existsSync(
      path.resolve(
        __dirname,
        `../${parsedPath.dir}`,
        `${componentName}.chromatic.stories.jsx`
      )
    )
  ) {
    fs.writeFileSync(
      path.resolve(
        __dirname,
        `../${parsedPath.dir}`,
        `${componentName}.chromatic.stories.jsx`
      ),
      `import * as ${componentName} from './${parsedPath.base}';
import {mergeStories} from '${path.relative(
        parsedPath.dir,
        'src/chromatic/utils'
      )}';

export const Default = mergeStories(${componentName});

export default ${componentName}.default;
`
    );
  }
});
