"use strict";

exports.__esModule = true;
exports.render = render;
exports.renderToMjml = renderToMjml;
exports.MjmlWrapper = exports.MjmlTitle = exports.MjmlText = exports.MjmlTable = exports.MjmlStyle = exports.MjmlSpacer = exports.MjmlSocialElement = exports.MjmlSocial = exports.MjmlSection = exports.MjmlRaw = exports.MjmlPreview = exports.MjmlNavbarLink = exports.MjmlNavbar = exports.MjmlImage = exports.MjmlHero = exports.MjmlHead = exports.MjmlGroup = exports.MjmlFont = exports.MjmlDivider = exports.MjmlColumn = exports.MjmlClass = exports.MjmlCarouselImage = exports.MjmlCarousel = exports.MjmlButton = exports.MjmlBreakpoint = exports.MjmlBody = exports.MjmlAttributes = exports.MjmlAll = exports.MjmlAccordionTitle = exports.MjmlAccordionText = exports.MjmlAccordionElement = exports.MjmlAccordion = exports.Mjml = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _renderToJson = require("./utils/render-to-json");

exports.renderToJSON = _renderToJson.renderToJSON;

var _mjml = require("./mjml");

exports.Mjml = _mjml.Mjml;

var _mjmlAccordion = require("./mjml-accordion");

exports.MjmlAccordion = _mjmlAccordion.MjmlAccordion;

var _mjmlAccordionElement = require("./mjml-accordion-element");

exports.MjmlAccordionElement = _mjmlAccordionElement.MjmlAccordionElement;

var _mjmlAccordionText = require("./mjml-accordion-text");

exports.MjmlAccordionText = _mjmlAccordionText.MjmlAccordionText;

var _mjmlAccordionTitle = require("./mjml-accordion-title");

exports.MjmlAccordionTitle = _mjmlAccordionTitle.MjmlAccordionTitle;

var _mjmlAll = require("./mjml-all");

exports.MjmlAll = _mjmlAll.MjmlAll;

var _mjmlAttributes = require("./mjml-attributes");

exports.MjmlAttributes = _mjmlAttributes.MjmlAttributes;

var _mjmlBody = require("./mjml-body");

exports.MjmlBody = _mjmlBody.MjmlBody;

var _mjmlBreakpoint = require("./mjml-breakpoint");

exports.MjmlBreakpoint = _mjmlBreakpoint.MjmlBreakpoint;

var _mjmlButton = require("./mjml-button");

exports.MjmlButton = _mjmlButton.MjmlButton;

var _mjmlCarousel = require("./mjml-carousel");

exports.MjmlCarousel = _mjmlCarousel.MjmlCarousel;

var _mjmlCarouselImage = require("./mjml-carousel-image");

exports.MjmlCarouselImage = _mjmlCarouselImage.MjmlCarouselImage;

var _mjmlClass = require("./mjml-class");

exports.MjmlClass = _mjmlClass.MjmlClass;

var _mjmlColumn = require("./mjml-column");

exports.MjmlColumn = _mjmlColumn.MjmlColumn;

var _mjmlDivider = require("./mjml-divider");

exports.MjmlDivider = _mjmlDivider.MjmlDivider;

var _mjmlFont = require("./mjml-font");

exports.MjmlFont = _mjmlFont.MjmlFont;

var _mjmlGroup = require("./mjml-group");

exports.MjmlGroup = _mjmlGroup.MjmlGroup;

var _mjmlHead = require("./mjml-head");

exports.MjmlHead = _mjmlHead.MjmlHead;

var _mjmlHero = require("./mjml-hero");

exports.MjmlHero = _mjmlHero.MjmlHero;

var _mjmlImage = require("./mjml-image");

exports.MjmlImage = _mjmlImage.MjmlImage;

var _mjmlNavbar = require("./mjml-navbar");

exports.MjmlNavbar = _mjmlNavbar.MjmlNavbar;

var _mjmlNavbarLink = require("./mjml-navbar-link");

exports.MjmlNavbarLink = _mjmlNavbarLink.MjmlNavbarLink;

var _mjmlPreview = require("./mjml-preview");

exports.MjmlPreview = _mjmlPreview.MjmlPreview;

var _mjmlRaw = require("./mjml-raw");

exports.MjmlRaw = _mjmlRaw.MjmlRaw;

var _mjmlSection = require("./mjml-section");

exports.MjmlSection = _mjmlSection.MjmlSection;

var _mjmlSocial = require("./mjml-social");

exports.MjmlSocial = _mjmlSocial.MjmlSocial;

var _mjmlSocialElement = require("./mjml-social-element");

exports.MjmlSocialElement = _mjmlSocialElement.MjmlSocialElement;

var _mjmlSpacer = require("./mjml-spacer");

exports.MjmlSpacer = _mjmlSpacer.MjmlSpacer;

var _mjmlStyle = require("./mjml-style");

exports.MjmlStyle = _mjmlStyle.MjmlStyle;

var _mjmlTable = require("./mjml-table");

exports.MjmlTable = _mjmlTable.MjmlTable;

var _mjmlText = require("./mjml-text");

exports.MjmlText = _mjmlText.MjmlText;

var _mjmlTitle = require("./mjml-title");

exports.MjmlTitle = _mjmlTitle.MjmlTitle;

var _mjmlWrapper = require("./mjml-wrapper");

exports.MjmlWrapper = _mjmlWrapper.MjmlWrapper;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function render(_x, _x2) {
  return _render.apply(this, arguments);
}

function _render() {
  _render = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(email, options) {
    var defaults, mjml2html, _mjml2html;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (options === void 0) {
              options = {};
            }

            defaults = {
              keepComments: false,
              beautify: false,
              minify: true,
              validationLevel: 'strict'
            };

            if (!(typeof window === 'undefined')) {
              _context.next = 9;
              break;
            }

            _context.next = 5;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require('mjml'));
            });

          case 5:
            mjml2html = _context.sent["default"];
            return _context.abrupt("return", mjml2html(renderToMjml(email), _objectSpread(_objectSpread({}, defaults), options)));

          case 9:
            _context.next = 11;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require('mjml-browser'));
            });

          case 11:
            _mjml2html = _context.sent["default"];
            return _context.abrupt("return", _mjml2html(renderToMjml(email), _objectSpread(_objectSpread({}, defaults), options)));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _render.apply(this, arguments);
}

function renderToMjml(email) {
  return _server["default"].renderToStaticMarkup(email);
}