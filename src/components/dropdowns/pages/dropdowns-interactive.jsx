import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Dropdown from '../DropdownContainer';

const item1st = {id: 'dd-item-1', text: '1st item'};
const item2nd = {id: 'dd-item-2', text: '2nd item'};
const item3rd = {id: 'dd-item-3', text: '3rd item'};
const defaultItems = [item1st, item2nd, item3rd];

const Dropdowns = () => {
  const settings = [
    {
      name: 'fixed',
      values: Boolean,
    },
    {
      name: 'isOpened',
      values: Boolean,
    },
    {
      name: 'fullWidth',
      values: Boolean,
    },
    {
      name: 'label',
      values: String,
    },
  ];

  return (
    <div>
      <DocsActiveBlock
        settings={settings}
        contentBefore="Lorem Ipsum"
        contentAfter="Lorem ipsum"
        wrapper={<div />}
      >
        <Dropdown items={defaultItems} label="Pick one…" />
      </DocsActiveBlock>
    </div>
  );
};

export default Dropdowns;
