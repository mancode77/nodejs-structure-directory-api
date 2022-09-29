'use strict'

import http from 'http'
import { logger, errorLogger } from 'utils/logger'
import { config } from 'configs'
import { loder } from 'loaders'
import { frameworkRoutes } from 'loaders/frameworkRoutes.js'

http.createServer((req, res) => {
  loder()
  frameworkRoutes(req, res)
}).listen(
  config.port,
  () => logger(`
    ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
    ################################################
    `)
).on('error', err => {
  errorLogger(err);
  process.exit(1);
});