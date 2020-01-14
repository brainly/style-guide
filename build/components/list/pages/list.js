import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContentBox from 'content-box/ContentBox';
import ContrastBox from 'components/ContrastBox';
import List from '../List';
import ListItem from '../ListItem';
import ListItemIcon from '../ListItemIcon';
import Icon, { TYPE as ICON_TYPE, ICON_COLOR } from '../../icons/Icon';
import Text, { TEXT_SIZE } from 'text/Text';
import MenuList, { SIZE } from '../MenuList';
var firstString = 'One two three';
var firstStringLong = "".concat(firstString, "This element has icon aligned to the first line ") + "please take a look how cool it is!!";
var secondString = 'Two three four';
var secondStringLong = "".concat(secondString, "This element does not have icon aligned to the first line ") + "but its still cool!";
var thirdString = 'Three four five';
var secondExampleLongest = "".concat(secondStringLong, " Yeah!! Yeah!");
var items = [firstString, secondString, thirdString];
var exampleItems = [firstStringLong, secondStringLong, thirdString];
var exampleSmall = [firstStringLong, secondExampleLongest, thirdString];
var menuItem1 = {
  text: firstString,
  href: '#'
};
var menuItem2 = {
  text: secondString,
  href: '#'
};
var menuItem3 = {
  text: thirdString,
  href: '#'
};
var menuItems = [menuItem1, menuItem2, menuItem3];

var ListItems = function ListItems() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Default with icon ARROW_RIGHT"
  }, React.createElement(ContrastBox, null, React.createElement(List, null, items.map(function (item, index) {
    return React.createElement(ListItem, {
      key: index
    }, React.createElement(ListItemIcon, null, React.createElement(Icon, {
      color: ICON_COLOR.LIGHT,
      type: ICON_TYPE.ARROW_RIGHT,
      size: 18
    })), React.createElement(Text, {
      size: TEXT_SIZE.XLARGE
    }, item));
  })))), React.createElement(DocsBlock, {
    info: "Small list"
  }, React.createElement(ContrastBox, null, React.createElement(List, null, items.map(function (item, index) {
    return React.createElement(ListItem, {
      key: index
    }, React.createElement(ListItemIcon, {
      small: true
    }, React.createElement(Icon, {
      color: ICON_COLOR.LIGHT,
      type: ICON_TYPE.ARROW_RIGHT,
      size: 14
    })), React.createElement(Text, null, item));
  })))), React.createElement(DocsBlock, {
    info: "List with spacings"
  }, React.createElement(ContrastBox, null, React.createElement(List, {
    spaced: true
  }, items.map(function (item, index) {
    return React.createElement(ListItem, {
      key: index
    }, React.createElement(ListItemIcon, null, React.createElement(Icon, {
      color: ICON_COLOR.LIGHT,
      type: ICON_TYPE.ARROW_RIGHT,
      size: 18
    })), React.createElement(Text, {
      size: TEXT_SIZE.XLARGE
    }, item));
  })))), React.createElement(DocsBlock, {
    info: "Example"
  }, React.createElement(ContrastBox, null, React.createElement(List, null, exampleItems.map(function (item, index) {
    return React.createElement(ListItem, {
      key: index
    }, React.createElement(ListItemIcon, null, React.createElement(Icon, {
      color: ICON_COLOR.LIGHT,
      type: ICON_TYPE.ARROW_RIGHT,
      size: 18
    })), React.createElement(Text, {
      size: TEXT_SIZE.XLARGE
    }, item));
  })))), React.createElement(DocsBlock, {
    info: "Example (small text)"
  }, React.createElement(ContrastBox, null, React.createElement(List, null, exampleSmall.map(function (item, index) {
    return React.createElement(ListItem, {
      key: index
    }, React.createElement(ListItemIcon, {
      small: true
    }, React.createElement(Icon, {
      color: ICON_COLOR.LIGHT,
      type: ICON_TYPE.ARROW_RIGHT,
      size: 14
    })), React.createElement(Text, null, item));
  })))), React.createElement(DocsBlock, {
    info: "Menu list"
  }, React.createElement(ContentBox, null, React.createElement(MenuList, {
    items: menuItems
  }))), React.createElement(DocsBlock, {
    info: "Menu list - small"
  }, React.createElement(ContentBox, null, React.createElement(MenuList, {
    items: menuItems,
    size: SIZE.SMALL
  }))), React.createElement(DocsBlock, {
    info: "Menu list - large"
  }, React.createElement(ContentBox, null, React.createElement(MenuList, {
    items: menuItems,
    size: SIZE.LARGE
  }))));
};

export default ListItems;