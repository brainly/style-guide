import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContentBox from '../ContentBox';
import ContentBoxActions, { SIZE, ALIGNMENT } from '../ContentBoxActions';
import ContentBoxTitle from '../ContentBoxTitle';
import ContentBoxContent from '../ContentBoxContent';
import ContentBoxHeader from '../ContentBoxHeader';
import Button from 'buttons/Button';
import Breadcrumbs from 'breadcrumbs/Breadcrumb';
import Avatar, { SIZE as AVATAR_SIZE } from 'avatar/Avatar';
import LabelDeprecated, { ICON_COLOR, ICON_TYPE } from 'labels-deprecated/LabelDeprecated';
import Rating from 'rating/Rating';
import Text from 'text/Text';
import Link, { LINK_COLOR } from 'text/Link';
import Headline, { HEADLINE_TYPE, HEADLINE_SIZE } from 'text/Headline';
import SeparatorVertical from 'separators/SeparatorVertical';
var link1 = React.createElement(Link, {
  href: "#",
  color: LINK_COLOR.GRAY
}, "Math");
var link2 = React.createElement(Link, {
  href: "#",
  color: LINK_COLOR.GRAY
}, "10 pts");
var link3 = React.createElement(Link, {
  href: "#",
  color: LINK_COLOR.GRAY
}, "2 min ago");
var breadcrumbs = [link1, link2, link3];
var breadcrumbsSpaced = [React.createElement(Link, {
  key: 1,
  color: LINK_COLOR.GRAY
}, "Katie"), React.createElement(Link, {
  key: 2,
  href: "#",
  color: LINK_COLOR.GRAY
}, "Answerer")];
var breadcrumbsSpaced2 = [React.createElement(Link, {
  key: 1
}, "Comments (9)"), React.createElement(Link, {
  key: 2,
  href: "#"
}, "Report")];
var spacedBottomOptions = React.createElement("div", null, React.createElement(Text, null, "Options:"), React.createElement("ul", null, React.createElement("li", null, "spaced-top"), React.createElement("li", null, "spaced-top-small"), React.createElement("li", null, "spaced-top-xsmall"), React.createElement("li", null, "spaced-top-xxsmall"), React.createElement("li", null, "spaced-top-large"), React.createElement("li", null, "spaced-top-xlarge"), React.createElement("li", null, "spaced-top-xxlarge")));
var spacedTopOptions = React.createElement("div", null, React.createElement(Text, null, "Options:"), React.createElement("ul", null, React.createElement("li", null, "spaced-top"), React.createElement("li", null, "spaced-top-small"), React.createElement("li", null, "spaced-top-xsmall"), React.createElement("li", null, "spaced-top-xxsmall"), React.createElement("li", null, "spaced-top-large"), React.createElement("li", null, "spaced-top-xlarge"), React.createElement("li", null, "spaced-top-xxlarge")));
var examplePart1 = React.createElement(ContentBox, null, React.createElement(ContentBoxTitle, null, React.createElement(Headline, {
  type: HEADLINE_TYPE.H2
}, "This is a title for context box")), React.createElement(ContentBoxActions, null, React.createElement(Button, null, "Search!")), React.createElement(ContentBoxContent, null, React.createElement(Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet. Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem vel eros.")), React.createElement(ContentBoxActions, null, React.createElement(Avatar, {
  imgSrc: "https://source.unsplash.com/64x64/?dog"
}), React.createElement(SeparatorVertical, null), React.createElement(Avatar, {
  size: AVATAR_SIZE.SMALL,
  imgSrc: "https://source.unsplash.com/64x64/?dog"
}), React.createElement(Avatar, {
  size: AVATAR_SIZE.SMALL
}), React.createElement(Button, {
  type: "primary-inverted"
}, "Answer")));
var examplePart2 = React.createElement(ContentBox, null, React.createElement(ContentBoxTitle, null, React.createElement(Headline, {
  type: HEADLINE_TYPE.H2
}, "This is a title for context box")), React.createElement(ContentBoxActions, null, React.createElement(Button, null, "Search!")), React.createElement(ContentBoxContent, null, React.createElement(Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet. Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem vel eros.")), React.createElement(ContentBoxActions, null, React.createElement(Avatar, {
  imgSrc: "https://source.unsplash.com/64x64/?bird"
}), React.createElement(SeparatorVertical, null), React.createElement(Avatar, {
  size: AVATAR_SIZE.SMALL,
  imgSrc: "https://source.unsplash.com/64x64/?bird"
}), React.createElement(Avatar, {
  size: AVATAR_SIZE.SMALL
}), React.createElement(Button, {
  type: "primary-inverted"
}, "Answer")));

