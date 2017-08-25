import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Breadcrumb from '../Breadcrumb';
import Text, {COLOR} from 'text/Text';

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
      <DocsActiveBlock settings={settings} wrapper={<Text color={COLOR.MINT} />} contentAfter=" Lorem Ipsum"
        contentBefore="Lorem Ipsum ">
        <Breadcrumb elements={elements} />
      </DocsActiveBlock>
    </div>
  );
};

export default Breadcrumbs;
