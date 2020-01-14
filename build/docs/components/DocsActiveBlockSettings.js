import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import ActionList from 'action-list/ActionList';
import Radio from 'form-elements/Radio';
import React from 'react';
import SeparatorVertical from 'separators/SeparatorVertical';
import Text, { TEXT_COLOR, TEXT_SIZE } from 'text/Text';
import generateRandomString from '../../js/generateRandomString';

var DocsActiveBlockSettings =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DocsActiveBlockSettings, _React$Component);

  function DocsActiveBlockSettings() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DocsActiveBlockSettings);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DocsActiveBlockSettings)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onChangeFunc", function (type, value) {
      return _this.props.onChange(type, value);
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeShowNothing", function () {
      return _this.onChangeFunc('showCode', null);
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeShowJSX", function () {
      return _this.onChangeFunc('showCode', 'jsx');
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeShowHTML", function () {
      return _this.onChangeFunc('showCode', 'html');
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeBackgroundDefault", function () {
      return _this.onChangeFunc('changeBackground', null);
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeBackgroundLight", function () {
      return _this.onChangeFunc('changeBackground', 'light');
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeBackgroundDark", function () {
      return _this.onChangeFunc('changeBackground', 'dark');
    });

    return _this;
  }

  _createClass(DocsActiveBlockSettings, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "docs-active-block__settings"
      }, React.createElement(ActionList, null, React.createElement(Text, {
        size: TEXT_SIZE.SMALL,
        color: TEXT_COLOR.GRAY
      }, "Code:", React.createElement("label", {
        className: "docs-active-block__label"
      }, React.createElement(Radio, {
        name: generateRandomString(),
        checked: !this.props.values.showCode,
        onChange: this.onChangeShowNothing
      }), ' ', "none"), React.createElement("label", {
        className: "docs-active-block__label"
      }, React.createElement(Radio, {
        name: generateRandomString(),
        checked: this.props.values.showCode === 'jsx',
        onChange: this.onChangeShowJSX
      }), ' ', "JSX"), React.createElement("label", {
        className: "docs-active-block__label"
      }, React.createElement(Radio, {
        name: generateRandomString(),
        checked: this.props.values.showCode === 'html',
        onChange: this.onChangeShowHTML
      }), ' ', "HTML")), React.createElement(SeparatorVertical, null), React.createElement(Text, {
        size: TEXT_SIZE.SMALL,
        color: TEXT_COLOR.GRAY
      }, "Background:", React.createElement("label", {
        className: "docs-active-block__label"
      }, React.createElement(Radio, {
        name: generateRandomString(),
        checked: !this.props.values.changeBackground,
        onChange: this.onChangeBackgroundDefault
      }), ' ', "none"), React.createElement("label", {
        className: "docs-active-block__label"
      }, React.createElement(Radio, {
        name: generateRandomString(),
        checked: this.props.values.changeBackground === 'light',
        onChange: this.onChangeBackgroundLight
      }), ' ', "light"), React.createElement("label", {
        className: "docs-active-block__label"
      }, React.createElement(Radio, {
        name: generateRandomString(),
        checked: this.props.values.changeBackground === 'dark',
        onChange: this.onChangeBackgroundDark
      }), ' ', "dark"))));
    }
  }]);

  return DocsActiveBlockSettings;
}(React.Component);

export default DocsActiveBlockSettings;