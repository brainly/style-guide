import React from 'react';
import TopLayer, {sizes} from '../TopLayer';

const content = <div className="sg-content-box">
  <div className="sg-content-box__content sg-content-box__content--spaced-bottom-large">
    heading
  </div>

  <div className="sg-content-box__content sg-content-box__content--spaced-bottom-large">
    content
    <br/>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim diam, dictum et maximus sit amet, pulvinar
    vel ante. Maecenas id tempus lacus. Cras vitae lectus vehicula, pretium odio sed, pretium nulla. Nunc ultrices nibh
    orci, sit amet gravida metus dapibus nec. Sed orci nisi, volutpat varius auctor sit amet, eleifend eu elit. Fusce
    eget nunc tristique nibh viverra lobortis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
    ridiculus mus.

  </div>

  <div className="sg-content-box__actions">
    actions
  </div>
</div>;

const DefaultTopLayer = () =>
  <html>
    <head>
      <meta charSet="utf-8"/>
      <link rel="stylesheet" href="../../../style-guide.css"/>
    </head>
    <body>
      <div className="sg-overlay">
        <TopLayer modal={true} size={sizes.small}>
          {content}
        </TopLayer>
      </div>
      <script src="images/icons.js"></script>
    </body>
  </html>;

export default DefaultTopLayer;
