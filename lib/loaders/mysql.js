"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mysqlConnection = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

var _configs = require("./../configs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dbHost = _configs.config.dbHost,
    dbUser = _configs.config.dbUser,
    dbPass = _configs.config.dbPass,
    dbName = _configs.config.dbName;
/**
 * @description Koneksi MySQL
 * @returns Object koneksi MySQL
 */

var mysqlConnection = function mysqlConnection() {
  return _mysql["default"].createConnection({
    dbHost: dbHost,
    dbUser: dbUser,
    dbPass: dbPass,
    dbName: dbName
  });
};

exports.mysqlConnection = mysqlConnection;