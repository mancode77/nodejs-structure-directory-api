'use strict'

import Joi from 'joi'

const ModuleSchema = Joi.object({})

/**
 * @description Validasi input dari user berdasarkan model db
 * @param {Object} payload Data input user
 * @returns {Object|Array} Jika valid mengembalikan array berisi data user, jika gagal berisi object eeror  
 */
export const ModuleModel = async (payload) => {
    try {
        return await ModuleModel.validateAsync({ ...payload })
    } catch (err) {
        return {
            took: 501,
            status: 'validationError',
            data: null,
            errors: {
                message: err
            }
        }
    }
}