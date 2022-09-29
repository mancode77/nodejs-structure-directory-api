'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moduleRoutes = void 0;

var _Routes2 = require("Routes.js");

/**
 * @description Menangani request method
 * @param {Object} req Object request header 
 * @param {Object} res Object response header 
 */
var moduleRoutes = function moduleRoutes(req, res) {
  var _Routes = new _Routes2.Routes(),
      ModuleReqMethode = _Routes.ModuleReqMethode;

  ModuleReqMethode(req, res);
};

exports.moduleRoutes = moduleRoutes;