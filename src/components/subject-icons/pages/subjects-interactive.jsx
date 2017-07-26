import React from 'react';
import SubjectIcon, {TYPE, SIZE} from '../SubjectIcon';
import SubjectIconBox from '../SubjectIconBox';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Subjects = () => {
  const settingsIcons = [
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
      values: Boolean
    }
  ];
  const settingsBox = [
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
      name: 'darker',
      values: Boolean
    }
  ];

  return <div>
    <DocsActiveBlock settings={settingsIcons}>
      <SubjectIcon type={TYPE.PHYSICS}/>
    </DocsActiveBlock>
    <DocsActiveBlock settings={settingsBox}>
      <SubjectIconBox type={TYPE.ARTMUSIC}/>
    </DocsActiveBlock>
  </div>;
};

export default Subjects;
