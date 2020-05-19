import React from 'react';
import DocsBlock from 'components/DocsBlock';
import {TYPE, ICON_COLOR, SIZE} from '../IconAsButton';
import Text from '../../text/Text';
import Link from '../../text/Link';
import Flex from '../../flex/Flex';
import DrawHelper from './DrawHelper';

const icons = () => (
  <div>
    <Flex marginBottom="m">
      <Text color="peach-dark">
        This component is deprecated, please use{' '}
        <Link href="./components.html#buttons">
          Buttons with iconOnly option
        </Link>{' '}
        instead
      </Text>
    </Flex>
    <DocsBlock info="Normal">
      <ul className="icons-list">
        {Object.values(ICON_COLOR).map(color => (
          <DrawHelper color={color} key={color} type={TYPE.HEART} />
        ))}
      </ul>
    </DocsBlock>

    <DocsBlock info="Border">
      <ul className="icons-list">
        {Object.values(ICON_COLOR).map(color => (
          <DrawHelper color={color} key={color} type={TYPE.HEART} border />
        ))}
      </ul>
    </DocsBlock>

    <DocsBlock info="Action">
      <ul className="icons-list">
        {Object.values(ICON_COLOR).map(color => (
          <DrawHelper color={color} key={color} type={TYPE.HEART} action />
        ))}
        {Object.values(ICON_COLOR).map(color => (
          <DrawHelper
            color={color}
            key={color}
            type={TYPE.HEART}
            action
            active
          />
        ))}
      </ul>
    </DocsBlock>

    <DocsBlock info="Action transparent">
      <ul className="icons-list">
        {Object.values(ICON_COLOR).map(color => (
          <DrawHelper color={color} key={color} type={TYPE.HEART} transparent />
        ))}
        {Object.values(ICON_COLOR).map(color => (
          <DrawHelper
            color={color}
            key={color}
            type={TYPE.HEART}
            transparent
            active
          />
        ))}
      </ul>
    </DocsBlock>

    <DocsBlock info="small">
      <ul className="icons-list">
        {Object.values(ICON_COLOR).map(color => (
          <DrawHelper
            color={color}
            key={color}
            type={TYPE.HEART}
            size={SIZE.SMALL}
          />
        ))}
      </ul>
    </DocsBlock>

    <DocsBlock info="xsmall">
      <ul className="icons-list">
        {Object.values(ICON_COLOR).map(color => (
          <DrawHelper
            color={color}
            key={color}
            type={TYPE.HEART}
            size={SIZE.XSMALL}
          />
        ))}
      </ul>
    </DocsBlock>

    <DocsBlock info="xxsmall">
      <ul className="icons-list">
        {Object.values(ICON_COLOR).map(color => (
          <DrawHelper
            color={color}
            key={color}
            type={TYPE.HEART}
            size={SIZE.XXSMALL}
          />
        ))}
      </ul>
    </DocsBlock>
  </div>
);

export default icons;
