import * as React from 'react';
import DocsBlock from 'components/DocsBlock';
import Breadcrumb from '../Breadcrumb';
import Text, {TEXT_COLOR} from 'text/Text';

const elements = ['Comments (9)', 'Report', 'Follow'];
const longElements = [
  "I'm so long and there is so little space there",
  'The second element is also very talkative',
  'Lorem ipsum has many many words',
];

const breadcrumbs = () => (
  <div>
    <DocsBlock info="Default">
      <Breadcrumb elements={elements} />
    </DocsBlock>

    <DocsBlock info="Short">
      <Breadcrumb elements={elements} short />
    </DocsBlock>

    <DocsBlock info="Adaptive">
      <Text color={TEXT_COLOR.MINT}>
        <Breadcrumb elements={elements} adaptive />
      </Text>
    </DocsBlock>
    <DocsBlock info="Inline items">
      <div style={{maxWidth: 300}}>
        <Breadcrumb elements={longElements} inlineItems />
      </div>
    </DocsBlock>
  </div>
);

export default breadcrumbs;
