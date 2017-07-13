import React from 'react';
import DocsBlock from '../../../docs/DocsBlock';
import Avatar, {SIZE as AVATAR_SIZE} from '../../avatar/Avatar';
import Text, {COLOR, SIZE as TEXT_SIZE, WEIGHT, TYPE} from '../../text/Text';
import Link from '../../text/Link';
import Separator, {SIZE} from '../Separator';
import HorizontalSeparator from '../HorizontalSeparator';

const Separators = () => <div>
  <DocsBlock info="Default" centered={true}>
    <Avatar imgSrc="https://source.unsplash.com/64x64/?cat"/>
    <Separator/>
    <Avatar size={AVATAR_SIZE.SMALL}/>
  </DocsBlock>
  <DocsBlock info="Small" centered={true}>
    <Link>previous</Link>
    <Separator size={SIZE.SMALL}/>
    <Link>next</Link>
  </DocsBlock>
  <DocsBlock info="Large" centered={true}>
    <div>
      <Text type={TYPE.P} size={TEXT_SIZE.SMALL} color={COLOR.GRAY} weight={WEIGHT.BOLD}>answers</Text>
      <Text type={TYPE.P} weight={WEIGHT.BOLD}>0</Text>
    </div>
    <Separator size={SIZE.LARGE}/>
    <div>
      <Text type={TYPE.P} size={TEXT_SIZE.SMALL} color={COLOR.GRAY} weight={WEIGHT.BOLD}>answers</Text>
      <Text type={TYPE.P} weight={WEIGHT.BOLD}>0</Text>
    </div>
  </DocsBlock>
  <DocsBlock info="Horizontal" centered={true}>
    <div>
      <Avatar size={AVATAR_SIZE.SMALL}/>
      <HorizontalSeparator/>
      <Avatar size={AVATAR_SIZE.SMALL}/>
    </div>
  </DocsBlock>
  <DocsBlock info="Horizontal spaced" additionalInfo="(with margins)" centered={true}>
    <div>
      <Avatar size={AVATAR_SIZE.SMALL}/>
      <HorizontalSeparator spaced={true}/>
      <Avatar size={AVATAR_SIZE.SMALL}/>
    </div>
  </DocsBlock>
  <DocsBlock info="Horizontal spaced" additionalInfo="(with static margins)" centered={true}>
    <div>
      <Avatar size={AVATAR_SIZE.SMALL}/>
      <HorizontalSeparator spaced={true} short={true}/>
      <Avatar size={AVATAR_SIZE.SMALL}/>
    </div>
  </DocsBlock>
  <DocsBlock info="Horizontal spaced" additionalInfo="(small device)">
    <iframe width="300" height="200" src='components/separators/small-device.html'>
    </iframe>
  </DocsBlock>
</div>;

export default Separators;
