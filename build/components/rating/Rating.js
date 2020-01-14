import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import classnames from 'classnames';
import Star from './subcomponents/Star';
import RateCounter from './subcomponents/RateCounter';
export var RATING_SIZE = {
  NORMAL: 24,
  LARGE: 32
};

var generateArrayRange = function generateArrayRange(range) {
  var array = Array(range);

  for (var i = 0; i < range; i++) {
    array[i] = i;
  }

  return array;
};

/* eslint-disable react/default-props-match-prop-types */
// legacy files without proper flow checks can suffer from this
var Rating =
/*#__PURE__*/
function (_Component) {
  _inherits(Rating, _Component);

  function Rating(props) {
    var _this;

    _classCallCheck(this, Rating);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rating).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "starsOnClickFunctions", []);

    _defineProperty(_assertThisInitialized(_this), "starsMouseEnterFunctions", []);

    _defineProperty(_assertThisInitialized(_this), "onClick", function (index) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          _this$props$active = _this$props.active,
          active = _this$props$active === void 0 ? false : _this$props$active;

      if (!active) {
        return;
      }

      var ratedStarIndex = index + 1;
      onChange(ratedStarIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "onStarMouseEnter", function (index, event) {
      var _this$props2 = _this.props,
          onStarMouseEnter = _this$props2.onStarMouseEnter,
          _this$props2$active = _this$props2.active,
          active = _this$props2$active === void 0 ? false : _this$props2$active;

      if (!active) {
        return;
      }

      onStarMouseEnter(index + 1, event);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function () {
      _this.props.onMouseLeave();
    });

    _this.createStarsOnClickFunctions(_this.props.metricSize);

    _this.createStarsMouseEnterFunctions(_this.props.metricSize);

    return _this;
  }

  _createClass(Rating, [{
    key: "componentWillReciveProps",
    value: function componentWillReciveProps(nextProps) {
      if (this.props.metricSize !== nextProps.metricSize) {
        this.createStarsOnClickFunctions(nextProps.metricSize);
        this.createStarsMouseEnterFunctions(this.props.metricSize);
      }
    }
  }, {
    key: "createStarsOnClickFunctions",
    value: function createStarsOnClickFunctions(metricSize) {
      var _this2 = this;

      this.starsOnClickFunctions = generateArrayRange(metricSize).map(function (rangeIndex) {
        return function () {
          return _this2.onClick(rangeIndex);
        };
      });
    }
  }, {
    key: "createStarsMouseEnterFunctions",
    value: function createStarsMouseEnterFunctions(metricSize) {
      var _this3 = this;

      this.starsMouseEnterFunctions = generateArrayRange(metricSize).map(function (rangeIndex) {
        return function (event) {
          return _this3.onStarMouseEnter(rangeIndex, event);
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props3 = this.props,
          metricSize = _this$props3.metricSize,
          rate = _this$props3.rate,
          _this$props3$size = _this$props3.size,
          size = _this$props3$size === void 0 ? RATING_SIZE.NORMAL : _this$props3$size,
          active = _this$props3.active,
          className = _this$props3.className,
          counterText = _this$props3.counterText,
          activeText = _this$props3.activeText,
          _this$props3$noLabel = _this$props3.noLabel,
          noLabel = _this$props3$noLabel === void 0 ? false : _this$props3$noLabel;
      var ratingClass = classnames('sg-rate-box', {
        'sg-rate-box--large': size === RATING_SIZE.LARGE,
        'sg-rate-box--active': active
      }, className);
      var starsProps = generateArrayRange(metricSize).map(function (rangeIndex) {
        return {
          key: rangeIndex,
          size: size,
          onClick: _this4.starsOnClickFunctions[rangeIndex]
        };
      });
      var rateString = rate.toLocaleString(undefined, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
      });
      return React.createElement("div", {
        className: ratingClass
      }, !noLabel && React.createElement("div", {
        className: "sg-rate-box__rate"
      }, rateString), React.createElement("div", {
        className: "sg-rate-box__stars-container",
        onMouseLeave: this.onMouseLeave
      }, React.createElement("div", {
        className: "sg-rate-box__filled-stars",
        style: {
          width: "".concat(100 * rate / metricSize, "%")
        }
      }, starsProps.map(function (props) {
        return React.createElement(Star, _extends({
          key: props.key
        }, props));
      })), React.createElement("div", {
        className: "sg-rate-box__background-stars"
      }, starsProps.map(function (props) {
        return React.createElement(Star, _extends({
          key: props.key,
          onMouseEnter: _this4.starsMouseEnterFunctions[props.key]
        }, props));
      }))), React.createElement(RateCounter, {
        activeText: activeText,
        counterText: counterText
      }));
    }
  }]);

  return Rating;
}(Component);

_defineProperty(Rating, "defaultProps", {
  onChange: function onChange() {
    return undefined;
  },
  onStarMouseEnter: function onStarMouseEnter() {
    return undefined;
  },
  onMouseLeave: function onMouseLeave() {
    return undefined;
  },
  metricSize: 5,
  rate: 0
});

export default Rating;