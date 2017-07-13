import React from 'react';
import Avatar, {SIZE} from '../../avatar/Avatar';
import HorizontalSeparator from '../HorizontalSeparator';

const SmallDeviceExample = () =>
  <html lang="en">
    <head>
      <link rel="stylesheet" href="../../../style-guide.css"/>
    </head>
    <body>
      <script src="images/icons.js"></script>
      <div>
        <Avatar size={SIZE.SMALL}/>
        <HorizontalSeparator spaced={true}/>
        <Avatar size={SIZE.SMALL}/>
        <Avatar size={SIZE.SMALL}/>
        <HorizontalSeparator spaced={true} short={true}/>
        <Avatar size={SIZE.SMALL}/>
      </div>
    </body>
  </html>;

export default SmallDeviceExample;
