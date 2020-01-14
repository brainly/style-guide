import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Avatar, { SIZE as AVATAR_SIZE } from 'avatar/Avatar';
import Text, { TEXT_COLOR, TEXT_SIZE, TEXT_WEIGHT, TEXT_TYPE } from 'text/Text';
import Link from 'text/Link';
import SeparatorVertical, { SIZE } from '../SeparatorVertical';
import SeparatorHorizontal, { TYPE as SEPARATOR_TYPE } from '../SeparatorHorizontal';

var Separators = function Separators() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Default",
    centered: true
  }, React.createElement(Avatar, {
    imgSrc: "https://source.unsplash.com/64x64/?cat"
  }), React.createElement(SeparatorVertical, null), React.createElement(Avatar, {
    size: AVATAR_SIZE.SMALL
  })), React.createElement(DocsBlock, {
    info: "Small white vertical",
    centered: true
  }, React.createElement(ContrastBox, null, React.createElement(Link, null, "previous"), React.createElement(SeparatorVertical, {
    white: true,
    size: SIZE.SMALL
  }), React.createElement(Link, null, "next"))), React.createElement(DocsBlock, {
    info: "Small white horizontal",
    centered: true
  }, React.createElement(ContrastBox, null, React.createElement(Link, null, "previous"), React.createElement(SeparatorHorizontal, {
    white: true,
    size: SIZE.SMALL
  }), React.createElement(Link, null, "next"))), React.createElement(DocsBlock, {
    info: "Small grayDark vertical",
    centered: true
  }, React.createElement(ContrastBox, null, React.createElement(Link, null, "previous"), React.createElement(SeparatorVertical, {
    grayDark: true,
    size: SIZE.SMALL
  }), React.createElement(Link, null, "next"))), React.createElement(DocsBlock, {
    info: "Small grayDark horizontal",
    centered: true
  }, React.createElement(ContrastBox, null, React.createElement(Link, null, "previous"), React.createElement(SeparatorHorizontal, {
    grayDark: true,
    size: SIZE.SMALL
  }), React.createElement(Link, null, "next"))), React.createElement(DocsBlock, {
    info: "Small",
    centered: true
  }, React.createElement(Link, null, "previous"), React.createElement(SeparatorVertical, {
    size: SIZE.SMALL
  }), React.createElement(Link, null, "next")), React.createElement(DocsBlock, {
    info: "Large",
    centered: true
  }, React.createElement("div", null, React.createElement(Text, {
    type: TEXT_TYPE.P,
    size: TEXT_SIZE.SMALL,
    color: TEXT_COLOR.GRAY,
    weight: TEXT_WEIGHT.BOLD
  }, "answers"), React.createElement(Text, {
    type: TEXT_TYPE.P,
    weight: TEXT_WEIGHT.BOLD
  }, "0")), React.createElement(SeparatorVertical, {
    size: SIZE.LARGE
  }), React.createElement("div", null, React.createElement(Text, {
    type: TEXT_TYPE.P,
    size: TEXT_SIZE.SMALL,
    color: TEXT_COLOR.GRAY,
    weight: TEXT_WEIGHT.BOLD
  }, "answers"), React.createElement(Text, {
    type: TEXT_TYPE.P,
    weight: TEXT_WEIGHT.BOLD
  }, "0"))), React.createElement(DocsBlock, {
    info: "Full",
    centered: true
  }, React.createElement(Avatar, {
    size: AVATAR_SIZE.XXLARGE
  }), React.createElement(SeparatorVertical, {
    size: SIZE.FULL
  }), React.createElement(Avatar, {
    size: AVATAR_SIZE.XXLARGE
  })), React.createElement(DocsBlock, {
    info: "Horizontal",
    centered: true
  }, React.createElement("div", null, React.createElement(Avatar, {
    size: AVATAR_SIZE.SMALL
  }), React.createElement(SeparatorHorizontal, null), React.createElement(Avatar, {
    size: AVATAR_SIZE.SMALL
  }))), React.createElement(DocsBlock, {
    info: "Horizontal spaced",
    additionalInfo: "(with margins)",
    centered: true
  }, React.createElement("div", null, React.createElement(Avatar, {
    size: AVATAR_SIZE.SMALL
  }), React.createElement(SeparatorHorizontal, {
    type: SEPARATOR_TYPE.SPACED
  }), React.createElement(Avatar, {
    size: AVATAR_SIZE.SMALL
  }))), React.createElement(DocsBlock, {
    info: "Horizontal spaced",
    additionalInfo: "(with static margins)",
    centered: true
  }, React.createElement("div", null, React.createElement(Avatar, {
    size: AVATAR_SIZE.SMALL
  }), React.createElement(SeparatorHorizontal, {
    type: SEPARATOR_TYPE.SHORT_SPACED
  }), React.createElement(Avatar, {
    size: AVATAR_SIZE.SMALL
  }))), React.createElement(DocsBlock, {
    info: "Horizontal spaced",
    additionalInfo: "(small device)"
  }, React.createElement("iframe", {
    width: "300",
    height: "200",
    src: "components/separators/small-device.html"
  })));
};

export default Separators;