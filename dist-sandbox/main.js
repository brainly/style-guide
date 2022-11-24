import * as React from 'react';
import { useState, useEffect, useRef, useMemo, useCallback, useReducer, createContext, useContext } from 'react';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var classnames = {exports: {}};

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
} (classnames));

var cx = classnames.exports;

var _excluded$14 = ["children", "toTop", "direction", "align", "noWrap", "className"];

// This component is deprecated
var ActionList = function ActionList(_ref) {
  var _classNames;

  var children = _ref.children,
      toTop = _ref.toTop,
      direction = _ref.direction,
      align = _ref.align,
      noWrap = _ref.noWrap,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$14);

  var actionListClass = cx('sg-actions-list', (_classNames = {}, _defineProperty(_classNames, "sg-actions-list--".concat(String(direction)), direction), _defineProperty(_classNames, "sg-actions-list--".concat(String(align)), align), _defineProperty(_classNames, 'sg-actions-list--to-top', toTop), _defineProperty(_classNames, 'sg-actions-list--no-wrap', noWrap), _classNames), className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: actionListClass
  }), children);
};

var ActionList$1 = ActionList;

var _excluded$13 = ["children", "asContainer", "spacing", "noSpacing", "spaceBellow", "spacedLarge", "noShrink", "grow", "toEnd", "toRight", "stretch", "equalWidth", "hideOverflow", "className"];

var ActionListHole = function ActionListHole(_ref) {
  var _classnames;

  var children = _ref.children,
      asContainer = _ref.asContainer,
      spacing = _ref.spacing,
      noSpacing = _ref.noSpacing,
      spaceBellow = _ref.spaceBellow,
      spacedLarge = _ref.spacedLarge,
      noShrink = _ref.noShrink,
      grow = _ref.grow,
      toEnd = _ref.toEnd,
      toRight = _ref.toRight,
      stretch = _ref.stretch,
      equalWidth = _ref.equalWidth,
      hideOverflow = _ref.hideOverflow,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$13);

  var actionListHoleClass = cx('sg-actions-list__hole', (_classnames = {
    'sg-actions-list__hole--container': asContainer,
    'sg-actions-list__hole--no-spacing': noSpacing,
    'sg-actions-list__hole--space-bellow': spaceBellow
  }, _defineProperty(_classnames, "sg-actions-list__hole--spaced-".concat(String(spacing)), spacing), _defineProperty(_classnames, 'sg-actions-list__hole--spaced-large', spacedLarge), _defineProperty(_classnames, 'sg-actions-list__hole--no-shrink', noShrink), _defineProperty(_classnames, 'sg-actions-list__hole--grow', grow), _defineProperty(_classnames, 'sg-actions-list__hole--to-end', toEnd), _defineProperty(_classnames, 'sg-actions-list__hole--to-right', toRight), _defineProperty(_classnames, 'sg-actions-list__hole--stretch', stretch), _defineProperty(_classnames, 'sg-actions-list__hole--equal-width', equalWidth), _defineProperty(_classnames, 'sg-actions-list__hole--hide-overflow', hideOverflow), _classnames), className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: actionListHoleClass
  }), children);
};

var ActionListHole$1 = ActionListHole;

var __DEV__ = process.env.NODE_ENV !== 'production';

function invariant(condition, message) {
  if (__DEV__) {
    if (condition) {
      return;
    }

    var text = "Warning: ".concat(message);

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

var MEDIA_QUERY = '(prefers-reduced-motion: reduce)';
function useReducedMotion() {
  var supportsMatchMedia = typeof window !== 'undefined' && 'matchMedia' in window;

  var _useState = useState(function () {
    return supportsMatchMedia ? window.matchMedia(MEDIA_QUERY).matches : false;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      matches = _useState2[0],
      setMatch = _useState2[1];

  useEffect(function () {
    if (!supportsMatchMedia) return;
    var mediaQuery = window.matchMedia(MEDIA_QUERY);

    var listener = function listener(mqlEvent) {
      setMatch(mqlEvent.matches);
    };

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', listener);
    } else {
      mediaQuery.addListener(listener);
    }

    return function () {
      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', listener);
      } else {
        mediaQuery.removeListener(listener);
      }
    };
  }, [supportsMatchMedia]);
  return matches;
}

function generateId() {
  return Math.random().toString(36).substring(7);
}

var _excluded$12 = ["color", "size", "type", "children", "tagType", "className", "title", "description"];
var ICON_COLOR$1 = {
  ADAPTIVE: 'adaptive',
  'icon-black': 'icon-black',
  'icon-white': 'icon-white',
  'icon-blue-50': 'icon-blue-50',
  'icon-indigo-50': 'icon-indigo-50',
  'icon-green-50': 'icon-green-50',
  'icon-yellow-50': 'icon-yellow-50',
  'icon-red-50': 'icon-red-50',
  'icon-gray-70': 'icon-gray-70',
  'icon-gray-50': 'icon-gray-50',
  'icon-gray-40': 'icon-gray-40'
};

function generateIdSuffix(type) {
  return "".concat(type, "-").concat(generateId());
}

var Icon$1 = function Icon(_ref) {
  var _classNames;

  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? ICON_COLOR$1['icon-white'] : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      type = _ref.type,
      children = _ref.children,
      _ref$tagType = _ref.tagType,
      tagType = _ref$tagType === void 0 ? 'div' : _ref$tagType,
      className = _ref.className,
      title = _ref.title,
      description = _ref.description,
      props = _objectWithoutProperties(_ref, _excluded$12);

  var iconClass = cx('sg-icon', (_classNames = {}, _defineProperty(_classNames, "sg-icon--".concat(String(color)), color), _defineProperty(_classNames, "sg-icon--x".concat(String(size)), size), _classNames), className);
  var iconType = "#icon-".concat(type);
  var Tag = tagType;
  var idSuffix = generateIdSuffix(type);
  var titleId = "title-".concat(idSuffix);
  var defaultTitle = String(type).replace(/_/g, ' ');
  var descId = "desc-".concat(idSuffix);
  var labelledBy = description ? "".concat(titleId, " ").concat(descId) : titleId;
  var ariaLabel = type ? undefined : [title, description].filter(Boolean).join(', ');
  return /*#__PURE__*/React.createElement(Tag, _extends({}, props, {
    className: iconClass,
    "aria-label": ariaLabel
  }), type ? /*#__PURE__*/React.createElement("svg", {
    className: "sg-icon__svg",
    role: "img",
    "aria-labelledby": labelledBy,
    focusable: "false"
  }, /*#__PURE__*/React.createElement("text", {
    id: titleId,
    hidden: true
  }, title || defaultTitle), description && /*#__PURE__*/React.createElement("desc", {
    id: descId
  }, description), /*#__PURE__*/React.createElement("use", {
    xlinkHref: iconType,
    "aria-hidden": "true"
  })) : children);
};

var Icon$2 = Icon$1;

var _excluded$11 = ["size", "border", "spaced", "imgSrc", "className", "link", "ariaLinkLabel", "alt"];

var _ICON_SIZE$1;
var SIZE$9 = {
  XS: 'xs',
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl',
  XXL: 'xxl'
};
var ICON_SIZE$1 = (_ICON_SIZE$1 = {}, _defineProperty(_ICON_SIZE$1, SIZE$9.XS, 24), _defineProperty(_ICON_SIZE$1, SIZE$9.S, 32), _defineProperty(_ICON_SIZE$1, SIZE$9.M, 40), _defineProperty(_ICON_SIZE$1, SIZE$9.L, 56), _defineProperty(_ICON_SIZE$1, SIZE$9.XL, 80), _defineProperty(_ICON_SIZE$1, SIZE$9.XXL, 104), _ICON_SIZE$1);

var Avatar = function Avatar(_ref) {
  var _classNames;

  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE$9.S : _ref$size,
      _ref$border = _ref.border,
      border = _ref$border === void 0 ? false : _ref$border,
      spaced = _ref.spaced,
      imgSrc = _ref.imgSrc,
      className = _ref.className,
      link = _ref.link,
      ariaLinkLabel = _ref.ariaLinkLabel,
      _ref$alt = _ref.alt,
      alt = _ref$alt === void 0 ? '' : _ref$alt,
      props = _objectWithoutProperties(_ref, _excluded$11);

  var avatarClass = cx('sg-avatar', (_classNames = {}, _defineProperty(_classNames, "sg-avatar--".concat(size), size !== SIZE$9.S), _defineProperty(_classNames, 'sg-avatar--with-border', border), _classNames), className);
  var isImgSrcDefined = imgSrc !== undefined && imgSrc !== null && imgSrc !== '';
  var imageClass = cx('sg-avatar__image', {
    'sg-avatar--spaced': spaced,
    'sg-avatar__image--icon': !isImgSrcDefined
  });

  if (__DEV__) {
    invariant(!(ariaLinkLabel && !link), 'Using `ariaLinkLabel` prop has no effect when `link` prop is not set.');
    invariant(!(alt && !isImgSrcDefined), 'Using `alt` prop has no effect when `imgSrc` prop is not set.');
  }

  var avatarContent = /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: avatarClass
  }), isImgSrcDefined ? /*#__PURE__*/React.createElement("img", {
    className: imageClass,
    src: imgSrc,
    alt: alt
  }) : /*#__PURE__*/React.createElement("div", {
    className: imageClass
  }, /*#__PURE__*/React.createElement(Icon$2, {
    className: "sg-avatar__icon",
    type: "profile",
    color: ICON_COLOR$1['icon-gray-40'],
    size: ICON_SIZE$1[size],
    "aria-hidden": "true"
  })));

  if (link !== undefined && link !== '') {
    return /*#__PURE__*/React.createElement("a", {
      href: link,
      "aria-label": ariaLinkLabel,
      className: "sg-avatar__wrapper-link"
    }, avatarContent);
  }

  return avatarContent;
};

var Avatar$1 = Avatar;

var breakpoints = ['sm', 'md', 'lg', 'xl'];
var responsivePrefixes = ['', 'md', 'lg', 'xl'];
function mergeResponsiveProps(props) {
  // convert to objects
  var propObjects = props.map(function (prop) {
    if (prop === null || prop === undefined) {
      return {};
    } else if (_typeof(prop) !== 'object') {
      return {
        sm: prop,
        md: prop,
        lg: prop,
        xl: prop
      };
    } else if (Array.isArray(prop)) {
      return (prop.length > 4 ? prop.slice(0, 4) : prop).reduce(function (acc, next, index) {
        if (next !== null && next !== undefined) {
          acc[breakpoints[index]] = next;
        }

        return acc;
      }, {});
    } else {
      return _objectSpread2({}, prop);
    }
  }); // fill empty breakpoints when other props have values

  var lastRowValues = [];
  breakpoints.forEach(function (breakpoint) {
    var valueBreakpointExist = propObjects.some(function (propObject) {
      return propObject[breakpoint] !== null && propObject[breakpoint] !== undefined;
    });

    if (valueBreakpointExist) {
      // eslint-disable-next-line no-loop-func
      propObjects.forEach(function (propObject, propObjectsIndex) {
        if (lastRowValues[propObjectsIndex] && !propObject[breakpoint]) {
          propObject[breakpoint] = lastRowValues[propObjectsIndex];
        }
      });
    }

    lastRowValues = propObjects.map(function (propObject) {
      return propObject[breakpoint];
    });
  });

  return breakpoints.reduce(function (acc, breakpoint) {
    if (propObjects.every(function (propObject) {
      return propObject[breakpoint] !== null && propObject[breakpoint] !== undefined;
    })) {
      acc[breakpoint] = propObjects.map(function (propObject) {
        return propObject[breakpoint];
      });
    }

    return acc;
  }, {});
}
function generateResponsiveClassNames(createBaseClassName, prop) {
  if (prop === null || prop === undefined) {
    return [];
  }

  if (_typeof(prop) !== 'object') {
    return [createBaseClassName(prop)];
  }

  if (Array.isArray(prop)) {
    return (prop.length > 4 ? prop.slice(0, 4) : prop).reduce(function (acc, propBreakpointValue, index) {
      if (propBreakpointValue === null || propBreakpointValue === undefined) {
        return acc;
      } else if (!createBaseClassName(propBreakpointValue)) {
        return acc;
      } else {
        acc.push("".concat(responsivePrefixes[index] ? "".concat(responsivePrefixes[index], ":") : '').concat(createBaseClassName(propBreakpointValue)));
        return acc;
      }
    }, []);
  }

  return breakpoints.map(function (breakpoint) {
    if (prop[breakpoint] === null || prop[breakpoint] === undefined) {
      return '';
    } else if (!createBaseClassName(prop[breakpoint])) {
      return '';
    } else {
      return breakpoint === 'sm' ? createBaseClassName(prop[breakpoint]) : "".concat(breakpoint, ":").concat(createBaseClassName(prop[breakpoint]));
    }
  }).filter(function (className) {
    return className;
  });
}

var _excluded$10 = ["children", "className", "color", "padding", "border", "borderColor", "noBorderRadius", "shadow"];
var COLOR$2 = {
  transparent: 'transparent',
  white: 'white',
  'gray-40': 'gray-40',
  'gray-20': 'gray-20',
  'gray-10': 'gray-10',
  'blue-40': 'blue-40',
  'blue-30': 'blue-30',
  'blue-20': 'blue-20',
  'green-40': 'green-40',
  'green-30': 'green-30',
  'green-20': 'green-20',
  'green-10': 'green-10',
  'indigo-40': 'indigo-40',
  'indigo-20': 'indigo-20',
  'indigo-10': 'indigo-10',
  'red-40': 'red-40',
  'red-30': 'red-30',
  'red-20': 'red-20',
  'yellow-40': 'yellow-40',
  'yellow-20': 'yellow-20'
};

/**
 * Container for grouping elements. It provides padding, background color, border and shadow.
 *
 * @see react docs: https://styleguide.brainly.com/latest/docs/interactive.html#boxes
 * @see twig-compatible docs: https://styleguide.brainly.com/latest/docs/containers.html#box
 *
 * @example <Box>Text inside Box</Box>
 * @returns {JSX.Element} Box component
 */
var Box = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref2;

  var children = _ref.children,
      className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? COLOR$2.transparent : _ref$color,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? 'm' : _ref$padding,
      _ref$border = _ref.border,
      border = _ref$border === void 0 ? false : _ref$border,
      _ref$borderColor = _ref.borderColor,
      borderColor = _ref$borderColor === void 0 ? COLOR$2['gray-20'] : _ref$borderColor,
      _ref$noBorderRadius = _ref.noBorderRadius,
      noBorderRadius = _ref$noBorderRadius === void 0 ? false : _ref$noBorderRadius,
      _ref$shadow = _ref.shadow,
      shadow = _ref$shadow === void 0 ? false : _ref$shadow,
      props = _objectWithoutProperties(_ref, _excluded$10);

  var classes = cx.apply(void 0, ['sg-box', (_ref2 = {}, _defineProperty(_ref2, "sg-box--".concat(String(color)), color), _defineProperty(_ref2, "sg-box--border-color-".concat(String(borderColor)), border && borderColor), _ref2)].concat(_toConsumableArray(generateResponsiveClassNames(function (shadow) {
    return shadow ? 'sg-box--shadow' : 'sg-box--no-shadow';
  }, shadow)), _toConsumableArray(generateResponsiveClassNames(function (noBorderRadius) {
    return noBorderRadius ? 'sg-box--no-border-radius' : 'sg-box--border-radius';
  }, noBorderRadius)), _toConsumableArray(generateResponsiveClassNames(function (border) {
    return border ? 'sg-box--border' : 'sg-box--no-border';
  }, border)), _toConsumableArray(generateResponsiveClassNames(function (padding) {
    return "sg-box--padding-".concat(String(padding));
  }, padding)), _toConsumableArray(generateResponsiveClassNames(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        padding = _ref4[0],
        border = _ref4[1];

    return padding && border ? "sg-box--padding-".concat(padding, "-border") : '';
  }, mergeResponsiveProps([padding, border]))), _toConsumableArray(generateResponsiveClassNames(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        border = _ref6[0],
        borderColor = _ref6[1];

    return border && borderColor ? "sg-box--border-color-".concat(String(borderColor)) : '';
  }, mergeResponsiveProps([border, borderColor]))), [className]));
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classes,
    ref: ref
  }), children);
});
Box.displayName = 'Box';
var Box$1 = Box;

var _excluded$$ = ["className", "short", "adaptive", "inlineItems", "elements"];

var Breadcrumb = function Breadcrumb(_ref) {
  var className = _ref.className,
      short = _ref.short,
      adaptive = _ref.adaptive,
      inlineItems = _ref.inlineItems,
      _ref$elements = _ref.elements,
      elements = _ref$elements === void 0 ? [] : _ref$elements,
      props = _objectWithoutProperties(_ref, _excluded$$);

  var breadcrumbClass = cx('sg-breadcrumb-list', {
    'sg-breadcrumb-list--short': short,
    'sg-breadcrumb-list--adaptive': adaptive,
    'sg-breadcrumb-list--inline-items': inlineItems
  }, className);
  return /*#__PURE__*/React.createElement("ul", _extends({}, props, {
    className: breadcrumbClass
  }), elements.map(function (elem, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      className: "sg-breadcrumb-list__element"
    }, elem);
  }));
};

var Breadcrumb$1 = Breadcrumb;

var _excluded$_ = ["alignment", "direction", "color", "full", "noShadow", "children", "className"];
var ALIGNMENT$1 = {
  START: 'start',
  CENTER: 'center',
  END: 'end'
};
var DIRECTION = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  BOTTOM: 'bottom'
};
var HORIZONTAL_DIRECTIONS = [DIRECTION.LEFT, DIRECTION.RIGHT];
var BUBBLE_COLOR = {
  white: 'white',
  'gray-40': 'gray-40',
  'gray-20': 'gray-20',
  'blue-40': 'blue-40',
  'blue-30': 'blue-30',
  'blue-20': 'blue-20',
  'indigo-40': 'indigo-40',
  'green-40': 'green-40',
  'green-30': 'green-30',
  'green-20': 'green-20',
  'red-40': 'red-40'
};

var Bubble = function Bubble(_ref) {
  var _classNames;

  var _ref$alignment = _ref.alignment,
      alignment = _ref$alignment === void 0 ? ALIGNMENT$1.CENTER : _ref$alignment,
      direction = _ref.direction,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? BUBBLE_COLOR.white : _ref$color,
      full = _ref.full,
      noShadow = _ref.noShadow,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$_);

  var alignmentClass;

  if (HORIZONTAL_DIRECTIONS.includes(direction)) {
    alignmentClass = "sg-bubble--column-".concat(alignment);
  } else {
    alignmentClass = "sg-bubble--row-".concat(alignment);
  }

  var bubbleClass = cx('sg-bubble', (_classNames = {
    'sg-bubble--full': full,
    'sg-bubble--no-shadow': noShadow
  }, _defineProperty(_classNames, "sg-bubble--".concat(String(color)), color), _defineProperty(_classNames, "sg-bubble--".concat(direction), direction), _defineProperty(_classNames, alignmentClass, alignment !== ALIGNMENT$1.CENTER), _classNames), className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: bubbleClass
  }), children);
};

var Bubble$1 = Bubble;

var _excluded$Z = ["color", "size", "aria-label", "aria-live", "className"];
var SPINNER_SIZE = {
  SMALL: 'small',
  XSMALL: 'xsmall',
  XXSMALL: 'xxsmall'
};
var SPINNER_COLOR = {
  black: 'black',
  white: 'white',
  'indigo-50': 'indigo-50',
  'gray-70': 'gray-70',
  'gray-50': 'gray-50',
  'red-40': 'red-40',
  'red-50': 'red-50',
  'yellow-40': 'yellow-40',
  'blue-40': 'blue-40',
  'blue-60': 'blue-60'
};

var Spinner = function Spinner(_ref) {
  var _classNames;

  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'gray-70' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? SPINNER_SIZE.SMALL : _ref$size,
      _ref$ariaLabel = _ref['aria-label'],
      ariaLabel = _ref$ariaLabel === void 0 ? 'loading' : _ref$ariaLabel,
      _ref$ariaLive = _ref['aria-live'],
      ariaLive = _ref$ariaLive === void 0 ? 'assertive' : _ref$ariaLive,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$Z);

  var spinnerClassNames = cx('sg-spinner', (_classNames = {}, _defineProperty(_classNames, "sg-spinner--".concat(String(color)), color), _defineProperty(_classNames, "sg-spinner--".concat(String(size)), size), _classNames), className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: spinnerClassNames,
    "aria-live": ariaLive,
    role: "status",
    "aria-atomic": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sg-visually-hidden"
  }, ariaLabel));
};

var Spinner$1 = Spinner;

var _excluded$Y = ["size", "variant", "icon", "iconOnly", "reversedOrder", "href", "fullWidth", "disabled", "loading", "toggle", "children", "className", "target", "newTabLabel", "onClick", "aria-label", "loadingAriaLive", "loadingAriaLabel", "type"];

