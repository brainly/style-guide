import React from 'react';
import DocsBlock from 'components/DocsBlock';
import MobileIcon, {TYPE} from '../MobileIcon';

const mobileIcons = () => (
  <div>
    <DocsBlock>
      <ul className="icons-list">
        {Object.values(TYPE).map(type => (
          <li className="icons-list__element" key={type}>
            <MobileIcon size="medium" color="dark" type={type} />
            <span>&nbsp; - {type}</span>
          </li>
        ))}
      </ul>
    </DocsBlock>
  </div>
);

export default mobileIcons;
