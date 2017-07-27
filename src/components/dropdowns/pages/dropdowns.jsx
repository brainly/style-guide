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

const Dropdowns = () =>
  <div>
    <DocsBlock info='Closed' multiContent={[
      <Dropdown {...defaultProps} fullWidth={false}/>,
      <Dropdown {...defaultProps}/>
    ]}/>

    <DocsBlock info='Open' multiContent={[
      <div style={{height: '120px'}}>
        <ContrastBox>
          <Dropdown {...defaultProps} openOnStart={true} fullWidth={false}/>
        </ContrastBox>
      </div>,
      <ContrastBox>
        <Dropdown {...defaultProps} openOnStart={true}/>
      </ContrastBox>
    ]}/>

    <DocsBlock info='Fixed' additionalInfo="(items extend div)" multiContent={[
      <ContrastBox>
        <Dropdown {...defaultProps} fixed={true} openOnStart={true} fullWidth={false}/>
      </ContrastBox>,
      <ContrastBox>
        <Dropdown {...defaultProps} fixed={true} openOnStart={true}/>
      </ContrastBox>
    ]}/>

  </div>;

export default Dropdowns;
