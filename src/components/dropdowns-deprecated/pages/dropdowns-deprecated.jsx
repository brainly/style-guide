import React from 'react';

import DocsBlock from 'components/DocsBlock';
import Dropdown from '../DropdownDeprecated';

const Dropdowns = () => (
  <div>
    <DocsBlock info="Default">
      <Dropdown
        name="Brainly.com"
        links={[
          {label: 'Brainly.pl', url: 'http://www.brainly.pl'},
          {label: 'Brainly.com', url: 'http://www.brainly.com'},
        ]}
      />
    </DocsBlock>
  </div>
);

export default Dropdowns;
