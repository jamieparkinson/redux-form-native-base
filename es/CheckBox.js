'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nativeBase = require('native-base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var _ref$input = _ref.input,
      onChange = _ref$input.onChange,
      checked = _ref$input.checked,
      inputProps = _objectWithoutProperties(_ref$input, ['onChange', 'checked']),
      props = _objectWithoutProperties(_ref, ['input']);

  return _react2.default.createElement(_nativeBase.CheckBox, { checked: !!checked,
    onClick: function onClick() {
      return onChange(!checked);
    } });
};