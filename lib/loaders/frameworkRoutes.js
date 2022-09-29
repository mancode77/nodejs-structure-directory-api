'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.frameworkRoutes = void 0;

var _api = require("../api");

/**
 * @description Menghubungkan loaders directory dengan folder router
 * @param {Object} req Object request header 
 * @param {Object} res Object response header
 */
var frameworkRoutes = function frameworkRoutes(req, res) {
  if (req.url === '/status') res.writeHead(res.statusCode).end();
  (0, _api.routes)(req, res);
};

exports.frameworkRoutes = frameworkRoutes;