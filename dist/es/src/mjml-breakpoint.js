function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import { handleMjmlProps } from './utils';
export var MjmlBreakpoint = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MjmlBreakpoint, _Component);

  function MjmlBreakpoint() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MjmlBreakpoint.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement('mj-breakpoint', handleMjmlProps(this.props), null);
  };

  return MjmlBreakpoint;
}(Component);