import React from 'react';
import SubjectMonoIcon, {TYPE, SIZE} from '../SubjectMonoIcon';
import DocsActiveBlock from 'components/DocsActiveBlock';

const SubjectMonoIcons = () => {
  const settings = [
    {
      name: 'type',
      values: TYPE
    },
    {
      name: 'size',
      values: SIZE
    }
  ];

  return <div>
    <DocsActiveBlock settings={settings}>
      <SubjectMonoIcon type={TYPE.ENTREPRENEURSHIP}/>
    </DocsActiveBlock>
  </div>;
};

export default SubjectMonoIcons;
