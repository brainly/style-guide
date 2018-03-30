import React from 'react';
import Dropdown from '../DropdownContainer';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';

const item1st = {id: 'csdsd', text: '1st item'};
const item2nd = {id: 'sdfsdfg', text: '2nd item'};
const item3rd = {id: 'fdpks', text: '3rd item'};
const defaultItems = [item1st, item2nd, item3rd];
const defaultLabel = 'default Label';
const defaultProps = {items: defaultItems, label: defaultLabel};

const Dropdowns = () => (
  <div>
    <DocsBlock
      info="Closed"
      multiContent={[
        <Dropdown key={1} {...defaultProps} fullWidth={false} />,
        <Dropdown key={2} {...defaultProps} />
      ]}
    />

    <DocsBlock
      info="Open"
      multiContent={[
        <div key={1} style={{height: '120px'}}>
          <ContrastBox>
            <Dropdown {...defaultProps} isOpened fullWidth={false} />
          </ContrastBox>
        </div>,
        <ContrastBox key={2}>
          <Dropdown {...defaultProps} isOpened />
        </ContrastBox>
      ]}
    />

    <DocsBlock
      info="Fixed"
      additionalInfo="(items extend div)"
      multiContent={[
        <ContrastBox key={1}>
          <Dropdown {...defaultProps} fixed isOpened fullWidth={false} />
        </ContrastBox>,
        <ContrastBox key={2}>
          <Dropdown {...defaultProps} fixed isOpened />
        </ContrastBox>
      ]}
    />
  </div>
);

export default Dropdowns;
