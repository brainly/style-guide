import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Icon, {TYPE, ICON_COLOR, SIZE} from '../Icon';

const icons = () => (
  <div>
    <DocsBlock>
      <ContrastBox>
        <ul className="icons-list">
          {Object.values(TYPE).map(type => (
            <li className="icons-list__element" key={type}>
              <Icon type={type} />
              <span>&nbsp; - {type}</span>
            </li>
          ))}
        </ul>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Custom SVG">
      <ul className="icons-list">
        <li className="icons-list__element">
          <Icon
            color={ICON_COLOR.PEACH}
            size={30}
            customSvg
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fillRule="nonzero" d="M8.45 1v4.84h3.57L6.5 18.74H2v4.85h12.9v-4.84h-3.56l5.52-12.9h4.5V1z" />
              </svg>
            </div>
          </Icon>
          <span>&nbsp; - custom SVG</span>
        </li>
      </ul>
    </DocsBlock>

    <DocsBlock info="Colors">
      <ul className="icons-list">
        {Object.values(ICON_COLOR).map(color => (
          <li className="icons-list__element" key={color}>
            <Icon color={color} type={TYPE.FRIENDS} />
            <span>&nbsp; - {color}</span>
          </li>
        ))}
      </ul>
    </DocsBlock>

    <DocsBlock info="Sizes">
      <ContrastBox>
        <ul className="icons-list">
          {SIZE.map(size => (
            <li className="icons-list__element icons-list__element--wider" key={size}>
              <Icon size={size} type={TYPE.X} />
              <span>&nbsp; - {size}</span>
            </li>
          ))}
        </ul>
      </ContrastBox>
    </DocsBlock>
  </div>
);

export default icons;
