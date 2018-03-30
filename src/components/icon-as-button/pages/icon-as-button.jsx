import React from 'react';
import DocsBlock from 'components/DocsBlock';
import {TYPE, ICON_COLOR, SIZE} from '../IconAsButton';
import DrawHelper from './DrawHelper';

const icons = () => (
  <div>
    <DocsBlock info="Normal">
      <ul className="icons-list">
        {Object.values(ICON_COLOR).map(color => <DrawHelper color={color} key={color} type={TYPE.HEART} />)}
      </ul>
    </DocsBlock>

    <DocsBlock info="Border">
      <ul className="icons-list">
        {Object.values(ICON_COLOR).map(color => <DrawHelper color={color} key={color} type={TYPE.HEART} border />)}
      </ul>
    </DocsBlock>

    <DocsBlock info="Action">
      <ul className="icons-list">
        {Object.values(ICON_COLOR).map(color =>
          <DrawHelper color={color} key={color} type={TYPE.HEART} action />
        )}
        {Object.values(ICON_COLOR).map(color =>
          <DrawHelper color={color} key={color} type={TYPE.HEART} action active />
        )}
      </ul>
    </DocsBlock>

    <DocsBlock info="Action transparent">
      <ul className="icons-list">
        {Object.values(ICON_COLOR).map(color =>
          <DrawHelper color={color} key={color} type={TYPE.HEART} transparent />
        )}
        {Object.values(ICON_COLOR).map(color =>
          <DrawHelper color={color} key={color} type={TYPE.HEART} transparent active />
        )}
      </ul>
    </DocsBlock>

    <DocsBlock info="small">
      <ul className="icons-list">
        {Object.values(ICON_COLOR).map(color =>
          <DrawHelper color={color} key={color} type={TYPE.HEART} size={SIZE.SMALL} />
        )}
      </ul>
    </DocsBlock>

    <DocsBlock info="xsmall">
      <ul className="icons-list">
        {Object.values(ICON_COLOR).map(color =>
          <DrawHelper color={color} key={color} type={TYPE.HEART} size={SIZE.XSMALL} />
        )}
      </ul>
    </DocsBlock>

    <DocsBlock info="xxsmall">
      <ul className="icons-list">
        {Object.values(ICON_COLOR).map(color =>
          <DrawHelper color={color} key={color} type={TYPE.HEART} size={SIZE.XXSMALL} />
        )}
      </ul>
    </DocsBlock>
  </div>
);

export default icons;
