import React from 'react';
import Icon, {TYPE, STD_TYPE, SIZE, ICON_COLOR} from '../Icon';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Icons = () => {

  const SIZE_OPTIONS = SIZE.reduce((result, item) => {
    result[item] = item;
    return result;
  }, {});

  const settingsNewIcons = [
    {
      name: 'type',
      values: STD_TYPE,
      required: true
    },
    {
      name: 'size',
      values: SIZE_OPTIONS
    },
    {
      name: 'color',
      values: ICON_COLOR
    }
  ];

  const settings = [
    {
      name: 'type',
      values: TYPE,
      required: true
    },
    {
      name: 'size',
      values: SIZE_OPTIONS
    },
    {
      name: 'color',
      values: ICON_COLOR
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Icon type={TYPE.HEART} color={ICON_COLOR.PEACH} size={46} />
      </DocsActiveBlock>
      <DocsActiveBlock settings={settingsNewIcons}>
        <Icon type="std-answer" color="peach" size={46} />
      </DocsActiveBlock>
    </div>
  );
};

export default Icons;
