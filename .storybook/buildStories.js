const path = require('path');
const fs = require('fs-extra');

function buildNewsletterPages() {
  console.log('----------------------------generating newsletter pages');

  const newsletterApril = fs.readFileSync(
    'newsletter/2022-April-v213.3.0.mdx',
    'utf8'
  );

  const newsletterFileDest = path.resolve(
    'src/docs/stories/newsletters',
    'april.stories.mdx'
  );

  const fileContent = `
import {Meta, Story, Canvas} from '@storybook/addon-docs';
import PageHeader from 'blocks/PageHeader';

<Meta title="Newsletter/April2022" />

<PageHeader type="foundation">Newsletter April 2022</PageHeader>

${newsletterApril}
`;

  fs.writeFile(newsletterFileDest, fileContent);
}

module.exports = function buildStories() {
  buildNewsletterPages();
};
