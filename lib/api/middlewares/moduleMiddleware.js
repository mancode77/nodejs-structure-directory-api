"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.middlewareAuth = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _configs = require("../../configs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @description Menangani Token dari header HTTP
 * @param {Object} req Object request header HTTP
 * @returns {*} Jika true akan mengembalikan string token, jika false mengembalikan null  
 */
var getTokenFromHeader = function getTokenFromHeader(req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' || req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
};

var middlewareAuth = (0, _jsonwebtoken["default"])({
  secret: _configs.config.jwtSecret,
  algorithms: [_configs.config.jwtAlgorithm],
  userProperty: 'token',
  getToken: getTokenFromHeader
});
exports.middlewareAuth = middlewareAuth;