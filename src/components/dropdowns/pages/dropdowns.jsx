import React from 'react';

import DocsBlock from 'components/DocsBlock';
import Flex from '../../flex/Flex';
import Dropdown from '../Dropdown';

const Dropdowns = () => (
  <Flex alignItems="flex-end" style={{height: '190px'}}>
    <DocsBlock info="Closed and open">
      <Flex>
        <Flex direction="column" marginRight="l">
          <Dropdown
            name="Brainly.com"
            links={[
              {label: 'Brainly.pl', url: 'http://www.brainly.pl'},
              {label: 'Brainly.com', url: 'http://www.brainly.com'},
            ]}
          />
        </Flex>
        <Flex>
          <Dropdown
            key={2}
            name="Brainly.com"
            initiallyOpened
            links={[
              {label: 'Brainly.pl', url: 'http://www.brainly.pl'},
              {label: 'Brainly.com', url: 'http://www.brainly.com'},
            ]}
          />
        </Flex>
      </Flex>
    </DocsBlock>
  </Flex>
);

export default Dropdowns;
