'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModuleSubscriber = void 0;

var _mysql = require("../loaders/mysql.js");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModuleSubscriber = /*#__PURE__*/_createClass(function ModuleSubscriber() {
  _classCallCheck(this, ModuleSubscriber);
});

exports.ModuleSubscriber = ModuleSubscriber;