var _SPINNER_SIZE_MAP, _SPINNER_COLOR_MAP;
var BUTTON_SIZE = {
  L: 'l',
  M: 'm',
  S: 's'
};
var BUTTON_VARIANT = {
  SOLID: 'solid',
  SOLID_INVERTED: 'solid-inverted',
  SOLID_INDIGO: 'solid-indigo',
  SOLID_INDIGO_INVERTED: 'solid-indigo-inverted',
  SOLID_LIGHT: 'solid-light',
  OUTLINE: 'outline',
  OUTLINE_INDIGO: 'outline-indigo',
  OUTLINE_INVERTED: 'outline-inverted',
  TRANSPARENT: 'transparent',
  TRANSPARENT_LIGHT: 'transparent-light',
  TRANSPARENT_RED: 'transparent-red',
  TRANSPARENT_INVERTED: 'transparent-inverted',
  FACEBOOK: 'facebook',
  GOOGLE: 'google',
  APPLE: 'apple'
};
var SPINNER_SIZE_MAP = (_SPINNER_SIZE_MAP = {}, _defineProperty(_SPINNER_SIZE_MAP, BUTTON_SIZE.L, SPINNER_SIZE.SMALL), _defineProperty(_SPINNER_SIZE_MAP, BUTTON_SIZE.M, SPINNER_SIZE.XSMALL), _defineProperty(_SPINNER_SIZE_MAP, BUTTON_SIZE.S, SPINNER_SIZE.XXSMALL), _SPINNER_SIZE_MAP);
var SPINNER_COLOR_MAP = (_SPINNER_COLOR_MAP = {}, _defineProperty(_SPINNER_COLOR_MAP, BUTTON_VARIANT.SOLID, SPINNER_COLOR['white']), _defineProperty(_SPINNER_COLOR_MAP, BUTTON_VARIANT.SOLID_INVERTED, SPINNER_COLOR['black']), _defineProperty(_SPINNER_COLOR_MAP, BUTTON_VARIANT.SOLID_INDIGO, SPINNER_COLOR['white']), _defineProperty(_SPINNER_COLOR_MAP, BUTTON_VARIANT.SOLID_INDIGO_INVERTED, SPINNER_COLOR['indigo-50']), _defineProperty(_SPINNER_COLOR_MAP, BUTTON_VARIANT.SOLID_LIGHT, SPINNER_COLOR['black']), _defineProperty(_SPINNER_COLOR_MAP, BUTTON_VARIANT.OUTLINE, SPINNER_COLOR['black']), _defineProperty(_SPINNER_COLOR_MAP, BUTTON_VARIANT.OUTLINE_INDIGO, SPINNER_COLOR['indigo-50']), _defineProperty(_SPINNER_COLOR_MAP, BUTTON_VARIANT.OUTLINE_INVERTED, SPINNER_COLOR['white']), _defineProperty(_SPINNER_COLOR_MAP, BUTTON_VARIANT.TRANSPARENT, SPINNER_COLOR['black']), _defineProperty(_SPINNER_COLOR_MAP, BUTTON_VARIANT.TRANSPARENT_LIGHT, SPINNER_COLOR['gray-50']), _defineProperty(_SPINNER_COLOR_MAP, BUTTON_VARIANT.TRANSPARENT_RED, SPINNER_COLOR['red-50']), _defineProperty(_SPINNER_COLOR_MAP, BUTTON_VARIANT.TRANSPARENT_INVERTED, SPINNER_COLOR['white']), _defineProperty(_SPINNER_COLOR_MAP, BUTTON_VARIANT.FACEBOOK, SPINNER_COLOR['white']), _defineProperty(_SPINNER_COLOR_MAP, BUTTON_VARIANT.GOOGLE, SPINNER_COLOR['black']), _defineProperty(_SPINNER_COLOR_MAP, BUTTON_VARIANT.APPLE, SPINNER_COLOR['white']), _SPINNER_COLOR_MAP);
var TOGGLE_BUTTON_VARIANTS = ['solid-light', 'outline', 'transparent', 'transparent-light'];
var anchorRelatedProps$1 = ['download', 'hreflang', 'ping', 'referrerpolicy', 'rel'];
var Button = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _cx;

  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'm' : _ref$size,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'solid' : _ref$variant,
      icon = _ref.icon,
      iconOnly = _ref.iconOnly,
      reversedOrder = _ref.reversedOrder,
      href = _ref.href,
      fullWidth = _ref.fullWidth,
      disabled = _ref.disabled,
      loading = _ref.loading,
      toggle = _ref.toggle,
      children = _ref.children,
      className = _ref.className,
      target = _ref.target,
      _ref$newTabLabel = _ref.newTabLabel,
      newTabLabel = _ref$newTabLabel === void 0 ? '(opens in a new tab)' : _ref$newTabLabel,
      onClick = _ref.onClick,
      ariaLabel = _ref['aria-label'],
      _ref$loadingAriaLive = _ref.loadingAriaLive,
      loadingAriaLive = _ref$loadingAriaLive === void 0 ? 'off' : _ref$loadingAriaLive,
      loadingAriaLabel = _ref.loadingAriaLabel,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, _excluded$Y);

  var isDisabled = disabled || loading;
  var isLink = !!href;

  if (__DEV__) {
    invariant(!(toggle === 'red' && ![].concat(TOGGLE_BUTTON_VARIANTS, ['transparent-red']).includes(variant) || toggle === 'yellow' && ![].concat(TOGGLE_BUTTON_VARIANTS).includes(variant)), "Value of toggle property '".concat(String(toggle), "' has no effect when button variant is set to '").concat(variant, "'."));
    invariant(!(iconOnly && !icon), "Using 'iconOnly' property has no effect when 'icon' property is not set.");
    invariant(!(reversedOrder && !icon), "Using 'reversedOrder' property has no effect when 'icon' property is not set.");
    invariant(!(iconOnly && reversedOrder), "Using 'reversedOrder' property has no effect when 'iconOnly' property is set.");
    invariant(!(!isLink && (target || Object.keys(props).some(function (p) {
      return anchorRelatedProps$1.includes(p);
    }))), // $FlowFixMe
    "An anchor-related prop is not working when \"href\" is not provided: ".concat(Object.keys(props)));
    invariant(!(isLink && type), '`type` prop is not working when href is provided');
    invariant(!(iconOnly && !ariaLabel), 'Using `iconOnly` without `aria-label` will affect people with visual impairments');
  }

  var btnClass = cx('sg-button', (_cx = {}, _defineProperty(_cx, "sg-button--".concat(String(size)), size), _defineProperty(_cx, "sg-button--".concat(String(variant)), variant), _defineProperty(_cx, 'sg-button--disabled', isDisabled), _defineProperty(_cx, 'sg-button--loading', loading), _defineProperty(_cx, 'sg-button--full-width', fullWidth), _defineProperty(_cx, 'sg-button--icon-only', Boolean(icon) && iconOnly), _defineProperty(_cx, "sg-button--".concat(String(variant), "-toggle-").concat(String(toggle)), toggle), _defineProperty(_cx, 'sg-button--reversed-order', reversedOrder), _cx), className);
  var iconClass = cx('sg-button__icon', _defineProperty({}, "sg-button__icon--".concat(size || ''), size));
  var ico;

  if (icon !== undefined && icon !== null) {
    ico = /*#__PURE__*/React.createElement("span", {
      className: iconClass
    }, icon);
  }

  var onButtonClick = function onButtonClick(e) {
    if (isLink && isDisabled) {
      return;
    }

    return onClick && onClick(e);
  };

  var TagToRender = isLink ? isDisabled ? 'span' : 'a' : 'button';
  return /*#__PURE__*/React.createElement(TagToRender, _extends({}, props, {
    className: btnClass,
    href: href,
    disabled: isDisabled,
    ref: ref,
    target: target,
    "aria-label": ariaLabel,
    onClick: onButtonClick,
    type: type
  }), loading && /*#__PURE__*/React.createElement(Spinner$1, {
    size: SPINNER_SIZE_MAP[size],
    color: SPINNER_COLOR_MAP[variant],
    className: "sg-button__spinner",
    "aria-live": loadingAriaLive,
    "aria-label": loadingAriaLabel
  }), ico, /*#__PURE__*/React.createElement("span", {
    className: "sg-button__text"
  }, children, target === '_blank' && /*#__PURE__*/React.createElement("span", {
    className: "sg-visually-hidden"
  }, newTabLabel)));
});
Button.displayName = 'Button';
var Button$1 = Button;

var _excluded$X = ["label", "children", "href", "className"];

var ButtonRound = function ButtonRound(_ref) {
  var label = _ref.label,
      children = _ref.children,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? '#' : _ref$href,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$X);

  var labelElem;

  if (label !== undefined && label !== null && label !== '') {
    labelElem = /*#__PURE__*/React.createElement("span", {
      className: "sg-button-solid-round__label"
    }, label);
  }

  var buttonClass = cx('sg-button-solid-round', className);
  return /*#__PURE__*/React.createElement("a", _extends({}, props, {
    href: href,
    className: buttonClass
  }), /*#__PURE__*/React.createElement("div", {
    className: "sg-button-solid-round__icon"
  }, children), labelElem);
};

var ButtonRound$1 = ButtonRound;

var _excluded$W = ["children", "full", "vertical", "centered", "padding", "shadow", "noBorder", "transparent", "className"];

var Card = function Card(_ref) {
  var children = _ref.children,
      full = _ref.full,
      vertical = _ref.vertical,
      centered = _ref.centered,
      padding = _ref.padding,
      shadow = _ref.shadow,
      noBorder = _ref.noBorder,
      transparent = _ref.transparent,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$W);

  var cardClass = cx('sg-card', _defineProperty({
    'sg-card--full': full,
    'sg-card--vertical': vertical,
    'sg-card--with-shadow': shadow,
    'sg-card--no-border': noBorder,
    'sg-card--centered': centered,
    'sg-card--transparent': transparent
  }, "sg-card--".concat(String(padding)), padding), className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: cardClass
  }), children);
};

var Card$1 = Card;

var _excluded$V = ["color", "children", "className"];

var CardHole = function CardHole(_ref) {
  var color = _ref.color,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$V);

  var cardHoleClass = cx('sg-card__hole', _defineProperty({}, "sg-card__hole--".concat(String(color)), color), className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: cardHoleClass
  }), children);
};

var CardHole$1 = CardHole;

var SIZE$8 = {
  XXSMALL: 'xxsmall',
  XSMALL: 'xsmall',
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge'
};
var ALIGNMENT = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right'
};

var _excluded$U = ["children", "spacedTop", "spacedBottom", "spaced", "spacedSmall", "full", "className"];

// This component is deprecated
var ContentBox = function ContentBox(_ref) {
  var _classNames;

  var children = _ref.children,
      spacedTop = _ref.spacedTop,
      spacedBottom = _ref.spacedBottom,
      spaced = _ref.spaced,
      spacedSmall = _ref.spacedSmall,
      full = _ref.full,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$U);

  var contentBoxClass = cx('sg-content-box', (_classNames = {
    'sg-content-box--spaced': spaced,
    'sg-content-box--spaced-small': spacedSmall,
    'sg-content-box--full': full,
    'sg-content-box--spaced-top': spacedTop === SIZE$8.NORMAL
  }, _defineProperty(_classNames, "sg-content-box--spaced-top-".concat(spacedTop || ''), spacedTop && spacedTop !== SIZE$8.NORMAL), _defineProperty(_classNames, 'sg-content-box--spaced-bottom', spacedBottom === SIZE$8.NORMAL), _defineProperty(_classNames, "sg-content-box--spaced-bottom-".concat(spacedBottom || ''), spacedBottom && spacedBottom !== SIZE$8.NORMAL), _classNames), className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: contentBoxClass
  }), children);
};

var ContentBox$1 = ContentBox;

var TEXT_TYPE = {
  SPAN: 'span',
  P: 'p',
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  DIV: 'div',
  LABEL: 'label',
  LINK: 'a',
  BLOCKQUOTE: 'blockquote',
  Q: 'q',
  STRONG: 'strong',
  EM: 'em',
  DEL: 'del',
  INS: 'ins'
};

var TEXT_COLOR = {
  'text-black': 'text-black',
  'text-white': 'text-white',
  'text-gray-70': 'text-gray-70',
  'text-gray-60': 'text-gray-60',
  'text-gray-50': 'text-gray-50',
  'text-gray-40': 'text-gray-40',
  'text-blue-60': 'text-blue-60',
  'text-blue-40': 'text-blue-40',
  'text-green-60': 'text-green-60',
  'text-green-40': 'text-green-40',
  'text-indigo-60': 'text-indigo-60',
  'text-indigo-40': 'text-indigo-40',
  'text-red-60': 'text-red-60',
  'text-red-40': 'text-red-40',
  'text-yellow-60': 'text-yellow-60',
  'text-yellow-40': 'text-yellow-40'
};
var TEXT_WHITE_SPACE = {
  PRE_WRAP: 'pre-wrap',
  PRE_LINE: 'pre-line',
  NORMAL: 'normal'
};

var _excluded$T = ["children", "type", "size", "weight", "color", "transform", "align", "noWrap", "asContainer", "full", "breakWords", "whiteSpace", "className", "inherited"];

var Text = function Text(_ref) {
  var _ref2;

  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? TEXT_TYPE.DIV : _ref$type,
      size = _ref.size,
      weight = _ref.weight,
      color = _ref.color,
      transform = _ref.transform,
      align = _ref.align,
      noWrap = _ref.noWrap,
      asContainer = _ref.asContainer,
      full = _ref.full,
      breakWords = _ref.breakWords,
      whiteSpace = _ref.whiteSpace,
      className = _ref.className,
      _ref$inherited = _ref.inherited,
      inherited = _ref$inherited === void 0 ? false : _ref$inherited,
      props = _objectWithoutProperties(_ref, _excluded$T);

  var Type = type;
  var textClass = cx.apply(void 0, ['sg-text', (_ref2 = {
    'sg-text--inherited': inherited
  }, _defineProperty(_ref2, "sg-text--".concat(String(color)), color), _defineProperty(_ref2, 'sg-text--container', asContainer), _defineProperty(_ref2, 'sg-text--bold', type === 'strong'), _ref2)].concat(_toConsumableArray(generateResponsiveClassNames(function (size) {
    return "sg-text--".concat(size);
  }, size)), _toConsumableArray(generateResponsiveClassNames(function (weight) {
    return "sg-text--".concat(weight);
  }, weight)), _toConsumableArray(generateResponsiveClassNames(function (transform) {
    return "sg-text--".concat(transform);
  }, transform)), _toConsumableArray(generateResponsiveClassNames(function (align) {
    return "sg-text--".concat(align);
  }, align)), _toConsumableArray(generateResponsiveClassNames(function (noWrap) {
    return noWrap ? "sg-text--no-wrap" : 'sg-text--wrap';
  }, noWrap)), _toConsumableArray(generateResponsiveClassNames(function (full) {
    return full ? "sg-text--full" : 'sg-text--auto';
  }, full)), _toConsumableArray(generateResponsiveClassNames(function (breakWords) {
    return breakWords ? 'sg-text--break-words' : 'sg-text--word-break-normal';
  }, breakWords)), _toConsumableArray(generateResponsiveClassNames(function (whiteSpace) {
    if (whiteSpace === TEXT_WHITE_SPACE.PRE_WRAP) {
      return 'sg-text--pre-wrap';
    } else if (whiteSpace === TEXT_WHITE_SPACE.PRE_LINE) {
      return 'sg-text--pre-line';
    } else {
      return 'sg-text--white-space-normal';
    }
  }, whiteSpace)), [className]));
  return /*#__PURE__*/React.createElement(Type, _extends({}, props, {
    className: textClass
  }), children);
};

var Text$1 = Text;

var FLEX_DIRECTION = {
  COLUMN: 'column',
  COLUMN_REVERSE: 'column-reverse',
  ROW: 'row',
  ROW_REVERSE: 'row-reverse'
};

var _excluded$S = ["htmlTag", "fullWidth", "fullHeight", "noShrink", "inlineFlex", "alignItems", "alignContent", "justifyContent", "wrap", "wrapReverse", "alignSelf", "direction", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight", "children", "className"];
var Flex = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$htmlTag = props.htmlTag,
      Container = _props$htmlTag === void 0 ? 'div' : _props$htmlTag,
      fullWidth = props.fullWidth,
      fullHeight = props.fullHeight,
      noShrink = props.noShrink,
      inlineFlex = props.inlineFlex,
      alignItems = props.alignItems,
      alignContent = props.alignContent,
      justifyContent = props.justifyContent,
      wrap = props.wrap,
      wrapReverse = props.wrapReverse,
      alignSelf = props.alignSelf,
      direction = props.direction,
      margin = props.margin,
      marginTop = props.marginTop,
      marginBottom = props.marginBottom,
      marginLeft = props.marginLeft,
      marginRight = props.marginRight,
      children = props.children,
      className = props.className,
      otherProps = _objectWithoutProperties(props, _excluded$S);

  var flexClass = cx.apply(void 0, ['sg-flex'].concat(_toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return propValue === true ? "sg-flex--full-width" : "sg-flex--auto-width";
  }, fullWidth)), _toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return propValue === true ? "sg-flex--full-height" : "sg-flex--auto-height";
  }, fullHeight)), _toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return propValue === true ? "sg-flex--no-shrink" : "sg-flex--shrink-1";
  }, noShrink)), _toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return propValue === true ? "sg-flex--inline" : "sg-flex--flex";
  }, inlineFlex)), _toConsumableArray(generateResponsiveClassNames(function (direction) {
    if (direction === FLEX_DIRECTION.COLUMN) {
      return 'sg-flex--column';
    } else if (direction === FLEX_DIRECTION.COLUMN_REVERSE) {
      return 'sg-flex--column-reverse';
    } else if (direction === FLEX_DIRECTION.ROW) {
      return 'sg-flex--row';
    } else if (direction === FLEX_DIRECTION.ROW_REVERSE) {
      return 'sg-flex--row-reverse';
    } else {
      return 'sg-flex--row';
    }
  }, direction)), _toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return propValue === true ? "sg-flex--inline" : "sg-flex--flex";
  }, inlineFlex)), _toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return "sg-flex--justify-content-".concat(propValue);
  }, justifyContent)), _toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return "sg-flex--align-items-".concat(propValue);
  }, alignItems)), _toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return "sg-flex--align-content-".concat(propValue);
  }, alignContent)), _toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return "sg-flex--align-self-".concat(propValue);
  }, alignSelf)), _toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return propValue ? 'sg-flex--wrap' : 'sg-flex--nowrap';
  }, wrap)), _toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return propValue ? 'sg-flex--wrap-reverse' : 'sg-flex--nowrap';
  }, wrapReverse)), _toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return "sg-flex--margin-".concat(propValue);
  }, margin)), _toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return "sg-flex--margin-top-".concat(propValue);
  }, marginTop)), _toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return "sg-flex--margin-right-".concat(propValue);
  }, marginRight)), _toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return "sg-flex--margin-bottom-".concat(propValue);
  }, marginBottom)), _toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return "sg-flex--margin-left-".concat(propValue);
  }, marginLeft)), [className]));
  return /*#__PURE__*/React.createElement(Container, _extends({}, otherProps, {
    className: flexClass,
    ref: ref
  }), children);
});
Flex.displayName = 'Flex';
var Flex$1 = Flex;

var _excluded$R = ["icon", "children", "className", "size", "color", "withAnimation", "aria-label"];

var Counter = function Counter(_ref) {
  var _cx;

  var icon = _ref.icon,
      children = _ref.children,
      className = _ref.className,
      size = _ref.size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'red-60' : _ref$color,
      withAnimation = _ref.withAnimation,
      ariaLabel = _ref['aria-label'],
      props = _objectWithoutProperties(_ref, _excluded$R);

  var counterClass = cx('sg-counter', (_cx = {}, _defineProperty(_cx, "sg-counter--".concat(String(size)), size), _defineProperty(_cx, "sg-counter--".concat(String(color)), color), _defineProperty(_cx, 'sg-counter--with-animation', withAnimation), _defineProperty(_cx, 'sg-counter--with-icon', icon), _cx), className);
  var content;
  content = /*#__PURE__*/React.createElement(Text$1, {
    size: size !== undefined && size !== null && size === 'xxs' ? 'xsmall' : 'small',
    weight: "bold",
    color: "text-white",
    className: size === 'xxs' ? 'sg-counter__text' : 'sg-counter__text-spaced',
    "aria-label": ariaLabel
  }, children);

  if (icon) {
    content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex$1, {
      className: cx('sg-counter__icon-container', {
        'sg-counter__icon-container--xxs': size === 'xxs'
      })
    }, /*#__PURE__*/React.createElement(Icon$2, {
      type: icon,
      size: size === 'xxs' ? 16 : 24,
      color: "icon-black",
      className: "sg-counter__icon",
      "aria-hidden": !!ariaLabel
    })), /*#__PURE__*/React.createElement(Flex$1, {
      alignItems: "center"
    }, /*#__PURE__*/React.createElement(Text$1, {
      type: "span",
      weight: "bold",
      size: size !== undefined && size !== null && size === 'xxs' ? 'xsmall' : 'small',
      className: "sg-counter__text",
      "aria-label": ariaLabel
    }, children)));
  }

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: counterClass
  }), content);
};

var Counter$1 = Counter;

var _excluded$Q = ["children", "spacedTop", "spacedBottom", "className", "align"];

var ContentBoxActions = function ContentBoxActions(_ref) {
  var _classNames;

  var children = _ref.children,
      spacedTop = _ref.spacedTop,
      spacedBottom = _ref.spacedBottom,
      className = _ref.className,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? ALIGNMENT.LEFT : _ref$align,
      props = _objectWithoutProperties(_ref, _excluded$Q);

  var contentBoxClass = cx('sg-content-box__actions', (_classNames = {
    'sg-content-box__actions--with-centered-elements': align === ALIGNMENT.CENTER,
    'sg-content-box__actions--with-elements-to-right': align === ALIGNMENT.RIGHT,
    'sg-content-box__actions--spaced-top': spacedTop === SIZE$8.NORMAL
  }, _defineProperty(_classNames, "sg-content-box__actions--spaced-top-".concat(spacedTop || ''), spacedTop && spacedTop !== SIZE$8.NORMAL), _defineProperty(_classNames, 'sg-content-box__actions--spaced-bottom', spacedBottom === SIZE$8.NORMAL), _defineProperty(_classNames, "sg-content-box__actions--spaced-bottom-".concat(spacedBottom || ''), spacedBottom && spacedBottom !== SIZE$8.NORMAL), _classNames), className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: contentBoxClass
  }), children);
};

var ContentBoxActions$1 = ContentBoxActions;

var _excluded$P = ["children", "full", "spacedTop", "spacedBottom", "className", "align"];

var ContentBoxContent = function ContentBoxContent(_ref) {
  var _classNames;

  var children = _ref.children,
      full = _ref.full,
      spacedTop = _ref.spacedTop,
      spacedBottom = _ref.spacedBottom,
      className = _ref.className,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? ALIGNMENT.LEFT : _ref$align,
      props = _objectWithoutProperties(_ref, _excluded$P);

  var contentBoxClass = cx('sg-content-box__content', (_classNames = {
    'sg-content-box__content--full': full,
    'sg-content-box__content--with-centered-text': align === ALIGNMENT.CENTER,
    'sg-content-box__content--spaced-top': spacedTop === SIZE$8.NORMAL
  }, _defineProperty(_classNames, "sg-content-box__content--spaced-top-".concat(spacedTop || ''), spacedTop && spacedTop !== SIZE$8.NORMAL), _defineProperty(_classNames, 'sg-content-box__content--spaced-bottom', spacedBottom === SIZE$8.NORMAL), _defineProperty(_classNames, "sg-content-box__content--spaced-bottom-".concat(spacedBottom || ''), spacedBottom && spacedBottom !== SIZE$8.NORMAL), _classNames), className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: contentBoxClass
  }), children);
};

var ContentBoxContent$1 = ContentBoxContent;

var _excluded$O = ["children", "spaced", "spacedSmall", "spacedTop", "spacedBottom", "className", "align"];

var ContentBoxHeader = function ContentBoxHeader(_ref) {
  var _classNames;

  var children = _ref.children,
      spaced = _ref.spaced,
      spacedSmall = _ref.spacedSmall,
      spacedTop = _ref.spacedTop,
      spacedBottom = _ref.spacedBottom,
      className = _ref.className,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? ALIGNMENT.LEFT : _ref$align,
      props = _objectWithoutProperties(_ref, _excluded$O);

  var contentBoxClass = cx('sg-content-box__header', (_classNames = {
    'sg-content-box__header--with-centered-elements': align === ALIGNMENT.CENTER,
    'sg-content-box__header--spaced': spaced,
    'sg-content-box__header--spaced-small': spacedSmall,
    'sg-content-box__header--spaced-top': spacedTop === SIZE$8.NORMAL
  }, _defineProperty(_classNames, "sg-content-box__header--spaced-top-".concat(spacedTop || ''), spacedTop && spacedTop !== SIZE$8.NORMAL), _defineProperty(_classNames, 'sg-content-box__header--spaced-bottom', spacedBottom === SIZE$8.NORMAL), _defineProperty(_classNames, "sg-content-box__header--spaced-bottom-".concat(spacedBottom || ''), spacedBottom && spacedBottom !== SIZE$8.NORMAL), _classNames), className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: contentBoxClass
  }), children);
};

var ContentBoxHeader$1 = ContentBoxHeader;

var ContentBoxTitle = function ContentBoxTitle(_ref) {
  var _classNames;

  var children = _ref.children,
      spaced = _ref.spaced,
      spacedSmall = _ref.spacedSmall,
      spacedTop = _ref.spacedTop,
      spacedBottom = _ref.spacedBottom,
      className = _ref.className,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? ALIGNMENT.LEFT : _ref$align;
  var contentBoxClass = cx('sg-content-box__title', (_classNames = {
    'sg-content-box__title--with-centered-elements': align === ALIGNMENT.CENTER,
    'sg-content-box__title--spaced': spaced,
    'sg-content-box__title--spaced-small': spacedSmall,
    'sg-content-box__title--spaced-top': spacedTop === SIZE$8.NORMAL
  }, _defineProperty(_classNames, "sg-content-box__title--spaced-top-".concat(spacedTop || ''), spacedTop && spacedTop !== SIZE$8.NORMAL), _defineProperty(_classNames, 'sg-content-box__title--spaced-bottom', spacedBottom === SIZE$8.NORMAL), _defineProperty(_classNames, "sg-content-box__title--spaced-bottom-".concat(spacedBottom || ''), spacedBottom && spacedBottom !== SIZE$8.NORMAL), _classNames), className);
  return /*#__PURE__*/React.createElement("div", {
    className: contentBoxClass
  }, children);
};

var ContentBoxTitle$1 = ContentBoxTitle;

