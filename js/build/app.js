'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Chart = require('./components/Chart');

var _Chart2 = _interopRequireDefault(_Chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
        'h1',
        null,
        _react2.default.createElement(_Logo2.default, null),
        ' Create balls and drag them!'
    ),
    _react2.default.createElement(_Chart2.default, null)
), document.getElementById('app'));