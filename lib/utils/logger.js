'use strict';
/**
 * @description Output console biasa
 * @param {String} message Message yang akan di tampilkan pada console
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = exports.errorLogger = void 0;

var logger = function logger(message) {
  return console.info(message);
};
/**
 * @description Output console error
 * @param {String} message Message yang akan di tampilkan pada console
 */


exports.logger = logger;

var errorLogger = function errorLogger(message) {
  return console.error(message);
};

exports.errorLogger = errorLogger;