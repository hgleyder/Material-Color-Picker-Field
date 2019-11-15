"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactColor = require("react-color");

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    min-width: 10rem;\n    width: ", "; \n    & > .label {\n      color: #707070;\n      font-size: 0.75rem;\n      font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    }\n    & > .content {\n      margin-top: 0.5rem;\n      width: 100%;\n      padding-bottom: 0.5rem;\n      border-bottom: 1px solid #707070;\n      color: black;\n      font-size: 1rem;\n      font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    }\n    & .color-preview {\n      width: 1rem;\n      height: 1rem;\n      border-radius: 50%;\n      position relative;\n      float: right;\n      right: 0.5rem;\n      background-color: ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ColorPickerField = function ColorPickerField(_ref) {
  var fullWidth = _ref.fullWidth,
      primaryColor = _ref.primaryColor,
      value = _ref.value,
      label = _ref.label,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange;

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      color = _useState2[0],
      setColor = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      anchorEl = _useState4[0],
      setAnchorEl = _useState4[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleOnChange = function handleOnChange(newValue) {
    onChange(newValue);
    setColor(newValue);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var open = Boolean(anchorEl);
  var id = open ? 'simple-popover' : undefined;
  return _react.default.createElement(Container, {
    value: color,
    primaryColor: primaryColor,
    fullWidth: fullWidth
  }, label && _react.default.createElement("div", {
    className: "label"
  }, label), _react.default.createElement("div", {
    className: "content",
    "aria-describedby": id,
    onClick: handleClick
  }, color || _react.default.createElement("span", {
    style: {
      color: '#707070'
    }
  }, placeholder), color && _react.default.createElement("div", {
    className: "color-preview"
  })), _react.default.createElement(_Popover.default, {
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: handleClose,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, _react.default.createElement(_reactColor.SketchPicker, {
    color: color,
    disableAlpha: true,
    onChangeComplete: function onChangeComplete(newColor) {
      return handleOnChange(newColor.hex);
    }
  })));
};

var Container = _styledComponents.default.div(_templateObject(), function (props) {
  return props.fullWidth ? '100%' : 'auto';
}, function (props) {
  return props.value;
});

ColorPickerField.propTypes = {
  /** Field overlay color */
  primaryColor: _propTypes.default.string,

  /** Set the component width as 100% */
  fullWidth: _propTypes.default.bool,

  /** Field Current Value */
  value: _propTypes.default.string,

  /** Field Label */
  label: _propTypes.default.string,

  /** Placeholder text used when no value is selected */
  placeholder: _propTypes.default.string,

  /** onChange method called whenever the value change */
  onChange: _propTypes.default.func
};
ColorPickerField.defaultProps = {
  primaryColor: '#0097a7',
  fullWidth: false,
  value: '',
  label: '',
  placeholder: '',
  onChange: function onChange() {}
};
var _default = ColorPickerField;
exports.default = _default;
//# sourceMappingURL=color-picker-field.js.map