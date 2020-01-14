import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import Dropdown from './Dropdown';

/* eslint-disable react/default-props-match-prop-types */
// legacy files without proper flow checks can suffer from this
var DropdownContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownContainer, _Component);

  function DropdownContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentItem: _this.props.currentItem || {},
      label: ''
    });

    _defineProperty(_assertThisInitialized(_this), "onItemClick", function (id) {
      var currentItem = _this.props.items.find(function (item) {
        return item.id === id;
      });

      if (!currentItem || _this.state.currentItem && _this.state.currentItem.id === currentItem.id) {
        return;
      }

      _this.setState({
        currentItem: currentItem,
        label: currentItem.text
      });

      if (_this.props.onChange) {
        _this.props.onChange(id);
      }
    });

    return _this;
  }

  _createClass(DropdownContainer, [{
    key: "getLabel",
    value: function getLabel() {
      return this.state.currentItem.text || this.props.label || '';
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(Dropdown, {
        opened: this.props.isOpened,
        fullWidth: this.props.fullWidth,
        label: this.getLabel(),
        items: this.props.items,
        fixed: this.props.fixed,
        onItemClick: this.onItemClick,
        onClick: this.props.onToggle,
        className: this.props.className
      });
    }
  }]);

  return DropdownContainer;
}(Component);

_defineProperty(DropdownContainer, "defaultProps", {
  items: []
});

export default DropdownContainer;