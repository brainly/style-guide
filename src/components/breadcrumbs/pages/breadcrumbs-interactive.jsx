import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Breadcrumb from '../Breadcrumb';
import Text from 'text/Text';
import {TEXT_COLOR} from 'text/TextConsts';

const elements = ['Comments (9)', 'Report', 'Follow'];

const Breadcrumbs = () => {

  const settings = [
    {
      name: 'short',
      values: Boolean
    },
    {
      name: 'adaptive',
      values: Boolean
    }
  ];

  return (
    <div>
      <DocsActiveBlock
        settings={settings}
        wrapper={<Text color={TEXT_COLOR.MINT} />}
        contentAfter=" Lorem Ipsum"
        contentBefore="Lorem Ipsum "
      >
        <Breadcrumb elements={elements} />
      </DocsActiveBlock>
    </div>
  );
};

export default Breadcrumbs;
