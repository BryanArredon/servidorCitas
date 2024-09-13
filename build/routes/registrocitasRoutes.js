"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registrocitasController_1 = require("../controllers/registrocitasController");
class RegistrocitasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', registrocitasController_1.registrocitasController.list);
        this.router.get('/:id', registrocitasController_1.registrocitasController.getOne);
        this.router.post('/', registrocitasController_1.registrocitasController.create);
        this.router.put('/:id', registrocitasController_1.registrocitasController.update);
        this.router.delete('/:id', registrocitasController_1.registrocitasController.delete);
    }
}
const registrocitasRoutes = new RegistrocitasRoutes();
exports.default = registrocitasRoutes.router;
