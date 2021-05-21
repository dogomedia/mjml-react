"use strict";

exports.__esModule = true;
exports.renderToJSON = renderToJSON;

var _react = _interopRequireDefault(require("react"));

var _reactReconciler = _interopRequireDefault(require("react-reconciler"));

var _server = _interopRequireDefault(require("react-dom/server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var matchHtmlRegExp = /["'&<>$]/;
var reconciler = (0, _reactReconciler["default"])({
  supportsMutation: true,
  createTextInstance: function createTextInstance(text
  /* rootContainerInstance, hostContext, internalInstanceHandle,*/
  ) {
    return text;
  },
  createInstance: function createInstance(type, props
  /* rootContainerInstance, hostContext */
  ) {
    var children = props.children,
        dangerouslySetInnerHTML = props.dangerouslySetInnerHTML,
        rest = _objectWithoutPropertiesLoose(props, ["children", "dangerouslySetInnerHTML"]);

    var res = {
      tagName: type,
      attributes: rest
    };
    Object.keys(res.attributes).forEach(function (key) {
      var attrKey = res.attributes[key];

      if (attrKey === undefined) {
        delete res.attributes[key];
      }

      if (typeof attrKey === 'string') {
        res.attributes[key] = escapeTextForBrowser(attrKey);
      }
    });

    if (!type.startsWith('mj')) {
      return {
        type: type,
        props: props,
        children: [],
        isReact: true
      };
    }

    if (props.dangerouslySetInnerHTML && props.dangerouslySetInnerHTML.__html) {
      // using replace to prevent issue with $ sign in MJML
      // https://github.com/mjmlio/mjml2json#L145
      res.content = props.dangerouslySetInnerHTML.__html.replace('$', '&#36;');
    }

    return res;
  },
  appendChildToContainer: function appendChildToContainer(container, child) {
    trimContent(child);
    container.resultObj = child;
  },
  appendInitialChild: function appendInitialChild(parent, child) {
    if (child.isReact) {
      if (parent.isReact) {
        parent.children.push(child);
      } else {
        var reactElement = toReactElement(child);

        if (!parent.content) {
          parent.content = '';
        }

        parent.content += _server["default"].renderToStaticMarkup(reactElement);
      }
    } else if (typeof child === 'string') {
      if (!child) return;

      if (parent.isReact) {
        parent.children.push(child);
      } else {
        if (!parent.content) {
          parent.content = '';
        }

        parent.content += escapeTextForBrowser(child);
      }
    } else {
      if (!parent.children) parent.children = [];
      parent.children.push(child);
    }
  },
  prepareForCommit: noop,
  resetAfterCommit: noop,
  clearContainer: noop,
  appendChild: noop,
  finalizeInitialChildren: noop,
  getChildHostContext: noop,
  getRootHostContext: noop,
  shouldSetTextContent: noop
});

function renderToJSON(whatToRender) {
  var container = reconciler.createContainer({}, false, false);
  reconciler.updateContainer(whatToRender, container, null, null);
  return container.containerInfo.resultObj;
}

function toReactElement(element) {
  if (element.children.length === 0) {
    return /*#__PURE__*/_react["default"].createElement(element.type, element.props);
  }

  return /*#__PURE__*/_react["default"].createElement(element.type, element.props, element.children.map(function (child) {
    return typeof child === 'string' ? child : toReactElement(child);
  }));
}

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;

      case 36:
        // $
        escape = '&#36;';
        break;

      case 38:
        // &
        escape = '&amp;';
        break;

      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'

        break;

      case 60:
        // <
        escape = '&lt;';
        break;

      case 62:
        // >
        escape = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}

function escapeTextForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    return '' + text;
  }

  return escapeHtml(text);
}

function noop() {}

function trimContent(child) {
  if (child.content) {
    child.content = child.content.trim();
  } else if (child.children) {
    child.children.forEach(trimContent);
  }
}