import _regeneratorRuntime from "@babel/runtime/regenerator";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import ReactDOMServer from 'react-dom/server';
import { renderToJSON } from './utils/render-to-json';
export { render, renderToMjml, renderToJSON };
export { Mjml } from './mjml';
export { MjmlAccordion } from './mjml-accordion';
export { MjmlAccordionElement } from './mjml-accordion-element';
export { MjmlAccordionText } from './mjml-accordion-text';
export { MjmlAccordionTitle } from './mjml-accordion-title';
export { MjmlAll } from './mjml-all';
export { MjmlAttributes } from './mjml-attributes';
export { MjmlBody } from './mjml-body';
export { MjmlBreakpoint } from './mjml-breakpoint';
export { MjmlButton } from './mjml-button';
export { MjmlCarousel } from './mjml-carousel';
export { MjmlCarouselImage } from './mjml-carousel-image';
export { MjmlClass } from './mjml-class';
export { MjmlColumn } from './mjml-column';
export { MjmlDivider } from './mjml-divider';
export { MjmlFont } from './mjml-font';
export { MjmlGroup } from './mjml-group';
export { MjmlHead } from './mjml-head';
export { MjmlHero } from './mjml-hero';
export { MjmlImage } from './mjml-image';
export { MjmlNavbar } from './mjml-navbar';
export { MjmlNavbarLink } from './mjml-navbar-link';
export { MjmlPreview } from './mjml-preview';
export { MjmlRaw } from './mjml-raw';
export { MjmlSection } from './mjml-section';
export { MjmlSocial } from './mjml-social';
export { MjmlSocialElement } from './mjml-social-element';
export { MjmlSpacer } from './mjml-spacer';
export { MjmlStyle } from './mjml-style';
export { MjmlTable } from './mjml-table';
export { MjmlText } from './mjml-text';
export { MjmlTitle } from './mjml-title';
export { MjmlWrapper } from './mjml-wrapper';

function render(_x, _x2) {
  return _render.apply(this, arguments);
}

function _render() {
  _render = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(email, options) {
    var defaults, mjml2html, _mjml2html;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
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
            return import('mjml');

          case 5:
            mjml2html = _context.sent["default"];
            return _context.abrupt("return", mjml2html(renderToMjml(email), _objectSpread(_objectSpread({}, defaults), options)));

          case 9:
            _context.next = 11;
            return import('mjml-browser');

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
  return ReactDOMServer.renderToStaticMarkup(email);
}