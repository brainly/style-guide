import React from 'react';
import Textarea, {SIZE} from '../Textarea';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Textareas = () => {

  const settings = [
    {
      name: 'size',
      values: SIZE
    },
    {
      name: 'value',
      values: String
    },
    {
      name: 'placeholder',
      values: String
    },
    {
      name: 'fullWidth',
      values: Boolean
    },
    {
      name: 'simple',
      values: Boolean
    },
    {
      name: 'autoHeight',
      values: Boolean
    },
    {
      name: 'valid',
      values: Boolean
    },
    {
      name: 'invalid',
      values: Boolean
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Textarea placeholder="Simple textarea" />
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <Textarea placeholder="placeholder" value="Tall and valid textarea" size={SIZE.XTALL} valid />
      </DocsActiveBlock>
    </div>
  );
};

export default Textareas;
