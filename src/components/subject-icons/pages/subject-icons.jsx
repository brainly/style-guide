import React from 'react';
import DocsBlock from 'components/DocsBlock';
import SubjectIcon, {TYPE} from '../SubjectIcon';

const subjectIcons = () => <div>
  <DocsBlock >
    <ul className="icons-list">
      {Object.values(TYPE).map(type => <li className="icons-list__element icons-list__element--wide" key={type}>
        <SubjectIcon type={type}/>
        <span className="icons-list__element-info">&nbsp; - {type}</span>
      </li>)}
    </ul>
  </DocsBlock>
</div>;

export default subjectIcons;
