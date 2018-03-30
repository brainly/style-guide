import React from 'react';
import TopLayer, {SIZE} from '../TopLayer';
import ContentBox from 'content-box/ContentBox';
import ContentBoxContent, {SIZE as SPACING_SIZE} from 'content-box/ContentBoxContent';
import ContentBoxActions from 'content-box/ContentBoxActions';
import Overlay from 'overlay/Overlay';

const content = (
  <ContentBox>
    <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
      heading
    </ContentBoxContent>
    <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
      content
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim diam, dictum et maximus sit amet,
      pulvinar
      vel ante. Maecenas id tempus lacus. Cras vitae lectus vehicula, pretium odio sed, pretium nulla. Nunc ultrices
      nibh
      orci, sit amet gravida metus dapibus nec. Sed orci nisi, volutpat varius auctor sit amet, eleifend eu elit. Fusce
      eget nunc tristique nibh viverra lobortis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus.
    </ContentBoxContent>
    <ContentBoxActions>
      actions
    </ContentBoxActions>
  </ContentBox>
);

const DefaultTopLayer = () => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="../../../style-guide.css" />
    </head>
    <body>
      <Overlay>
        <TopLayer modal size={SIZE.SMALL}>
          {content}
        </TopLayer>
      </Overlay>
      <script src="images/icons.js" />
    </body>
  </html>
);

export default DefaultTopLayer;
