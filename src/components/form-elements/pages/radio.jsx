import * as React from 'react';
import DocsBlock from 'components/DocsBlock';
import Radio from '../radio/Radio';
import RadioGroup from '../radio/RadioGroup';
import ContrastBox from 'components/ContrastBox';
import Flex from '../../flex/Flex';

const radios = () => (
  <div>
    <DocsBlock info="Radio - dark">
      <Flex direction="column">
        <Radio />
        <Radio checked>Checked</Radio>
        <Radio description="My description.">With description</Radio>
        <Radio invalid checked description="My description.">
          With description
        </Radio>
        <Radio disabled invalid checked description="My description.">
          Disabled
        </Radio>
      </Flex>
    </DocsBlock>
    <DocsBlock info="Radio - light" className="docs-block__contrast-box">
      <ContrastBox>
        <Flex direction="column">
          <Radio color="light" />
          <Radio color="light" checked>
            Checked
          </Radio>
          <Radio color="light" indeterminate>
            Indeterminate
          </Radio>

          <Radio color="light" description="My description.">
            With description
          </Radio>
          <Radio color="light" invalid checked description="My description.">
            With description
          </Radio>
          <Radio
            color="light"
            disabled
            invalid
            checked
            description="My description."
          >
            Disabled
          </Radio>
        </Flex>
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Radio Group">
      <RadioGroup value="Freja" name="dog">
        <Radio value="Freja">Freja</Radio>
        <Radio value="Gałgan">Gałgan</Radio>
      </RadioGroup>
    </DocsBlock>
  </div>
);

export default radios;
