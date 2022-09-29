'use strict'

import { Container } from '../../utils/Container.js'

/**
 * @description Setup model ke container  
 * @param {Object} models Berisi banyak model
 */
export const dependencyInjectorLoader = ({ mysqlConnection, models }) => {
    const { ModuleModel } = models

    const container = new Container();

    container.set(ModuleModel.name, ModuleModel.model);
}