const glob = require('glob');
const args = require('yargs').argv;
const fs = require('fs');
const legacyClassmap = require('./legacy-classmap');
const vanillaClasslist = require('./vanilla-classlist');

const filenamePattern = args._[0];

if (!filenamePattern) {
  console.error('No pattern found');
} else {
  const filePaths = glob.sync(filenamePattern, {
    exclude: 'node_modules',
  });

  filePaths.forEach(path => {
    const file = fs.readFileSync(path, 'utf8');

    let output = file;

    // legacy classnames replace
    Object.keys(legacyClassmap).forEach(key => {
      // console.log(`${key} => ${legacyClassmap[key]}`);
      const keyForRegexp = key.replace(/-/g, '\\-');
      console.log(legacyClassmap[key]);
      output = output.replace(
        new RegExp(`${keyForRegexp}(?=\\s|\r|")`, 'g'),
        legacyClassmap[key]
      );
    });

    // vanilla classnames replace
    // vanillaClasslist.forEach(classname => {
    //   output = output + '';
    // });

    fs.writeFileSync(path, output);
  });
}
