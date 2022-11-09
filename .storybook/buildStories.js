const path = require('path');
const fs = require('fs-extra');

function buildNewsletterPages() {
  console.log('--- generating newsletter pages ---');

  fs.readdirSync('newsletter/').forEach(function (file) {
    const filePath = `newsletter/${file}`;
    console.log('path', filePath);

    // Omit assets
    if (file.match(/\.mdx$/)) {
      const newsletterPage = fs.readFileSync(filePath, 'utf8');
      const destFileName = file.replace('.mdx', '.stories.mdx');
      const pageName = file.replace('.mdx', '').split('-').join(' ');
      const newsletterFileDest = path.resolve(
        'src/docs/stories/newsletters',
        destFileName
      );

      const fileContent = `
import {Meta, Story, Canvas} from '@storybook/addon-docs';
import PageHeader from 'blocks/PageHeader';

<Meta title="Newsletter/${pageName}" />

<PageHeader type="foundation">Newsletter ${pageName}</PageHeader>

${newsletterPage}
`;

      fs.writeFile(newsletterFileDest, fileContent);
    }
  });
}

module.exports = function buildStories() {
  buildNewsletterPages();
};
