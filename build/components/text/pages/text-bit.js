import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import React from 'react';
import DocsBlock from 'components/DocsBlock';
import TextBit, { TEXT_BIT_SIZE, TEXT_BIT_COLOR } from '../TextBit';
var text = "We've got your back!";
var textBitSizesMap = [{
  type: 'small',
  fontSize: '24px'
}, {
  type: 'normal',
  fontSize: '40px'
}, {
  type: 'large',
  fontSize: '56px'
}, {
  type: 'xlarge',
  fontSize: '80px'
}];

function getValues(object) {
  var addUndefined = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return addUndefined ? [undefined].concat(_toConsumableArray(Object.values(object))) : Object.values(object);
}

var TextBitExamples = function TextBitExamples() {
  var sizesVariants = [];
  var colorsVariants = [];
  getValues(TEXT_BIT_SIZE, false).forEach(function (size) {
    var itemSize;
    textBitSizesMap.map(function (item) {
      return item.type === size ? itemSize = "".concat(item.fontSize) : null;
    });
    sizesVariants.push(React.createElement(TextBit, {
      size: size,
      color: TEXT_BIT_COLOR.PEACH_PRIMARY
    }, text, " - ", size, " - ", itemSize));
  });
  getValues(TEXT_BIT_COLOR, false).forEach(function (color) {
    colorsVariants.push(React.createElement(TextBit, {
      size: TEXT_BIT_SIZE.NORMAL,
      color: color
    }, text, " - ", color));
  });
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Text bit sizes variants"
  }, sizesVariants), React.createElement(DocsBlock, {
    info: "Text bit color variants"
  }, colorsVariants));
};

export default TextBitExamples;