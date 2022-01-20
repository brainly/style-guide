import * as React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Avatar, {SIZE as AVATAR_SIZE} from 'avatar/Avatar';
import SeparatorVertical, {SIZE, COLORS_MAP} from '../SeparatorVertical';
import SeparatorHorizontal, {
  TYPE,
  COLORS_MAP as HORIZONTAL_COLORS_MAP,
} from '../SeparatorHorizontal';

const Separators = () => {
  const verticalSettings = [
    {
      name: 'size',
      values: SIZE,
    },
    {
      name: 'color',
      values: COLORS_MAP,
    },
  ];
  const horizontalSettings = [
    {
      name: 'type',
      values: TYPE,
    },
    {
      name: 'color',
      values: HORIZONTAL_COLORS_MAP,
    },
  ];

  return (
    <div>
      <DocsActiveBlock
        settings={verticalSettings}
        backgroundColor="dark"
        contentBefore={
          <Avatar imgSrc="https://source.unsplash.com/64x64/?cat" />
        }
        contentAfter={<Avatar size={AVATAR_SIZE.SMALL} />}
      >
        <SeparatorVertical />
      </DocsActiveBlock>

      <DocsActiveBlock
        backgroundColor="dark"
        settings={horizontalSettings}
        componentType={SeparatorHorizontal}
        contentBefore={<Avatar size={AVATAR_SIZE.SMALL} />}
        contentAfter={<Avatar size={AVATAR_SIZE.SMALL} />}
        wrapper={<div />}
      >
        <SeparatorHorizontal />
      </DocsActiveBlock>
    </div>
  );
};

export default Separators;
