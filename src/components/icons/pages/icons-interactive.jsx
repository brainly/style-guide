import React from 'react';
import Icon, {TYPE, SIZE, ICON_COLOR} from '../Icon';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Icons = () => {
  const SIZE_OPTIONS = SIZE.reduce((result, item) => {
    result[item] = item;
    return result;
  }, {});

  const settings = [
    {
      name: 'type',
      values: TYPE,
      required: true,
    },
    {
      name: 'size',
      values: SIZE_OPTIONS,
    },
    {
      name: 'color',
      values: ICON_COLOR,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Icon type="std-heart" color="peach" size={46} />
      </DocsActiveBlock>
    </div>
  );
};

export default Icons;
