import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import DocsBlock from 'components/DocsBlock';
import DropdownContainer, {OpenedController} from '../DropdownContainer';

const item1st = {id: 'dd-item-1', text: '1st item'};
const item2nd = {id: 'dd-item-2', text: '2nd item'};
const item3rd = {id: 'dd-item-3', text: '3rd item'};
const defaultItems = [item1st, item2nd, item3rd];

const Dropdowns = () => {

  const settings = [
    {
      name: 'fixed',
      values: Boolean
    },
    {
      name: 'openOnStart',
      values: Boolean
    },
    {
      name: 'fullWidth',
      values: Boolean
    },
    {
      name: 'label',
      values: String
    }
  ];

  return (
    <div>
      <DocsBlock>
        <OpenedController>
          {
            ({isOpened, toggle}) =>
              <DropdownContainer
                items={defaultItems}
                label={'Pick one…'}
                isOpened={isOpened}
                toggle={toggle}
              />
          }
        </OpenedController>
      </DocsBlock>
    </div>
  );
};

export default Dropdowns;
