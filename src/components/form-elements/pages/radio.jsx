import React from 'react';
import DocsBlock from 'components/DocsBlock';
import LabelDeprecated from 'labels-deprecated/LabelDeprecated';
import Radio from '../Radio';

const dumpProps = {onChange: () => undefined};

const radios = () => (
  <div>
    <DocsBlock info="Radio Buttons">
      <Radio name="group1" />
      <Radio name="group1" checked {...dumpProps} />
      <br />
      <LabelDeprecated
        secondary
        htmlFor="radio-3"
        text="Check me!"
        iconContent={<Radio name="group2" />}
      />
      <LabelDeprecated
        secondary
        htmlFor="radio-4"
        text="Check me!"
        iconContent={<Radio name="group3" />}
      />
    </DocsBlock>
    <DocsBlock info="Size S">
      <Radio size="s" name="group4" />
      <Radio size="s" name="group4" checked {...dumpProps} />
    </DocsBlock>
  </div>
);

export default radios;
