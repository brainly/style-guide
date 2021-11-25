import * as React from 'react';
import color from '../colors';
import DocsBlock from 'components/DocsBlock';

const colors = () => (
  <div>
    <DocsBlock info="Full-color palette">
      <ol className="colors-list">
        {color.fullColorPalette.map(({name, variable, hex}) => (
          <li className="color-box" style={{background: `#${hex}`}} key={name}>
            <span className="color-box__name">
              {name} / #{hex}
            </span>
            <span className="color-box__variable">{variable}</span>
          </li>
        ))}
      </ol>
    </DocsBlock>

    <DocsBlock info="Text colors">
      <ol className="colors-list">
        {color.text.map(({name, variable, hex}) => (
          <li className="color-box" style={{background: `#${hex}`}} key={name}>
            <span className="color-box__name">
              {name} / #{hex}
            </span>
            <span className="color-box__variable">{variable}</span>
          </li>
        ))}
      </ol>
    </DocsBlock>
    <DocsBlock info="Icon colors">
      <ol className="colors-list">
        {color.icon.map(({name, variable, hex}) => (
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
