function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import { handleMjmlProps } from './utils';
export var MjmlBody = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MjmlBody, _Component);

  function MjmlBody() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MjmlBody.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        rest = _objectWithoutPropertiesLoose(_this$props, ["children"]);

    return /*#__PURE__*/React.createElement('mj-body', handleMjmlProps(rest), children);
  };

  return MjmlBody;
}(Component);