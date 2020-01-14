import React from 'react';
import ContentBox from '../ContentBox';
import ContentBoxActions from '../ContentBoxActions';
import ContentBoxTitle from '../ContentBoxTitle';
import ContentBoxContent from '../ContentBoxContent';
import Button from 'buttons/Button';
import Avatar, { SIZE as AVATAR_SIZE } from 'avatar/Avatar';
import Text from 'text/Text';
import Headline, { HEADLINE_TYPE } from 'text/Headline';
import SeparatorVertical from 'separators/SeparatorVertical';
import DocsActiveBlock from 'components/DocsActiveBlock';

var ContentBoxes = function ContentBoxes() {
  var settings = [{
    name: 'spaced',
    values: Boolean
  }, {
    name: 'spacedSmall',
    values: Boolean
  }, {
    name: 'full',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(ContentBox, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet. Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem vel eros.")), React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxTitle, null, React.createElement(Headline, {
    type: HEADLINE_TYPE.H2
  }, "This is a title for context box")), React.createElement(ContentBoxActions, null, React.createElement(Button, null, "Search!")), React.createElement(ContentBoxContent, null, React.createElement(Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet. Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem vel eros.")), React.createElement(ContentBoxActions, null, React.createElement(Avatar, {
    imgSrc: "https://source.unsplash.com/64x64/?dog"
  }), React.createElement(SeparatorVertical, null), React.createElement(Avatar, {
    size: AVATAR_SIZE.SMALL,
    imgSrc: "https://source.unsplash.com/64x64/?dog"
  }), React.createElement(Button, {
    type: "primary-inverted"
  }, "Answer")))));
};

export default ContentBoxes;