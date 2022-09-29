'use strict'

export class Container {
    #container = []
    #ModuleModelName

    /**
     * @description Setup model db
     * @param {String} name Vaiabel penampung nama model 
     * @param {Object} model Object berisi data model
     */
    set(name, model) {
        this.#container.push({ name, model })
    }

    /**
     * @description Pencocokan model berdasarkan nama model
     * @param {String} name Vaiabel penampung nama model
     */
    set setModuleModelName(name) {
        this.#userModelName = this.#container.filter((models) => {
            return models.name === name
        })
    }

    /**
     * @description Mengebalikan model yang valid
     * @returns Object model
     */
    get getModuleModelName() {
        return this.#ModuleModelName
    }
}