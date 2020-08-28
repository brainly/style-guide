import React from 'react';
import color from '../colors';
import DocsBlock from 'components/DocsBlock';

const colors = () => (
  <div>
    <DocsBlock info="Core colors">
      <ol className="colors-list">
        {color.core.map(({name, variable, hex}) => (
          <li className="color-box" style={{background: `#${hex}`}} key={name}>
            <span className="color-box__name">
              {name} / #{hex}
            </span>
            <span className="color-box__variable">{variable}</span>
          </li>
        ))}
      </ol>
    </DocsBlock>
    <DocsBlock info="Additional colors">
      <ol className="colors-list">
        {color.additional.map(({name, variable, hex}) => (
          <li className="color-box" style={{background: `#${hex}`}} key={name}>
            <span className="color-box__name">
              {name} / #{hex}
            </span>
            <span className="color-box__variable">{variable}</span>
          </li>
        ))}
      </ol>
    </DocsBlock>
    <DocsBlock info="Neutrals">
      <ol className="colors-list">
        {color.neutrals.map(({name, variable, hex}) => (
          <li className="color-box" style={{background: `#${hex}`}} key={name}>
            <span className="color-box__name">
              {name} / #{hex}
            </span>
            <span className="color-box__variable">{variable}</span>
          </li>
        ))}
      </ol>
    </DocsBlock>
  </div>
);

export default colors;
