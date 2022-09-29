'use strict'

import { routes } from '../api'

/**
 * @description Menghubungkan loaders directory dengan folder router
 * @param {Object} req Object request header 
 * @param {Object} res Object response header
 */
export const frameworkRoutes = (req, res) => {
    if (req.url === '/status') res.writeHead(res.statusCode).end()
    
    routes(req, res)
}