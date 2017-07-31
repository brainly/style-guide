import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Breadcrumb from '../Breadcrumb';
import Text, {COLOR as TEXT_COLOR} from 'text/Text';

const elements = ['Comments (9)', 'Report', 'Follow'];

const breadcrumbs = () => <div>
  <DocsBlock info="Default">
    <Breadcrumb elements={elements}/>
  </DocsBlock>

  <DocsBlock info="Short">
    <Breadcrumb elements={elements} short={true}/>
  </DocsBlock>

  <DocsBlock info="Adaptive">
    <Text color={TEXT_COLOR.MINT}>
      <Breadcrumb elements={elements} adaptive={true}/>
    </Text>
  </DocsBlock>

</div>;

export default breadcrumbs;
