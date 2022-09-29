'use strict'

import { moduleRouter } from 'routes/moduleRoutes.js'

/**
 * @description Router
 * @param {Object} req Object request header 
 * @param {Object} res Object response header 
 * @returns {Function} Fungsi router
 */
export const routes = (req, res) => moduleRouter(req, res)