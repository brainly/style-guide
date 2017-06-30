import React from 'react';
import DocsBlock from '../../../docs/DocsBlock';
import {contrastBlockCssClass} from '../../../docs/ContrastBox';
import IconAsButton, {types, colors, sizes} from '../IconAsButton';
import classnames from 'classnames';
import PropTypes from 'prop-types';


const DrawHelper = props => {
  const liClass = classnames('icons-list__element', {
    [contrastBlockCssClass]: props.color === colors.light
  });
  const liStyle = {padding: 0};

  if (props.color === colors.adaptive) {
    liStyle.fill = '#ff00ff';
  }

  return <li className={liClass} style={liStyle}>
    <IconAsButton {...props}/>
    <span>&nbsp; - {props.color}</span>
  </li>;
};

DrawHelper.propTypes = {
  color: PropTypes.oneOf(Object.values(colors))

};

const icons = () => <div>
  <DocsBlock info="Normal">
    <ul className="icons-list">
      {Object.values(colors).map(color => <DrawHelper color={color} key={color} type={types.heart}/>)}
    </ul>
  </DocsBlock>


  <DocsBlock info="Border">
    <ul className="icons-list">
      {Object.values(colors).map(color => <DrawHelper color={color} key={color} type={types.heart} border={true}/>)}
    </ul>
  </DocsBlock>


  <DocsBlock info="Action">
    <ul className="icons-list">
      {Object.values(colors).map(color =>
        <DrawHelper color={color} key={color} type={types.heart} action={true}/>
      )}
      {Object.values(colors).map(color =>
        <DrawHelper color={color} key={color} type={types.heart} action={true} active={true}/>
      )}
    </ul>
  </DocsBlock>

  <DocsBlock info="Action transparent">
    <ul className="icons-list">
      {Object.values(colors).map(color =>
        <DrawHelper color={color} key={color} type={types.heart} transparent={true}/>
      )}
      {Object.values(colors).map(color =>
        <DrawHelper color={color} key={color} type={types.heart} transparent={true} active={true}/>
      )}
    </ul>
  </DocsBlock>


  <DocsBlock info="small">
    <ul className="icons-list">
      {Object.values(colors).map(color =>
        <DrawHelper color={color} key={color} type={types.heart} size={sizes.small}/>
      )}
    </ul>
  </DocsBlock>


  <DocsBlock info="xsmall">
    <ul className="icons-list">
      {Object.values(colors).map(color =>
        <DrawHelper color={color} key={color} type={types.heart} size={sizes.xsmall}/>
      )}
    </ul>
  </DocsBlock>


  <DocsBlock info="xxsmall">
    <ul className="icons-list">
      {Object.values(colors).map(color =>
        <DrawHelper color={color} key={color} type={types.heart} size={sizes.xxsmall}/>
      )}
    </ul>
  </DocsBlock>
</div>;

export default icons;
