import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Headline, { HEADLINE_TYPE, HEADLINE_SIZE, HEADLINE_COLOR, HEADLINE_TRANSFORM, HEADLINE_ALIGN } from '../Headline';
var text = "We've got your back!";
var headlineSizesMap = [{
  type: 'xsmall',
  fontSize: '14px'
}, {
  type: 'small',
  fontSize: '18px'
}, {
  type: 'normal',
  fontSize: '21px'
}, {
  type: 'large',
  fontSize: '28px'
}, {
  type: 'xlarge',
  fontSize: '39px'
}, {
  type: 'xxlarge',
  fontSize: '53px'
}];

function getValues(object) {
  var addUndefined = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return addUndefined ? [undefined].concat(_toConsumableArray(Object.values(object))) : Object.values(object);
}

var Headlines = function Headlines() {
  var standard = [];
  var colorsVariants = [];
  getValues(HEADLINE_SIZE, false).forEach(function (size) {
    [false, true].forEach(function (extraBold) {
      var itemSize;
      headlineSizesMap.map(function (item) {
        return item.type === size ? itemSize = "".concat(item.fontSize) : null;
      });
      standard.push(React.createElement(Headline, {
        type: HEADLINE_TYPE.H2,
        size: size,
        extraBold: extraBold
      }, text, " - ", size, " - ", itemSize));
    });
  });
  getValues(HEADLINE_COLOR, false).forEach(function (color) {
    if (color !== HEADLINE_COLOR.WHITE) {
      colorsVariants.push(React.createElement(Headline, {
        type: HEADLINE_TYPE.H2,
        size: HEADLINE_SIZE.NORMAL,
        color: color
      }, text, " - ", color));
    } else {
      colorsVariants.push(React.createElement(ContrastBox, null, React.createElement(Headline, {
        type: HEADLINE_TYPE.H2,
        size: HEADLINE_SIZE.NORMAL,
        color: color
      }, text, " - ", color)));
    }
  });
  return React.createElement(React.Fragment, null, React.createElement(DocsBlock, {
    info: "Size and weight variant"
  }, standard), React.createElement(DocsBlock, {
    info: "Colors variants"
  }, colorsVariants), React.createElement(DocsBlock, {
    info: "Examples"
  }, React.createElement(Headline, {
    type: HEADLINE_TYPE.H2,
    size: HEADLINE_SIZE.NORMAL,
    transform: HEADLINE_TRANSFORM.CAPITALIZE
  }, text, " - capitalize"), React.createElement(Headline, {
    type: HEADLINE_TYPE.H2,
    size: HEADLINE_SIZE.NORMAL,
    transform: HEADLINE_TRANSFORM.LOWERCASE
  }, text, " - lowercase"), React.createElement(Headline, {
    type: HEADLINE_TYPE.H2,
    size: HEADLINE_SIZE.NORMAL,
    transform: HEADLINE_TRANSFORM.UPPERCASE
  }, text, " - uppercase"), React.createElement("br", null), React.createElement(Headline, {
    type: HEADLINE_TYPE.H2,
    size: HEADLINE_SIZE.NORMAL,
    align: HEADLINE_ALIGN.LEFT
  }, text, " - align left"), React.createElement(Headline, {
    type: HEADLINE_TYPE.H2,
    size: HEADLINE_SIZE.NORMAL,
    align: HEADLINE_ALIGN.CENTER
  }, text, " - align center"), React.createElement(Headline, {
    type: HEADLINE_TYPE.H2,
    size: HEADLINE_SIZE.NORMAL,
    align: HEADLINE_ALIGN.RIGHT
  }, text, " - align right")));
};

export default Headlines;