'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Routes = void 0;

var _ModuleService = require("../../services/ModuleService.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _resHead = /*#__PURE__*/new WeakSet();

var Routes = /*#__PURE__*/function () {
  function Routes() {
    _classCallCheck(this, Routes);

    _classPrivateMethodInitSpec(this, _resHead);
  }

  _createClass(Routes, [{
    key: "reqMethod",
    value:
    /**
     * @description Menangani GET, POST, PUT, DELEETE request METHOD
     * @param {Object} req Object request header 
     * @param {Object} res Object response header 
     */
    function reqMethod(req, res) {
      _classPrivateMethodGet(this, _resHead, _resHead2).call(this, res);

      var authService = new _ModuleService.ModuleService();

      switch (req.url) {
        default:
          res.end('404 NOT FOUND');
      }
    }
    /**
     * @description Menangani request url method GET 
     * @param {Object} req Object request header 
     * @param {Object} res Object response header 
     */

  }, {
    key: "reqGet",
    value: function reqGet(req, res) {
      _classPrivateMethodGet(this, _resHead, _resHead2).call(this, res);

      var authService = new _ModuleService.ModuleService();

      switch (req.url) {
        default:
          res.end('404 NOT FOUND');
      }
    }
    /**
     * @description Menangani request url method POST
     * @param {Object} req Object request header 
     * @param {Object} res Object response header 
     */

  }, {
    key: "reqPost",
    value: function reqPost(req, res) {
      _classPrivateMethodGet(this, _resHead, _resHead2).call(this, res);

      var authService = new _ModuleService.ModuleService();

      switch (req.method) {
        default:
          res.end('404 NOT FOUND');
      }
    }
    /**
     * @description Menangani request url method PUT
     * @param {Object} req Object request header 
     * @param {Object} res Object response header 
     */

  }, {
    key: "reqPut",
    value: function reqPut(req, res) {
      _classPrivateMethodGet(this, _resHead, _resHead2).call(this, res);

      var authService = new _ModuleService.ModuleService();

      switch (req.url) {
        default:
          res.end('404 NOT FOUND');
      }
    }
    /**
     * @description Menangani request url method DELETE
     * @param {Object} req Object request header 
     * @param {Object} res Object response header 
     */

  }, {
    key: "reqDelete",
    value: function reqDelete(req, res) {
      _classPrivateMethodGet(this, _resHead, _resHead2).call(this, res);

      var authService = new _ModuleService.ModuleService();

      switch (req.url) {
        default:
          res.end('404 NOT FOUND');
      }
    }
  }]);

  return Routes;
}();

exports.Routes = Routes;

function _resHead2(res) {
  res.writeHead(200, {
    'Access-Control-Allow-Headers': 'x-access-token, Origin, Content-Type, Accept',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  });
}