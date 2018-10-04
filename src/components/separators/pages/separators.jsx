import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Avatar, {SIZE as AVATAR_SIZE} from 'avatar/Avatar';
import Text, {TEXT_COLOR, TEXT_SIZE, TEXT_WEIGHT, TEXT_TYPE} from 'text/Text';

import Link from 'text/Link';
import SeparatorVertical, {SIZE} from '../SeparatorVertical';
import SeparatorHorizontal, {TYPE as SEPARATOR_TYPE} from '../SeparatorHorizontal';

const Separators = () => (
  <div>
    <DocsBlock info="Default" centered>
      <Avatar imgSrc="https://source.unsplash.com/64x64/?cat" />
      <SeparatorVertical />
      <Avatar size={AVATAR_SIZE.SMALL} />
    </DocsBlock>
    <DocsBlock info="Small" centered>
      <Link>previous</Link>
      <SeparatorVertical size={SIZE.SMALL} />
      <Link>next</Link>
    </DocsBlock>
    <DocsBlock info="Large" centered>
      <div>
        <Text type={TEXT_TYPE.P} size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY} weight={TEXT_WEIGHT.BOLD}>answers</Text>
        <Text type={TEXT_TYPE.P} weight={TEXT_WEIGHT.BOLD}>0</Text>
      </div>
      <SeparatorVertical size={SIZE.LARGE} />
      <div>
        <Text type={TEXT_TYPE.P} size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY} weight={TEXT_WEIGHT.BOLD}>answers</Text>
        <Text type={TEXT_TYPE.P} weight={TEXT_WEIGHT.BOLD}>0</Text>
      </div>
    </DocsBlock>
    <DocsBlock info="Full" centered>
      <Avatar size={AVATAR_SIZE.XXLARGE} />
      <SeparatorVertical size={SIZE.FULL} />
      <Avatar size={AVATAR_SIZE.XXLARGE} />
    </DocsBlock>
    <DocsBlock info="Horizontal" centered>
      <div>
        <Avatar size={AVATAR_SIZE.SMALL} />
        <SeparatorHorizontal />
        <Avatar size={AVATAR_SIZE.SMALL} />
      </div>
    </DocsBlock>
    <DocsBlock info="Horizontal spaced" additionalInfo="(with margins)" centered>
      <div>
        <Avatar size={AVATAR_SIZE.SMALL} />
        <SeparatorHorizontal type={SEPARATOR_TYPE.SPACED} />
        <Avatar size={AVATAR_SIZE.SMALL} />
      </div>
    </DocsBlock>
    <DocsBlock info="Horizontal spaced" additionalInfo="(with static margins)" centered>
      <div>
        <Avatar size={AVATAR_SIZE.SMALL} />
        <SeparatorHorizontal type={SEPARATOR_TYPE.SHORT_SPACED} />
        <Avatar size={AVATAR_SIZE.SMALL} />
      </div>
    </DocsBlock>
    <DocsBlock info="Horizontal spaced" additionalInfo="(small device)">
      <iframe width="300" height="200" src="components/separators/small-device.html" />
    </DocsBlock>
  </div>
);

export default Separators;
