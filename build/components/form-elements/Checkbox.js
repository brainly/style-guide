import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import classNames from 'classnames';
import React, { PureComponent } from 'react';
import generateRandomString from '../../js/generateRandomString';
import Icon from '../icons/Icon';

var Checkbox =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Checkbox, _PureComponent);

  function Checkbox(props) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, props));
    _this.state = {
      id: props.id === undefined || props.id === '' ? generateRandomString() : props.id
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          checked = _this$props.checked,
          className = _this$props.className,
          additionalProps = _objectWithoutProperties(_this$props, ["checked", "className"]);

      var id = this.state.id;
      var checkboxClass = classNames('sg-checkbox', className);
      return React.createElement("div", {
        className: checkboxClass
      }, React.createElement("input", _extends({}, additionalProps, {
        className: "sg-checkbox__element",
        type: "checkbox",
        id: id,
        checked: checked
      })), React.createElement("label", {
        className: "sg-checkbox__ghost",
        htmlFor: id
      }, React.createElement(Icon, {
        type: "check",
        color: "adaptive",
        size: 16
      })));
    }
  }]);

  return Checkbox;
}(PureComponent);

export default Checkbox;