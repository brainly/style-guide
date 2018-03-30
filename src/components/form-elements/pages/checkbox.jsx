import React from 'react';
import Checkbox from '../Checkbox';
import DocsBlock from 'components/DocsBlock';
import Label from 'labels/Label';

const dumpProps = {onChange: () => undefined};

const checkboxes = () => (
  <div>
    <DocsBlock info="Checkboxes">
      <Checkbox />
      <Checkbox checked {...dumpProps} />
      <br />
      <Label
        secondary
        text="Check me!"
        htmlFor="checkbox-1"
        iconContent={
          <Checkbox id="checkbox-1" />
        }
      />
      <Label
        secondary
        text="Check me!"
        htmlFor="checkbox-2"
        emphasised
        iconContent={
          <Checkbox id="checkbox-2" />
        }
      />
    </DocsBlock>
  </div>
);

export default checkboxes;
