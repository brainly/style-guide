import React from 'react';
import DocsBlock, {contrastBlockCssClass} from '../../../docs/DocsBlock';
import Icon, {types, colors, sizes} from '../Icon';

const icons = () => <div>
  <DocsBlock >
    <div className={contrastBlockCssClass}>
      <ul className="icons-list">
        {Object.values(types).map(type => <li className="icons-list__element">
          <Icon type={type}/>
          <span>&nbsp; - {type}</span>
        </li>)}
      </ul>
    </div>
  </DocsBlock>

  <DocsBlock info="Colors">
    <ul className="icons-list">
      {Object.values(colors).map(color => <li className="icons-list__element">
        <Icon color={color} type={types.friends}/>
        <span>&nbsp; - {color}</span>
      </li>)}
    </ul>
  </DocsBlock>

  <DocsBlock info="Sizes">
    <div className={contrastBlockCssClass}>
      <ul className="icons-list">
        {sizes.map(size => <li className="icons-list__element icons-list__element--wider">
          <Icon size={size}  type={types.x}/>
          <span>&nbsp; - {size}</span>
        </li>)}
      </ul>
    </div>
  </DocsBlock>
</div>;

export default icons;
