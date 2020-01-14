import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Text from '../Text';
import Link, { LINK_WEIGHT, LINK_SIZE, LINK_COLOR } from '../Link';
import { TEXT_TYPE, TEXT_SIZE, TEXT_COLOR, TEXT_WEIGHT, TEXT_TRANSFORM, TEXT_ALIGN } from '../textConsts';
var text = "We've got your back!";
var textSizesMap = [{
  type: 'xsmall',
  fontSize: '12px'
}, {
  type: 'small',
  fontSize: '15px'
}, {
  type: 'normal',
  fontSize: '18px'
}, {
  type: 'large',
  fontSize: '24px'
}, {
  type: 'xlarge',
  fontSize: '33px'
}, {
  type: 'xxlarge',
  fontSize: '45px'
}];

function getValues(object) {
  var addUndefined = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return addUndefined ? [undefined].concat(_toConsumableArray(Object.values(object))) : Object.values(object);
}

var TextExamples = function TextExamples() {
  var sizeVariant = [];
  var colorVariant = [];
  var linkcolorVariant = [];
  getValues(TEXT_SIZE, false).forEach(function (size) {
    getValues(TEXT_WEIGHT, false).forEach(function (weight) {
      var itemSize;
      textSizesMap.map(function (item) {
        return item.type === size ? itemSize = "".concat(item.fontSize) : null;
      });
      sizeVariant.push(React.createElement(Text, {
        type: TEXT_TYPE.H2,
        size: size,
        color: TEXT_COLOR.GRAY,
        weight: weight
      }, text, " - ", size, " - ", itemSize));
    });
  });
  getValues(TEXT_COLOR, false).forEach(function (color) {
    if (color === TEXT_COLOR.WHITE) {
      colorVariant.push(React.createElement(ContrastBox, null, React.createElement(Text, {
        type: TEXT_TYPE.H2,
        color: color
      }, text, " - ", color)));
    } else {
      colorVariant.push(React.createElement(Text, {
        type: TEXT_TYPE.H2,
        color: color
      }, text, " - ", color));
    }
  });
  getValues(LINK_COLOR, false).forEach(function (color) {
    if (color !== LINK_COLOR.WHITE) {
      linkcolorVariant.push(React.createElement(React.Fragment, null, React.createElement(Link, {
        href: "#",
        color: color,
        weight: LINK_WEIGHT.BOLD,
        size: LINK_SIZE.LARGE
      }, "link - ", color), React.createElement("br", null)));
    } else {
      React.createElement(ContrastBox, null, React.createElement(React.Fragment, null, React.createElement(Link, {
        href: "#",
        color: LINK_COLOR.WHITE,
        weight: LINK_WEIGHT.BOLD,
        size: LINK_SIZE.LARGE
      }, "link - ", color), React.createElement("br", null)));
    }
  });
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Size and weight variant"
  }, sizeVariant), React.createElement(DocsBlock, {
    info: "Color variant"
  }, colorVariant), React.createElement(DocsBlock, {
    info: "Link options"
  }, React.createElement(Link, {
    href: "#",
    size: LINK_SIZE.LARGE
  }, "link / regular/ standard / xlarge / standard"), React.createElement("br", null), React.createElement(Link, {
    href: "#",
    weight: LINK_WEIGHT.BOLD,
    size: LINK_SIZE.LARGE,
    color: TEXT_COLOR.MINT_DARK,
    underlined: true
  }, "link / bold / mint / xlarge / underlined")), React.createElement(DocsBlock, {
    info: "Link color variants"
  }, linkcolorVariant), React.createElement(DocsBlock, {
    info: "Alignment examples"
  }, React.createElement(Text, {
    align: TEXT_ALIGN.LEFT
  }, "Text aligned to left"), React.createElement(Text, {
    align: TEXT_ALIGN.CENTER
  }, "Text aligned to center"), React.createElement(Text, {
    align: TEXT_ALIGN.RIGHT
  }, "Text aligned to right"), React.createElement(Text, {
    align: TEXT_ALIGN.JUSTIFY
  }, "This text is justified. This text is justified. This text is justified. This text is justified. This text is justified. This text is justified. This text is justified. This text is justified. This text is justified. This text is justified. This text is justified. This text is justified. This text is justified. This text is justified. This text is justified. This text is justified. This text is justified. This text is justified. This text is justified. This text is justified. This text is justified.")), React.createElement(DocsBlock, {
    info: "Transform examples"
  }, React.createElement(Text, {
    transform: TEXT_TRANSFORM.LOWERCASE
  }, "THIS TEXT IS LOWERCASED"), React.createElement(Text, {
    transform: TEXT_TRANSFORM.UPPERCASE
  }, "this text is uppercased"), React.createElement(Text, {
    transform: TEXT_TRANSFORM.CAPITALIZE
  }, "this text capitalized")), React.createElement(DocsBlock, {
    info: "Container and full width"
  }, React.createElement(Text, {
    asContainer: true
  }, "This text is a container - things can be positioned relative to it"), React.createElement("br", null), React.createElement(Text, {
    full: true
  }, "This text takes full width")));
};

export default TextExamples;