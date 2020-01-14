import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import IconAsButton, { TYPE, ICON_COLOR } from 'icon-as-button/IconAsButton';

var CodeBlock =
/*#__PURE__*/
function (_Component) {
  _inherits(CodeBlock, _Component);

  function CodeBlock() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CodeBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CodeBlock)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "copyButton", void 0);

    _defineProperty(_assertThisInitialized(_this), "copyCode", void 0);

    _defineProperty(_assertThisInitialized(_this), "copyCodeFunction", function (node) {
      _this.copyCode = node;
    });

    _defineProperty(_assertThisInitialized(_this), "copyButtonFunction", function (node) {
      _this.copyButton = node;
    });

    return _this;
  }

  _createClass(CodeBlock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prepareClipboard();
    }
  }, {
    key: "prepareClipboard",
    value: function prepareClipboard() {
      var copyButton = this.copyButton;
      var copyHelperCode = this.copyCode;
      new window.Clipboard(copyButton, {
        target: function target() {
          return copyHelperCode;
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          type = _this$props.type;

      if (typeof children !== 'string') {
        throw new Error('Passed child is not a string.');
      }

      var markup = html_beautify(children, {
        indent_size: 2,
        unformatted: [],
        wrap_line_length: 0
      });

      if (type === 'jsx') {
        //HACK <i> was added to force highlightJS to highlight first tag
        markup = hljs.highlight('jsx', "<i>".concat(markup, "</i>")).value; //Try to clean up <i>

        markup = markup.replace('&lt;i&gt;', '').replace('&lt;/i&gt;', '').replace('<span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>', '');
      } else {
        markup = hljs.highlight(type, markup).value;
      }

      return React.createElement("div", {
        className: "copy-helper copy-helper--wrapped"
      }, React.createElement("pre", {
        className: "copy-helper__code-wrapper"
      }, React.createElement("code", {
        ref: this.copyCodeFunction,
        className: "copy-helper__code hljs",
        dangerouslySetInnerHTML: {
          __html: markup
        }
      })), React.createElement("div", {
        className: "copy-helper__buttons",
        ref: this.copyButtonFunction
      }, React.createElement(IconAsButton, {
        title: "Copy to the clipboard",
        type: TYPE.ANSWER,
        color: ICON_COLOR.DARK
      })));
    }
  }]);

  return CodeBlock;
}(Component);

export default CodeBlock;