// if possible, use Select component instead
var Dropdown = function Dropdown(_ref) {
  var name = _ref.name,
      links = _ref.links,
      initiallyOpened = _ref.initiallyOpened,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'default' : _ref$color,
      fullWidth = _ref.fullWidth,
      onItemSelect = _ref.onItemSelect;

  var _useState = useState(initiallyOpened || false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var clickedInside = useRef(false);

  function handleClickInside() {
    setOpen(function (prevOpen) {
      return !prevOpen;
    });
    clickedInside.current = true;
  }

  function handleClickOutside() {
    if (clickedInside.current) {
      clickedInside.current = false;
      return;
    }

    setOpen(false);
  }

  useEffect(function () {
    document.addEventListener('click', handleClickOutside);
    return function () {
      return document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: cx('sg-dropdown', {
      'sg-dropdown--opened': open,
      'sg-dropdown--white': color === 'white',
      'sg-dropdown--full-width': fullWidth
    }),
    onClick: handleClickInside
  }, /*#__PURE__*/React.createElement("p", null, name), /*#__PURE__*/React.createElement(Icon$2, {
    type: open ? 'chevron_up' : 'chevron_down',
    size: 24,
    color: ICON_COLOR$1['icon-gray-70'],
    className: "sg-dropdown__icon"
  }), open && /*#__PURE__*/React.createElement("div", {
    className: "sg-dropdown__items"
  }, links.map(function (link, index) {
    return /*#__PURE__*/React.createElement("a", {
      key: index,
      href: link.url,
      className: "sg-dropdown__item",
      onClick: onItemSelect ? function (e) {
        return onItemSelect(e, link);
      } : undefined
    }, link.label);
  })));
};

var Dropdown$1 = Dropdown;

var _excluded$N = ["text", "type", "className"];
var TYPE$2 = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info'
};

var FlashMessage = function FlashMessage(_ref) {
  var text = _ref.text,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'default' : _ref$type,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$N);

  var messageClass = cx('sg-flash__message', _defineProperty({}, "sg-flash__message--".concat(type), type !== TYPE$2.DEFAULT), className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    "aria-live": "assertive",
    className: "sg-flash",
    role: "alert"
  }), /*#__PURE__*/React.createElement("div", {
    className: messageClass
  }, /*#__PURE__*/React.createElement(Text$1, {
    size: "small",
    weight: "bold",
    align: "to-center"
  }, text)));
};

var FlashMessage$1 = FlashMessage;

var generateRandomString = function generateRandomString() {
  return Math.random().toString(32).slice(2);
};

var generateRandomString$1 = generateRandomString;

var CheckIcon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement("svg", {
    ref: ref,
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.475 8.01008L6.48494 11.0201L12.5249 4.98",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
});
var IndeterminateIcon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement("svg", {
    ref: ref,
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    className: "indeterminate-path indeterminate-path--left",
    d: "M4 8H8",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    className: "indeterminate-path indeterminate-path--right",
    d: "M8 8H12",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
});

var _excluded$M = ["className", "color", "id", "children"];

var ErrorMessage = function ErrorMessage(_ref) {
  var className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'text-red-60' : _ref$color,
      id = _ref.id,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$M);

  var errorMessageClass = cx('sg-error-message', className);
  return /*#__PURE__*/React.createElement(Text$1, _extends({}, props, {
    className: errorMessageClass,
    id: id,
    color: color,
    size: "small",
    type: "span",
    weight: "bold"
  }), children);
};

var ErrorMessage$1 = ErrorMessage;

var useIsFirstRender = function useIsFirstRender() {
  var isFirstRender = useRef(true);

  if (isFirstRender.current === true) {
    isFirstRender.current = false;
    return true;
  }

  return isFirstRender.current;
};

var useIsFirstRender$1 = useIsFirstRender;

var _excluded$L = ["checked", "children", "className", "color", "defaultChecked", "description", "disabled", "errorMessage", "id", "indeterminate", "invalid", "labelSize", "required", "name", "onChange", "style", "value", "aria-labelledby"];

var Checkbox = function Checkbox(_ref) {
  var _classNames;

  var checked = _ref.checked,
      children = _ref.children,
      className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'dark' : _ref$color,
      _ref$defaultChecked = _ref.defaultChecked,
      defaultChecked = _ref$defaultChecked === void 0 ? false : _ref$defaultChecked,
      description = _ref.description,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      errorMessage = _ref.errorMessage,
      id = _ref.id,
      _ref$indeterminate = _ref.indeterminate,
      indeterminate = _ref$indeterminate === void 0 ? false : _ref$indeterminate,
      _ref$invalid = _ref.invalid,
      invalid = _ref$invalid === void 0 ? false : _ref$invalid,
      _ref$labelSize = _ref.labelSize,
      labelSize = _ref$labelSize === void 0 ? 'medium' : _ref$labelSize,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      name = _ref.name,
      onChange = _ref.onChange,
      style = _ref.style,
      value = _ref.value,
      ariaLabelledBy = _ref['aria-labelledby'],
      props = _objectWithoutProperties(_ref, _excluded$L);

  var _React$useRef = React.useRef(id === undefined || id === '' ? generateRandomString$1() : id),
      checkboxId = _React$useRef.current;

  var isControlled = checked !== undefined;

  var _React$useState = React.useState(isControlled ? checked : defaultChecked),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isChecked = _React$useState2[0],
      setIsChecked = _React$useState2[1];

  var inputRef = React.useRef(null);
  var iconRef = React.useRef(null);
  var isFirstRender = useIsFirstRender$1();
  var shouldAnimate = !isFirstRender; // Apply checkbox animation when it's already after first render

  React.useEffect(function () {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [inputRef, indeterminate]);
  React.useEffect(function () {
    if (isControlled) setIsChecked(checked);
  }, [checked, isControlled]);
  var onInputChange = React.useCallback(function (e) {
    if (!isControlled) setIsChecked(function (val) {
      return !val;
    });
    if (onChange) onChange(e);
  }, [onChange, isControlled]);

  if (__DEV__) {
    invariant(!(errorMessage && !invalid), "Using 'errorMessage' property has no effect when 'invalid' property is not set.");
    invariant(!(errorMessage && !children), "Using 'errorMessage' property should be used along with 'children' property (label).");
  }

  var hasContent = description || invalid && errorMessage;
  var hasLabel = children !== undefined && children !== null;
  var isInputOnly = !hasLabel && !hasContent;
  var checkboxClass = cx('sg-checkbox', className, (_classNames = {
    'sg-checkbox--disabled': disabled
  }, _defineProperty(_classNames, "sg-checkbox--".concat(String(color)), color), _defineProperty(_classNames, "sg-checkbox--with-padding", !isInputOnly), _classNames));
  var labelClass = cx('sg-checkbox__label', _defineProperty({
    'sg-checkbox__label--with-padding-bottom': description || errorMessage
  }, "sg-checkbox__label--".concat(String(labelSize)), labelSize));
  var iconClass = cx('sg-checkbox__icon', {
    'sg-checkbox__icon--with-animation': shouldAnimate
  });
  var errorTextId = "".concat(checkboxId, "-errorText");
  var descriptionId = "".concat(checkboxId, "-description");
  var describedbyIds = React.useMemo(function () {
    var ids = [];

    if (invalid && errorMessage) {
      ids.push(errorTextId);
    }

    if (description) {
      ids.push(descriptionId);
    }

    return ids.join(' ');
  }, [errorTextId, descriptionId, invalid, errorMessage, description]);
  var checkboxIcon = null;
  if (isChecked && !indeterminate) checkboxIcon = /*#__PURE__*/React.createElement(CheckIcon, {
    ref: iconRef
  });
  if (indeterminate) checkboxIcon = /*#__PURE__*/React.createElement(IndeterminateIcon, {
    ref: iconRef
  });
  React.useEffect(function () {
    requestAnimationFrame(function () {
      if (iconRef.current) {
        iconRef.current.getBoundingClientRect(); // force a reflow so checkbox icon gets painted and transition can be seen

        if (iconRef.current instanceof window.SVGElement) {
          iconRef.current.style.strokeDashoffset = '0';
        }
      }
    });
  }, [checkboxIcon]);
  return /*#__PURE__*/React.createElement("div", {
    className: checkboxClass,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-checkbox__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-checkbox__element"
  }, /*#__PURE__*/React.createElement("input", _extends({}, props, {
    ref: inputRef,
    className: "sg-checkbox__input",
    id: checkboxId,
    type: "checkbox",
    checked: isChecked,
    disabled: disabled,
    name: name,
    onChange: onInputChange,
    required: required,
    value: value,
    "aria-checked": indeterminate ? 'mixed' : isChecked,
    "aria-invalid": invalid ? true : undefined,
    "aria-describedby": describedbyIds,
    "aria-labelledby": ariaLabelledBy
  })), /*#__PURE__*/React.createElement("div", {
    className: "sg-checkbox__icon-wrapper"
  }, /*#__PURE__*/React.createElement("span", {
    className: iconClass // This element is purely decorative so
    // we hide it for screen readers
    ,
    "aria-hidden": "true"
  }, checkboxIcon))), !ariaLabelledBy && hasLabel && /*#__PURE__*/React.createElement(Text$1, {
    htmlFor: checkboxId,
    type: "label",
    size: labelSize,
    weight: "bold",
    className: labelClass
  }, children, required && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xA0*"))), hasContent && /*#__PURE__*/React.createElement("div", {
    className: "sg-checkbox__content"
  }, description && /*#__PURE__*/React.createElement(Text$1, {
    id: descriptionId,
    className: "sg-checkbox__description",
    size: "small",
    type: "span",
    breakWords: true
  }, description), invalid && errorMessage && /*#__PURE__*/React.createElement(ErrorMessage$1, {
    id: errorTextId,
    color: color === 'light' ? 'text-red-40' : undefined
  }, errorMessage)));
};

var Checkbox$1 = Checkbox;

var _excluded$K = ["type", "size", "color", "fullWidth", "withIcon", "value", "valid", "invalid", "className", "setInputRef", "errorMessage"];
var SIZE$7 = {
  L: 'l',
  M: 'm',
  S: 's'
};
var COLOR$1 = {
  DEFAULT: 'default',
  WHITE: 'white'
};

var Input = function Input(props) {
  var _classnames;

  var _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      _props$size = props.size,
      size = _props$size === void 0 ? SIZE$7.M : _props$size,
      _props$color = props.color,
      color = _props$color === void 0 ? COLOR$1.DEFAULT : _props$color,
      fullWidth = props.fullWidth,
      withIcon = props.withIcon,
      value = props.value,
      valid = props.valid,
      invalid = props.invalid,
      className = props.className,
      setInputRef = props.setInputRef,
      errorMessage = props.errorMessage,
      additionalProps = _objectWithoutProperties(props, _excluded$K);

  if (valid === true && invalid === true) {
    throw {
      name: 'WrongValidation',
      message: 'Input can be either valid or invalid!'
    };
  }

  var inputClass = cx('sg-input', (_classnames = {}, _defineProperty(_classnames, "sg-input--".concat(String(size)), size !== SIZE$7.M), _defineProperty(_classnames, "sg-input--".concat(String(color)), color !== COLOR$1.DEFAULT), _defineProperty(_classnames, 'sg-input--valid', valid), _defineProperty(_classnames, 'sg-input--invalid', invalid), _defineProperty(_classnames, 'sg-input--full-width', fullWidth), _defineProperty(_classnames, 'sg-input--with-icon', withIcon), _classnames), className);
  var wrapperClass = cx('sg-input__wrapper', {
    'sg-input__wrapper--full-width': fullWidth
  });
  var errorMessageDisplayed = invalid === true && errorMessage !== undefined && errorMessage !== '';
  return /*#__PURE__*/React.createElement("div", {
    className: wrapperClass
  }, /*#__PURE__*/React.createElement("input", _extends({}, additionalProps, {
    type: type,
    ref: setInputRef,
    className: inputClass,
    value: value
  })), errorMessageDisplayed && /*#__PURE__*/React.createElement(Flex$1, {
    marginTop: "xxs",
    marginLeft: size === 'l' ? 'm' : 's',
    marginRight: size === 'l' ? 'm' : 's'
  }, /*#__PURE__*/React.createElement(Text$1, {
    size: size === 'l' ? 'small' : 'xsmall',
    color: "text-red-60"
  }, errorMessage)));
};

var Input$1 = Input;

var RadioContext = /*#__PURE__*/React.createContext({});

var useRadioContext = function useRadioContext() {
  return React.useContext(RadioContext);
};

var useRadioContext$1 = useRadioContext;

var _excluded$J = ["checked", "color", "children", "className", "description", "disabled", "id", "invalid", "labelSize", "name", "onChange", "required", "style", "value", "aria-labelledby", "aria-describedby"];

var Radio = function Radio(_ref) {
  var _classNames;

  var checked = _ref.checked,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'dark' : _ref$color,
      children = _ref.children,
      className = _ref.className,
      description = _ref.description,
      disabled = _ref.disabled,
      id = _ref.id,
      invalid = _ref.invalid,
      _ref$labelSize = _ref.labelSize,
      labelSize = _ref$labelSize === void 0 ? 'medium' : _ref$labelSize,
      name = _ref.name,
      onChange = _ref.onChange,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      style = _ref.style,
      value = _ref.value,
      ariaLabelledBy = _ref['aria-labelledby'],
      ariaDescribedBy = _ref['aria-describedby'],
      props = _objectWithoutProperties(_ref, _excluded$J);

  var _useRef = useRef(id === undefined || id === '' ? generateRandomString$1() : id),
      radioId = _useRef.current;

  var radioGroupContext = useRadioContext$1();
  var isWithinRadioGroup = Boolean(radioGroupContext && Object.keys(radioGroupContext).length);
  var isControlled = checked !== undefined || isWithinRadioGroup;
  var isFirstRender = useIsFirstRender$1();
  var shouldAnimate = !isControlled || !isFirstRender; // Apply radio animation only when component is uncontrolled (it means it's unchecked) or it's already after first render

  var isChecked = undefined;

  if (isControlled) {
    // Radio can either be directly set as checked, or be controlled by a RadioGroup
    isChecked = checked !== undefined ? checked : radioGroupContext.selectedValue && radioGroupContext.selectedValue === value;
  }

  var colorName = radioGroupContext.color || color;
  var isDisabled = disabled !== undefined ? disabled : radioGroupContext.disabled;
  var hasLabel = children !== undefined && children !== null;
  var isInputOnly = !hasLabel && !description;
  var descriptionId = useMemo(function () {
    if (ariaDescribedBy) return ariaDescribedBy;
    if (description) return "".concat(radioId, "-description");
    return null;
  }, [radioId, ariaDescribedBy, description]);
  var radioClass = cx('sg-radio', className, (_classNames = {}, _defineProperty(_classNames, "sg-radio--".concat(String(colorName)), colorName), _defineProperty(_classNames, 'sg-radio--disabled', isDisabled), _defineProperty(_classNames, 'sg-radio--with-label', !!hasLabel), _defineProperty(_classNames, 'sg-radio--with-description', !!descriptionId), _defineProperty(_classNames, 'sg-radio--with-padding', !isInputOnly), _classNames));
  var labelClass = cx('sg-radio__label', _defineProperty({
    'sg-radio__label--with-padding-bottom': description
  }, "sg-radio__label--".concat(String(labelSize)), labelSize));
  var circleClass = cx('sg-radio__circle', {
    'sg-radio__circle--with-animation': shouldAnimate
  });
  var labelId = ariaLabelledBy || "".concat(radioId, "-label");
  var isInvalid = invalid !== undefined ? invalid : radioGroupContext.invalid;

  var onInputChange = function onInputChange(e) {
    if (isWithinRadioGroup) {
      radioGroupContext.setLastFocusedValue(value);
      radioGroupContext.setSelectedValue(e, value);
    }

    if (onChange) {
      onChange(e);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: radioClass,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-radio__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-radio__element"
  }, /*#__PURE__*/React.createElement("input", _extends({}, props, {
    className: "sg-radio__input",
    type: "radio",
    id: radioId,
    checked: isChecked,
    disabled: isDisabled,
    name: name || radioGroupContext.name,
    onChange: onInputChange,
    required: required,
    value: value,
    "aria-labelledby": labelId,
    "aria-describedby": descriptionId,
    "aria-invalid": isInvalid ? true : undefined
  })), /*#__PURE__*/React.createElement("span", {
    className: circleClass // This element is purely decorative so
    // we hide it for screen readers
    ,
    "aria-hidden": "true"
  })), hasLabel && /*#__PURE__*/React.createElement(Text$1, {
    id: labelId,
    htmlFor: radioId,
    type: "label",
    size: labelSize,
    weight: "bold",
    className: labelClass
  }, children)), description && /*#__PURE__*/React.createElement(Text$1, {
    id: descriptionId,
    className: "sg-radio__description",
    size: "small",
    type: "span",
    breakWords: true
  }, description));
};

var Radio$1 = Radio;

var _excluded$I = ["className", "children", "color", "direction", "disabled", "errorMessage", "invalid", "name", "required", "value", "onChange", "aria-labelledby", "aria-describedby"];

var RadioGroup = function RadioGroup(_ref) {
  var className = _ref.className,
      children = _ref.children,
      color = _ref.color,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'column' : _ref$direction,
      disabled = _ref.disabled,
      errorMessage = _ref.errorMessage,
      invalid = _ref.invalid,
      name = _ref.name,
      required = _ref.required,
      value = _ref.value,
      onChange = _ref.onChange,
      ariaLabelledBy = _ref['aria-labelledby'],
      ariaDescribedBy = _ref['aria-describedby'],
      props = _objectWithoutProperties(_ref, _excluded$I);

  var _React$useState = React.useState(value || null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedValue = _React$useState2[0],
      setSelectedValue = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      lastFocusedValue = _React$useState4[0],
      setLastFocusedValue = _React$useState4[1];

  var radioGroupClass = cx('sg-radio-group', className);
  var radioGroupItemsClass = cx('sg-radio-group__items', _defineProperty({}, "sg-radio-group__items--direction-".concat(String(direction)), direction));
  var errorTextId = name ? "".concat(name, "-errorText") : undefined;

  var updateValue = function updateValue(event, value) {
    setSelectedValue(value);
    if (onChange) onChange(event);
  };

  var describedbyIds = React.useMemo(function () {
    var ids = [];

    if (invalid && errorMessage) {
      ids.push(errorTextId);
    }

    if (ariaDescribedBy) {
      ids.push(ariaDescribedBy);
    }

    return ids.join(' ');
  }, [errorTextId, invalid, errorMessage, ariaDescribedBy]);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: radioGroupClass,
    role: "radiogroup",
    disabled: disabled,
    onBlur: function onBlur() {
      return setLastFocusedValue(null);
    },
    "aria-required": required,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": describedbyIds.length ? describedbyIds : undefined
  }), /*#__PURE__*/React.createElement("div", {
    className: radioGroupItemsClass
  }, /*#__PURE__*/React.createElement(RadioContext.Provider, {
    value: {
      color: color,
      name: name,
      disabled: disabled,
      invalid: invalid,
      selectedValue: selectedValue,
      setSelectedValue: updateValue,
      lastFocusedValue: lastFocusedValue,
      setLastFocusedValue: setLastFocusedValue
    }
  }, children)), invalid && errorMessage && /*#__PURE__*/React.createElement(ErrorMessage$1, {
    id: errorTextId,
    color: color === 'light' ? 'text-red-40' : undefined
  }, errorMessage));
};

var RadioGroup$1 = RadioGroup;

var _excluded$H = ["valid", "invalid", "capitalized", "fullWidth", "value", "size", "color", "className", "options"];

var _ICON_SIZE_MAP;
var SIZE$6 = {
  S: 's',
  M: 'm',
  L: 'l'
};
var ICON_SIZE_MAP = (_ICON_SIZE_MAP = {}, _defineProperty(_ICON_SIZE_MAP, SIZE$6.L, 32), _defineProperty(_ICON_SIZE_MAP, SIZE$6.M, 24), _defineProperty(_ICON_SIZE_MAP, SIZE$6.S, 16), _ICON_SIZE_MAP);

var getOptionElement = function getOptionElement(_ref) {
  var value = _ref.value,
      text = _ref.text;
  return /*#__PURE__*/React.createElement("option", {
    key: value,
    value: value
  }, text);
};

var Select = function Select(props) {
  var _classnames;

  var valid = props.valid,
      invalid = props.invalid,
      capitalized = props.capitalized,
      fullWidth = props.fullWidth,
      value = props.value,
      _props$size = props.size,
      size = _props$size === void 0 ? SIZE$6.M : _props$size,
      color = props.color,
      className = props.className,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      additionalProps = _objectWithoutProperties(props, _excluded$H);

  if (valid === true && invalid === true) {
    throw {
      name: 'WrongValidation',
      message: 'Select can be either valid or invalid!'
    };
  }

  var selectClass = cx('sg-select', (_classnames = {
    'sg-select--selected': value,
    'sg-select--valid': valid,
    'sg-select--invalid': invalid,
    'sg-select--capitalized': capitalized,
    'sg-select--full-width': fullWidth
  }, _defineProperty(_classnames, "sg-select--".concat(String(color)), color), _defineProperty(_classnames, "sg-select--".concat(String(size)), size && size !== 'm'), _classnames), className);
  var optionsElements = options.map(function (item, index) {
    if (item.options) {
      return /*#__PURE__*/React.createElement("optgroup", {
        key: item.label + index,
        label: item.label
      }, item.options.map(getOptionElement));
    }

    if (item.text || item.value) {
      return getOptionElement(item);
    }

    return null;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: selectClass
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-select__icon"
  }, /*#__PURE__*/React.createElement(Icon$2, {
    type: "caret_down",
    color: ICON_COLOR$1['icon-gray-50'],
    size: ICON_SIZE_MAP[size]
  })), /*#__PURE__*/React.createElement("select", _extends({}, additionalProps, {
    className: "sg-select__element",
    value: value
  }), optionsElements));
};

var Select$1 = Select;

var _excluded$G = ["valid", "invalid", "size", "color", "fullWidth", "simple", "noPadding", "autoHeight", "value", "className", "textareaRef", "errorMessage", "type"];
var SIZE$5 = {
  SHORT: 'short',
  NORMAL: 'normal',
  TALL: 'tall',
  XTALL: 'xtall'
};

var Textarea = function Textarea(props) {
  var _classnames;

  var valid = props.valid,
      invalid = props.invalid,
      _props$size = props.size,
      size = _props$size === void 0 ? SIZE$5.NORMAL : _props$size,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      fullWidth = props.fullWidth,
      simple = props.simple,
      noPadding = props.noPadding,
      autoHeight = props.autoHeight,
      value = props.value,
      className = props.className,
      textareaRef = props.textareaRef,
      errorMessage = props.errorMessage,
      _props$type = props.type,
      Type = _props$type === void 0 ? 'textarea' : _props$type,
      additionalProps = _objectWithoutProperties(props, _excluded$G);

  if (valid === true && invalid === true) {
    throw {
      name: 'WrongValidation',
      message: 'Textarea can be either valid or invalid!'
    };
  }

  var textareaClass = cx('sg-textarea', (_classnames = {}, _defineProperty(_classnames, "sg-textarea--".concat(String(size)), size !== SIZE$5.NORMAL), _defineProperty(_classnames, "sg-textarea--".concat(String(color)), color !== 'default'), _defineProperty(_classnames, 'sg-textarea--valid', valid), _defineProperty(_classnames, 'sg-textarea--invalid', invalid), _defineProperty(_classnames, 'sg-textarea--full-width', fullWidth), _defineProperty(_classnames, 'sg-textarea--simple', simple), _defineProperty(_classnames, 'sg-textarea--no-padding', noPadding), _defineProperty(_classnames, 'sg-textarea--auto-height', autoHeight), _classnames), className);
  var wrapperClass = cx('sg-input__wrapper', {
    'sg-textarea__wrapper--full-width': fullWidth
  });
  var errorMessageDisplayed = invalid === true && errorMessage !== undefined && errorMessage !== '';
  return errorMessageDisplayed ? /*#__PURE__*/React.createElement("div", {
    className: wrapperClass
  }, /*#__PURE__*/React.createElement(Type, _extends({}, additionalProps, {
    className: textareaClass,
    ref: textareaRef,
    value: value
  })), /*#__PURE__*/React.createElement(Flex$1, {
    marginTop: "xxs",
    marginLeft: "s",
    marginRight: "s"
  }, /*#__PURE__*/React.createElement(Text$1, {
    size: "xsmall",
    color: "text-red-60"
  }, errorMessage))) : /*#__PURE__*/React.createElement(Type, _extends({}, additionalProps, {
    className: textareaClass,
    ref: textareaRef,
    value: value
  }));
};

var Textarea$1 = Textarea;

var _excluded$F = ["children", "fixed", "withDivider", "className"];

// This component is deprecated
var Header = function Header(_ref) {
  var children = _ref.children,
      fixed = _ref.fixed,
      withDivider = _ref.withDivider,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$F);

  var headerClass = cx('sg-header', {
    'sg-header--fixed': fixed,
    'sg-header--with-divider': withDivider
  }, className);
  return /*#__PURE__*/React.createElement("header", _extends({}, props, {
    className: headerClass
  }), children);
};

