import React from 'react';
import Dropdown from '../Dropdown';
import DocsBlock, {contrastBlockCssClass} from '../../../docs/DocsBlock';

const Buttons = () =>
  <div>
    <DocsBlock info='Primary buttons'>
      <Dropdown>
        Add your answer
      </Dropdown>
    </DocsBlock>

    <DocsBlock info='Primary buttons'>
      <div className={contrastBlockCssClass}>
        <Dropdown>
          Add your answer
        </Dropdown>
      </div>
    </DocsBlock>

  </div>;

export default Buttons;
