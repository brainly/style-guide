import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import generateJSX from './JSXGenerator';
import DocsActiveBlockSettings from './DocsActiveBlockSettings';
import ComponentSettings from './ComponentSettings';
import CodeBlock from './CodeBlock';
import DocsBlock from './DocsBlock';
import { renderToStaticMarkup } from 'react-dom/server.browser';
import classnames from 'classnames';
var BACKGROUND_COLOR = {
  LIGHT: 'light',
  DARK: 'dark',
  NONE: 'none'
};

var DocsActiveBlock =
/*#__PURE__*/
function (_Component) {
  _inherits(DocsActiveBlock, _Component);

  function DocsActiveBlock(_props) {
    var _this;

    _classCallCheck(this, DocsActiveBlock);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DocsActiveBlock).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "setProps", function (key, value) {
      // eslint-disable-next-line react/no-access-state-in-setstate
      var props = _this.state.props;
      props[key] = value;

      _this.setState({
        props: props
      });

      _this.remountComponent();
    });

    _defineProperty(_assertThisInitialized(_this), "settingsChanged", function (setting, value) {
      _this.setState(_defineProperty({}, setting, value));
    });

    var componentProps = {};

    if (_this.props.children) {
      componentProps = _this.props.children.props;
      componentProps = Object.keys(componentProps).filter(function (key) {
        return componentProps.hasOwnProperty(key) && key !== 'children';
      }) //eslint-disable-line no-prototype-builtins
      .reduce(function (result, key) {
        result[key] = componentProps[key];
        return result;
      }, {
        key: 'component'
      });
    }

    _this.state = {
      showCode: null,
      changeBackground: _this.props.backgroundColor || BACKGROUND_COLOR.LIGHT,
      props: componentProps,
      renderNormally: true
    };
    return _this;
  }

  _createClass(DocsActiveBlock, [{
    key: "isPropRequired",
    value: function isPropRequired(propName) {
      var settings = this.props.settings;

      if (Array.isArray(settings)) {
        var propSettings = settings.find(function (propSettings) {
          return propSettings.name === propName;
        });
        return propSettings && propSettings.required;
      }

      return false;
    }
    /**
     * Returns only props that are required or have non-default values.
     *
     * @returns {Object} object representing react props
     */

  }, {
    key: "getCleanProps",
    value: function getCleanProps() {
      var _this2 = this;

      var component = this.props.children;

      if (typeof component.type === 'function') {
        var fakeComponentClass = component.type.bind(); // rewrite static properties

        Object.entries(component.type).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          return fakeComponentClass[key] = value;
        });
        fakeComponentClass.propTypes = {};
      }

      var props = Object.assign({}, component.props, this.state.props);
      var originalComponent = React.cloneElement(component, props);
      var originalHTML = renderToStaticMarkup(originalComponent);
      Object.keys(this.state.props).forEach(function (key) {
        if (key === 'key' || key === 'children' || props[key] === undefined || _this2.isPropRequired(key)) {
          return;
        }

        var inputPropsWithoutAProp = Object.assign({}, props, _defineProperty({}, key, undefined));
        var componentWithoutAProp = React.cloneElement(component, inputPropsWithoutAProp);
        var withoutPropHTML = renderToStaticMarkup(componentWithoutAProp);

        if (originalHTML === withoutPropHTML) {
          props[key] = undefined;
        }
      });
      return props;
    }
  }, {
    key: "remountComponent",
    value: function remountComponent() {
      var _this3 = this;

      this.setState({
        renderNormally: false
      }, function () {
        return _this3.setState({
          renderNormally: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          contentBefore = _this$props.contentBefore,
          contentAfter = _this$props.contentAfter;
      var _this$props2 = this.props,
          _this$props2$centered = _this$props2.centeredItems,
          centeredItems = _this$props2$centered === void 0 ? true : _this$props2$centered,
          wrapper = _this$props2.wrapper;
      var component;
      var code;

      if (this.state.renderNormally) {
        component = React.cloneElement(this.props.children, this.getCleanProps());

        if (this.state.showCode === 'jsx') {
          var jsx = generateJSX(component);
          code = React.createElement(DocsBlock, null, React.createElement(CodeBlock, {
            type: "jsx"
          }, jsx));
        } else if (this.state.showCode === 'html') {
          var html = renderToStaticMarkup(component);
          code = React.createElement(DocsBlock, null, React.createElement(CodeBlock, {
            type: "html"
          }, html));
        }
      }

      var blockClass = classnames('docs-active-block', {
        'docs-active-block--gray': this.state.changeBackground === BACKGROUND_COLOR.LIGHT,
        'docs-active-block--dark': this.state.changeBackground === BACKGROUND_COLOR.DARK
      });
      var componentClass = classnames('docs-active-block__component', {
        'docs-active-block__component--centered': centeredItems
      });
      var output = [];

      if (contentBefore) {
        if (React.isValidElement(contentBefore)) {
          contentBefore = React.cloneElement(contentBefore, {
            key: 'before'
          });
        }

        output.push(contentBefore);
      }

      output.push(component);

      if (contentAfter) {
        if (React.isValidElement(contentAfter)) {
          contentAfter = React.cloneElement(contentAfter, {
            key: 'after'
          });
        }

        output.push(contentAfter);
      }

      if (wrapper) {
        output = React.cloneElement(wrapper, {}, output);
      }

      return React.createElement("div", null, React.createElement(DocsBlock, null, React.createElement("div", {
        className: blockClass
      }, React.createElement("div", {
        className: componentClass
      }, output), React.createElement(ComponentSettings, {
        onChange: this.setProps,
        settings: this.props.settings,
        values: this.state.props
      }), React.createElement(DocsActiveBlockSettings, {
        onChange: this.settingsChanged,
        values: this.state
      }))), code);
    }
  }]);

  return DocsActiveBlock;
}(Component);

export default DocsActiveBlock;
export { BACKGROUND_COLOR };