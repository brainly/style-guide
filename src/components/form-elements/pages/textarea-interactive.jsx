import React from 'react';
import Textarea, {SIZE, TEXTAREA_COLOR} from '../Textarea';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Textareas = () => {
  const settings = [
    {
      name: 'size',
      values: SIZE,
    },
    {
      name: 'color',
      values: TEXTAREA_COLOR,
    },
    {
      name: 'value',
      values: String,
    },
    {
      name: 'placeholder',
      values: String,
    },
    {
      name: 'fullWidth',
      values: Boolean,
    },
    {
      name: 'simple',
      values: Boolean,
    },
    {
      name: 'autoHeight',
      values: Boolean,
    },
    {
      name: 'valid',
      values: Boolean,
    },
    {
      name: 'invalid',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock backgroundColor="dark" settings={settings}>
        <Textarea
          placeholder="placeholder"
          value="Tall and valid textarea"
          size={SIZE.XTALL}
          color={TEXTAREA_COLOR.DEFAULT}
        />
      </DocsActiveBlock>
    </div>
  );
};

export default Textareas;
