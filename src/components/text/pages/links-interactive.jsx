import React from 'react';
import Link, {SIZE, COLOR} from '../Link';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Links = () => {
  const settings = [
    {
      name: 'size',
      values: SIZE
    },
    {
      name: 'color',
      values: COLOR
    },
    {
      name: 'href',
      values: String
    },
    {
      name: 'unstyled',
      values: Boolean
    },
    {
      name: 'underlined',
      values: Boolean
    },
    {
      name: 'emphasised',
      values: Boolean
    },
    {
      name: 'disabled',
      values: Boolean
    }
  ];

  return <div>
    <DocsActiveBlock settings={settings}>
      <Link>Comments (9)</Link>
    </DocsActiveBlock>
    <DocsActiveBlock settings={settings}>
      <Link href="#" color={COLOR.MINT} emphasised={true} size={SIZE.SMALL}>Terms of use</Link>
    </DocsActiveBlock>
  </div>;
};

export default Links;
