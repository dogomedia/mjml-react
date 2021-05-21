import _regeneratorRuntime from "@babel/runtime/regenerator";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import React from 'react';
import { expect } from 'chai';
import { render, Mjml, MjmlHead, MjmlTitle, MjmlBody, MjmlRaw } from '../src';
describe('render()', function () {
  it('should render the HTML', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var email, _yield$render, html;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = /*#__PURE__*/React.createElement(Mjml, null, /*#__PURE__*/React.createElement(MjmlHead, null, /*#__PURE__*/React.createElement(MjmlTitle, null, "Title")), /*#__PURE__*/React.createElement(MjmlBody, null, /*#__PURE__*/React.createElement(MjmlRaw, null, /*#__PURE__*/React.createElement("p", null, "Paragraph"))));
            _context.next = 3;
            return render(email);

          case 3:
            _yield$render = _context.sent;
            html = _yield$render.html;
            expect(html).to.not.be.undefined;
            expect(html).to.contain('<!doctype html>');
            expect(html).to.contain('<title>Title</title>');
            expect(html).to.contain('<p>Paragraph</p>');

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should throw an error if invalid markup is given', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    var email;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            email = /*#__PURE__*/React.createElement(Mjml, null, /*#__PURE__*/React.createElement(MjmlBody, null, /*#__PURE__*/React.createElement("div", null, "Ooops!")));
            _context2.prev = 1;
            _context2.next = 4;
            return render(email);

          case 4:
            expect(true, 'Promise should fail').eq(false);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](1);
            expect(_context2.t0.message.match(/Element div doesn't exist or is not registered/)).to.be.ok;

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 7]]);
  })));
  it('should not throw an error if soft validation level is passed', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
    var email, _yield$render2, errors;

    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            email = /*#__PURE__*/React.createElement(Mjml, null, /*#__PURE__*/React.createElement(MjmlBody, null, /*#__PURE__*/React.createElement("div", null, "Ooops!")));
            _context3.next = 3;
            return render(email, {
              validationLevel: 'soft',
              minify: false
            });

          case 3:
            _yield$render2 = _context3.sent;
            errors = _yield$render2.errors;
            expect(errors.length).to.equal(1);
            expect(errors[0].message).to.contain("Element div doesn't exist or is not registered");

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
});