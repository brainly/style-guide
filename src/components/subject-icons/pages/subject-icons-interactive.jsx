import React from 'react';
import SubjectIcon, {TYPE, SIZE} from '../SubjectIcon';
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
    }
  ];

  return <div>
    <DocsActiveBlock settings={settings}>
      <SubjectIcon type={TYPE.MATHEMATICS}/>
    </DocsActiveBlock>
  </div>;
};

export default SubjectIcons;
