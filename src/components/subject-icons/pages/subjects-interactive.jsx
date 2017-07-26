import React from 'react';
import SubjectIcon, {TYPE, SIZE} from '../SubjectIcon';
import SubjectIconBox from '../SubjectIconBox';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Subjects = () => {
  const settingsIcons = [
    {
      name: 'type',
      values: TYPE
    },
    {
      name: 'size',
      values: SIZE
    }
  ];
  const settingsBox = [
    {
      name: 'type',
      values: TYPE
    },
    {
      name: 'size',
      values: SIZE
    },
    {
      name: 'darker',
      values: Boolean
    }
  ];

  return <div>
    <DocsActiveBlock settings={settingsIcons}>
      <SubjectIcon type={TYPE.PHYSICS}/>
    </DocsActiveBlock>
    <DocsActiveBlock settings={settingsBox}>
      <SubjectIconBox>
        <SubjectIcon type={TYPE.ARTMUSIC}/>
      </SubjectIconBox>
    </DocsActiveBlock>
  </div>;
};

export default Subjects;
