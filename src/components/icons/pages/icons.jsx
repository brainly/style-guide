import React from 'react';
import DocsBlock from '../../../docs/DocsBlock';
import ContrastBox from '../../../docs/ContrastBox';
import Icon, {TYPE, COLOR, SIZE} from '../Icon';

const icons = () => <div>
  <DocsBlock >
    <ContrastBox>
      <ul className="icons-list">
        {Object.values(TYPE).map(type => <li className="icons-list__element" key={type}>
          <Icon type={type}/>
          <span>&nbsp; - {type}</span>
        </li>)}
      </ul>
    </ContrastBox>
  </DocsBlock>

  <DocsBlock info="Colors">
    <ul className="icons-list">
      {Object.values(COLOR).map(color => <li className="icons-list__element" key={color}>
        <Icon color={color} type={TYPE.FRIENDS}/>
        <span>&nbsp; - {color}</span>
      </li>)}
    </ul>
  </DocsBlock>

  <DocsBlock info="Sizes">
    <ContrastBox>
      <ul className="icons-list">
        {SIZE.map(size => <li className="icons-list__element icons-list__element--wider" key={size}>
          <Icon size={size} type={TYPE.X}/>
          <span>&nbsp; - {size}</span>
        </li>)}
      </ul>
    </ContrastBox>
  </DocsBlock>
</div>;

export default icons;
