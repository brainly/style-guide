import React from 'react';

import DocsBlock from 'components/DocsBlock';
import Flex from '../../flex/Flex';
import ContrastBox from 'components/ContrastBox';
import Dropdown from '../Dropdown';

const Dropdowns = () => (
  <div>
    <DocsBlock info="Closed and open">
      <Flex alignItems="flex-end" style={{height: '140px'}}>
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
    <DocsBlock info="Dark and light">
      <Flex alignItems="flex-end" style={{height: '185px'}}>
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
          <ContrastBox
            style={{display: 'flex', alignItems: 'flex-end', height: '185px'}}
          >
            <Dropdown
              key={2}
              name="Brainly.com"
              initiallyOpened
              links={[
                {label: 'Brainly.pl', url: 'http://www.brainly.pl'},
                {label: 'Brainly.com', url: 'http://www.brainly.com'},
              ]}
              color="white"
            />
          </ContrastBox>
        </Flex>
      </Flex>
    </DocsBlock>
    <DocsBlock info="Full width">
      <Dropdown
        fullWidth
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