var Header$1 = Header;

var _excluded$E = ["children", "className"];

// This component is deprecated
var HeaderContainer = function HeaderContainer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$E);

  var headerContainerClass = cx('sg-header__container', className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: headerContainerClass
  }), children);
};

var HeaderContainer$1 = HeaderContainer;

var _excluded$D = ["children", "autoHeight", "className"];

// This component is deprecated
var HeaderContent = function HeaderContent(_ref) {
  var children = _ref.children,
      autoHeight = _ref.autoHeight,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$D);

  var headerContentClass = cx('sg-header__content', {
    'sg-header__content--auto-height': autoHeight
  }, className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: headerContentClass
  }), children);
};

var HeaderContent$1 = HeaderContent;

var _excluded$C = ["children", "className"];

// This component is deprecated
var HeaderLeft = function HeaderLeft(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$C);

  var headerClass = cx('sg-header__left', className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: headerClass
  }), children);
};

var HeaderLeft$1 = HeaderLeft;

var _excluded$B = ["children", "className"];

// This component is deprecated
var HeaderMiddle = function HeaderMiddle(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$B);

  var headerClass = cx('sg-header__middle', className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: headerClass
  }), children);
};

var HeaderMiddle$1 = HeaderMiddle;

var _excluded$A = ["children", "className"];

// This component is deprecated
var HeaderRight = function HeaderRight(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$A);

  var headerClass = cx('sg-header__right', className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: headerClass
  }), children);
};

var HeaderRight$1 = HeaderRight;

var RwdHelper = function RwdHelper(_ref) {
  var hide = _ref.hide,
      children = _ref.children;

  if (!children) {
    return null;
  }

  var hideClass = "sg-hide-for-".concat(hide);

  if (typeof children === 'string') {
    return /*#__PURE__*/React.createElement("span", {
      className: hideClass
    }, children);
  }

  var finalClassName = cx(children.props.className, hideClass);
  return /*#__PURE__*/React.cloneElement(children, {
    className: finalClassName
  });
};

var RwdHelper$1 = RwdHelper;

var LOGO_SOURCE_PATHS = {
  "brainly-mobile": "images/logos/brainly-mobile-6879551770.svg",
  "brainly-plus-inverse": "images/logos/brainly-plus-inverse-5bb4ac60b8.svg",
  "brainly-plus-small": "images/logos/brainly-plus-small-57d2d0c2e9.svg",
  "brainly-plus-var-a": "images/logos/brainly-plus-var-a-09a4d1db32.svg",
  "brainly-plus-var-b": "images/logos/brainly-plus-var-b-63229edd0f.svg",
  "brainly-plus": "images/logos/brainly-plus-3f4fae7ad9.svg",
  "brainly-tutoring-small": "images/logos/brainly-tutoring-small-02c148571b.svg",
  "brainly-tutoring": "images/logos/brainly-tutoring-66bdc320bc.svg",
  "brainly": "images/logos/brainly-0eeb28be95.svg",
  "eodev-mobile": "images/logos/eodev-mobile-bfdc46ee89.svg",
  "eodev": "images/logos/eodev-939656a881.svg",
  "nosdevoirs-mobile": "images/logos/nosdevoirs-mobile-16a1bb0f93.svg",
  "nosdevoirs": "images/logos/nosdevoirs-dc76ce6c73.svg",
  "brainly-logotype-community-qa": "images/logos/product/brainly-logotype-community-qa-c90081a764.svg",
  "brainly-logotype-math-solver": "images/logos/product/brainly-logotype-math-solver-e087a46b5d.svg",
  "brainly-logotype-textbook-detective": "images/logos/product/brainly-logotype-textbook-detective-b396737e8b.svg",
  "brainly-logotype-tutor": "images/logos/product/brainly-logotype-tutor-b2ee0a357e.svg",
  "logo-community-qa": "images/logos/product/logo-community-qa-dcfdae5b52.svg",
  "logo-math-solver": "images/logos/product/logo-math-solver-219f52397b.svg",
  "logo-textbook-detective": "images/logos/product/logo-textbook-detective-a922e8bbc4.svg",
  "logo-tutor": "images/logos/product/logo-tutor-f468748edf.svg",
  "znanija-mobile": "images/logos/znanija-mobile-9a37533f81.svg",
  "znanija-plus-inverse": "images/logos/znanija-plus-inverse-e5be942a57.svg",
  "znanija-plus-small": "images/logos/znanija-plus-small-82f617cc09.svg",
  "znanija-plus": "images/logos/znanija-plus-aa22ab38bd.svg",
  "znanija": "images/logos/znanija-826ea31325.svg"
};

// $FlowFixMe
function getLogoUrl(type) {
  return "".concat("").concat(LOGO_SOURCE_PATHS[type]);
}

var _excluded$z = ["type", "href", "className", "alt", "aria-label"];
var LOGO_TYPE = {
  BRAINLY: 'brainly',
  EODEV: 'eodev',
  NOSDEVOIRS: 'nosdevoirs',
  ZNANIJA: 'znanija',
  ZNANIJA_PLUS: 'znanija-plus',
  BRAINLY_PLUS: 'brainly-plus',
  BRAINLY_TUTORING: 'brainly-tutoring'
};
var ICONS = {
  brainly: 'brainly-mobile',
  eodev: 'eodev-mobile',
  nosdevoirs: 'nosdevoirs-mobile',
  znanija: 'znanija-mobile',
  'znanija-plus': 'znanija-plus-small',
  'brainly-plus': 'brainly-plus-small',
  'brainly-tutoring': 'brainly-tutoring-small'
};

var HomeButton = function HomeButton(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? LOGO_TYPE.BRAINLY : _ref$type,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? '#' : _ref$href,
      className = _ref.className,
      _ref$alt = _ref.alt,
      alt = _ref$alt === void 0 ? '' : _ref$alt,
      ariaLabel = _ref['aria-label'],
      props = _objectWithoutProperties(_ref, _excluded$z);

  var buttonClass = cx('sg-home-button', _defineProperty({}, "sg-home-button--".concat(type), type !== LOGO_TYPE.BRAINLY), className);
  var logoPath = "".concat(getLogoUrl(type));
  var mobilePath = "".concat(getLogoUrl(ICONS[type]));
  var defaultAriaLabel = "".concat(type.replace(/-/g, ' '), " home");
  return /*#__PURE__*/React.createElement("a", _extends({}, props, {
    href: href,
    className: buttonClass,
    "aria-label": ariaLabel || defaultAriaLabel
  }), /*#__PURE__*/React.createElement("img", {
    className: "sg-home-button__logo-small",
    src: mobilePath,
    alt: alt
  }), /*#__PURE__*/React.createElement("img", {
    className: "sg-home-button__logo-big",
    src: logoPath,
    alt: alt
  }));
};

var HomeButton$1 = HomeButton;

var _excluded$y = ["color", "size", "type", "children", "action", "transparent", "active", "border", "className", "title"];

var _ICON_SIZE;
var SIZE$4 = {
  SMALL: 'small',
  NORMAL: 'normal'
};
var ICON_SIZE = (_ICON_SIZE = {}, _defineProperty(_ICON_SIZE, SIZE$4.SMALL, 24), _defineProperty(_ICON_SIZE, SIZE$4.NORMAL, 24), _ICON_SIZE);

// This component is deprecated
var IconAsButton = function IconAsButton(_ref) {
  var _classNames;

  var color = _ref.color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE$4.NORMAL : _ref$size,
      type = _ref.type,
      children = _ref.children,
      action = _ref.action,
      transparent = _ref.transparent,
      active = _ref.active,
      border = _ref.border,
      className = _ref.className,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$y);

  var buttonClass = cx('sg-icon-as-button', (_classNames = {}, _defineProperty(_classNames, "sg-icon-as-button--".concat(String(color)), color), _defineProperty(_classNames, "sg-icon-as-button--".concat(size), size), _defineProperty(_classNames, 'sg-icon-as-button--with-border', border), _defineProperty(_classNames, 'sg-icon-as-button--action', action), _defineProperty(_classNames, 'sg-icon-as-button--action-active', action === true && active === true), _defineProperty(_classNames, 'sg-icon-as-button--transparent', transparent), _defineProperty(_classNames, 'sg-icon-as-button--transparent-active', transparent === true && active === true), _classNames), className);
  var content;

  if (type) {
    content = /*#__PURE__*/React.createElement(Icon$2, {
      type: type,
      color: ICON_COLOR$1.ADAPTIVE,
      size: ICON_SIZE[size],
      title: title
    });
  } else {
    content = children;
  }

  var RenderType = 'button';

  if (props.href !== undefined && props.href !== null && props.href !== '') {
    RenderType = 'a';
  }

  return /*#__PURE__*/React.createElement(RenderType, _extends({}, props, {
    role: "button",
    className: buttonClass
  }), /*#__PURE__*/React.createElement("div", {
    className: "sg-icon-as-button__hole"
  }, content || null));
};

var IconAsButton$1 = IconAsButton;

var iconMap = {
  Essential: ['academic_cap', 'all_questions', 'answer_bubble', 'answer', 'answers', 'archive', 'ask_bubble', 'block', 'bulb_checked', 'bulb', 'calendar', 'chapter', 'chapter', 'clipboard', 'counter', 'credit_card', 'cursor_select', 'dot', 'envelope', 'exclamation_mark', 'funnel', 'globe', 'hand_move', 'info', 'lock_with_play', 'money_transfer', 'multiselect_checked', 'multiselect_unchecked', 'padlock', 'question', 'recent_questions', 'seen', 'send', 'settings', 'shield', 'sms', 'spark', 'textbook', 'toughest_questions', 'unseen', 'warning', 'gift'],
  Social: ['ask_parent_to_pay', 'bell_checked', 'bell_outlined', 'bookmark_outlined', 'bookmark', 'check', 'check_circle', 'comment_outlined', 'comment', 'crown_outlined', 'crown', 'cup', 'friend_add', 'friend_checked', 'friend_pending', 'friend_remove', 'friends', 'heart_outlined', 'heart_outlined', 'heart', 'influence', 'megaphone', 'messages', 'notifications', 'points', 'profile_settings', 'profile_view', 'profile', 'report_flag_outlined', 'report_flag', 'share_on_ios', 'share', 'star_half_outlined', 'star_half', 'star_outlined', 'star', 'thumb_down_outlined', 'thumb_down', 'thumb_up_outlined', 'thumb_up', 'unbookmark', 'user_block', 'verified'],
  'Editor and Media': ['arrow_top_right', 'attachment', 'backward_5s', 'backward_end', 'barcode_scanner', 'bold', 'bring_front', 'bulleted_list', 'camera', 'circle_fill', 'circle', 'crop', 'cyrillic', 'dashed_line', 'draw', 'drawing_mode', 'equation', 'eraser', 'european', 'flashlight_off', 'flashlight_on', 'forward_5s', 'greek', 'heading', 'hexagon', 'highlight', 'image', 'italic', 'keyboard', 'line', 'mic', 'mic_muted', 'numbered_list', 'pause', 'pencil', 'pi', 'play', 'quote', 'rectangle', 'replay', 'rotate_90', 'rotate', 'send_back', 'subtitle', 'sup_sub', 'symbols', 'text', 'time_speed', 'title', 'trash', 'triangle', 'underlined'],
  Navigation: ['add_more', 'arrow_double_right', 'arrow_down', 'arrow_left', 'arrow_right', 'arrow_up', 'caret_down', 'caret_up', 'chevron_double_down', 'chevron_double_right', 'chevron_down', 'chevron_left', 'chevron_right', 'chevron_up', 'clear', 'close', 'collapse', 'filters', 'fullscreen', 'less', 'logout', 'menu', 'more', 'open_in_new_tab', 'options', 'plus', 'reload', 'search'],
  'Social Media': ['apple', 'facebook', 'google', 'instagram', 'linkedin', 'medium', 'twitter', 'youtube']
};
var groups = Object.keys(iconMap);
function getIconGroup(iconName) {
  return groups.find(function (group) {
    return iconMap[group].includes(iconName);
  }) || 'Misc';
}

var _excluded$x = ["type", "size", "color", "className"];

var MobileIcon = function MobileIcon(_ref) {
  var _classNames;

  var type = _ref.type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'light' : _ref$color,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$x);

  var iconClass = cx('sg-mobile-icon', (_classNames = {}, _defineProperty(_classNames, "sg-mobile-icon--x".concat(size), size), _defineProperty(_classNames, "sg-mobile-icon--".concat(String(color)), color !== 'light'), _classNames), className);
  var iconType = "#icon-mobile-".concat(type);
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    className: iconClass
  }), /*#__PURE__*/React.createElement("use", {
    xlinkHref: iconType
  }));
};

var MobileIcon$1 = MobileIcon;

var _excluded$w = ["children", "type", "iconType", "onClose", "color", "className", "closeButtonLabel", "iconTitle", "iconAriaHidden"];
var COLORS_SOLID_MAP = {
  blue: 'blue-60',
  green: 'green-60',
  indigo: 'indigo-60',
  red: 'red-60',
  yellow: 'yellow-40',
  gray: 'gray-40',
  achromatic: 'black'
};
var SOLID_COLOR_TEXT_MAP = {
  blue: 'text-white',
  green: 'text-white',
  indigo: 'text-white',
  red: 'text-white',
  yellow: 'text-black',
  gray: 'text-black',
  achromatic: 'text-white'
};
var SOLID_ICON_COLOR_MAP = {
  blue: 'icon-white',
  green: 'icon-white',
  indigo: 'icon-white',
  red: 'icon-white',
  yellow: 'icon-black',
  gray: 'icon-black',
  achromatic: 'icon-white'
};
var COLORS_DEFAULT_MAP = {
  blue: 'blue-20',
  green: 'green-20',
  indigo: 'indigo-20',
  red: 'red-20',
  yellow: 'yellow-20',
  gray: 'gray-20',
  achromatic: 'white'
};
var TRANSPARENT_COLOR_TEXT_MAP = {
  blue: 'text-blue-60',
  green: 'text-green-60',
  indigo: 'text-indigo-60',
  red: 'text-red-60',
  yellow: 'text-yellow-60',
  gray: 'text-gray-60',
  achromatic: 'text-black'
};
var TRANSPARENT_ICON_COLOR_MAP = {
  blue: 'icon-blue-50',
  green: 'icon-green-50',
  indigo: 'icon-indigo-50',
  red: 'icon-red-50',
  yellow: 'icon-yellow-50',
  gray: 'icon-gray-50',
  achromatic: 'icon-black'
};

var Label = function Label(_ref) {
  var _classNames;

  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'default' : _ref$type,
      iconType = _ref.iconType,
      onClose = _ref.onClose,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'achromatic' : _ref$color,
      className = _ref.className,
      closeButtonLabel = _ref.closeButtonLabel,
      iconTitle = _ref.iconTitle,
      iconAriaHidden = _ref.iconAriaHidden,
      props = _objectWithoutProperties(_ref, _excluded$w);

  if (__DEV__) {
    invariant(!(!iconType && (iconAriaHidden || iconTitle)), 'You cannot hide an icon or name it, when `iconType` s not provided');
    invariant(!(!onClose && closeButtonLabel), // eslint-disable-next-line max-len
    'Button is not rendered when `onClose` is not defined, so it cannot be named');
  }

  var backgroundColor = type === 'default' ? COLORS_DEFAULT_MAP[color] : COLORS_SOLID_MAP[color];
  var labelClass = cx('sg-label', (_classNames = {}, _defineProperty(_classNames, "sg-label--".concat(String(backgroundColor)), backgroundColor && (type === 'solid' || type === 'default')), _defineProperty(_classNames, 'sg-label--closable', onClose), _defineProperty(_classNames, 'sg-label--transparent', type === 'transparent' || type === 'transparent-color'), _classNames), className);
  var textColor = type === 'default' || type === 'transparent' ? TEXT_COLOR['text-black'] : type === 'solid' ? SOLID_COLOR_TEXT_MAP[color] : TRANSPARENT_COLOR_TEXT_MAP[color];
  var iconColor = type === 'default' ? ICON_COLOR$1['icon-black'] : type === 'solid' ? SOLID_ICON_COLOR_MAP[color] : TRANSPARENT_ICON_COLOR_MAP[color];
  var closeIconColor = type === 'default' || type === 'transparent' ? ICON_COLOR$1['icon-black'] : type === 'solid' ? SOLID_ICON_COLOR_MAP[color] : TRANSPARENT_ICON_COLOR_MAP[color];
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: labelClass
  }), iconType && /*#__PURE__*/React.createElement("div", {
    className: "sg-label__icon"
  }, /*#__PURE__*/React.createElement(Icon$2, {
    type: iconType,
    color: iconColor,
    size: 16,
    "aria-hidden": iconAriaHidden,
    title: iconTitle
  })), /*#__PURE__*/React.createElement(Text$1, {
    size: "small",
    weight: "bold",
    color: textColor,
    className: "sg-label__text"
  }, children), onClose ? /*#__PURE__*/React.createElement("button", {
    className: "sg-label__close-button",
    onClick: onClose,
    "aria-label": closeButtonLabel || 'close'
  }, /*#__PURE__*/React.createElement(Icon$2, {
    type: "close",
    color: closeIconColor,
    size: 16,
    "aria-hidden": true
  })) : null);
};

var Label$1 = Label;

var _excluded$v = ["children", "as", "href", "color", "underlined", "unstyled", "emphasised", "disabled", "weight", "className", "inherited", "size", "aria-label", "target", "onClick", "newTabLabel", "hideNewTabIndicator"];
var anchorRelatedProps = ['download', 'hreflang', 'ping', 'referrerpolicy', 'rel'];

var Link = function Link(props) {
  var _ref;

  var children = props.children,
      _props$as = props.as,
      as = _props$as === void 0 ? 'a' : _props$as,
      href = props.href,
      color = props.color,
      _props$underlined = props.underlined,
      underlined = _props$underlined === void 0 ? false : _props$underlined,
      _props$unstyled = props.unstyled,
      unstyled = _props$unstyled === void 0 ? false : _props$unstyled,
      _props$emphasised = props.emphasised,
      emphasised = _props$emphasised === void 0 ? true : _props$emphasised,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      weight = props.weight,
      className = props.className,
      _props$inherited = props.inherited,
      inherited = _props$inherited === void 0 ? false : _props$inherited,
      size = props.size,
      ariaLabel = props['aria-label'],
      target = props.target,
      onClick = props.onClick,
      _props$newTabLabel = props.newTabLabel,
      newTabLabel = _props$newTabLabel === void 0 ? '(opens in a new tab)' : _props$newTabLabel,
      _props$hideNewTabIndi = props.hideNewTabIndicator,
      hideNewTabIndicator = _props$hideNewTabIndi === void 0 ? false : _props$hideNewTabIndi,
      additionalProps = _objectWithoutProperties(props, _excluded$v);

  var _React$useRef = React.useRef(generateId()),
      labelId = _React$useRef.current;

  var textSize;

  if (_typeof(size) === 'object') {
    if (Array.isArray(size)) {
      textSize = size.map(function (sizeItem) {
        return sizeItem;
      });
    } else {
      textSize = {
        sm: size.sm,
        md: size.md,
        lg: size.lg,
        xl: size.xl
      };
    }
  } else if (size) {
    textSize = size;
  }

  if (__DEV__) {
    invariant(!(as === 'a' && !disabled && (href === null || href === undefined)), 'An anchor element without a href will be accessible only for users with a pointing device.');
    invariant(!(as === 'button' && (href || Object.keys(additionalProps).some(function (p) {
      return anchorRelatedProps.includes(p);
    }))), // $FlowFixMe
    "An anchor-related prop is not working for as=\"button\": ".concat(Object.keys(additionalProps)));
  }

  var linkClass = cx.apply(void 0, [(_ref = {}, _defineProperty(_ref, "sg-text--inherited", inherited), _defineProperty(_ref, 'sg-text--link', !underlined && !unstyled), _defineProperty(_ref, 'sg-text--link-underlined', underlined && !unstyled), _defineProperty(_ref, 'sg-text--link-unstyled', !underlined && unstyled), _defineProperty(_ref, 'sg-text--bold', emphasised && !inherited), _defineProperty(_ref, 'sg-text--link-disabled', disabled), _defineProperty(_ref, "sg-text--".concat(String(color)), color && !unstyled), _defineProperty(_ref, 'sg-text--link-label', as === 'button'), _ref)].concat(_toConsumableArray(generateResponsiveClassNames(function (weight) {
    return "sg-text--".concat(weight);
  }, weight)), [className]));

  if (as === 'button') {
    return /*#__PURE__*/React.createElement(Text$1, _extends({}, additionalProps, {
      type: "label",
      className: linkClass,
      size: textSize
    }), /*#__PURE__*/React.createElement("span", {
      id: labelId,
      "aria-label": ariaLabel,
      "aria-hidden": true
    }, children), /*#__PURE__*/React.createElement("button", {
      className: "sg-visually-hidden sg-text--link-button",
      onClick: onClick,
      disabled: disabled,
      type: "button",
      "aria-labelledby": labelId
    }));
  }

  var linkType = disabled ? 'span' : 'a';

  var onLinkClick = function onLinkClick(e) {
    if (!disabled && onClick) {
      return onClick(e);
    }
  };

  return /*#__PURE__*/React.createElement(Text$1, _extends({}, additionalProps, {
    type: linkType,
    href: href || '',
    className: linkClass,
    size: textSize,
    onClick: onLinkClick,
    "aria-label": ariaLabel,
    target: target
  }), children, target === '_blank' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    hidden: hideNewTabIndicator
  }, "\u2B08"), /*#__PURE__*/React.createElement("span", {
    className: "sg-visually-hidden"
  }, newTabLabel)));
};

var Link$1 = Link;

var _excluded$u = ["children", "color", "iconType", "thumbnailSrc", "src", "loading", "onClose", "onClick", "textRef", "className", "ariaCloseButtonLabel", "statusLabel"];
var COLORS_MAP$2 = {
  'gray-20': 'gray-20',
  white: 'white'
};

var FileHandler = function FileHandler(_ref) {
  var children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'gray-20' : _ref$color,
      _ref$iconType = _ref.iconType,
      iconType = _ref$iconType === void 0 ? 'attachment' : _ref$iconType,
      thumbnailSrc = _ref.thumbnailSrc,
      src = _ref.src,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      onClose = _ref.onClose,
      onClick = _ref.onClick,
      textRef = _ref.textRef,
      className = _ref.className,
      _ref$ariaCloseButtonL = _ref.ariaCloseButtonLabel,
      ariaCloseButtonLabel = _ref$ariaCloseButtonL === void 0 ? 'Close' : _ref$ariaCloseButtonL,
      statusLabel = _ref.statusLabel,
      props = _objectWithoutProperties(_ref, _excluded$u);

  var fileHandlerClass = cx('sg-file-handler', _defineProperty({
    'sg-file-handler--closable': onClose
  }, "sg-file-handler--".concat(COLORS_MAP$2[color]), color), className);
  var isActionProvided = src !== undefined || onClick;
  var clickProps = onClick ? {
    onClick: onClick
  } : {
    href: src,
    target: '_blank',
    rel: 'noopener noreferrer'
  };
  var role = clickProps.onClick && 'button';
  var asLink = clickProps.onClick ? 'button' : 'a';
  var thumbnail = thumbnailSrc !== undefined ? /*#__PURE__*/React.createElement("img", {
    src: thumbnailSrc,
    alt: "",
    className: "cursor-pointer"
  }) : /*#__PURE__*/React.createElement(Icon$2, {
    type: iconType,
    size: 24,
    color: "icon-black"
  });
  var interactiveThumbnail = isActionProvided ? /*#__PURE__*/React.createElement("a", _extends({}, clickProps, {
    role: role,
    tabIndex: "0",
    "aria-hidden": true,
    className: "sg-file-handler__link"
  }), thumbnail) : thumbnail;
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: fileHandlerClass
  }), /*#__PURE__*/React.createElement("div", {
    className: "sg-file-handler__icon"
  }, loading ? /*#__PURE__*/React.createElement(Spinner$1, {
    size: "xsmall",
    "aria-label": (statusLabel === null || statusLabel === void 0 ? void 0 : statusLabel.loading) || 'uploading'
  }) : interactiveThumbnail), /*#__PURE__*/React.createElement("span", {
    className: "sg-file-handler__text",
    ref: textRef
  }, /*#__PURE__*/React.createElement("span", {
    className: "sg-visually-hidden",
    "aria-live": "polite"
  }, !loading && ((statusLabel === null || statusLabel === void 0 ? void 0 : statusLabel.uploaded) || 'uploaded')), isActionProvided ? /*#__PURE__*/React.createElement(Link$1, _extends({}, clickProps, {
    size: "small",
    color: "text-black",
    as: asLink,
    className: "sg-file-handler__link"
  }), children) : /*#__PURE__*/React.createElement(Text$1, {
    size: "small",
    weight: "bold"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "sg-file-handler__close-button",
    onClick: onClose,
    "aria-label": ariaCloseButtonLabel
  }, /*#__PURE__*/React.createElement(Icon$2, {
    type: "close",
    size: 16,
    color: "icon-black"
  })));
};

