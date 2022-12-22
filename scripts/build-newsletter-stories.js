const path = require('path');
const fs = require('fs-extra');

function getNewsletterStoryPage(pageName, newsletterPage) {
  return `
import {Meta, Story, Canvas} from '@storybook/addon-docs';

<Meta title="Changelog/Newsletter/${pageName}" />

${newsletterPage}
`;
}

function buildNewsletterStories() {
  console.log('--- Generating newsletter pages ---');
  const destPath = 'dist/newsletters-stories';
  const assetsDestPath = 'dist/storybook-public/newsletter-assets';

  // Remove previously generated files
  if (fs.pathExistsSync(destPath))
    fs.rmSync(destPath, {recursive: true, force: true});
  if (fs.pathExistsSync(assetsDestPath))
    fs.rmSync(assetsDestPath, {recursive: true, force: true});

  // Create newsletters directory
  fs.mkdirSync(destPath);

  fs.readdirSync('newsletter/')
    .reverse() // We need to reverse the order so the newest newsletter (with highest version) gets processed first
    .forEach(function (file, key) {
      const filePath = `newsletter/${file}`;

      // Omit assets
      if (file.match(/\.mdx$/)) {
        const newsletterPage = fs.readFileSync(filePath, 'utf8');
        const fileNameArr = file.replace('.mdx', '').split('-');
        const pageName = `${fileNameArr[1]} ${fileNameArr[2]}`;
        const destFileName = `${key}-` // Precede filename with a key, so we can trick storybook to import stories in desired order
          .concat(`${fileNameArr[1]}-${fileNameArr[2]}`)
          .concat('.stories.mdx');

        const newsletterFileDest = path.resolve(destPath, destFileName);
        const fileContent = getNewsletterStoryPage(pageName, newsletterPage);

        fs.writeFileSync(newsletterFileDest, fileContent);
      } else {
        // copy newsletter assets folder
        fs.copySync(filePath, assetsDestPath, {
          overwrite: true,
        });
      }
    });
}

try {
  buildNewsletterStories();
} catch (err) {
  console.error('Creating newsletter pages failed:', err);
}
