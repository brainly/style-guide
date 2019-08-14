import React from 'react';
import SubjectIcon, {TYPE, SIZE, ICON_COLOR} from '../SubjectIcon';
import DocsActiveBlock from 'components/DocsActiveBlock';

const SubjectIcons = () => {
  const settings = [
    {
      name: 'type',
      values: TYPE,
      required: true,
    },
    {
      name: 'size',
      values: SIZE,
    },
    {
      name: 'monoColor',
      values: ICON_COLOR,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <SubjectIcon type={TYPE.MATHEMATICS} />
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings} backgroundColor="dark">
        <SubjectIcon type={TYPE.BIOLOGY} monoColor={ICON_COLOR.LIGHT} />
      </DocsActiveBlock>
    </div>
  );
};

export default SubjectIcons;
