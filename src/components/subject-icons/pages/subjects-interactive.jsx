import React from 'react';
import SubjectIconBox, {TYPE, SIZE} from '../SubjectIconBox';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Subjects = () => {
  const settingsBox = [
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
      name: 'darker',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settingsBox}>
        <SubjectIconBox type={TYPE.ARTMUSIC} />
      </DocsActiveBlock>
    </div>
  );
};

export default Subjects;
