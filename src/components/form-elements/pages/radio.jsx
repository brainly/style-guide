import React from 'react';
import DocsBlock from 'components/DocsBlock';
import LabelDeprecated from 'labels-deprecated/LabelDeprecated';
import Radio from '../Radio';

const dumpProps = {onChange: () => undefined};

const radios = () => (
  <div>
    <DocsBlock info="Radio Buttons">
      <div className="sg-space-x-m">
        <Radio name="group1">First</Radio>
        <Radio name="group1" checked {...dumpProps}>
          Second
        </Radio>
      </div>
    </DocsBlock>
    <DocsBlock info="Size S">
      <div className="sg-space-x-m">
        <Radio size="s" name="group2">
          First
        </Radio>
        <Radio size="s" name="group2" checked {...dumpProps}>
          Second
        </Radio>
      </div>
    </DocsBlock>
  </div>
);

export default radios;
