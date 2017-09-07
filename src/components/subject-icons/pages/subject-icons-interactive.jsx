import React from 'react';
import SubjectIcon, {TYPE, SIZE, MONO} from '../SubjectIcon';
import DocsActiveBlock from 'components/DocsActiveBlock';

const SubjectIcons = () => {
  const settings = [
    {
      name: 'type',
      values: TYPE,
      required: true
    },
    {
      name: 'size',
      values: SIZE
    },
    {
      name: 'mono',
      values: MONO
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <SubjectIcon type={TYPE.MATHEMATICS} />
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings} backgroundColor="dark">
        <SubjectIcon type={TYPE.BIOLOGY} mono />
      </DocsActiveBlock>
    </div>
  );
};

export default SubjectIcons;
