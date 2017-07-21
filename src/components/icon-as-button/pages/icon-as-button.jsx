import React from 'react';
import DocsBlock from 'components/DocsBlock';
import {contrastBlockCssClass} from 'components/ContrastBox';
import IconAsButton, {TYPE, COLOR, SIZE} from '../IconAsButton';
import classnames from 'classnames';
import PropTypes from 'prop-types';


const DrawHelper = props => {
  const liClass = classnames('icons-list__element', {
    [contrastBlockCssClass]: props.color === COLOR.LIGHT
  });
  const liStyle = {padding: 0};

  if (props.color === COLOR.ADAPTIVE) {
    liStyle.fill = '#ff00ff';
  }

  return <li className={liClass} style={liStyle}>
    <IconAsButton {...props}/>
    <span>&nbsp; - {props.color}</span>
  </li>;
};

DrawHelper.propTypes = {
  color: PropTypes.oneOf(Object.values(COLOR))

};

const icons = () => <div>
  <DocsBlock info="Normal">
    <ul className="icons-list">
      {Object.values(COLOR).map(color => <DrawHelper color={color} key={color} type={TYPE.HEART}/>)}
    </ul>
  </DocsBlock>


  <DocsBlock info="Border">
    <ul className="icons-list">
      {Object.values(COLOR).map(color => <DrawHelper color={color} key={color} type={TYPE.HEART} border={true}/>)}
    </ul>
  </DocsBlock>


  <DocsBlock info="Action">
    <ul className="icons-list">
      {Object.values(COLOR).map(color =>
        <DrawHelper color={color} key={color} type={TYPE.HEART} action={true}/>
      )}
      {Object.values(COLOR).map(color =>
        <DrawHelper color={color} key={color} type={TYPE.HEART} action={true} active={true}/>
      )}
    </ul>
  </DocsBlock>

  <DocsBlock info="Action transparent">
    <ul className="icons-list">
      {Object.values(COLOR).map(color =>
        <DrawHelper color={color} key={color} type={TYPE.HEART} transparent={true}/>
      )}
      {Object.values(COLOR).map(color =>
        <DrawHelper color={color} key={color} type={TYPE.HEART} transparent={true} active={true}/>
      )}
    </ul>
  </DocsBlock>


  <DocsBlock info="small">
    <ul className="icons-list">
      {Object.values(COLOR).map(color =>
        <DrawHelper color={color} key={color} type={TYPE.HEART} size={SIZE.small}/>
      )}
    </ul>
  </DocsBlock>


  <DocsBlock info="xsmall">
    <ul className="icons-list">
      {Object.values(COLOR).map(color =>
        <DrawHelper color={color} key={color} type={TYPE.HEART} size={SIZE.xsmall}/>
      )}
    </ul>
  </DocsBlock>


  <DocsBlock info="xxsmall">
    <ul className="icons-list">
      {Object.values(COLOR).map(color =>
        <DrawHelper color={color} key={color} type={TYPE.HEART} size={SIZE.xxsmall}/>
      )}
    </ul>
  </DocsBlock>
</div>;

export default icons;
