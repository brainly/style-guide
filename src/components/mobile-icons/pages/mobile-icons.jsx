import * as React from 'react';
import DocsBlock from 'components/DocsBlock';
import MobileIcon, {TYPE, ICON_COLOR} from '../MobileIcon';

const mobileIcons = () => (
  <div>
    <DocsBlock>
      <ul className="icons-list">
        {Object.values(TYPE).map(type => (
          <li className="icons-list__element" key={type}>
            <MobileIcon size="medium" color={ICON_COLOR['icon-black']} type={type} />
            <span>&nbsp; - {type}</span>
          </li>
        ))}
      </ul>
    </DocsBlock>
  </div>
);

export default mobileIcons;
