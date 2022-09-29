'use strict'

import { ModuleService } from '../../services/ModuleService.js'

export class Routes {
    #resHead(res) {
        res.writeHead(200, {
            'Access-Control-Allow-Headers': 'x-access-token, Origin, Content-Type, Accept',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        });
    }

    /**
     * @description Menangani GET, POST, PUT, DELEETE request METHOD
     * @param {Object} req Object request header 
     * @param {Object} res Object response header 
     */
    reqMethod(req, res) {
        this.#resHead(res)

        const authService = new ModuleService;

        switch (req.url) {
            default:
                res.end('404 NOT FOUND');
        }
    }

    /**
     * @description Menangani request url method GET 
     * @param {Object} req Object request header 
     * @param {Object} res Object response header 
     */
    reqGet(req, res) {
        this.#resHead(res)

        const authService = new ModuleService;

        switch (req.url) {
            default:
                res.end('404 NOT FOUND');
        }
    }

    /**
     * @description Menangani request url method POST
     * @param {Object} req Object request header 
     * @param {Object} res Object response header 
     */
    reqPost(req, res) {
        this.#resHead(res)

        const authService = new ModuleService;

        switch (req.method) {
            default:
                res.end('404 NOT FOUND');
        }
    }

    /**
     * @description Menangani request url method PUT
     * @param {Object} req Object request header 
     * @param {Object} res Object response header 
     */
    reqPut(req, res) {
        this.#resHead(res)

        const authService = new ModuleService;

        switch (req.url) {
            default:
                res.end('404 NOT FOUND');
        }
    }

    /**
     * @description Menangani request url method DELETE
     * @param {Object} req Object request header 
     * @param {Object} res Object response header 
     */
    reqDelete(req, res) {
        this.#resHead(res)

        const authService = new ModuleService;

        switch (req.url) {
            default:
                res.end('404 NOT FOUND');
        }
    }
}