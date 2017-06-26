import React from 'react';
import Dropdown from '../DropdownContainer';
import DocsBlock, {contrastBlockCssClass} from '../../../docs/DocsBlock';

const item1st = {id: 'csdsd', text: '1st item'};
const item2nd = {id: 'sdfsdfg', text: '2nd item'};
const item3rd = {id: 'fdpks', text: '3rd item'};
const defaultItems = [item1st, item2nd, item3rd];
const defaultLabel = 'default Label';
const defaultProps = {items: defaultItems, label: defaultLabel};

const Buttons = () =>
  <div>
    <DocsBlock info='Closed' multiContent={[
      <Dropdown {...defaultProps} fullWidth={false}/>,
      <Dropdown {...defaultProps}/>
    ]}/>

    <DocsBlock info='Open' multiContent={[
      <div style={{height: '120px'}}>
        <div className={contrastBlockCssClass}>
          <Dropdown {...defaultProps} isOpened={true} fullWidth={false}/>
        </div>
      </div>,
      <div className={contrastBlockCssClass}>
        <Dropdown {...defaultProps} isOpened={true}/>
      </div>
    ]}/>

    <DocsBlock info='Fixed' additionalInfo="(items extend div)" multiContent={[
      <div className={contrastBlockCssClass}>
        <Dropdown {...defaultProps} fixed={true} isOpened={true} fullWidth={false}/>
      </div>,
      <div className={contrastBlockCssClass}>
        <Dropdown {...defaultProps} fixed={true} isOpened={true}/>
      </div>
    ]}/>

  </div>;

export default Buttons;
