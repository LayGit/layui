"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Button = (function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    _get(Object.getPrototypeOf(Button.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "button",
        { className: "button" },
        this.props.children
      );
    }
  }]);

  return Button;
})(_react2["default"].Component);

exports["default"] = Button;
module.exports = exports["default"];