const fs = require('fs');
const path = require('path');
const argv = require('yargs');
const fg = require('glob');

const filePath = argv(process.argv.slice(2)).argv._[0];

if (filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File '${filePath}' does not exist.`);
    return;
  }

  const parsedPath = path.parse(filePath);
  const componentName = parsedPath.name.split('.')[0];
  const chromaticFilePath = path.join(
    __dirname,
    `../${parsedPath.dir}`,
    `${componentName}.chromatic.stories.jsx`
  );

  if (fs.existsSync(chromaticFilePath)) {
    console.log(`File with Chromatic stories already exists.`);
    return;
  }

  fs.writeFileSync(
    chromaticFilePath,
    `import * as ${componentName} from './${parsedPath.base}';
import {generateChromaticStory} from '${path.relative(
      parsedPath.dir,
      'src/chromatic/utils'
    )}';

export const Default = generateChromaticStory(${componentName});

export default ${componentName}.default;
`
  );
} else {
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
import {generateChromaticStory} from '${path.relative(
          parsedPath.dir,
          'src/chromatic/utils'
        )}';

export const Default = generateChromaticStory(${componentName});

export default ${componentName}.default;
`
      );
    }
  });
}

// storiesPaths.forEach(storiesPath => {
//   const parsedPath = path.parse(storiesPath);
//   const componentName = parsedPath.name.split('.')[0];

//   if (
//     !fs.existsSync(
//       path.resolve(
//         __dirname,
//         `../${parsedPath.dir}`,
//         `${componentName}.chromatic.stories.jsx`
//       )
//     )
//   ) {
//     fs.writeFileSync(
//       path.resolve(
//         __dirname,
//         `../${parsedPath.dir}`,
//         `${componentName}.chromatic.stories.jsx`
//       ),
//       `import * as ${componentName} from './${parsedPath.base}';
// import {generateChromaticStory} from '${path.relative(
//         parsedPath.dir,
//         'src/chromatic/utils'
//       )}';

// export const Default = generateChromaticStory(${componentName});

// export default ${componentName}.default;
// `
//     );
//   }
// });