var FileHandler$1 = FileHandler;

var _excluded$t = ["children", "header", "footer", "reversedOrder", "noMaxWidth", "noMarginTop", "fullPage", "threeColumns", "className", "containerClassName", "as"];

var Layout = function Layout(_ref) {
  var children = _ref.children,
      header = _ref.header,
      footer = _ref.footer,
      reversedOrder = _ref.reversedOrder,
      noMaxWidth = _ref.noMaxWidth,
      noMarginTop = _ref.noMarginTop,
      fullPage = _ref.fullPage,
      threeColumns = _ref.threeColumns,
      className = _ref.className,
      containerClassName = _ref.containerClassName,
      _ref$as = _ref.as,
      Type = _ref$as === void 0 ? 'div' : _ref$as,
      props = _objectWithoutProperties(_ref, _excluded$t);

  var layoutClass = cx('sg-layout', className, {
    'sg-layout--three-columns': threeColumns
  });
  var layoutContainerClass = cx('sg-layout__container', containerClassName, {
    'sg-layout__container--reversed-order': reversedOrder,
    'sg-layout__container--no-max-width': noMaxWidth,
    'sg-layout__container--no-margin-top': noMarginTop,
    'sg-layout__container--full-page': fullPage
  });
  var footerContent;

  if (footer !== undefined) {
    footerContent = /*#__PURE__*/React.createElement("div", {
      className: "sg-layout__footer"
    }, footer);
  }

  return /*#__PURE__*/React.createElement(Type, _extends({}, props, {
    className: layoutClass
  }), header, /*#__PURE__*/React.createElement("div", {
    className: layoutContainerClass
  }, children), footerContent);
};

var Layout$1 = Layout;

var _excluded$s = ["children", "className", "as"];

var LayoutAsideContent = function LayoutAsideContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$as = _ref.as,
      Type = _ref$as === void 0 ? 'div' : _ref$as,
      props = _objectWithoutProperties(_ref, _excluded$s);

  var layoutClass = cx('sg-layout__aside-content', className);
  return /*#__PURE__*/React.createElement(Type, _extends({}, props, {
    className: layoutClass
  }), children);
};

var LayoutAsideContent$1 = LayoutAsideContent;

var _excluded$r = ["children", "noMaxWidth", "center", "className", "as"];

var LayoutContent = function LayoutContent(_ref) {
  var children = _ref.children,
      noMaxWidth = _ref.noMaxWidth,
      center = _ref.center,
      className = _ref.className,
      _ref$as = _ref.as,
      Type = _ref$as === void 0 ? 'div' : _ref$as,
      props = _objectWithoutProperties(_ref, _excluded$r);

  var layoutContentClass = cx('sg-layout__content', {
    'sg-layout__content--no-max-width': noMaxWidth,
    'sg-layout__content--center': center
  }, className);
  return /*#__PURE__*/React.createElement(Type, _extends({}, props, {
    className: layoutContentClass
  }), children);
};

var LayoutContent$1 = LayoutContent;

var _excluded$q = ["children", "className", "as"];

var LayoutSecondaryContent = function LayoutSecondaryContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$as = _ref.as,
      Type = _ref$as === void 0 ? 'div' : _ref$as,
      props = _objectWithoutProperties(_ref, _excluded$q);

  var layoutClass = cx('sg-layout__secondary-content', className);
  return /*#__PURE__*/React.createElement(Type, _extends({}, props, {
    className: layoutClass
  }), children);
};

var LayoutSecondaryContent$1 = LayoutSecondaryContent;

var _excluded$p = ["spaced", "className", "ordered", "children"];

var List = function List(_ref) {
  var spaced = _ref.spaced,
      className = _ref.className,
      ordered = _ref.ordered,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$p);

  var listClass = cx('sg-list', {
    'sg-list--spaced-elements': spaced
  }, className);
  var Tag = ordered ? 'ol' : 'ul';
  return /*#__PURE__*/React.createElement(Tag, _extends({}, props, {
    className: listClass,
    role: "list"
  }), children);
};

var List$1 = List;

var _excluded$o = ["children", "className"];

var ListItem = function ListItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$o);

  var listItemClass = cx('sg-list__element', className);
  return /*#__PURE__*/React.createElement("li", _extends({}, props, {
    className: listItemClass
  }), children);
};

var ListItem$1 = ListItem;

var _excluded$n = ["small", "children", "className"];

var ListItemIcon = function ListItemIcon(_ref) {
  var small = _ref.small,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$n);

  var iconClass = cx('sg-list__icon', {
    'sg-list__icon--spacing-right-small': small
  }, className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: iconClass
  }), children);
};

var ListItemIcon$1 = ListItemIcon;

var _excluded$m = ["text", "href", "type", "className"];

var MenuItem = function MenuItem(_ref) {
  var text = _ref.text,
      href = _ref.href,
      type = _ref.type,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, _excluded$m);

  var Type = type !== undefined ? type : 'a';
  var elementClass = cx('sg-menu-list__link', className);
  return /*#__PURE__*/React.createElement("li", {
    className: "sg-menu-list__element"
  }, /*#__PURE__*/React.createElement(Type, _extends({}, restProps, {
    className: elementClass,
    href: href
  }), text));
};

var MenuItem$1 = MenuItem;

var _excluded$l = ["items", "size", "className"];
var SIZE$3 = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large'
};

// This component is deprecated
var MenuList = function MenuList(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE$3.NORMAL : _ref$size,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$l);

  var listClass = cx('sg-menu-list', _defineProperty({}, "sg-menu-list--".concat(size), size !== SIZE$3.NORMAL), className);
  return /*#__PURE__*/React.createElement("ul", _extends({}, props, {
    className: listClass
  }), items.map(function (_ref2, index) {
    var elementProps = _extends({}, _ref2);

    return /*#__PURE__*/React.createElement(MenuItem$1, _extends({}, elementProps, {
      key: index
    }));
  }));
};

var MenuList$1 = MenuList;

var _excluded$k = ["type", "className", "alt"];
var TYPE$1 = {
  BRAINLY: 'brainly',
  BRAINLY_MOBILE: 'brainly-mobile',
  EODEV: 'eodev',
  EODEV_MOBILE: 'eodev-mobile',
  NOSDEVOIRS: 'nosdevoirs',
  NOSDEVOIRS_MOBILE: 'nosdevoirs-mobile',
  ZNANIJA: 'znanija',
  ZNANIJA_MOBILE: 'znanija-mobile',
  ZNANIJA_PLUS: 'znanija-plus',
  ZNANIJA_PLUS_INVERSE: 'znanija-plus-inverse',
  ZNANIJA_PLUS_SMALL: 'znanija-plus-small',
  BRAINLY_PLUS: 'brainly-plus',
  BRAINLY_PLUS_VAR_A: 'brainly-plus-var-a',
  BRAINLY_PLUS_VAR_B: 'brainly-plus-var-b',
  BRAINLY_PLUS_INVERSE: 'brainly-plus-inverse',
  BRAINLY_PLUS_SMALL: 'brainly-plus-small',
  BRAINLY_TUTORING: 'brainly-tutoring',
  BRAINLY_TUTORING_SMALL: 'brainly-tutoring-small',
  LOGO_TUTOR: 'logo-tutor',
  LOGO_MATH_SOLVER: 'logo-math-solver',
  LOGO_COMMUNITY_QA: 'logo-community-qa',
  LOGO_TEXTBOOK_DETECTIVE: 'logo-textbook-detective',
  BRAINLY_LOGOTYPE_TUTOR: 'brainly-logotype-tutor',
  BRAINLY_LOGOTYPE_MATH_SOLVER: 'brainly-logotype-math-solver',
  BRAINLY_LOGOTYPE_COMMUNITY_QA: 'brainly-logotype-community-qa',
  BRAINLY_LOGOTYPE_TEXTBOOK_DETECTIVE: 'brainly-logotype-textbook-detective'
};

function getDefaultAlt(type) {
  var replacers = [{
    regexp: /-mobile/g,
    newSubstr: ''
  }, {
    regexp: /-inverse/g,
    newSubstr: ''
  }, {
    regexp: /-small/g,
    newSubstr: ''
  }, {
    regexp: /-logotype-/g,
    newSubstr: ' '
  }, {
    regexp: /logo-/g,
    newSubstr: ''
  }, {
    regexp: /-/g,
    newSubstr: ' '
  }];
  return replacers.reduce(function (alt, _ref) {
    var regexp = _ref.regexp,
        newSubstr = _ref.newSubstr;
    return alt.replace(regexp, newSubstr);
  }, type);
}

var Logo = function Logo(_ref2) {
  var _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? TYPE$1.BRAINLY : _ref2$type,
      className = _ref2.className,
      alt = _ref2.alt,
      props = _objectWithoutProperties(_ref2, _excluded$k);

  var logoClass = cx('sg-logo', _defineProperty({}, "sg-logo--".concat(type), type !== TYPE$1.BRAINLY), className);
  var logoPath = "".concat(getLogoUrl(type));
  var defaultAlt = getDefaultAlt(type);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: logoClass,
    "data-logotype": type
  }), /*#__PURE__*/React.createElement("img", {
    className: "sg-logo__image",
    src: logoPath,
    alt: alt !== null && alt !== void 0 ? alt : defaultAlt
  }));
};

var Logo$1 = Logo;

var _excluded$j = ["type", "size", "color", "className", "title"];
var MATH_SYMBOL_TYPE = {
  SQUERE_ROOT: 'squere-root',
  NTH_ROOT: 'nth-root',
  POWER: 'power',
  SUBSCRIPT: 'subscript',
  LESSEQUAL: 'less-then-or-equal',
  GREATEREQUAL: 'greater-then-or-equal',
  INEQUALITY: 'inequality',
  DIVISION: 'division',
  PI: 'pi',
  ALPHA: 'alpha',
  BETA: 'beta',
  LINE: 'line',
  LIMIT: 'limit',
  MATRIX: 'matrix',
  INTEGRAL: 'integral',
  EQUATION_SYSTEM: 'equation-system'
};
var WIDE = [MATH_SYMBOL_TYPE.LIMIT, MATH_SYMBOL_TYPE.MATRIX, MATH_SYMBOL_TYPE.INTEGRAL, MATH_SYMBOL_TYPE.EQUATION_SYSTEM];
var SIZE$2 = {
  SMALL: 'small',
  MEDIUM: 'medium',
  NORMAL: 'normal'
};

var MathSymbol = function MathSymbol(_ref) {
  var _classNames;

  var type = _ref.type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE$2.NORMAL : _ref$size,
      color = _ref.color,
      className = _ref.className,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$j);

  var isWide = WIDE.indexOf(type) !== -1;
  var iconClass = cx('sg-math-symbol-icon', (_classNames = {}, _defineProperty(_classNames, "sg-math-symbol-icon--".concat(size), !isWide && size !== SIZE$2.NORMAL), _defineProperty(_classNames, "sg-math-symbol-icon--wide-".concat(size), isWide && size !== SIZE$2.NORMAL), _defineProperty(_classNames, 'sg-math-symbol-icon--wide', isWide && size === SIZE$2.NORMAL), _defineProperty(_classNames, "sg-math-symbol-icon--".concat(String(color)), color), _classNames), className);
  var iconType = "#sg-math-symbol-icon-".concat(type);
  var titleId = "sg-math-symbol-icon-".concat(type, "-title");
  var defaultTitle = type.replace(/-/g, ' ');
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    className: iconClass,
    "aria-labelledby": titleId,
    role: "img"
  }), /*#__PURE__*/React.createElement("text", {
    id: titleId,
    hidden: true
  }, title || defaultTitle), /*#__PURE__*/React.createElement("use", {
    xlinkHref: iconType,
    "arya-hidden": "true"
  }));
};

var MathSymbol$1 = MathSymbol;

var _excluded$i = ["contentArray", "aside", "className", "toRight", "clickable", "noPadding", "small", "spacedBottom", "color"];

var Media = function Media(props) {
  var _props$contentArray = props.contentArray,
      contentArray = _props$contentArray === void 0 ? [] : _props$contentArray,
      aside = props.aside,
      className = props.className,
      toRight = props.toRight,
      clickable = props.clickable,
      noPadding = props.noPadding,
      small = props.small,
      spacedBottom = props.spacedBottom,
      _props$color = props.color,
      color = _props$color === void 0 ? 'white' : _props$color,
      restProps = _objectWithoutProperties(props, _excluded$i);

  var mediaClassName = cx('sg-media', _defineProperty({
    'sg-media--to-right': toRight,
    'sg-media--clickable': clickable,
    'sg-media--no-padding': noPadding
  }, "sg-media--".concat(String(color)), color), className);
  var contentClassName = cx('sg-media__content', {
    'sg-media__content--small': small,
    'sg-media__content--spaced-bottom': spacedBottom
  });
  return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
    className: mediaClassName
  }), /*#__PURE__*/React.createElement("div", {
    className: "sg-media__aside"
  }, aside), /*#__PURE__*/React.createElement("div", {
    className: "sg-media__wrapper"
  }, contentArray.map(function (content, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: contentClassName
    }, content);
  })));
};

var Media$1 = Media;

var _excluded$h = ["partial", "children", "className", "color"];
var COLOR = {
  BLUE: 'blue',
  BLACK: 'black'
};

var Overlay = function Overlay(_ref) {
  var partial = _ref.partial,
      children = _ref.children,
      className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? COLOR.BLUE : _ref$color,
      props = _objectWithoutProperties(_ref, _excluded$h);

  var overlayClass = cx('sg-overlay', _defineProperty({
    'sg-overlay--partial': partial
  }, "sg-overlay--".concat(String(color)), color), className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: overlayClass
  }), children);
};

var Overlay$1 = Overlay;

var _excluded$g = ["overlay", "children", "className"];

var OverlayedBox = function OverlayedBox(_ref) {
  var overlay = _ref.overlay,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$g);

  var boxClass = cx('sg-overlayed-box', className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: boxClass
  }), children, /*#__PURE__*/React.createElement("div", {
    className: "sg-overlayed-box__overlay"
  }, overlay));
};

var OverlayedBox$1 = OverlayedBox;

var _excluded$f = ["items", "extraSpacing", "className"];

// This component is deprecated
var PopupMenu = function PopupMenu(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      extraSpacing = _ref.extraSpacing,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$f);

  var popupMenuClass = cx('sg-popup-menu', {
    'sg-popup-menu--elements-spaced': extraSpacing
  }, className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: popupMenuClass
  }), items.map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "sg-popup-menu__hole"
    }, item);
  }));
};

var PopupMenu$1 = PopupMenu;

var _excluded$e = ["size", "name", "onChange", "active", "aria-label", "value"];
var Icon = Icon$2,
    ICON_COLOR = ICON_COLOR$1;

var Star = function Star(_ref) {
  var size = _ref.size,
      name = _ref.name,
      onChange = _ref.onChange,
      active = _ref.active,
      label = _ref['aria-label'],
      value = _ref.value,
      props = _objectWithoutProperties(_ref, _excluded$e);

  if (__DEV__) {
    invariant(!(!active && name || !active && label || !active && value), 'name/label/value is not working in non-active Star');
  }

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: "sg-rate-box__star"
  }), active && /*#__PURE__*/React.createElement("input", {
    type: "radio",
    className: "sg-rate-box__radio",
    name: name,
    onChange: onChange,
    value: value,
    "aria-label": label
  }), /*#__PURE__*/React.createElement(Icon, {
    type: "star",
    size: size,
    color: ICON_COLOR.ADAPTIVE,
    className: "sg-rate-box__star-icon",
    "aria-hidden": true
  }));
};

var Star$1 = Star;

var RateCounterItem = function RateCounterItem(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "sg-rate-box__counter-item-static"
  }, text), /*#__PURE__*/React.createElement("div", {
    className: "sg-rate-box__counter-item-dynamic"
  }, text));
};

var RateCounterItem$1 = RateCounterItem;

var RateCounter = function RateCounter(_ref) {
  var activeText = _ref.activeText,
      counterText = _ref.counterText;
  return /*#__PURE__*/React.createElement("div", {
    className: "sg-rate-box__counter"
  }, /*#__PURE__*/React.createElement(RateCounterItem$1, {
    text: counterText
  }), /*#__PURE__*/React.createElement(RateCounterItem$1, {
    text: activeText
  }));
};

var RateCounter$1 = RateCounter;

var RATING_SIZE = {
  XS: 'xs',
  S: 's'
};

var generateArrayRange = function generateArrayRange(range) {
  var array = Array(range);

  for (var i = 0; i < range; i++) {
    array[i] = i;
  }

  return array;
};

function generateName() {
  return "rating".concat(Math.random().toString(36).substring(7));
}

/* eslint-disable react/default-props-match-prop-types */
// legacy files without proper flow checks can suffer from this
var Rating = /*#__PURE__*/function (_React$Component) {
  _inherits(Rating, _React$Component);

  var _super = _createSuper(Rating);

  function Rating(props) {
    var _this;

    _classCallCheck(this, Rating);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "name", void 0);

    _defineProperty(_assertThisInitialized(_this), "starsOnChangeFunctions", []);

    _defineProperty(_assertThisInitialized(_this), "starsMouseEnterFunctions", []);

    _defineProperty(_assertThisInitialized(_this), "onStarChange", function (index) {
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

    _this.createStarsOnChangeFunctions(_this.props.metricSize);

    _this.createStarsMouseEnterFunctions(_this.props.metricSize);

    _this.name = generateName();
    return _this;
  }

  _createClass(Rating, [{
    key: "componentWillReciveProps",
    value: function componentWillReciveProps(nextProps) {
      if (this.props.metricSize !== nextProps.metricSize) {
        this.createStarsOnChangeFunctions(nextProps.metricSize);
        this.createStarsMouseEnterFunctions(this.props.metricSize);
      }
    }
  }, {
    key: "createStarsOnChangeFunctions",
    value: function createStarsOnChangeFunctions(metricSize) {
      var _this2 = this;

      this.starsOnChangeFunctions = generateArrayRange(metricSize).map(function (rangeIndex) {
        return function () {
          return _this2.onStarChange(rangeIndex);
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
          size = _this$props3$size === void 0 ? RATING_SIZE.XS : _this$props3$size,
          active = _this$props3.active,
          className = _this$props3.className,
          counterText = _this$props3.counterText,
          activeText = _this$props3.activeText,
          label = _this$props3['aria-label'],
          _this$props3$noLabel = _this$props3.noLabel,
          noLabel = _this$props3$noLabel === void 0 ? false : _this$props3$noLabel;
      var ratingClass = cx('sg-rate-box', {
        'sg-rate-box--s': size === RATING_SIZE.S,
        'sg-rate-box--active': active
      }, className);
      var starsProps = generateArrayRange(metricSize).map(function (rangeIndex) {
        return {
          size: size === 's' ? 32 : 24,
          onChange: _this4.starsOnChangeFunctions[rangeIndex],
          active: active,
          name: _this4.name,
          'aria-label': "".concat(rangeIndex + 1, "/").concat(metricSize),
          value: rangeIndex + 1
        };
      });
      var rateString = rate.toLocaleString(undefined, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
      });
      var rateLabel = "".concat(activeText || '', ", min: 1, max: ").concat(metricSize);
      var metricString = "".concat(rate, "/").concat(metricSize);

      if (__DEV__) {
        invariant(!(active && !this.props.onChange), // eslint-disable-next-line max-len
        'You provided an `active` prop to a Rating without an `onChange` handler. Users won`t be able to rate.');
        invariant(!(!active && this.props.onChange), // eslint-disable-next-line max-len
        'You provided an `onChange` handler to a Rating without an `active` prop. Users won`t be able to rate.');
      }

      return /*#__PURE__*/React.createElement("div", {
        className: ratingClass,
        "aria-label": label
      }, /*#__PURE__*/React.createElement("p", {
        className: "sg-rate-box__rate"
      }, !noLabel && /*#__PURE__*/React.createElement("span", {
        "aria-hidden": true
      }, rateString), rate && /*#__PURE__*/React.createElement("span", {
        className: "sg-visually-hidden"
      }, metricString)), /*#__PURE__*/React.createElement("div", {
        className: "sg-rate-box__stars-container",
        onMouseLeave: this.onMouseLeave
      }, /*#__PURE__*/React.createElement("div", {
        className: "sg-rate-box__filled-stars",
        style: {
          width: "".concat(100 * rate / metricSize, "%")
        },
        "aria-hidden": true
      }, starsProps.map(function (props) {
        return /*#__PURE__*/React.createElement(Star$1, {
          key: props.value,
          size: props.size
        });
      })), /*#__PURE__*/React.createElement("div", {
        className: "sg-rate-box__background-stars",
        role: "radiogroup",
        "aria-hidden": !active,
        "aria-label": rateLabel
      }, starsProps.map(function (props) {
        return /*#__PURE__*/React.createElement(Star$1, _extends({
          key: props.value,
          onMouseEnter: _this4.starsMouseEnterFunctions[props.value]
        }, props));
      }))), /*#__PURE__*/React.createElement(RateCounter$1, {
        activeText: activeText,
        counterText: counterText
      }));
    }
  }]);

  return Rating;
}(React.Component);

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
  rate: 0,
  'aria-label': 'current rate'
});

var Rating$1 = Rating;

var _excluded$d = ["className", "fullWidth", "size", "withRoundButton", "inputClassName"];

// TODO: make back to spread (...InputModule.InputPropsType) after flow bump
var Search = function Search(_ref) {
  var _cx;

  var className = _ref.className,
      fullWidth = _ref.fullWidth,
      size = _ref.size,
      _ref$withRoundButton = _ref.withRoundButton,
      withRoundButton = _ref$withRoundButton === void 0 ? false : _ref$withRoundButton,
      inputClassName = _ref.inputClassName,
      additionalProps = _objectWithoutProperties(_ref, _excluded$d);

  var baseClassName = 'sg-search';
  var searchClassName = cx(baseClassName, (_cx = {}, _defineProperty(_cx, "sg-search--".concat(String(size)), size), _defineProperty(_cx, 'sg-search--full-width', fullWidth), _cx), className);
  return /*#__PURE__*/React.createElement("div", {
    className: searchClassName
  }, /*#__PURE__*/React.createElement(Input$1, _extends({}, additionalProps, {
    type: "search",
    withIcon: true,
    size: size,
    className: cx("".concat(baseClassName, "__input"), inputClassName),
    fullWidth: true
  })), withRoundButton ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(baseClassName, "__icon")
  }, /*#__PURE__*/React.createElement(Button$1, {
    variant: "solid",
    className: cx({
      'sg-search-button--s': size === 's'
    }),
    icon: /*#__PURE__*/React.createElement(Icon$2, {
      type: "search",
      size: size === 'l' ? 24 : 16,
      color: "adaptive"
    }),
    iconOnly: true,
    size: size === 'l' ? 'm' : 's'
  })) : /*#__PURE__*/React.createElement("button", {
    className: "".concat(baseClassName, "__icon")
  }, /*#__PURE__*/React.createElement(Icon$2, {
    type: "search",
    color: ICON_COLOR$1['icon-gray-50'],
    size: size === 'l' ? 24 : 16
  })));
};

var Search$1 = Search;

var _excluded$c = ["type", "color", "className"];
var COLORS_MAP$1 = {
  white: 'white',
  'gray-50': 'gray-50',
  'gray-40': 'gray-40'
};
var TYPE = {
  NORMAL: 'normal',
  SPACED: 'spaced',
  SHORT_SPACED: 'short-spaced'
};

