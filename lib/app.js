'use strict';

var _http = _interopRequireDefault(require("http"));

var _logger = require("utils/logger");

var _configs = require("configs");

var _loaders = require("loaders");

var _frameworkRoutes = require("loaders/frameworkRoutes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_http["default"].createServer(function (req, res) {
  (0, _loaders.loder)();
  (0, _frameworkRoutes.frameworkRoutes)(req, res);
}).listen(_configs.config.port, function () {
  return (0, _logger.logger)("\n    ################################################\n      \uD83D\uDEE1\uFE0F  Server listening on port: ".concat(_configs.config.port, " \uD83D\uDEE1\uFE0F\n    ################################################\n    "));
}).on('error', function (err) {
  (0, _logger.errorLogger)(err);
  process.exit(1);
});