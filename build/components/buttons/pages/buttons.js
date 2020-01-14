import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import React from 'react';
import hex from '../../colors/hex';
import Button, { BUTTON_TYPE } from '../Button';
import DocsBlock from 'components/DocsBlock';
import Flex from '../../flex/Flex';
import Icon, { TYPE as iconTypes } from 'icons/Icon';
import Text from '../../text/Text';

function getValues(object) {
  var addUndefined = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return addUndefined ? [undefined].concat(_toConsumableArray(Object.values(object))) : Object.values(object);
}

var getIconColor = function getIconColor(type) {
  if (type === 'primary-inverted' || type === 'secondary' || type === 'destructive' || type === 'link-button' || type === 'warning') {
    return 'dark';
  } else if (type === 'link-button-peach') {
    return 'peach';
  } else if (type === 'link-button-mustard') {
    return 'mustard';
  } else {
    return 'light';
  }
};

var Buttons = function Buttons() {
  var buttonsVariants = [];
  var buttonsText = 'Button';
  getValues(BUTTON_TYPE, false).forEach(function (type) {
    var iconColor = getIconColor(type);
    buttonsVariants.push(React.createElement(DocsBlock, {
      centered: true,
      fullWidth: true
    }, React.createElement(Flex, {
      fullWidth: true,
      style: {
        backgroundColor: type === 'link-button-inverted' ? hex.graySecondary : null,
        paddingTop: type === 'link-button-inverted' ? '10px' : null
      }
    }, React.createElement(DocsBlock, {
      evenColumns: true,
      justified: true
    }, React.createElement(Text, null, type)), React.createElement(DocsBlock, {
      evenColumns: true,
      justified: true
    }, React.createElement(Button, {
      type: type
    }, buttonsText)), React.createElement(DocsBlock, {
      evenColumns: true,
      justified: true
    }, React.createElement(Button, {
      type: type,
      className: "docs-button-hovered--".concat(type)
    }, buttonsText)), React.createElement(DocsBlock, {
      evenColumns: true,
      justified: true
    }, React.createElement(Button, {
      type: type,
      disabled: true
    }, buttonsText)), React.createElement(DocsBlock, {
      evenColumns: true,
      justified: true
    }, React.createElement(Button, {
      type: type,
      icon: React.createElement(Icon, {
        type: iconTypes.ANSWER,
        color: iconColor,
        size: 24
      })
    }, buttonsText)))));
  });
  return React.createElement(DocsBlock, null, React.createElement(DocsBlock, {
    centered: true,
    fullWidth: true
  }, React.createElement(DocsBlock, {
    evenColumns: true,
    justified: true
  }, React.createElement(Text, {
    weight: "bold"
  }, "type / state ")), React.createElement(DocsBlock, {
    evenColumns: true,
    justified: true
  }, React.createElement(Text, null, "default")), React.createElement(DocsBlock, {
    evenColumns: true,
    justified: true
  }, React.createElement(Text, null, "hover")), React.createElement(DocsBlock, {
    evenColumns: true,
    justified: true
  }, React.createElement(Text, null, "disabled")), React.createElement(DocsBlock, {
    evenColumns: true,
    justified: true
  }, React.createElement(Text, null, "with icon"))), buttonsVariants, React.createElement(DocsBlock, {
    info: "Buttons sizes"
  }, React.createElement(Button, {
    size: "large",
    type: "facebook",
    icon: React.createElement(Icon, {
      type: iconTypes.FACEBOOK,
      color: "light",
      size: 32
    })
  }, buttonsText), "\xA0", React.createElement(Button, {
    type: "facebook",
    icon: React.createElement(Icon, {
      type: iconTypes.FACEBOOK,
      color: "light",
      size: 24
    })
  }, buttonsText), "\xA0", React.createElement(Button, {
    size: "small",
    type: "facebook",
    icon: React.createElement(Icon, {
      type: iconTypes.FACEBOOK,
      color: "light",
      size: 16
    })
  }, buttonsText)));
};

export default Buttons;