const path = require('path');
const fs = require('fs-extra');

function getNewsletterStoryPage(fileName, newsletterPage) {
  const fileNameArr = fileName.split('-');
  const pageName = `${fileNameArr[0]} (${fileNameArr[1]} ${fileNameArr[2]})`;

  return `
import {Meta, Story, Canvas} from '@storybook/addon-docs';
import PageHeader from 'blocks/PageHeader';

<Meta title="Changelog/Newsletter/${pageName}" />

<PageHeader type="changelog">Newsletter - ${pageName}</PageHeader>

${newsletterPage}
`;
}

function buildNewsletterStories() {
  console.log('--- Generating newsletter pages ---');
  const destPath = 'src/docs/stories/newsletters';
  const assetsDestPath = '.storybook/public/newsletter-assets';

  if (!fs.pathExistsSync(destPath)) {
    fs.mkdirSync(destPath);
  }

  fs.readdirSync('newsletter/').forEach(function (file) {
    const filePath = `newsletter/${file}`;

    // Omit assets
    if (file.match(/\.mdx$/)) {
      const newsletterPage = fs.readFileSync(filePath, 'utf8');
      const fileName = file.replace('.mdx', '');
      const fileContent = getNewsletterStoryPage(fileName, newsletterPage);
      const destFileName = fileName.concat('.stories.mdx');
      const newsletterFileDest = path.resolve(destPath, destFileName);

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
