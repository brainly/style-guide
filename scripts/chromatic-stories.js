const fs = require('fs');
const path = require('path');
const fg = require('fast-glob');

const storiesPaths = fg.sync('src/**/*.stories.jsx');

storiesPaths.forEach(storiesPath => {
  let componentName = storiesPath.split('.')[0].split('/');

  componentName = componentName[componentName.length - 1];

  const subdirsCount = storiesPath.split('/').length - 2;
  const chromaticStoriesPath = storiesPath
    .split('/')
    .slice(0, -1)
    .join('/');

  fs.writeFileSync(
    path.resolve(
      __dirname,
      `../${chromaticStoriesPath}`,
      `${componentName}.chromatic-stories.jsx`
    ),
    `import * as ${componentName} from './${componentName}.stories.jsx';
import {mergeStories} from '${new Array(subdirsCount)
      .fill('../')
      .join('')}chromatic/utils';

export const Default = mergeStories(${componentName});

export default ${componentName}.default;
`
  );
});
