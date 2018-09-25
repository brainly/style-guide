import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Breadcrumb from '../Breadcrumb';
import Text, {TEXT_COLOR} from '../../text';

const elements = ['Comments (9)', 'Report', 'Follow'];

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

  </div>
);

export default breadcrumbs;
