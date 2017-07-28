import React from 'react';
import Input, {SIZE, COLOR} from '../Input';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Inputs = () => {
  const TYPE = {
    BUTTON: 'button',
    COLOR: 'color',
    DATE: 'date',
    DATETIME_LOCAL: 'datetime-local',
    EMAIL: 'email',
    FILE: 'file',
    HIDDEN: 'hidden',
    IMAGE: 'image',
    MONTH: 'month',
    NUMBER: 'number',
    PASSWORD: 'password',
    RANGE: 'range',
    RESET: 'reset',
    SEARCH: 'search',
    SUBMIT: 'submit',
    TEL: 'tel',
    TEXT: 'text',
    TIME: 'time',
    URL: 'url',
    WEEK: 'week'
  };

  const settings = [
    {
      name: 'type',
      values: TYPE
    },
    {
      name: 'size',
      values: SIZE
    },
    {
      name: 'color',
      values: COLOR
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
      name: 'withIcon',
      values: Boolean
    },
    {
      name: 'noBorder',
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

  return <div>
    <DocsActiveBlock settings={settings}>
      <Input placeholder="Simple input"/>
    </DocsActiveBlock>
    <DocsActiveBlock settings={settings}>
      <Input placeholder="Big wrong input" fullWidth={true} size={SIZE.LARGE} invalid noBorder
        value="I'm a big bad input"/>
    </DocsActiveBlock>
  </div>;
};

export default Inputs;
