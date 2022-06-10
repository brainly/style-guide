import * as React from 'react';
import Checkbox from '../checkbox/Checkbox';
import ContrastBox from 'components/ContrastBox';
import DocsBlock from 'components/DocsBlock';

const dumpProps = {onChange: () => undefined};

const checkboxes = () => (
  <div>
    <DocsBlock info="Checkbox - dark">
      <div>
        <Checkbox />
        <Checkbox checked {...dumpProps}>
          Checked
        </Checkbox>
        <Checkbox indeterminate>Indeterminate</Checkbox>
        <Checkbox description="My description.">With description</Checkbox>
        <Checkbox
          invalid
          checked
          errorMessage="Something went wrong"
          description="My description."
        >
          With description
        </Checkbox>
        <Checkbox
          disabled
          invalid
          checked
          errorMessage="Something went wrong"
          description="My description."
        >
          Disabled
        </Checkbox>
      </div>
    </DocsBlock>
    <DocsBlock info="Checkbox - light" className="docs-block__contrast-box">
      <ContrastBox>
        <Checkbox color="light" />
        <Checkbox color="light" checked {...dumpProps}>
          Checked
        </Checkbox>
        <Checkbox color="light" indeterminate>
          Indeterminate
        </Checkbox>

        <Checkbox color="light" description="My description.">
          With description
        </Checkbox>
        <Checkbox
          color="light"
          invalid
          checked
          errorMessage="Something went wrong"
          description="My description."
        >
          With description
        </Checkbox>
        <Checkbox
          color="light"
          disabled
          invalid
          checked
          errorMessage="Something went wrong"
          description="My description."
        >
          Disabled
        </Checkbox>
      </ContrastBox>
    </DocsBlock>
  </div>
);

export default checkboxes;
