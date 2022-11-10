const path = require('path');
const fs = require('fs-extra');

function getNewsletterStoryPage(pageName, newsletterPage) {
  return `
import {Meta, Story, Canvas} from '@storybook/addon-docs';
import PageHeader from 'blocks/PageHeader';

<Meta title="Newsletter/${pageName}" />

<PageHeader type="foundation">Newsletter ${pageName}</PageHeader>

${newsletterPage}
`;
}

function buildNewsletterPages() {
  console.log('--- Generating newsletter pages ---');
  const destPath = 'src/docs/stories/newsletters';
  const assetsDestPath = '.storybook/public/newsletter-assets';

  fs.readdirSync('newsletter/').forEach(function (file) {
    const filePath = `newsletter/${file}`;

    // Omit assets
    if (file.match(/\.mdx$/)) {
      const newsletterPage = fs.readFileSync(filePath, 'utf8');
      const destFileName = file.replace('.mdx', '.stories.mdx');
      const pageName = file.replace('.mdx', '').split('-').join(' ');
      const newsletterFileDest = path.resolve(destPath, destFileName);
      const fileContent = getNewsletterStoryPage(pageName, newsletterPage);

      fs.writeFile(newsletterFileDest, fileContent);
    } else {
      // copy newsletter assets folder
      fs.copySync(filePath, assetsDestPath, {
        overwrite: true,
      });
    }
  });
}

module.exports = function buildStories() {
  buildNewsletterPages();
};
