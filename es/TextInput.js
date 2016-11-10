'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _nativeBase = require('native-base');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var inputProps = _objectWithoutProperties(_ref.input, []),
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      _ref$icon = _ref.icon,
      icon = _ref$icon === undefined ? null : _ref$icon,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === undefined ? '' : _ref$placeholder,
      props = _objectWithoutProperties(_ref, ['input', 'meta', 'icon', 'placeholder']);

  return React.createElement(
    _nativeBase.InputGroup,
    { borderType: 'underline',
      error: touched && error },
    React.createElement(_nativeBase.Input, _extends({}, inputProps, { placeholder: placeholder }))
  );
};