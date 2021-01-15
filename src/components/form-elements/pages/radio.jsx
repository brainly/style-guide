import React from 'react';
import DocsBlock from 'components/DocsBlock';
import LabelDeprecated from 'labels-deprecated/LabelDeprecated';
import Radio from '../Radio';

const dumpProps = {onChange: () => undefined};

const radios = () => (
  <div>
    <DocsBlock info="Radio Buttons">
      <Radio name="group1">First</Radio>
      <Radio name="group1" checked {...dumpProps}>
        Second
      </Radio>
    </DocsBlock>
    <DocsBlock info="Size S">
      <Radio size="s" name="group2">
        First
      </Radio>
      <Radio size="s" name="group2" checked {...dumpProps}>
        Second
      </Radio>
    </DocsBlock>
  </div>
);

export default radios;