var SeparatorHorizontal = function SeparatorHorizontal(_ref) {
  var _classNames;

  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? TYPE.NORMAL : _ref$type,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? COLORS_MAP$1['gray-40'] : _ref$color,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$c);

  var separatorClass = cx('sg-horizontal-separator', (_classNames = {}, _defineProperty(_classNames, "sg-horizontal-separator--".concat(type), type !== TYPE.NORMAL), _defineProperty(_classNames, "sg-horizontal-separator--".concat(String(color)), color), _classNames), className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: separatorClass,
    role: "separator"
  }));
};

var SeparatorHorizontal$1 = SeparatorHorizontal;

var _excluded$b = ["size", "color", "className"];
var SIZE$1 = {
  NORMAL: 'normal',
  SMALL: 'small',
  LARGE: 'large',
  FULL: 'full'
};
var COLORS_MAP = {
  white: 'white',
  'gray-50': 'gray-50',
  'gray-40': 'gray-40'
};

var Separator = function Separator(_ref) {
  var _classNames;

  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE$1.NORMAL : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? COLORS_MAP['gray-40'] : _ref$color,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$b);

  var separatorClass = cx('sg-vertical-separator', (_classNames = {}, _defineProperty(_classNames, "sg-vertical-separator--".concat(size), size !== SIZE$1.NORMAL), _defineProperty(_classNames, "sg-vertical-separator--".concat(String(color)), color), _classNames), className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: separatorClass,
    role: "separator",
    "aria-orientation": "vertical"
  }));
};

var Separator$1 = Separator;

var _excluded$a = ["loading", "color", "fullWidth", "size", "children", "ariaStatusLabel", "aria-live"];

var SpinnerContainer = function SpinnerContainer(_ref) {
  var loading = _ref.loading,
      color = _ref.color,
      fullWidth = _ref.fullWidth,
      size = _ref.size,
      children = _ref.children,
      _ref$ariaStatusLabel = _ref.ariaStatusLabel,
      ariaStatusLabel = _ref$ariaStatusLabel === void 0 ? {
    loaded: 'content loaded',
    loading: 'content is loading'
  } : _ref$ariaStatusLabel,
      _ref$ariaLive = _ref['aria-live'],
      ariaLive = _ref$ariaLive === void 0 ? 'assertive' : _ref$ariaLive,
      props = _objectWithoutProperties(_ref, _excluded$a);

  var childrenWithAriaBusy = React.useMemo(function () {
    if (!loading) {
      return children;
    }

    return React.Children.map(children, function (child) {
      if ( /*#__PURE__*/React.isValidElement(child)) {
        return /*#__PURE__*/React.cloneElement(child, {
          'aria-busy': loading
        });
      }

      return child;
    });
  }, [children, loading]);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: cx('sg-spinner-container', {
      'sg-spinner-container--full-width': fullWidth
    })
  }), loading ? /*#__PURE__*/React.createElement("div", {
    className: "sg-spinner-container__overlay"
  }, /*#__PURE__*/React.createElement(Spinner$1, {
    color: color,
    size: size,
    "aria-label": ariaStatusLabel.loading,
    "aria-live": ariaLive
  })) : /*#__PURE__*/React.createElement("span", {
    className: "sg-visually-hidden",
    "aria-live": ariaLive,
    role: "status",
    "aria-atomic": "true"
  }, ariaStatusLabel.loaded), childrenWithAriaBusy);
};

var SpinnerContainer$1 = SpinnerContainer;

var _excluded$9 = ["type", "size", "monoColor", "className", "title"];
var SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  NORMAL: 'normal'
};

var SubjectIcon = function SubjectIcon(_ref) {
  var _classNames;

  var type = _ref.type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE.NORMAL : _ref$size,
      monoColor = _ref.monoColor,
      className = _ref.className,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$9);

  var iconClass = cx('sg-subject-icon', (_classNames = {}, _defineProperty(_classNames, "sg-subject-icon--".concat(size), size !== SIZE.NORMAL), _defineProperty(_classNames, "sg-subject-icon--".concat(String(monoColor)), monoColor !== ICON_COLOR$1['icon-white'] && monoColor !== undefined), _classNames), className);
  var iconType = "#icon-subject-".concat(monoColor ? 'mono-' : '').concat(type);
  var titleId = "sg-math-symbol-icon-".concat(type, "-title");
  var defaultTitle = type.replace(/-alt$/g, '').replace(/-/g, ' ');
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    className: iconClass,
    "aria-labelledby": titleId,
    role: "img"
  }), /*#__PURE__*/React.createElement("text", {
    id: titleId,
    hidden: true
  }, title || defaultTitle), /*#__PURE__*/React.createElement("use", {
    xlinkHref: iconType,
    "aria-hidden": "true"
  }));
};

var SubjectIcon$1 = SubjectIcon;

var _excluded$8 = ["type", "size", "darker", "className"];

var SubjectIconBox = function SubjectIconBox(_ref) {
  var type = _ref.type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE.NORMAL : _ref$size,
      darker = _ref.darker,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$8);

  var boxClass = cx('sg-subject-icon-box', {
    'sg-subject-icon-box--darker': darker
  }, className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: boxClass
  }), /*#__PURE__*/React.createElement(SubjectIcon$1, {
    type: type,
    size: size
  }));
};

var SubjectIconBox$1 = SubjectIconBox;

var HEADLINE_TYPE = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  SPAN: 'span',
  BLOCKQUOTE: 'blockquote',
  Q: 'q',
  STRONG: 'strong',
  EM: 'em',
  DEL: 'del',
  INS: 'ins'
};

var _excluded$7 = ["children", "type", "size", "extraBold", "transform", "align", "color", "className", "inherited"];

var Headline = function Headline(_ref) {
  var _ref2;

  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? HEADLINE_TYPE.H1 : _ref$type,
      size = _ref.size,
      extraBold = _ref.extraBold,
      transform = _ref.transform,
      align = _ref.align,
      color = _ref.color,
      className = _ref.className,
      _ref$inherited = _ref.inherited,
      inherited = _ref$inherited === void 0 ? false : _ref$inherited,
      props = _objectWithoutProperties(_ref, _excluded$7);

  var Type = type;
  var headlineClass = cx.apply(void 0, ['sg-headline', (_ref2 = {
    'sg-headline--inherited': inherited
  }, _defineProperty(_ref2, "sg-headline--".concat(String(color)), color), _defineProperty(_ref2, 'sg-headline--extra-bold', type === 'strong'), _ref2)].concat(_toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return "sg-headline--".concat(propValue);
  }, size)), _toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return "sg-headline--".concat(propValue);
  }, transform)), _toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return propValue ? "sg-headline--extra-bold" : 'sg-headline--no-bold';
  }, extraBold)), _toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return "sg-headline--".concat(propValue);
  }, align)), [className]));
  return /*#__PURE__*/React.createElement(Type, _extends({}, props, {
    className: headlineClass
  }), children);
};

var Headline$1 = Headline;

var SUBHEADLINE_TYPE = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  SPAN: 'span',
  BLOCKQUOTE: 'blockquote',
  Q: 'q',
  STRONG: 'strong',
  EM: 'em',
  DEL: 'del',
  INS: 'ins'
};

var _excluded$6 = ["children", "type", "size", "transform", "align", "color", "className", "inherited"];

var Subheadline = function Subheadline(_ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? SUBHEADLINE_TYPE.H2 : _ref$type,
      size = _ref.size,
      transform = _ref.transform,
      align = _ref.align,
      color = _ref.color,
      className = _ref.className,
      _ref$inherited = _ref.inherited,
      inherited = _ref$inherited === void 0 ? false : _ref$inherited,
      props = _objectWithoutProperties(_ref, _excluded$6);

  var Type = type;
  var subheadlineClass = cx.apply(void 0, ['sg-subheadline', _defineProperty({
    'sg-subheadline--inherited': inherited
  }, "sg-subheadline--".concat(String(color)), color)].concat(_toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return "sg-subheadline--".concat(propValue);
  }, size)), _toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return "sg-subheadline--".concat(propValue);
  }, transform)), _toConsumableArray(generateResponsiveClassNames(function (propValue) {
    return "sg-subheadline--".concat(propValue);
  }, align)), [className]));
  return /*#__PURE__*/React.createElement(Type, _extends({}, props, {
    className: subheadlineClass
  }), children);
};

var Subheadline$1 = Subheadline;

var _excluded$5 = ["children", "type", "size", "color", "className", "inherited"];
var TEXT_BIT_TYPE = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  DIV: 'div',
  SPAN: 'span',
  BLOCKQUOTE: 'blockquote',
  Q: 'q',
  STRONG: 'strong',
  EM: 'em',
  DEL: 'del',
  INS: 'ins'
};

var TextBit = function TextBit(_ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? TEXT_BIT_TYPE.H1 : _ref$type,
      size = _ref.size,
      color = _ref.color,
      className = _ref.className,
      inherited = _ref.inherited,
      props = _objectWithoutProperties(_ref, _excluded$5);

  var Type = type;
  var textClass = cx.apply(void 0, ['sg-text-bit'].concat(_toConsumableArray(generateResponsiveClassNames(function (size) {
    return "sg-text-bit--".concat(size);
  }, size)), [_defineProperty({
    'sg-text-bit--inherited': inherited
  }, "sg-text-bit--".concat(color || ''), color), className]));
  return /*#__PURE__*/React.createElement(Type, _extends({}, props, {
    className: textClass
  }), children);
};

var TextBit$1 = TextBit;

var _excluded$4 = ["children", "onClose", "size", "lead", "fill", "modal", "withBugbox", "smallSpaced", "splashScreen", "limitedWidth", "row", "noPadding", "transparent", "className", "onCloseButtonKeyDown"];

