'use strict'

import { logger } from 'utils/logger.js'
import { dependencyInjectorLoader } from 'dependencyInjector.js'
import { mysqLoader } from 'mysql.js'
import { userModel } from '../models/ModuleNameModel.js'
import { ModuleSubscriber } from 'event.js'

/**
 * @description Load model db
 */
export const loder = async () => {
    const models = {
        ModuleModel: {
            name: 'users',
            userModel
        }
    }

    dependencyInjectorLoader({
        mysqlConnection: mysqLoader(),
        models: { ...models }
    })

    logger('✌️ DB loaded and connected!')
    logger('✌️ Dependency Injector loaded')
}
