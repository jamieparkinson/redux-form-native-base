'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _nativeBase = require('native-base');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
        var _ref$input = _ref.input,
            value = _ref$input.value,
            onChange = _ref$input.onChange,
            inputProps = _objectWithoutProperties(_ref$input, ['value', 'onChange']),
            meta = _ref.meta,
            props = _objectWithoutProperties(_ref, ['input', 'meta']);

        return React.createElement(_nativeBase.Picker, _extends({ selectedValue: value,
                onValueChange: function onValueChange(itemValue) {
                        return onChange(itemValue);
                }
        }, props));
};