var TopLayer = function TopLayer(props) {
  var children = props.children,
      onClose = props.onClose,
      size = props.size,
      lead = props.lead,
      fill = props.fill,
      modal = props.modal,
      withBugbox = props.withBugbox,
      smallSpaced = props.smallSpaced,
      splashScreen = props.splashScreen,
      limitedWidth = props.limitedWidth,
      row = props.row,
      noPadding = props.noPadding,
      transparent = props.transparent,
      className = props.className,
      onCloseButtonKeyDown = props.onCloseButtonKeyDown,
      additionalProps = _objectWithoutProperties(props, _excluded$4);

  var topLayerClassName = cx('sg-toplayer', _defineProperty({
    'sg-toplayer--lead': lead,
    'sg-toplayer--fill': fill,
    'sg-toplayer--modal': modal,
    'sg-toplayer--with-bugbox': withBugbox,
    'sg-toplayer--small-spaced': smallSpaced,
    'sg-toplayer--splash-screen': splashScreen,
    'sg-toplayer--limited-width': limitedWidth,
    'sg-toplayer--row': row,
    'sg-toplayer--transparent': transparent
  }, "sg-toplayer--".concat(String(size)), size), className);
  var toplayerWrapperClassName = cx('sg-toplayer__wrapper', {
    'sg-toplayer__wrapper--no-padding': noPadding
  });
  return /*#__PURE__*/React.createElement("div", _extends({}, additionalProps, {
    className: topLayerClassName
  }), onClose ? /*#__PURE__*/React.createElement("div", {
    className: "sg-toplayer__close",
    onClick: onClose,
    onKeyDown: onCloseButtonKeyDown,
    role: "button",
    tabIndex: 0
  }, /*#__PURE__*/React.createElement(Icon$2, {
    type: "close",
    color: ICON_COLOR$1['icon-gray-50'],
    size: 24
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: toplayerWrapperClassName
  }, children));
};

var TopLayer$1 = TopLayer;

/* This file is used to generate scss and css colors variables during build process. */

var color = {
  fullColorPalette: [{
    name: 'black',
    variable: '$black',
    hex: '000000'
  }, {
    name: 'white',
    variable: '$white',
    hex: 'ffffff'
  }, {
    name: 'blue-70',
    variable: '$blue-70',
    hex: '002238'
  }, {
    name: 'blue-60',
    variable: '$blue-60',
    hex: '014a82'
  }, {
    name: 'blue-50',
    variable: '$blue-50',
    hex: '0089e3'
  }, {
    name: 'blue-40',
    variable: '$blue-40',
    hex: '4fb3f6'
  }, {
    name: 'blue-30',
    variable: '$blue-30',
    hex: 'b9e2fe'
  }, {
    name: 'blue-20',
    variable: '$blue-20',
    hex: 'd9f0ff'
  }, {
    name: 'blue-10',
    variable: '$blue-10',
    hex: 'edf8ff'
  }, {
    name: 'green-70',
    variable: '$green-70',
    hex: '002e13'
  }, {
    name: 'green-60',
    variable: '$green-60',
    hex: '00672e'
  }, {
    name: 'green-50',
    variable: '$green-50',
    hex: '24a865'
  }, {
    name: 'green-40',
    variable: '$green-40',
    hex: '60d399'
  }, {
    name: 'green-30',
    variable: '$green-30',
    hex: '9ce8c2'
  }, {
    name: 'green-20',
    variable: '$green-20',
    hex: 'e3f7ed'
  }, {
    name: 'green-10',
    variable: '$green-10',
    hex: 'f0faf5'
  }, {
    name: 'indigo-70',
    variable: '$indigo-70',
    hex: '0c114d'
  }, {
    name: 'indigo-60',
    variable: '$indigo-60',
    hex: '133191'
  }, {
    name: 'indigo-50',
    variable: '$indigo-50',
    hex: '163bf3'
  }, {
    name: 'indigo-40',
    variable: '$indigo-40',
    hex: '6d83f3'
  }, {
    name: 'indigo-30',
    variable: '$indigo-30',
    hex: 'bdc7fb'
  }, {
    name: 'indigo-20',
    variable: '$indigo-20',
    hex: 'ebeeff'
  }, {
    name: 'indigo-10',
    variable: '$indigo-10',
    hex: 'f2f4ff'
  }, {
    name: 'red-70',
    variable: '$red-70',
    hex: '8d1a00'
  }, {
    name: 'red-60',
    variable: '$red-60',
    hex: 'cf1d00'
  }, {
    name: 'red-50',
    variable: '$red-50',
    hex: 'ff341a'
  }, {
    name: 'red-40',
    variable: '$red-40',
    hex: 'ff7968'
  }, {
    name: 'red-30',
    variable: '$red-30',
    hex: 'ffc7bf'
  }, {
    name: 'red-20',
    variable: '$red-20',
    hex: 'ffe8e5'
  }, {
    name: 'red-10',
    variable: '$red-10',
    hex: 'fff1f0'
  }, {
    name: 'yellow-70',
    variable: '$yellow-70',
    hex: '5b3100'
  }, {
    name: 'yellow-60',
    variable: '$yellow-60',
    hex: '935000'
  }, {
    name: 'yellow-50',
    variable: '$yellow-50',
    hex: 'c98600'
  }, {
    name: 'yellow-40',
    variable: '$yellow-40',
    hex: 'fbbe2e'
  }, {
    name: 'yellow-30',
    variable: '$yellow-30',
    hex: 'fedd8e'
  }, {
    name: 'yellow-20',
    variable: '$yellow-20',
    hex: 'fff3d6'
  }, {
    name: 'yellow-10',
    variable: '$yellow-10',
    hex: 'fffaf0'
  }, {
    name: 'gray-70',
    variable: '$gray-70',
    hex: '323c45'
  }, {
    name: 'gray-60',
    variable: '$gray-60',
    hex: '46535f'
  }, {
    name: 'gray-50',
    variable: '$gray-50',
    hex: '687b8c'
  }, {
    name: 'gray-40',
    variable: '$gray-40',
    hex: 'c3d1dd'
  }, {
    name: 'gray-30',
    variable: '$gray-30',
    hex: 'e1eaf1'
  }, {
    name: 'gray-20',
    variable: '$gray-20',
    hex: 'ebf2f7'
  }, {
    name: 'gray-10',
    variable: '$gray-10',
    hex: 'f5f8fa'
  }],
  text: [{
    name: 'text-black',
    variable: '$text-black',
    hex: '000000'
  }, {
    name: 'text-white',
    variable: '$text-white',
    hex: 'ffffff'
  }, {
    name: 'text-blue-60',
    variable: '$text-blue-60',
    hex: '014a82'
  }, {
    name: 'text-blue-40',
    variable: '$text-blue-40',
    hex: '4fb3f6'
  }, {
    name: 'text-green-60',
    variable: 'text-$green-60',
    hex: '00672e'
  }, {
    name: 'text-green-40',
    variable: '$text-green-40',
    hex: '60d399'
  }, {
    name: 'text-indigo-60',
    variable: '$text-indigo-60',
    hex: '133191'
  }, {
    name: 'text-indigo-40',
    variable: '$text-indigo-40',
    hex: '6d83f3'
  }, {
    name: 'text-red-60',
    variable: '$text-red-60',
    hex: 'cf1d00'
  }, {
    name: 'text-red-40',
    variable: '$text-red-40',
    hex: 'ff7968'
  }, {
    name: 'text-yellow-60',
    variable: '$text-yellow-60',
    hex: '935000'
  }, {
    name: 'text-yellow-40',
    variable: '$text-yellow-40',
    hex: 'fbbe2e'
  }, {
    name: 'text-gray-70',
    variable: '$text-gray-70',
    hex: '323c45'
  }, {
    name: 'text-gray-60',
    variable: '$text-gray-60',
    hex: '46535f'
  }, {
    name: 'text-gray-50',
    variable: '$text-gray-50',
    hex: '687b8c'
  }, {
    name: 'text-gray-40',
    variable: '$text-gray-40',
    hex: 'c3d1dd'
  }],
  icon: [{
    name: 'icon-black',
    variable: '$icon-black',
    hex: '000000'
  }, {
    name: 'icon-white',
    variable: '$icon-white',
    hex: 'ffffff'
  }, {
    name: 'icon-blue-50',
    variable: '$icon-blue-50',
    hex: '0089e3'
  }, {
    name: 'icon-green-50',
    variable: '$icon-green-50',
    hex: '24a865'
  }, {
    name: 'icon-indigo-50',
    variable: '$icon-indigo-50',
    hex: '163bf3'
  }, {
    name: 'icon-red-50',
    variable: '$icon-red-50',
    hex: 'ff341a'
  }, {
    name: 'icon-yellow-50',
    variable: '$icon-yellow-50',
    hex: 'c98600'
  }, {
    name: 'icon-gray-70',
    variable: '$icon-gray-70',
    hex: '323C45'
  }, {
    name: 'icon-gray-50',
    variable: '$icon-gray-50',
    hex: '687b8c'
  }, {
    name: 'icon-gray-40',
    variable: '$icon-gray-40',
    hex: 'c3d1dd'
  }]
};
var colors = color;

var colors$1 = colors;

var hex = {};
Object.keys(colors$1).forEach(function (groupName) {
  colors$1[groupName].forEach(function (color) {
    hex[color.variable.slice(1)] = "#".concat(color.hex);
  });
});
var hex$1 = hex;

var KEY_CODES = {
  '32': 'space',
  '13': 'enter'
};
var AccordionContext = /*#__PURE__*/createContext({});

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      _ref$allowMultiple = _ref.allowMultiple,
      allowMultiple = _ref$allowMultiple === void 0 ? false : _ref$allowMultiple,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$spacing = _ref.spacing,
      spacing = _ref$spacing === void 0 ? 's' : _ref$spacing,
      _ref$reduceMotion = _ref.reduceMotion,
      reduceMotion = _ref$reduceMotion === void 0 ? false : _ref$reduceMotion,
      defaultExpanded = _ref.defaultExpanded,
      expanded = _ref.expanded,
      onChange = _ref.onChange;
  var wrapperRef = useRef(null);
  var isControlled = expanded !== undefined;

  var _useRef = useRef(isControlled),
      wasControlled = _useRef.current;

  if (__DEV__) {
    invariant(!(isControlled && !onChange), // eslint-disable-next-line max-len
    'You provided an `expanded` prop to an Accordion without an `onChange` handler. Users won`t be able to switch between expanded/collapsed state.');
    invariant(!(wasControlled && !isControlled), 'You cannot change Accordion component from controlled to uncontrolled variant.');
    invariant(!(!wasControlled && isControlled), 'You cannot change Accordion component from uncontrolled to controlled variant.');
    invariant(!(isControlled && allowMultiple), 'allowMultiple is not working in controlled Accordion');
    invariant(!(!allowMultiple && Array.isArray(defaultExpanded) && defaultExpanded.length > 1), // eslint-disable-next-line max-len
    'defaultExpanded is an array with more than 1 element but allowMultiple prop is not set. The first value from the array was picked as a default expanded. Set allowMultiple attribute or provide only one default expanded.');
  }

  var getUpdatedOpenedItems = useCallback(function (expanded, id, value) {
    if (value) {
      return allowMultiple ? _toConsumableArray(new Set([].concat(_toConsumableArray(expanded), [id]))) : [id];
    }

    return allowMultiple ? expanded.filter(function (item) {
      return item !== id;
    }) : [];
  }, [allowMultiple]);

  var _useReducer = useReducer(reducer, null, function () {
    if (isControlled) {
      return {
        expanded: [],
        focusedElementId: null
      };
    }

    if (defaultExpanded !== undefined) {
      var expandedArray = Array.isArray(defaultExpanded) ? defaultExpanded : [defaultExpanded];
      var newState = expandedArray.filter(function (item, idx) {
        return allowMultiple || idx < 1;
      });
      return {
        expanded: newState,
        focusedElementId: null
      };
    }

    return {
      expanded: [],
      focusedElementId: null
    };
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var hasReduceMotion = useReducedMotion() || reduceMotion;
  useEffect(function () {
    var wrapper = wrapperRef.current;

    function handleKeyDown(event) {
      var key = KEY_CODES[event.keyCode];

      if (['space', 'enter'].includes(key)) {
        if (event.target instanceof HTMLElement && event.target.id === state.focusedElementId) {
          event.preventDefault();
        }

        dispatch({
          type: 'accordion/KEYBOARD_SET_EXPANDED'
        });
      }
    }

    if (!wrapper) return;
    wrapper.addEventListener('keydown', handleKeyDown);
    return function () {
      if (!wrapper) return;
      wrapper.removeEventListener('keydown', handleKeyDown);
    };
  }, [state.focusedElementId]);

  function reducer(state, action) {
    switch (action.type) {
      case 'accordion/TOGGLE_EXPAND':
        {
          var _action$payload = action.payload,
              _id = _action$payload.id,
              _expanded = _action$payload.expanded;
          return _objectSpread2(_objectSpread2({}, state), {}, {
            expanded: getUpdatedOpenedItems(state.expanded, _id, _expanded)
          });
        }

      case 'accordion/SET_EXPANDED':
        {
          var _expanded2 = action.payload.expanded;
          return _objectSpread2(_objectSpread2({}, state), {}, {
            expanded: _expanded2
          });
        }

      case 'accordion/KEYBOARD_SET_EXPANDED':
        {
          var _expanded3 = state.expanded,
              focusedElementId = state.focusedElementId;
          if (focusedElementId === null) return state;
          return _objectSpread2(_objectSpread2({}, state), {}, {
            expanded: getUpdatedOpenedItems(state.expanded, focusedElementId, !_expanded3.includes(focusedElementId))
          });
        }

      case 'accordion/SET_FOCUSED':
        {
          return _objectSpread2(_objectSpread2({}, state), {}, {
            focusedElementId: action.payload.id
          });
        }

      default:
        return state;
    }
  }

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      prevExpanded = _useState2[0],
      setPrevExpanded = _useState2[1];

  if (isControlled && expanded !== prevExpanded) {
    setPrevExpanded(expanded); // expanded || '' is to satisfy flow.
    // isControlled flag is true when expanded !== undefined but this condition is not interpreted
    // correctly by flow causing type error. Replacing isControlled with expanded !== undefined would work but using isControlled is more clear

    var expandedArray = Array.isArray(expanded) ? expanded : [expanded || ''];
    dispatch({
      type: 'accordion/SET_EXPANDED',
      payload: {
        expanded: expandedArray
      }
    });
  }

  var noGapBetweenElements = spacing === 'none';
  var onItemSelect = useCallback(function (id, value) {
    onChange && onChange(id);

    if (!isControlled) {
      dispatch({
        type: 'accordion/TOGGLE_EXPAND',
        payload: {
          id: id,
          expanded: value
        }
      });
    }
  }, [isControlled, onChange]);
  var context = useMemo(function () {
    return {
      noGapBetweenElements: noGapBetweenElements,
      expanded: state.expanded,
      focusedElementId: state.focusedElementId,
      dispatch: dispatch,
      reduceMotion: hasReduceMotion,
      onItemSelect: onItemSelect
    };
  }, [hasReduceMotion, noGapBetweenElements, onItemSelect, state.focusedElementId, state.expanded]);
  return /*#__PURE__*/React.createElement(AccordionContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement("div", {
    ref: wrapperRef,
    className: cx.apply(void 0, _toConsumableArray(generateResponsiveClassNames(function (spacing) {
      return "sg-space-y-".concat(String(spacing));
    }, spacing)).concat([className]))
  }, children));
};

var Accordion$1 = Accordion;

var AccordionItem = function AccordionItem(_ref) {
  var title = _ref.title,
      _ref$titleSize = _ref.titleSize,
      titleSize = _ref$titleSize === void 0 ? 'large' : _ref$titleSize,
      children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? 'm' : _ref$padding,
      _ref$tabIndex = _ref.tabIndex,
      tabIndex = _ref$tabIndex === void 0 ? 0 : _ref$tabIndex,
      customId = _ref.id,
      _ref$ariaHeadingLevel = _ref.ariaHeadingLevel,
      ariaHeadingLevel = _ref$ariaHeadingLevel === void 0 ? 2 : _ref$ariaHeadingLevel;
  var contentRef = useRef(null);

  var _useRef = useRef(customId !== null && customId !== void 0 ? customId : "AccordionItem_".concat(generateId())),
      id = _useRef.current;

  var contentId = "Section_".concat(id);

  var _useContext = useContext(AccordionContext),
      noGapBetweenElements = _useContext.noGapBetweenElements,
      expanded = _useContext.expanded,
      focusedElementId = _useContext.focusedElementId,
      dispatch = _useContext.dispatch,
      reduceMotion = _useContext.reduceMotion,
      onItemSelect = _useContext.onItemSelect;

  var hasRenderedInitially = useRef(false);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHovered = _useState2[0],
      setIsHovered = _useState2[1];

  var isCollapsed = !expanded.includes(id);
  var isFocused = focusedElementId === id;
  var isHighlighted = isHovered || isFocused;
  var isBorderHighlighted = isHighlighted && !noGapBetweenElements;
  var isTitleString = typeof title === 'string';
  var toggleOpen = React.useCallback(function () {
    onItemSelect(id, isCollapsed);
  }, [id, isCollapsed, onItemSelect]);
  var handleFocus = React.useCallback(function () {
    dispatch({
      type: 'accordion/SET_FOCUSED',
      payload: {
        id: id
      }
    });
  }, [dispatch, id]);
  var handleBlur = React.useCallback(function () {
    dispatch({
      type: 'accordion/SET_FOCUSED',
      payload: {
        id: ''
      }
    });
  }, [dispatch]);
  useEffect(function () {
    var content = contentRef.current;

    function collapse() {
      if (!contentRef.current) {
        return;
      }

      if (reduceMotion || !hasRenderedInitially.current) {
        contentRef.current.style.height = "".concat(0, "px");
        contentRef.current.hidden = true;
        contentRef.current.style.overflow = 'hidden';
        hasRenderedInitially.current = true;
      } else {
        var sectionHeight = contentRef.current.scrollHeight;
        requestAnimationFrame(function () {
          if (!contentRef.current) {
            return;
          }

          contentRef.current.style.height = "".concat(sectionHeight, "px");
          requestAnimationFrame(function () {
            if (!contentRef.current) {
              return;
            }

            contentRef.current.style.height = "0px";
            contentRef.current.style.overflow = "hidden";
            contentRef.current.addEventListener('transitionend', onTransitionEnd);
          });
        });
      }
    }

    function expand() {
      if (!contentRef.current) {
        return;
      }

      contentRef.current.hidden = false;
      var sectionHeight = contentRef.current.scrollHeight;

      if (reduceMotion || !hasRenderedInitially.current) {
        contentRef.current.style.height = 'auto';
        contentRef.current.style.overflow = 'visible';
        hasRenderedInitially.current = true;
      } else {
        contentRef.current.style.height = "".concat(sectionHeight, "px");
        contentRef.current.addEventListener('transitionend', onTransitionEnd);
      }
    }

    function onTransitionEnd() {
      if (!contentRef.current) {
        return;
      }

      if (contentRef.current.style.height === '0px') {
        // we set hidden in order to prevent gaining focus inside collapsed content
        contentRef.current.hidden = true;
      } else {
        contentRef.current.style.height = 'auto';
        contentRef.current.style.overflow = 'visible';
      }

      contentRef.current.removeEventListener('transitionend', onTransitionEnd);
    }

    isCollapsed ? collapse() : expand();
    return function () {
      if (!content) {
        return;
      }

      content.removeEventListener('transitionend', onTransitionEnd);
    };
  }, [isCollapsed, reduceMotion]);
  return React.useMemo(function () {
    return /*#__PURE__*/React.createElement(Box$1, {
      color: "white",
      border: true,
      borderColor: isBorderHighlighted ? 'gray-40' : 'gray-20',
      className: cx('sg-accordion-item', {
        'sg-accordion-item--no-gap': noGapBetweenElements,
        'sg-accordion-item--reduced-motion': reduceMotion
      }, className),
      padding: null
    }, /*#__PURE__*/React.createElement("div", {
      role: "heading",
      "aria-level": ariaHeadingLevel,
      id: id
    }, /*#__PURE__*/React.createElement(Box$1, {
      padding: padding,
      className: "sg-accordion-item__button",
      onClick: toggleOpen,
      onMouseEnter: function onMouseEnter() {
        return setIsHovered(true);
      },
      onMouseLeave: function onMouseLeave() {
        return setIsHovered(false);
      },
      onFocus: handleFocus,
      onBlur: handleBlur,
      "aria-expanded": !isCollapsed,
      "aria-controls": contentId,
      role: "button",
      tabIndex: tabIndex
    }, /*#__PURE__*/React.createElement(Flex$1, {
      direction: "row",
      justifyContent: "space-between",
      alignItems: "center"
    }, isTitleString ? /*#__PURE__*/React.createElement(Link$1, {
      size: titleSize,
      color: "text-black",
      weight: "bold",
      underlined: isHighlighted,
      disabled: true
    }, title) : /*#__PURE__*/React.createElement("span", {
      className: "sg-accordion-item__title"
    }, title), /*#__PURE__*/React.createElement(Flex$1, {
      justifyContent: "center",
      alignItems: "center",
      className: cx('sg-accordion-item__icon', {
        'sg-accordion-item__icon--hover': isHighlighted
      })
    }, /*#__PURE__*/React.createElement(Icon$2, {
      type: "chevron_down",
      color: ICON_COLOR$1['icon-black'],
      className: cx('sg-accordion-item__arrow', {
        'sg-accordion-item__arrow--visible': !isCollapsed
      }),
      "aria-hidden": "true"
    }))))), /*#__PURE__*/React.createElement("div", {
      ref: contentRef,
      className: "sg-accordion-item__content",
      id: contentId,
      role: "region",
      "aria-labelledby": id,
      hidden: true
    }, /*#__PURE__*/React.createElement(Box$1, {
      padding: padding,
      className: "sg-accordion-item__content-box"
    }, /*#__PURE__*/React.createElement(Text$1, null, children))));
  }, [isBorderHighlighted, noGapBetweenElements, ariaHeadingLevel, children, className, contentId, handleBlur, handleFocus, id, isCollapsed, isHighlighted, isTitleString, padding, reduceMotion, tabIndex, title, titleSize, toggleOpen]);
};

var AccordionItem$1 = AccordionItem;

var NO_SCROLL_CLASS = 'sg-dialog-no-scroll';
var DIALOG_SELECTOR = '.js-dialog';
function useBodyNoScroll() {
  var cleanupRef = React.useRef(null);
  var forceCleanup = React.useCallback(function () {
    if (cleanupRef.current) cleanupRef.current();
  }, []);
  React.useEffect(function () {
    var body = document.body;
    var scrollY = window.scrollY;
    if (!body) return;
    body.style.top = "-".concat(scrollY, "px");
    body.classList.add(NO_SCROLL_CLASS);

    var cleanup = function cleanup() {
      // it can only be forced once
      cleanupRef.current = null;
      var manyDialogsOpened = document.querySelectorAll(DIALOG_SELECTOR).length > 1;

      if (manyDialogsOpened) {
        return;
      }

      body.style.top = '';
      body.classList.remove(NO_SCROLL_CLASS);
      window.scrollTo(0, scrollY);
    };

    cleanupRef.current = cleanup;
    return cleanup;
  }, []);
  return forceCleanup;
}

function useFocusTrap(_ref) {
  var dialogRef = _ref.dialogRef,
      overlayRef = _ref.overlayRef;
  React.useEffect(function () {
    var originalActiveElement = document.activeElement;
    var overlayElement = overlayRef.current;
    var dialogElement = dialogRef.current;

    if (!dialogElement || !overlayElement) {
      return;
    } // Initial focus


    focusDescendant(dialogElement, true);
    var isTabbingForward = true;

    function handleKeydown(event) {
      isTabbingForward = event.key === 'Tab' && !event.shiftKey;
    }

    function handleKeyup() {
      isTabbingForward = true;
    }

    function handleFocusTrap(event) {
      if (event.target instanceof Node && dialogElement.contains(event.target)) {
        return;
      }

      focusDescendant(dialogElement, isTabbingForward);
    }

    dialogElement.addEventListener('keydown', handleKeydown);
    dialogElement.addEventListener('keyup', handleKeyup);
    overlayElement.addEventListener('focusin', handleFocusTrap);
    return function () {
      dialogElement.removeEventListener('keydown', handleKeydown);
      dialogElement.removeEventListener('keyup', handleKeyup);
      overlayElement.removeEventListener('focusin', handleFocusTrap); // Should restore original focus on unmount.

      originalActiveElement === null || originalActiveElement === void 0 ? void 0 : originalActiveElement.focus();
    };
  }, [dialogRef, overlayRef]);
}

function focusDescendant(element, isTabbingForward) {
  var descendantFocused = isTabbingForward ? focusFirstDescendant(element) : focusLastDescendant(element);
  return descendantFocused || attemptFocus(element);
} // https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/js/dialog.js


function focusFirstDescendant(element) {
  for (var i = 0; i < element.children.length; i++) {
    var child = element.children[i];

    if (attemptFocus(child) || focusFirstDescendant(child)) {
      return true;
    }
  }

  return false;
}

function focusLastDescendant(element) {
  for (var i = element.children.length - 1; i >= 0; i--) {
    var child = element.children[i];

    if (attemptFocus(child) || focusLastDescendant(child)) {
      return true;
    }
  }

  return false;
}

function attemptFocus(element) {
  if (!isFocusable(element)) {
    return false;
  }

  try {
    element.focus();
  } catch (_unused) {}

  return document.activeElement === element;
} // https://w3c.github.io/aria-practices/examples/js/utils.js


function isFocusable(element) {
  if (element.tabIndex < -1 || element.getAttribute('disabled')) {
    return false;
  }

  switch (element.nodeName) {
    case 'A':
      return !!element.getAttribute('href') && element.getAttribute('rel') !== 'ignore';

    case 'INPUT':
      return element.getAttribute('type') !== 'hidden';

    case 'BUTTON':
    case 'SELECT':
    case 'TEXTAREA':
      return true;

    default:
      {
        return element.tabIndex >= -1;
      }
  }
}

var SLOTS = ['backdrop', 'top', 'left', 'right', 'bottom', 'top-left', 'top-middle', 'top-right', 'middle-left', 'middle-right', 'bottom-left', 'bottom-middle', 'bottom-right'];

var DialogOverlay = function DialogOverlay(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};

var DialogOverlay$1 = DialogOverlay;

var _excluded$3 = ["open", "onExitTransitionEnd"];

var supportsTransitions$1 = function supportsTransitions() {
  return Boolean(window && window.TransitionEvent !== undefined);
};

/**
 * The react-docgen has a problem with default values
 * of nested components (see BaseDialog inside the
 * Dialog) and this is for documentation purposes.
 */
Dialog.defaultProps = {
  size: 'm',
  reduceMotion: false,
  scroll: 'outside',
  position: 'center',
  appearance: 'dialog'
};
/**
 * The Dialog component controls mounting
 * when BaseDialog controls its own states.
 */

function BaseDialog(_ref) {
  var open = _ref.open,
      children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'm' : _ref$size,
      _ref$reduceMotion = _ref.reduceMotion,
      reduceMotion = _ref$reduceMotion === void 0 ? false : _ref$reduceMotion,
      _ref$scroll = _ref.scroll,
      scroll = _ref$scroll === void 0 ? 'outside' : _ref$scroll,
      ariaLabelledBy = _ref['aria-labelledby'],
      ariaLabel = _ref['aria-label'],
      ariaDescribedBy = _ref['aria-describedby'],
      ariaDescription = _ref['aria-description'],
      _ref$zIndex = _ref.zIndex,
      zIndex = _ref$zIndex === void 0 ? 'auto' : _ref$zIndex,
      onDismiss = _ref.onDismiss,
      onEntryTransitionEnd = _ref.onEntryTransitionEnd,
      onExitTransitionEnd = _ref.onExitTransitionEnd,
      dataTestId = _ref['data-testid'],
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'center' : _ref$position,
      _ref$appearance = _ref.appearance,
      appearance = _ref$appearance === void 0 ? 'dialog' : _ref$appearance;
  var overlayRef = React.useRef(null);
  var containerRef = React.useRef(null);

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      exiting = _React$useState2[0],
      setExiting = _React$useState2[1];

  if (exiting === open) {
    setExiting(!open);
  }
  /**
   * The name of transition with the longest duration, because
   * a component can have an animation of many properties.
   */


  var lastTransitionName = exiting || reduceMotion ? 'opacity' : 'transform';
  /**
   * CSS3 transition requires a deferredOpen value to be one
   * paint behind the actual open prop to trigger a transition.
   */

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      deferredOpen = _React$useState4[0],
      setDeferredOpen = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      hasFinishedTransition = _React$useState6[0],
      setHasFinishedTransition = _React$useState6[1];

  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      isDialogHigherThanOverlay = _React$useState8[0],
      setIsDialogHigherThanOverlay = _React$useState8[1];

  var cleanupBodyNoScroll = useBodyNoScroll();
  var fireTransitionEndCallbacks = React.useCallback(function () {
    setHasFinishedTransition(true);

    if (open) {
      if (onEntryTransitionEnd) {
        onEntryTransitionEnd();
      }
    } else if (onExitTransitionEnd) {
      cleanupBodyNoScroll();
      onExitTransitionEnd();
    }
  }, [open, onExitTransitionEnd, onEntryTransitionEnd, cleanupBodyNoScroll]);
  React.useEffect(function () {
    setDeferredOpen(open);

    if (!supportsTransitions$1()) {
      fireTransitionEndCallbacks();
    }
  }, [open, fireTransitionEndCallbacks]);
  React.useEffect(function () {
    /**
     * Check if Dialog itself is higher than the overlay.
     * We need to check this, so we can determine if we should show scrollbars on the Dialog.
     */
    if (open) {
      // Didn't use optional chaining
      // as it causes ArgsTable and controls to not display correctly
      var dialogHeight = containerRef.current && containerRef.current.getBoundingClientRect().height;
      var overlayHeight = overlayRef.current && overlayRef.current.getBoundingClientRect().height;
      if (!dialogHeight || !overlayHeight) return;
      if (dialogHeight > overlayHeight) setIsDialogHigherThanOverlay(true);
    }
  }, [open, containerRef, overlayRef]);
  useFocusTrap({
    dialogRef: containerRef,
    overlayRef: overlayRef
  });
  var handleTransitionEnd = React.useCallback(function (event) {
    if (event.target === event.currentTarget && event.propertyName === lastTransitionName) {
      fireTransitionEndCallbacks();
    }
  }, [fireTransitionEndCallbacks, lastTransitionName]);
  var handleOverlayClick = React.useCallback(function (event) {
    if (onDismiss && event.target instanceof HTMLElement && event.target.closest('[data-dialog-container="true"]') !== containerRef.current) {
      onDismiss();
    }

    event.stopPropagation();
  }, [onDismiss]);
  var handleKeyUp = React.useCallback(function (event) {
    if (onDismiss && event.key === 'Escape') {
      onDismiss();
      event.stopPropagation();
    }
  }, [onDismiss]);
  var overlayClass = cx('js-dialog', 'sg-dialog__overlay', "sg-dialog__overlay--size-".concat(size), {
    'sg-dialog__overlay--scroll': (isDialogHigherThanOverlay || hasFinishedTransition) && scroll === 'outside',
    'sg-dialog__overlay--open': deferredOpen,
    'sg-dialog__overlay--fullscreen': size === 'fullscreen',
    'sg-dialog__overlay--space-top': position === 'top'
  });
  var containerClass = cx('sg-dialog__container', {
    'sg-dialog__container--fullscreen': size === 'fullscreen',
    'sg-dialog__container--scroll': scroll === 'inside',
    'sg-dialog__container--open': deferredOpen,
    'sg-dialog__container--exiting': exiting,
    'sg-dialog__container--reduce-motion': reduceMotion,
    'sg-dialog__container--top': position === 'top',
    'sg-dialog__container--appearance-dialog': appearance === 'dialog'
  });
  var childrenWithoutSlots = React.useMemo(function () {
    return React.Children.toArray(children).filter(function (reactNode) {
      return reactNode.type !== DialogOverlay$1;
    });
  }, [children]);
  var childrenWithSlots = React.useMemo(function () {
    return React.Children.toArray(children).filter(function (reactNode) {
      return reactNode.type === DialogOverlay$1;
    });
  }, [children]);
  var childrenBySlot = React.useMemo(function () {
    return SLOTS.reduce(function (acc, next) {
      childrenWithSlots.filter(function (child) {
        return child.props.slot === next;
      }).forEach(function (child) {
        if (!acc[next]) {
          acc[next] = [];
        }

        acc[next].push(child);
      });
      return acc;
    }, {});
  }, [childrenWithSlots]);
  return /*#__PURE__*/React.createElement("div", {
    className: overlayClass,
    style: {
      zIndex: zIndex
    },
    onClick: onDismiss ? handleOverlayClick : undefined,
    onKeyUp: handleKeyUp,
    ref: overlayRef
  }, childrenBySlot.backdrop ? /*#__PURE__*/React.createElement("span", {
    className: "sg-dialog-overlay-slot--backdrop"
  }, childrenBySlot.backdrop) : null, SLOTS.filter(function (slot) {
    return slot !== 'backdrop';
  }).map(function (slot) {
    return /*#__PURE__*/React.createElement("div", {
      className: cx('sg-dialog-overlay-slot', "sg-dialog-overlay-slot--".concat(slot), {
        'sg-dialog-overlay-slot--hidden': !childrenBySlot[slot] || size === 'fullscreen'
      }),
      key: slot
    }, childrenBySlot[slot] ? childrenBySlot[slot] : null);
  }), /*#__PURE__*/React.createElement("div", {
    tabIndex: "0"
  }), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    ref: containerRef,
    "data-dialog-container": true,
    className: containerClass,
    onTransitionEnd: supportsTransitions$1() ? handleTransitionEnd : undefined,
    "aria-modal": "true",
    "aria-labelledby": ariaLabelledBy,
    "aria-label": ariaLabel,
    "aria-describedby": ariaDescribedBy,
    "aria-description": ariaDescription,
    tabIndex: "-1",
    "data-testid": dataTestId,
    "data-animating": !hasFinishedTransition
  }, childrenWithoutSlots), /*#__PURE__*/React.createElement("div", {
    tabIndex: "0"
  }));
}

function Dialog(_ref2) {
  var open = _ref2.open,
      onExitTransitionEnd = _ref2.onExitTransitionEnd,
      otherProps = _objectWithoutProperties(_ref2, _excluded$3);

  var _React$useState9 = React.useState(open),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      mounted = _React$useState10[0],
      setMounted = _React$useState10[1];

  if (open && !mounted) {
    setMounted(true);
  }

  var handleExitTransitionEnd = React.useCallback(function () {
    setMounted(false); // proxy an actual event

    if (onExitTransitionEnd) {
      onExitTransitionEnd();
    }
  }, [onExitTransitionEnd]);
  return mounted ? /*#__PURE__*/React.createElement(BaseDialog, _extends({}, otherProps, {
    onExitTransitionEnd: handleExitTransitionEnd,
    open: open
  })) : null;
}

Dialog.Overlay = DialogOverlay$1;

var DialogHeader = function DialogHeader(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id;
  return /*#__PURE__*/React.createElement("div", {
    className: cx('sg-dialog__header', className),
    id: id
  }, children);
};

var DialogHeader$1 = DialogHeader;

var DialogBody = function DialogBody(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/React.createElement("div", {
    className: cx('sg-dialog__body', className)
  }, children);
};

var DialogBody$1 = DialogBody;

var DialogCloseButton = function DialogCloseButton(_ref) {
  var onClick = _ref.onClick,
      className = _ref.className,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Close this dialog window' : _ref$label,
      dataTestId = _ref['data-testid'],
      disabled = _ref.disabled;
  return /*#__PURE__*/React.createElement(Button$1, {
    variant: "transparent",
    className: cx('sg-dialog__close-button', className),
    icon: /*#__PURE__*/React.createElement(Icon$2, {
      type: "close",
      color: ICON_COLOR$1['icon-black'],
      size: 24
    }),
    onClick: onClick,
    "aria-label": label,
    iconOnly: true,
    "data-testid": dataTestId,
    disabled: disabled
  });
};

var DialogCloseButton$1 = DialogCloseButton;

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

function createClassNamesRegistry() {
  var registry = {};
  return {
    register: function register(key, value) {
      registry[key] = value;
    },
    toString: function toString() {
      return Object.keys(registry).map(function (key) {
        return registry[key];
      }).join(' ').trim();
    }
  };
}

var EASING_VALUES = {
  regular: 'cubic-bezier(0.35, 0, 0.1, 1)',
  entry: 'cubic-bezier(0.1, 0, 0, 1)',
  exit: 'cubic-bezier(0.3, 0, 1, 0.8)',
  linear: 'linear'
};
var DURATION_VALUES = {
  instant: '0ms',
  quick1: '80ms',
  quick2: '120ms',
  moderate1: '180ms',
  moderate2: '260ms',
  gentle1: '320ms',
  gentle2: '400ms'
};
var TRANSLATE_VALUES = {
  xxs: '4px',
  xs: '8px',
  s: '16px',
  m: '24px',
  l: '40px',
  xl: '64px',
  '-xxs': '-4px',
  '-xs': '-8px',
  '-s': '-16px',
  '-m': '-24px',
  '-l': '-40px',
  '-xl': '-64px'
};
var DEFAULT_EASING_VALUE = EASING_VALUES['regular'];
var DEFAULT_DURATION_VALUE = DURATION_VALUES['instant'];
var DEFAULT_OPACITY_VALUE = '1';
var DEFAULT_TRANSLATE_VALUE = '0px';
var DEFAULT_SCALE_VALUE = '1';
var DEFAULT_TRANSFORM_ORIGIN_VALUE = 'center';
var DEFAULT_WIDTH_HEIGHT_VALUE = 'auto';
function parsePropertyObject(_ref) {
  var _transform$scaleX, _transform$scaleY;

  var className = _ref.className,
      duration = _ref.duration,
      easing = _ref.easing,
      transform = _ref.transform,
      width = _ref.width,
      height = _ref.height,
      opacity = _ref.opacity;
  var translateX = getTranslateValue(transform === null || transform === void 0 ? void 0 : transform.translateX);
  var translateY = getTranslateValue(transform === null || transform === void 0 ? void 0 : transform.translateY);
  var scaleX = getScaleValue((_transform$scaleX = transform === null || transform === void 0 ? void 0 : transform.scaleX) !== null && _transform$scaleX !== void 0 ? _transform$scaleX : transform === null || transform === void 0 ? void 0 : transform.scale);
  var scaleY = getScaleValue((_transform$scaleY = transform === null || transform === void 0 ? void 0 : transform.scaleY) !== null && _transform$scaleY !== void 0 ? _transform$scaleY : transform === null || transform === void 0 ? void 0 : transform.scale);
  return {
    className: className || '',
    transform: {
      value: getTransformValue({
        translateX: translateX,
        translateY: translateY,
        scaleX: scaleX,
        scaleY: scaleY
      }),
      duration: getDurationValue((transform === null || transform === void 0 ? void 0 : transform.duration) || duration),
      easing: getEasingValue((transform === null || transform === void 0 ? void 0 : transform.easing) || easing),
      origin: getTransformOriginValue(transform),
      translateX: translateX,
      translateY: translateY,
      scaleX: scaleX,
      scaleY: scaleY
    },
    width: {
      value: getWidthHeightValue(_typeof(width) === 'object' ? width.value : width),
      duration: getDurationValue(_typeof(width) === 'object' && width.duration || duration),
      easing: getEasingValue(_typeof(width) === 'object' && width.easing || easing)
    },
    height: {
      value: getWidthHeightValue(_typeof(height) === 'object' ? height.value : height),
      duration: getDurationValue(_typeof(height) === 'object' && height.duration || duration),
      easing: getEasingValue(_typeof(height) === 'object' && height.easing || easing)
    },
    opacity: {
      value: getOpacityValue(_typeof(opacity) === 'object' ? opacity.value : opacity),
      duration: getDurationValue(_typeof(opacity) === 'object' && opacity.duration || duration),
      easing: getEasingValue(_typeof(opacity) === 'object' && opacity.easing || easing)
    }
  };
}

