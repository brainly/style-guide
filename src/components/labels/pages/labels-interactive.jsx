import React from 'react';
import Label, {ICON_TYPE, LABEL_COLORS_SET, LABEL_TYPE} from '../Label';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Labels = () => {
  const settings = [
    {
      name: 'type',
      values: LABEL_TYPE,
    },
    {
      name: 'color',
      values: LABEL_COLORS_SET,
    },
    {
      name: 'iconType',
      values: ICON_TYPE,
    },
    {
      name: 'onClose',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Label
          iconType={ICON_TYPE.HEART}
          color={LABEL_COLORS_SET.BLUE}
          type={LABEL_TYPE.DEFAULT}
        >
          label
        </Label>
      </DocsActiveBlock>
    </div>
  );
};

export default Labels;
