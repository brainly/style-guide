import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Label from 'labels/Label';
import Radio from '../Radio';

const dumpProps = {onChange: () => undefined};

const radios = () => (
  <div>
    <DocsBlock info="Radio Buttons">
      <Radio name="group1" />
      <Radio name="group1" checked {...dumpProps} />
      <br />
      <Label
        secondary
        htmlFor="radio-3"
        text="Check me!"
        iconContent={
          <Radio name="group2" />
        }
      />
      <Label
        secondary
        htmlFor="radio-4"
        text="Check me!"
        iconContent={
          <Radio name="group3" />
        }
      />
    </DocsBlock>
  </div>
);

export default radios;