function getDurationValue(duration) {
  if (duration === undefined) {
    return DEFAULT_DURATION_VALUE;
  }

  if (typeof duration === 'number') {
    return "".concat(duration, "ms");
  }

  if (DURATION_VALUES[duration] !== undefined) {
    return DURATION_VALUES[duration];
  }

  return DEFAULT_DURATION_VALUE;
}

function getEasingValue(easing) {
  if (easing === undefined) {
    return DEFAULT_EASING_VALUE;
  }

  return EASING_VALUES[easing];
}

function getTranslateValue(translate) {
  if (translate === undefined) {
    return DEFAULT_TRANSLATE_VALUE;
  }

  if (typeof translate === 'number') {
    return "".concat(translate, "px");
  } // $FlowFixMe: could be TransitionTranslateType or a string


  if (TRANSLATE_VALUES[translate] !== undefined) {
    return TRANSLATE_VALUES[translate];
  }

  return translate;
}

function getScaleValue(scale) {
  return scale === undefined ? DEFAULT_SCALE_VALUE : String(scale);
}

function getTransformValue(_ref2) {
  var translateX = _ref2.translateX,
      translateY = _ref2.translateY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY;
  return "translate3d(".concat(translateX, ", ").concat(translateY, ", 0px) scale3d(").concat(scaleX, ", ").concat(scaleY, ", 1)");
}

function getTransformOriginValue(transform) {
  return transform && transform.origin || DEFAULT_TRANSFORM_ORIGIN_VALUE;
}

function getOpacityValue(opacity) {
  return opacity === undefined ? DEFAULT_OPACITY_VALUE : String(opacity);
}

function getWidthHeightValue(widthHeight) {
  if (widthHeight === undefined) {
    return DEFAULT_WIDTH_HEIGHT_VALUE;
  }

  if (typeof widthHeight === 'number') {
    return "".concat(widthHeight, "px");
  }

  return widthHeight;
}

function createCSSTransitionAnimator(classNamesRegistry) {
  var DEFAULT_PARSED_PROPS = parsePropertyObject({});
  /**
   * A tuple of parsed PropertyObjects in an applying
   * order that is required to track possible changes.
   *
   * @example
   * [prevState, currentState]
   */

  var history = [DEFAULT_PARSED_PROPS, DEFAULT_PARSED_PROPS];

  var pushState = function pushState(current) {
    history[0] = history[1];
    history[1] = current;
  };

  var hasLastChangedValue = function hasLastChangedValue(prop) {
    return history[0][prop].value !== history[1][prop].value;
  };

  var getWillChangeProps = function getWillChangeProps() {
    return {
      transform: hasLastChangedValue('transform'),
      width: hasLastChangedValue('width'),
      height: hasLastChangedValue('height'),
      opacity: hasLastChangedValue('opacity')
    };
  };
  /**
   * A single animation may include multiple CSS transitions
   * of different properties and the animator should invoke
   * finish callback only after all of them.
   *
   * @example
   * ```css
   * transition-property: transform, opacity;
   * ```
   */


  var remainingPropsToChange = 0;
  var finishCallbackRef = null;

  function addElementStyles(_ref) {
    var element = _ref.element,
        transitioned = _ref.transitioned,
        parsedProps = _ref.parsedProps,
        willChangeProps = _ref.willChangeProps,
        speed = _ref.speed;
    var className = parsedProps.className,
        transform = parsedProps.transform,
        width = parsedProps.width,
        height = parsedProps.height,
        opacity = parsedProps.opacity;

    var combine = function combine(a) {
      return a.join(', ');
    };

    var willChangePropsArray = Object.keys(willChangeProps).filter(function (prop) {
      return willChangeProps[prop];
    });
    classNamesRegistry.register('transition', className);
    element.className = classNamesRegistry.toString();
    element.style.willChange = combine(willChangePropsArray);

    if (transitioned) {
      var transitionProperty = [];
      var transitionDuration = [];
      var transitionTimingFunction = [];
      /**
       * The order of transitioned values should be the same
       * in each array, which is ensured by a loop.
       */

      willChangePropsArray.forEach(function (prop) {
        transitionProperty.push(prop);
        transitionDuration.push(applySpeed(parsedProps[prop].duration, speed));
        transitionTimingFunction.push(parsedProps[prop].easing);
      });
      element.style.transitionProperty = combine(transitionProperty);
      element.style.transitionDuration = combine(oneOrAll(transitionDuration));
      element.style.transitionTimingFunction = combine(oneOrAll(transitionTimingFunction));
    }

    if (willChangeProps.transform) {
      element.style.transform = transform.value;
      element.style.transformOrigin = transform.origin;
    }

    if (willChangeProps.width) {
      element.style.width = width.value === 'auto' ? '' : width.value;
    }

    if (willChangeProps.height) {
      element.style.height = height.value === 'auto' ? '' : height.value;
    }

    if (willChangeProps.opacity) {
      element.style.opacity = opacity.value;
    }
  }

  function removeElementStyles(element) {
    classNamesRegistry.register('transition', '');
    element.className = classNamesRegistry.toString();
    element.style.willChange = '';
    element.style.transitionProperty = '';
    element.style.transitionDuration = '';
    element.style.transitionTimingFunction = '';
    element.style.transform = '';
    element.style.transformOrigin = '';
    element.style.width = '';
    element.style.height = '';
    element.style.opacity = '';
  }
  /**
   * https://www.phpied.com/rendering-repaint-reflowrelayout-restyle/
   */


  function forceRepaint(element) {
    element.offsetHeight;
  }
  /**
   * We can reduce multiple transition values,
   * but only if they are all the same.
   */


  function oneOrAll(values) {
    var unique = _toConsumableArray(new Set(values));

    return unique.length === 1 ? unique : values;
  }

  function applySpeed(duration, speed) {
    if (!speed || speed === 1) {
      return duration;
    }

    var value = parseInt(duration, 10);
    var units = duration.slice(-2) === 'ms' ? 'ms' : 's';
    return value / speed + units;
  }
  /**
   * The instant transition is that defined
   * with a zero duration that won't trigger
   * a native transitionEnd event.
   */


  function isInstantTransition(parsedProps, willChangeProps) {
    if (parsedProps !== undefined) {
      return !Object.keys(willChangeProps).some(function (prop) {
        return parsedProps[prop].duration !== '0ms';
      });
    }

    return true;
  }

  return {
    animate: function animate(element, from, to, speed) {
      var fromParsedProps, toParsedProps;

      if (from !== undefined) {
        fromParsedProps = parsePropertyObject(from);
        pushState(fromParsedProps);
      }

      if (to !== undefined) {
        toParsedProps = parsePropertyObject(to);
        pushState(toParsedProps);
      }
      /**
       * We can determine which properties will actually
       * change after pushing them into the history.
       */


      var willChangeProps = getWillChangeProps();
      remainingPropsToChange = Object.keys(willChangeProps).reduce(function (sum, prop) {
        return sum + Number(willChangeProps[prop]);
      }, 0);

      if (fromParsedProps !== undefined) {
        addElementStyles({
          element: element,
          transitioned: false,
          parsedProps: fromParsedProps,
          willChangeProps: willChangeProps
        }); // repaint between synchronized styles change

        forceRepaint(element);
      }

      if (toParsedProps !== undefined) {
        addElementStyles({
          element: element,
          transitioned: true,
          parsedProps: toParsedProps,
          willChangeProps: willChangeProps,
          speed: speed
        });
      }
      /**
       * Only the optional "to" props are "transitioned" and
       * defined can try to execute an animation with a zero
       * duration that won't trigger a transitionEnd event.
       */


      if (isInstantTransition(toParsedProps, willChangeProps)) {
        remainingPropsToChange = 0;

        if (finishCallbackRef) {
          finishCallbackRef();
        }
      }
    },
    apply: function apply(element, props) {
      if (props !== undefined) {
        var parsedProps = parsePropertyObject(props);
        pushState(parsedProps);
        addElementStyles({
          element: element,
          transitioned: false,
          parsedProps: parsedProps,
          willChangeProps: getWillChangeProps()
        });
      }
    },
    cleanup: function cleanup(element) {
      pushState(DEFAULT_PARSED_PROPS);
      removeElementStyles(element);
    },
    propertyTransitionEnd: function propertyTransitionEnd() {
      if (--remainingPropsToChange === 0 && finishCallbackRef) {
        finishCallbackRef();
      }
    },
    onFinish: function onFinish(callback) {
      finishCallbackRef = callback;
    }
  };
}

var _excluded$2 = ["type"];
var predefinedEffects = {
  fade: function fade() {
    return {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1,
        duration: 'quick2',
        easing: 'linear'
      },
      exit: {
        opacity: 0,
        duration: 'quick2',
        easing: 'linear'
      }
    };
  },
  scaleFade: function scaleFade() {
    return {
      initial: {
        opacity: 0,
        transform: {
          scale: 0.85
        }
      },
      animate: {
        opacity: 1,
        transform: {
          scale: 1
        },
        duration: 'moderate2',
        easing: 'entry'
      },
      exit: {
        opacity: 0,
        transform: {
          scale: 0.85
        },
        duration: 'moderate1',
        easing: 'exit'
      }
    };
  },
  slideUpFade: function slideUpFade() {
    return {
      initial: {
        opacity: 0,
        transform: {
          translateY: 'm'
        }
      },
      animate: {
        opacity: 1,
        transform: {
          translateY: 0
        },
        duration: 'moderate1',
        easing: 'entry'
      },
      exit: {
        opacity: 0,
        transform: {
          translateY: 'm'
        },
        duration: 'moderate1',
        easing: 'exit'
      }
    };
  },
  slideDownFade: function slideDownFade() {
    return {
      initial: {
        opacity: 0,
        transform: {
          translateY: '-m'
        }
      },
      animate: {
        opacity: 1,
        transform: {
          translateY: 0
        },
        duration: 'moderate1',
        easing: 'entry'
      },
      exit: {
        opacity: 0,
        transform: {
          translateY: '-m'
        },
        duration: 'moderate1',
        easing: 'exit'
      }
    };
  },
  slideLeftFade: function slideLeftFade() {
    return {
      initial: {
        opacity: 0,
        transform: {
          translateX: 'm'
        }
      },
      animate: {
        opacity: 1,
        transform: {
          translateX: 0
        },
        duration: 'moderate2',
        easing: 'entry'
      },
      exit: {
        opacity: 0,
        transform: {
          translateX: 'm'
        },
        duration: 'moderate1',
        easing: 'exit'
      }
    };
  },
  slideRightFade: function slideRightFade() {
    return {
      initial: {
        opacity: 0,
        transform: {
          translateX: '-m'
        }
      },
      animate: {
        opacity: 1,
        transform: {
          translateX: 0
        },
        duration: 'moderate2',
        easing: 'entry'
      },
      exit: {
        opacity: 0,
        transform: {
          translateX: '-m'
        },
        duration: 'moderate1',
        easing: 'exit'
      }
    };
  }
};
function createEffect(_ref) {
  var type = _ref.type,
      customEffectProps = _objectWithoutProperties(_ref, _excluded$2);

  if (type && predefinedEffects[type] !== undefined) {
    return mergeDeepEffects(predefinedEffects[type](), customEffectProps);
  }

  return customEffectProps;
}
/**
 * It expects effect objects not containing arrays,
 * which will probably never happen in the future.
 */

function mergeDeepEffects(target, source) {
  Object.keys(source).forEach(function (key) {
    if (_typeof(target[key]) === 'object') {
      target[key] = mergeDeepEffects(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  });
  return target;
}

var batchTimeoutId = null;
function getDebugOptions() {
  var debug = window && window.sgTransitionDebug;
  var options = {
    speed: 1,
    outlines: false
  };

  if (!debug || _typeof(debug) !== 'object') {
    return options;
  }

  if (typeof debug.speed === 'number') {
    options.speed = debug.speed;
  }

  if (typeof debug.outlines === 'boolean') {
    options.outlines = debug.outlines;
  }

  var printWarning = function printWarning() {
    console.warn("Transition debug mode is enabled with options: ".concat(JSON.stringify(options)));
  };
  /**
   * The debugging mode applies to every Transition component,
   * therefore multiple references to this function should not
   * immediately print a warning.
   */


  clearTimeout(batchTimeoutId);
  batchTimeoutId = setTimeout(printWarning, 100);
  return options;
}

var _excluded$1 = ["active", "delay", "fillMode", "onTransitionEnd"];
Transition.createEffect = createEffect;

var isFillModeBackwards = function isFillModeBackwards(mode) {
  return mode === 'backwards' || mode === 'both';
};

var isFillModeForwards = function isFillModeForwards(mode) {
  return mode === 'forwards' || mode === 'both';
}; // https://github.com/jsdom/jsdom/issues/1781


var supportsTransitions = function supportsTransitions() {
  return Boolean(window && window.TransitionEvent !== undefined);
};

function BaseTransition(_ref) {
  var active = _ref.active,
      effect = _ref.effect,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay,
      _ref$fillMode = _ref.fillMode,
      fillMode = _ref$fillMode === void 0 ? 'none' : _ref$fillMode,
      inline = _ref.inline,
      className = _ref.className,
      children = _ref.children,
      onTransitionStart = _ref.onTransitionStart,
      onTransitionEnd = _ref.onTransitionEnd;
  var containerRef = React.useRef(null);
  var prefersReducedMotion = useReducedMotion();
  var currentEffect = React.useMemo(function () {
    if (typeof effect === 'function') {
      return effect(prefersReducedMotion);
    }

    return effect;
  }, [effect, prefersReducedMotion]);
  var classNamesRegistry = React.useMemo(createClassNamesRegistry, []);
  var animator = React.useMemo(function () {
    return createCSSTransitionAnimator(classNamesRegistry);
  }, [classNamesRegistry]);

  var _getDebugOptions = getDebugOptions(),
      outlines = _getDebugOptions.outlines;

  var baseClassName = cx('sg-transition', className, {
    'sg-transition--inline': inline,
    'sg-transition--outlines': outlines
  });
  useIsomorphicLayoutEffect(function () {
    /**
     * Since the transition imperatively applies the style
     * and className to the container element, other props
     * changes that affect these element attributes should
     * also be imperative. The registry synchronizes them
     * without affecting the animation.
     */
    classNamesRegistry.register('base', baseClassName || '');
    var container = containerRef.current;

    if (container) {
      container.className = classNamesRegistry.toString();
    }
  }, [classNamesRegistry, baseClassName]);
  /**
   * Changing callbacks should not trigger transition.
   */

  var onTransitionStartRef = React.useRef();
  var onTransitionEndRef = React.useRef();
  useIsomorphicLayoutEffect(function () {
    onTransitionStartRef.current = onTransitionStart;
    onTransitionEndRef.current = onTransitionEnd;
    animator.onFinish(function () {
      var container = containerRef.current;

      if (container && !isFillModeForwards(fillMode)) {
        animator.cleanup(container);
      }

      if (onTransitionEnd && currentEffect) {
        onTransitionEnd(currentEffect);
      }
    });
  });
  /**
   * The transition can be triggered by props that have been
   * applied to the actual DOM, and subsequent renders of the
   * virtual DOM should not produce any visual result.
   */

  var previouslyAppliedProps = React.useRef({
    active: false,
    effect: null
  });
  /**
   * The useLayoutEffect because of possible flicking
   * issues while using a regular useEffect hook.
   */

  useIsomorphicLayoutEffect(function () {
    var _getDebugOptions2 = getDebugOptions(),
        speed = _getDebugOptions2.speed;

    var currentProps = {
      active: active,
      effect: currentEffect
    };
    var container = containerRef.current;
    var rules = getTransitionRules({
      previousProps: previouslyAppliedProps.current,
      currentProps: currentProps
    }); // no rules that trigger the transition found

    if (!container || rules === undefined) {
      return;
    }

    if (currentEffect === null || rules === null) {
      animator.cleanup(container);
      return;
    }

    if (supportsTransitions() && isFillModeBackwards(fillMode)) {
      animator.apply(container, rules.from);
    }

    var performTransitionEffect = function performTransitionEffect() {
      if (onTransitionStartRef.current) {
        onTransitionStartRef.current(currentEffect);
      }

      if (!supportsTransitions()) {
        if (onTransitionEndRef.current) {
          onTransitionEndRef.current(currentEffect);
        }
      } else {
        animator.animate(container, rules.from, rules.to, speed);
      }
      /**
       * These props should be memoized just
       * after applying them to the actual DOM.
       */


      previouslyAppliedProps.current = currentProps;
    };
    /**
     * The parent Transition component can delay mounting
     * a child BaseTransition component when the active prop
     * changes and the child should not wait again.
     */


    var actualDelay = rules.canSkipDelay && !isFillModeBackwards(fillMode) ? 0 : delay;

    if (actualDelay > 0) {
      var timeoutId = setTimeout(performTransitionEffect, actualDelay / speed);
      return function () {
        return clearTimeout(timeoutId);
      };
    }

    performTransitionEffect();
  }, [animator, active, currentEffect, delay, fillMode]);
  var handleTransitionEnd = React.useCallback(function (event) {
    // ignores bubbling events of its own descendants
    if (event.target === event.currentTarget) {
      animator.propertyTransitionEnd();
    }
  }, [animator]);
  return /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    onTransitionEnd: supportsTransitions() ? handleTransitionEnd : undefined
  }, children);
}

function Transition(_ref2) {
  var active = _ref2.active,
      _ref2$delay = _ref2.delay,
      delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
      _ref2$fillMode = _ref2.fillMode,
      fillMode = _ref2$fillMode === void 0 ? 'none' : _ref2$fillMode,
      onTransitionEnd = _ref2.onTransitionEnd,
      otherProps = _objectWithoutProperties(_ref2, _excluded$1);

  var canMountBaseComponent = delay === 0 || isFillModeBackwards(fillMode);

  var _React$useState = React.useState(canMountBaseComponent ? active : false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mounted = _React$useState2[0],
      setMounted = _React$useState2[1];

  useIsomorphicLayoutEffect(function () {
    if (active) {
      var mountBaseComponent = function mountBaseComponent() {
        return setMounted(true);
      };

      if (canMountBaseComponent) {
        mountBaseComponent();
      } else {
        var _getDebugOptions3 = getDebugOptions(),
            speed = _getDebugOptions3.speed;

        var timeoutId = setTimeout(mountBaseComponent, delay / speed);
        return function () {
          return clearTimeout(timeoutId);
        };
      }
    }
  }, [active, delay, canMountBaseComponent]);
  var handleTransitionEnd = React.useCallback(function (effect) {
    if (!active) {
      setMounted(false);
    } // proxy the actual event


    if (onTransitionEnd) {
      onTransitionEnd(effect);
    }
  }, [active, onTransitionEnd]);
  return mounted ? /*#__PURE__*/React.createElement(BaseTransition, _extends({}, otherProps, {
    active: active,
    delay: delay,
    fillMode: fillMode,
    onTransitionEnd: handleTransitionEnd
  })) : null;
}

function getTransitionRules(_ref3) {
  var previousProps = _ref3.previousProps,
      currentProps = _ref3.currentProps;

  if (currentProps.effect === null) {
    return null;
  }

  if (previousProps.active === false && currentProps.active === true) {
    return {
      from: currentProps.effect.initial,
      to: currentProps.effect.animate,
      canSkipDelay: true
    };
  }

  if (previousProps.active === true && currentProps.active === false) {
    return {
      from: currentProps.effect.animate,
      to: currentProps.effect.exit,
      canSkipDelay: false
    };
  }

  if (previousProps.effect === null && currentProps.effect !== null) {
    return {
      from: currentProps.effect.initial,
      to: currentProps.effect.animate,
      canSkipDelay: false
    };
  }

  if (previousProps.effect !== currentProps.effect) {
    return {
      from: currentProps.effect.initial,
      to: currentProps.effect.animate,
      canSkipDelay: false
    };
  }
}

var _excluded = ["children", "className", "id"];

var SkipLink = function SkipLink(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Link$1, _extends({
    className: "sg-skip-link ".concat(className !== null && className !== void 0 ? className : ''),
    href: "#".concat(id)
  }, rest), children);
};

var SkipLink$1 = SkipLink;

export { Accordion$1 as Accordion, AccordionItem$1 as AccordionItem, ActionList$1 as ActionList, ActionListHole$1 as ActionListHole, Avatar$1 as Avatar, Box$1 as Box, Breadcrumb$1 as Breadcrumb, Bubble$1 as Bubble, Button$1 as Button, ButtonRound$1 as ButtonRound, Card$1 as Card, CardHole$1 as CardHole, Checkbox$1 as Checkbox, ContentBox$1 as ContentBox, ContentBoxActions$1 as ContentBoxActions, ContentBoxContent$1 as ContentBoxContent, ContentBoxHeader$1 as ContentBoxHeader, ContentBoxTitle$1 as ContentBoxTitle, Counter$1 as Counter, Dialog, DialogBody$1 as DialogBody, DialogCloseButton$1 as DialogCloseButton, DialogHeader$1 as DialogHeader, Dropdown$1 as Dropdown, FileHandler$1 as FileHandler, FlashMessage$1 as FlashMessage, Flex$1 as Flex, Header$1 as Header, HeaderContainer$1 as HeaderContainer, HeaderContent$1 as HeaderContent, HeaderLeft$1 as HeaderLeft, HeaderMiddle$1 as HeaderMiddle, HeaderRight$1 as HeaderRight, Headline$1 as Headline, HomeButton$1 as HomeButton, Icon$2 as Icon, IconAsButton$1 as IconAsButton, Input$1 as Input, Label$1 as Label, Layout$1 as Layout, LayoutAsideContent$1 as LayoutAsideContent, LayoutContent$1 as LayoutContent, LayoutSecondaryContent$1 as LayoutSecondaryContent, Link$1 as Link, List$1 as List, ListItem$1 as ListItem, ListItemIcon$1 as ListItemIcon, Logo$1 as Logo, MathSymbol$1 as MathSymbol, Media$1 as Media, MenuList$1 as MenuList, MobileIcon$1 as MobileIcon, Overlay$1 as Overlay, OverlayedBox$1 as OverlayedBox, PopupMenu$1 as PopupMenu, Radio$1 as Radio, RadioGroup$1 as RadioGroup, Rating$1 as Rating, RwdHelper$1 as RwdHelper, Search$1 as Search, Select$1 as Select, SeparatorHorizontal$1 as SeparatorHorizontal, Separator$1 as SeparatorVertical, SkipLink$1 as SkipLink, Spinner$1 as Spinner, SpinnerContainer$1 as SpinnerContainer, Subheadline$1 as Subheadline, SubjectIcon$1 as SubjectIcon, SubjectIconBox$1 as SubjectIconBox, Text$1 as Text, TextBit$1 as TextBit, Textarea$1 as Textarea, TopLayer$1 as TopLayer, Transition, getIconGroup, hex$1 as hex, useRadioContext$1 as useRadioContext, useReducedMotion };
