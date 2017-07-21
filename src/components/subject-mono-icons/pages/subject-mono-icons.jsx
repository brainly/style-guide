import React from 'react';
import DocsBlock from 'DocsBlock';
import SubjectIcon, {TYPE} from '../SubjectMonoIcon';

const subjectMonoIcons = () => <div>
  <DocsBlock >
    <ul className="icons-list">
      {Object.values(TYPE).map(type => <li className="icons-list__element icons-list__element--wide" key={type}>
        <SubjectIcon type={type}/>
        <span className="icons-list__element-info">&nbsp; - {type}</span>
      </li>)}
    </ul>
  </DocsBlock>
</div>;

export default subjectMonoIcons;
