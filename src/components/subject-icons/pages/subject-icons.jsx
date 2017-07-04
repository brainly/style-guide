import React from 'react';
import DocsBlock from '../../../docs/DocsBlock';
import SubjectIcon, {types} from '../SubjectIcon';

const subjectIcons = () => <div>
  <DocsBlock >
    <ul className="icons-list">
      {Object.values(types).map(type => <li className="icons-list__element" key={type}>
        <SubjectIcon type={type}/>
        <span>&nbsp; - {type}</span>
      </li>)}
    </ul>
  </DocsBlock>
</div>;

export default subjectIcons;
