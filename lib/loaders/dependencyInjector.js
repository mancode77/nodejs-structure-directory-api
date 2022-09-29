'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dependencyInjectorLoader = void 0;

var _Container = require("../../utils/Container.js");

/**
 * @description Setup model ke container  
 * @param {Object} models Berisi banyak model
 */
var dependencyInjectorLoader = function dependencyInjectorLoader(_ref) {
  var mysqlConnection = _ref.mysqlConnection,
      models = _ref.models;
  var ModuleModel = models.ModuleModel;
  var container = new _Container.Container();
  container.set(ModuleModel.name, ModuleModel.model);
};

exports.dependencyInjectorLoader = dependencyInjectorLoader;