var ContentBoxes = function ContentBoxes() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Simple with header"
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxHeader, null, React.createElement(Breadcrumbs, {
    elements: breadcrumbs
  })), React.createElement(ContentBoxContent, null, React.createElement(Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet. Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem vel eros.")), React.createElement(ContentBoxActions, null, React.createElement(Avatar, {
    imgSrc: "https://source.unsplash.com/64x64/?man"
  }), React.createElement(SeparatorVertical, null), React.createElement(Avatar, {
    size: AVATAR_SIZE.SMALL,
    imgSrc: "https://source.unsplash.com/64x64/?cat"
  }), React.createElement(Avatar, {
    size: AVATAR_SIZE.SMALL
  }), React.createElement(Button, {
    type: "primary-inverted"
  }, "Answer")))), React.createElement(DocsBlock, {
    info: "Simple with title"
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxTitle, null, React.createElement(Headline, {
    type: HEADLINE_TYPE.H2
  }, "This is a title for context box")), React.createElement(ContentBoxContent, null, React.createElement(Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet. Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem vel eros.")), React.createElement(ContentBoxActions, null, React.createElement(Avatar, {
    imgSrc: "https://source.unsplash.com/64x64/?dog"
  }), React.createElement(SeparatorVertical, null), React.createElement(Avatar, {
    size: AVATAR_SIZE.SMALL,
    imgSrc: "https://source.unsplash.com/64x64/?bird"
  }), React.createElement(Avatar, {
    size: AVATAR_SIZE.SMALL
  }), React.createElement(Button, {
    type: "primary-inverted"
  }, "Answer")))), React.createElement(DocsBlock, {
    info: "Simple with title and header"
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxTitle, null, React.createElement(Headline, {
    type: HEADLINE_TYPE.H2
  }, "This is a title for context box")), React.createElement(ContentBoxHeader, null, React.createElement(Breadcrumbs, {
    elements: breadcrumbs
  })), React.createElement(ContentBoxContent, null, React.createElement(Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet. Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem vel eros.")), React.createElement(ContentBoxActions, null, React.createElement(Avatar, {
    imgSrc: "https://source.unsplash.com/64x64/?cat"
  }), React.createElement(SeparatorVertical, null), React.createElement(Avatar, {
    size: AVATAR_SIZE.SMALL,
    imgSrc: "https://source.unsplash.com/64x64/?bird"
  }), React.createElement(Avatar, {
    size: AVATAR_SIZE.SMALL
  }), React.createElement(Button, {
    type: "primary-inverted"
  }, "Answer")))), React.createElement(DocsBlock, {
    info: "Simple with title and header (spaced)"
  }, React.createElement(ContentBox, {
    spaced: true
  }, React.createElement(ContentBoxTitle, {
    spaced: true
  }, React.createElement(Headline, {
    type: HEADLINE_TYPE.H2
  }, "This is a title for context box")), React.createElement(ContentBoxHeader, {
    spaced: true
  }, React.createElement(Breadcrumbs, {
    elements: breadcrumbs
  })), React.createElement(ContentBoxContent, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet. Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem vel eros."), React.createElement(ContentBoxActions, null, React.createElement(Avatar, {
    imgSrc: "https://source.unsplash.com/64x64/?lion"
  }), React.createElement(SeparatorVertical, null), React.createElement(Avatar, {
    size: AVATAR_SIZE.SMALL,
    imgSrc: "https://source.unsplash.com/64x64/?kitten"
  }), React.createElement(Avatar, {
    size: AVATAR_SIZE.SMALL
  }), React.createElement(Button, {
    type: "primary-inverted"
  }, "Answer")))), React.createElement(DocsBlock, {
    info: "Simple with title and header (spaced small)"
  }, React.createElement(ContentBox, {
    spaced: true
  }, React.createElement(ContentBoxTitle, {
    spacedSmall: true
  }, React.createElement(Headline, {
    type: HEADLINE_TYPE.H2
  }, "This is a title for context box")), React.createElement(ContentBoxHeader, {
    spacedSmall: true
  }, React.createElement(Breadcrumbs, {
    elements: breadcrumbs
  })), React.createElement(ContentBoxContent, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet. Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem vel eros."), React.createElement(ContentBoxActions, null, React.createElement(Avatar, {
    imgSrc: "https://source.unsplash.com/64x64/?lion"
  }), React.createElement(SeparatorVertical, null), React.createElement(Avatar, {
    size: AVATAR_SIZE.SMALL,
    imgSrc: "https://source.unsplash.com/64x64/?kitten"
  }), React.createElement(Avatar, {
    size: AVATAR_SIZE.SMALL
  }), React.createElement(Button, {
    type: "primary-inverted"
  }, "Answer")))), React.createElement(DocsBlock, {
    info: "Simple with content (full)"
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxContent, {
    full: true
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet. Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem vel eros."))), React.createElement(DocsBlock, {
    info: "Simple with title and actions",
    multiContent: [examplePart1, examplePart2]
  }), React.createElement(DocsBlock, {
    info: "Spaced"
  }, React.createElement(ContentBox, {
    spaced: true
  }, React.createElement(ContentBoxHeader, null, React.createElement(Avatar, {
    spaced: true,
    imgSrc: "https://source.unsplash.com/64x64/?woman"
  }), React.createElement(Breadcrumbs, {
    elements: breadcrumbsSpaced
  })), React.createElement(ContentBoxContent, null, React.createElement(Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet. Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem vel eros. Maecenas posuere sit amet urna quis faucibus. Maecenas a lorem mi. Morbi interdum tincidunt neque, nec mollis nulla tincidunt ac. Suspendisse potenti.")), React.createElement(ContentBoxActions, null, React.createElement(Breadcrumbs, {
    elements: breadcrumbsSpaced2
  }), React.createElement(Button, {
    type: "primary-inverted"
  }, React.createElement(LabelDeprecated, {
    text: "Thank you",
    number: 21,
    iconType: ICON_TYPE.HEART,
    iconColor: ICON_COLOR.ADAPTIVE,
    secondary: true,
    unstyled: true
  })), React.createElement(Rating, {
    rate: 2,
    counter: 34,
    active: true
  })))), React.createElement(DocsBlock, {
    info: "Spaced small"
  }, React.createElement(ContentBox, {
    spacedSmall: true
  }, React.createElement(ContentBoxHeader, null, React.createElement(Avatar, {
    spaced: true,
    imgSrc: "https://source.unsplash.com/64x64/?woman"
  }), React.createElement(Breadcrumbs, {
    elements: breadcrumbsSpaced
  })), React.createElement(ContentBoxContent, null, React.createElement(Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet. Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem vel eros. Maecenas posuere sit amet urna quis faucibus. Maecenas a lorem mi. Morbi interdum tincidunt neque, nec mollis nulla tincidunt ac. Suspendisse potenti.")), React.createElement(ContentBoxActions, null, React.createElement(Breadcrumbs, {
    elements: breadcrumbsSpaced2
  }), React.createElement(Button, {
    type: "primary-inverted"
  }, React.createElement(LabelDeprecated, {
    text: "Thank you",
    number: 21,
    iconType: ICON_TYPE.HEART,
    iconColor: ICON_COLOR.ADAPTIVE,
    secondary: true,
    unstyled: true
  })), React.createElement(Rating, {
    rate: 2,
    counter: 34,
    active: true
  })))), React.createElement(DocsBlock, {
    info: "Spaced-bottom elements inside",
    additionalInfo: spacedBottomOptions
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxTitle, {
    spacedBottom: SIZE.XLARGE
  }, React.createElement(Headline, {
    type: HEADLINE_TYPE.H2
  }, "This is a title for context box")), React.createElement(ContentBoxContent, {
    spacedBottom: SIZE.XLARGE
  }, React.createElement(Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt lorem quis, gravida ex.")), React.createElement(ContentBoxActions, {
    spacedBottom: SIZE.XLARGE
  }, "Action elements"))), React.createElement(DocsBlock, {
    info: "Spaced-top elements inside",
    additionalInfo: spacedTopOptions
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxTitle, {
    spacedTop: SIZE.XLARGE
  }, React.createElement(Headline, {
    type: HEADLINE_TYPE.H2
  }, "This is a title for context box")), React.createElement(ContentBoxContent, {
    spacedTop: SIZE.XLARGE
  }, React.createElement(Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt lorem quis, gravida ex.")), React.createElement(ContentBoxActions, {
    spacedTop: SIZE.XLARGE
  }, "Action elements"))), React.createElement(DocsBlock, {
    info: "Centered elements inside"
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxTitle, {
    align: ALIGNMENT.CENTER
  }, React.createElement(Headline, {
    type: HEADLINE_TYPE.H2
  }, "This is a title for context box")), React.createElement(ContentBoxContent, {
    align: ALIGNMENT.CENTER
  }, React.createElement(Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt lorem quis, gravida ex.")), React.createElement(ContentBoxActions, {
    align: ALIGNMENT.CENTER
  }, React.createElement(Breadcrumbs, {
    elements: [React.createElement(Link, {
      key: 1,
      href: "#"
    }, "Comments (9)"), React.createElement(Link, {
      key: 2,
      href: "#"
    }, "Report")]
  }), React.createElement(Button, {
    type: "primary-inverted"
  }, React.createElement(LabelDeprecated, {
    text: "Thank you",
    number: 21,
    iconType: ICON_TYPE.HEART,
    iconColor: ICON_COLOR.ADAPTIVE,
    secondary: true,
    unstyled: true
  })), React.createElement(Rating, {
    rate: 3,
    counter: 34,
    active: true
  })))), React.createElement(DocsBlock, {
    info: "Actions with elements moved to right"
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxActions, {
    align: ALIGNMENT.RIGHT
  }, React.createElement(Breadcrumbs, {
    elements: breadcrumbsSpaced2
  }), React.createElement(Button, {
    type: "primary-inverted"
  }, React.createElement(LabelDeprecated, {
    text: "Thank you",
    number: 21,
    iconType: ICON_TYPE.HEART,
    iconColor: ICON_COLOR.ADAPTIVE,
    secondary: true,
    unstyled: true
  })), React.createElement(Rating, {
    rate: 3,
    counter: 34,
    active: true
  })))), React.createElement(DocsBlock, {
    info: "Example usage"
  }, React.createElement(ContentBox, {
    spaced: true
  }, React.createElement(ContentBoxHeader, null, React.createElement(Avatar, {
    imgSrc: "https://source.unsplash.com/64x64/?man"
  }), React.createElement(Breadcrumbs, {
    elements: ['The Brain', 'Answerer']
  })), React.createElement(ContentBoxContent, null, React.createElement(Headline, {
    size: HEADLINE_SIZE.SMALL
  }, "Hey! Still not sure about the answer?"), React.createElement(Button, {
    type: "primary-blue"
  }, "Check similar answers")))));
};

export default ContentBoxes;