import React from 'react';
import Box, { COLOR, PADDING, CLOSE_ICON_COLOR } from '../Box';
import DocsBlock from 'components/DocsBlock';
import Button from 'buttons/Button';
import ContentBox from 'content-box/ContentBox';
import ContentBoxContent, { SIZE as CONTENT_BOX_CONTENT_SPACING_SIZE } from 'content-box/ContentBoxContent';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxActions from 'content-box/ContentBoxActions';
import Headline, { HEADLINE_TYPE } from 'text/Headline';
import ActionList from 'action-list/ActionList';
import ActionListHole from 'action-list/ActionListHole';
import Text, { TEXT_WEIGHT, TEXT_SIZE } from 'text/Text';
import Avatar from 'avatar/Avatar';

var closeCallback = function closeCallback() {
  return undefined;
};

var Boxs = function Boxs() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Simple"
  }, React.createElement(Box, null, "This is a box. (no color - default border on)")), React.createElement(DocsBlock, {
    info: "With shadow"
  }, React.createElement(Box, {
    shadow: true
  }, "This is a box with shadow")), Object.values(COLOR).map(function (color) {
    return React.createElement(DocsBlock, {
      key: color,
      info: "color ".concat(color)
    }, React.createElement(Box, {
      color: color
    }, color, " (no border by default)"));
  }), React.createElement(DocsBlock, {
    info: "No border radius"
  }, React.createElement(Box, {
    noBorderRadius: true
  }, "This is a box with no border radius")), React.createElement(DocsBlock, {
    info: "With onClose"
  }, React.createElement(Box, {
    onClose: closeCallback
  }, "This is a box with onClose")), React.createElement(DocsBlock, {
    info: "With onClose and closeIconColor"
  }, React.createElement(Box, {
    onClose: closeCallback,
    closeIconColor: CLOSE_ICON_COLOR.LIGHT,
    color: COLOR.BLUE
  }, "This is a box with onClose and light close Icon")), React.createElement(DocsBlock, {
    info: "Image",
    multiContent: [React.createElement(Box, {
      key: 1,
      imgSrc: "https://source.unsplash.com/100x100/?man"
    }), React.createElement(Box, {
      key: 2,
      imgSrc: "https://source.unsplash.com/50x100/?man"
    }), React.createElement(Box, {
      key: 3,
      imgSrc: "https://source.unsplash.com/100x50/?man"
    })]
  }), React.createElement(DocsBlock, {
    info: "Full"
  }, React.createElement(Box, {
    full: true
  }, "full")), React.createElement(DocsBlock, {
    info: "No padding",
    multiContent: [React.createElement(Box, {
      key: 1,
      padding: PADDING.NO_PADDING
    }, "some text"), React.createElement(Box, {
      key: 2,
      padding: PADDING.NO_PADDING
    }, "more text", React.createElement("br", null), " more more")]
  }), React.createElement(DocsBlock, {
    info: "Small padding + no min height",
    multiContent: [React.createElement(Box, {
      key: 1,
      padding: PADDING.SMALL,
      noMinHeight: true
    }, "some text"), React.createElement(Box, {
      key: 2,
      padding: PADDING.SMALL,
      noMinHeight: true
    }, "more text", React.createElement("br", null), " more more")]
  }), React.createElement(DocsBlock, {
    info: "Xsmall padding + no min height",
    multiContent: [React.createElement(Box, {
      key: 1,
      padding: PADDING.XSMALL,
      noMinHeight: true
    }, "some text"), React.createElement(Box, {
      key: 2,
      padding: PADDING.XSMALL,
      noMinHeight: true
    }, "more text", React.createElement("br", null), " more more")]
  }), React.createElement(DocsBlock, {
    info: "Xxsmall padding + no min height",
    multiContent: [React.createElement(Box, {
      key: 1,
      padding: PADDING.XXSMALL,
      noMinHeight: true
    }, "some text"), React.createElement(Box, {
      key: 2,
      padding: PADDING.XXSMALL,
      noMinHeight: true
    }, "more text", React.createElement("br", null), " more more")]
  }), React.createElement(DocsBlock, {
    info: "Small padding",
    multiContent: [React.createElement(Box, {
      key: 1,
      padding: PADDING.SMALL
    }, "some text"), React.createElement(Box, {
      key: 2,
      padding: PADDING.SMALL
    }, "more text", React.createElement("br", null), " more more")]
  }), React.createElement(DocsBlock, {
    info: "Large padding",
    multiContent: [React.createElement(Box, {
      key: 1,
      padding: PADDING.LARGE
    }, "some text"), React.createElement(Box, {
      key: 2,
      padding: PADDING.LARGE
    }, "more text", React.createElement("br", null), " more more")]
  }), React.createElement(DocsBlock, {
    info: "Example of box usage"
  }, React.createElement(Box, {
    onClose: closeCallback
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxHeader, null, React.createElement(Headline, {
    type: HEADLINE_TYPE.H3
  }, "Ask a question about a school subject")), React.createElement(ContentBoxActions, null, React.createElement(Button, {
    type: "primary-blue",
    fullWidth: true
  }, "Ask your question"))))), React.createElement(DocsBlock, {
    info: "Example of message box usage"
  }, React.createElement(Box, {
    color: COLOR.BLUE_SECONDARY,
    full: true,
    border: false,
    onClose: closeCallback
  }, React.createElement(ActionList, {
    noWrap: true,
    toTop: true
  }, React.createElement(ActionListHole, null, React.createElement(Avatar, {
    spaced: true
  })), React.createElement(ActionListHole, {
    grow: true
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxContent, {
    spacedBottom: CONTENT_BOX_CONTENT_SPACING_SIZE.XSMALL,
    spacedTop: CONTENT_BOX_CONTENT_SPACING_SIZE.SMALL
  }, React.createElement(Text, {
    weight: TEXT_WEIGHT.BOLD,
    size: TEXT_SIZE.SMALL
  }, "Title for a message with valuable information for a user.")), React.createElement(ContentBoxContent, {
    spacedBottom: CONTENT_BOX_CONTENT_SPACING_SIZE.SMALL
  }, React.createElement(Text, {
    size: TEXT_SIZE.SMALL
  }, "This is valuable information for users in a specific situation. For example: we want to let you know that in 24h Brainly will disable some feature. You can find more information about this change on our blog."))))))));
};

export default Boxs;