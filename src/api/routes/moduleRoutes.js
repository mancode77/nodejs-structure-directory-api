'use strict'

import { Routes } from 'Routes.js'

/**
 * @description Menangani request method
 * @param {Object} req Object request header 
 * @param {Object} res Object response header 
 */
export const moduleRoutes = (req, res) => {
    const { ModuleReqMethode } = new Routes()

    ModuleReqMethode(req, res)
}