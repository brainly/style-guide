const revFile = require('rev-file');
const glob = require('glob');
const path = require('path');

const icons = glob
  .sync('images/*icons.svg', {
    cwd: path.join(__dirname),
  })
  .reduce((acc, next) => {
    const key = path.basename(next).split('.')[0];

    acc[key] = path.relative(
      __dirname,
      revFile.sync(path.join(__dirname, next))
    );
    return acc;
  }, {});

// subjectIcons.forEach(path => {
//   subjectIconsSpriter.add(path, null, fs.readFileSync(path, 'utf8'));
// });

// await subjectIconsSpriter.compileAsync();

// // import svgSprite pure nodejs impmentation

// const logos = glob
//   .sync('images/logos/**/*.svg', {cwd: path.join(__dirname)})
//   .reduce((acc, next) => {
//     const key = path.basename(next).split('.')[0];

//     acc[key] = path.relative(
//       __dirname,
//       revFile.sync(path.join(__dirname, next))
//     );
//     return acc;
//   }, {});

// const subjectMonoIconsPath = plugins.path.join(
//   consts.SRC,
//   'images',
//   'subjects-mono',
//   '*.svg'
// );
// const iconsPath = plugins.path.join(consts.SRC, 'images', 'icons', '*.svg');
// const mathSymbolsPath = plugins.path.join(
//   consts.SRC,
//   'images',
//   'math-symbols',
//   '*.svg'
// );
// const mobileIconsPath = plugins.path.join(
//   consts.SRC,
//   'images',
//   'mobile-icons',
//   '*.svg'
// );
// const destPath = plugins.path.join(consts.SRC, 'images');

// const subjectIconsConfig = {
//   mode: {
//     symbol: {
//       sprite: '../subjects-icons.js',
//     },
//   },
//   shape: {
//     id: {
//       generator: 'icon-subject-%s',
//     },
//     transform: [
//       'svgo',
//       {
//         custom: svgSymbolCleanUp.bind(null, {removeClass: false}),
//       },
//     ],
//   },
// };

// const subjectMonoIconsConfig = {
//   mode: {
//     symbol: {
//       sprite: '../subjects-mono-icons.js',
//     },
//   },
//   shape: {
//     id: {
//       generator: 'icon-subject-mono-%s',
//     },
//     transform: [
//       'svgo',
//       {
//         custom: svgSymbolCleanUp.bind(null, {removeClass: true}),
//       },
//     ],
//   },
// };

// const iconsConfig = {
//   mode: {
//     symbol: {
//       sprite: '../icons.js',
//     },
//   },
//   shape: {
//     id: {
//       generator: 'icon-%s',
//     },
//     transform: [
//       'svgo',
//       {
//         custom: svgSymbolCleanUp.bind(null, {removeClass: true}),
//       },
//     ],
//   },
// };

// const mathSymbolsConfig = {
//   mode: {
//     symbol: {
//       sprite: '../math-symbols-icons.js',
//     },
//   },
//   shape: {
//     id: {
//       generator: 'sg-math-symbol-icon-%s',
//     },
//     transform: [
//       'svgo',
//       {
//         custom: svgSymbolCleanUp.bind(null, {removeClass: true}),
//       },
//     ],
//   },
// };

// const mobileIconsConfig = {
//   mode: {
//     symbol: {
//       sprite: '../mobile-icons.js',
//     },
//   },
//   shape: {
//     id: {
//       generator: 'icon-mobile-%s',
//     },
//     transform: [
//       'svgo',
//       {
//         custom: svgSymbolCleanUp.bind(null, {removeClass: true}),
//       },
//     ],
//   },
// };

// gulp
//   .src(subjectMonoIconsPath)
//   .pipe(plugins.svgSprite(subjectMonoIconsConfig))
//   .pipe(gulp.dest(destPath));

// gulp
//   .src(mathSymbolsPath)
//   .pipe(plugins.svgSprite(mathSymbolsConfig))
//   .pipe(gulp.dest(destPath));

// gulp
//   .src(mobileIconsPath)
//   .pipe(plugins.svgSprite(mobileIconsConfig))
//   .pipe(gulp.dest(destPath));

// return gulp
//   .src(iconsPath)
//   .pipe(plugins.svgSprite(iconsConfig))
//   .pipe(gulp.dest(destPath));

module.exports = `export default ${JSON.stringify(icons)}`;
