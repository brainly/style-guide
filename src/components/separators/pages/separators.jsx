import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Avatar, {SIZE as AVATAR_SIZE} from 'avatar/Avatar';
import Text, {COLOR, SIZE as TEXT_SIZE, WEIGHT, TYPE} from 'text/Text';
import Link from 'text/Link';
import SeparatorVertical, {SIZE} from '../SeparatorVertical';
import SeparatorHorizontal, {TYPE as SEPARATOR_TYPE} from '../SeparatorHorizontal';

const Separators = () => <div>
  <DocsBlock info="Default" centered={true}>
    <Avatar imgSrc="https://source.unsplash.com/64x64/?cat"/>
    <SeparatorVertical/>
    <Avatar size={AVATAR_SIZE.SMALL}/>
  </DocsBlock>
  <DocsBlock info="Small" centered={true}>
    <Link>previous</Link>
    <SeparatorVertical size={SIZE.SMALL}/>
    <Link>next</Link>
  </DocsBlock>
  <DocsBlock info="Large" centered={true}>
    <div>
      <Text type={TYPE.P} size={TEXT_SIZE.SMALL} color={COLOR.GRAY} weight={WEIGHT.BOLD}>answers</Text>
      <Text type={TYPE.P} weight={WEIGHT.BOLD}>0</Text>
    </div>
    <SeparatorVertical size={SIZE.LARGE}/>
    <div>
      <Text type={TYPE.P} size={TEXT_SIZE.SMALL} color={COLOR.GRAY} weight={WEIGHT.BOLD}>answers</Text>
      <Text type={TYPE.P} weight={WEIGHT.BOLD}>0</Text>
    </div>
  </DocsBlock>
  <DocsBlock info="Horizontal" centered={true}>
    <div>
      <Avatar size={AVATAR_SIZE.SMALL}/>
      <SeparatorHorizontal/>
      <Avatar size={AVATAR_SIZE.SMALL}/>
    </div>
  </DocsBlock>
  <DocsBlock info="Horizontal spaced" additionalInfo="(with margins)" centered={true}>
    <div>
      <Avatar size={AVATAR_SIZE.SMALL}/>
      <SeparatorHorizontal type={SEPARATOR_TYPE.SPACED}/>
      <Avatar size={AVATAR_SIZE.SMALL}/>
    </div>
  </DocsBlock>
  <DocsBlock info="Horizontal spaced" additionalInfo="(with static margins)" centered={true}>
    <div>
      <Avatar size={AVATAR_SIZE.SMALL}/>
      <SeparatorHorizontal type={SEPARATOR_TYPE.SHORT_SPACED}/>
      <Avatar size={AVATAR_SIZE.SMALL}/>
    </div>
  </DocsBlock>
  <DocsBlock info="Horizontal spaced" additionalInfo="(small device)">
    <iframe width="300" height="200" src='components/separators/small-device.html'>
    </iframe>
  </DocsBlock>
</div>;

export default Separators;
