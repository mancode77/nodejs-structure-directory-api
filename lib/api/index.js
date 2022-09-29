'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _moduleRoutes = require("routes/moduleRoutes.js");

/**
 * @description Router
 * @param {Object} req Object request header 
 * @param {Object} res Object response header 
 * @returns {Function} Fungsi router
 */
var routes = function routes(req, res) {
  return (0, _moduleRoutes.moduleRouter)(req, res);
};

exports.routes = routes;