import React from 'react';
import Avatar, {SIZE} from 'avatar/Avatar';
import SeparatorHorizontal, {TYPE} from '../SeparatorHorizontal';

const SmallDeviceExample = () =>
  <html lang="en">
    <head>
      <link rel="stylesheet" href="../../../style-guide.css" />
    </head>
    <body>
      <script src="images/icons.js"></script>
      <div>
        <Avatar size={SIZE.SMALL} />
        <SeparatorHorizontal type={TYPE.SPACED} />
        <Avatar size={SIZE.SMALL} />
        <Avatar size={SIZE.SMALL} />
        <SeparatorHorizontal type={TYPE.SHORT_SPACED} />
        <Avatar size={SIZE.SMALL} />
      </div>
    </body>
  </html>;

export default SmallDeviceExample;
