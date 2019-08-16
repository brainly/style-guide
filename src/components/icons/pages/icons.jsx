import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Icon, {TYPE, STD_TYPE, ICON_COLOR, SIZE} from '../Icon';
import Text from '../../text/Text';

const icons = () => (
  <div>
    <DocsBlock>
      <Text size="medium" color="peach-dark" weight="bold">
        This set of the icons is deprecated
      </Text>
      <ContrastBox>
        <ul className="icons-list">
          {Object.values(TYPE)
            .filter(type => !type.includes('std'))
            .map(type => (
              <li className="icons-list__element" key={type}>
                <Icon type={type} />
                <span>&nbsp; - {type}</span>
              </li>
            ))}
        </ul>
      </ContrastBox>
    </DocsBlock>
    <DocsBlock>
      <ul className="icons-list">
        {Object.values(STD_TYPE).map(type => (
          <li className="icons-list__element" key={type}>
            <Icon size="32" color="dark" type={type} />
            <span>&nbsp; - {type}</span>
          </li>
        ))}
      </ul>
    </DocsBlock>

    <DocsBlock info="Sizes">
      <ul className="icons-list">
        {SIZE.map(size => (
          <li
            className="icons-list__element icons-list__element--wider"
            key={size}
          >
            <Icon color="dark" size={size} type="answer" />
            <span>&nbsp; - {size}</span>
          </li>
        ))}
      </ul>
    </DocsBlock>

    <DocsBlock info="Colors">
      <ul className="icons-list">
        {Object.values(ICON_COLOR).map(color => (
          <li className="icons-list__element" key={color}>
            <Icon color={color} size="46" type="std-answer" />
            <span>&nbsp; - {color}</span>
          </li>
        ))}
      </ul>
    </DocsBlock>

    <DocsBlock info="Custom SVG">
      <ul className="icons-list">
        <li className="icons-list__element">
          <Icon color="peach" size="32">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fillRule="nonzero"
                  d="M8.45 1v4.84h3.57L6.5 18.74H2v4.85h12.9v-4.84h-3.56l5.52-12.9h4.5V1z"
                />
              </svg>
            </div>
          </Icon>
          <span>&nbsp; - custom SVG</span>
        </li>
      </ul>
    </DocsBlock>
  </div>
);

export default icons;
