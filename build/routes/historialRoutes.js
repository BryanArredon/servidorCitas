"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const historialController_1 = require("../controllers/historialController");
class HistorialRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', historialController_1.historialController.list);
        this.router.get('/:id', historialController_1.historialController.getOne);
        this.router.post('/', historialController_1.historialController.create);
        this.router.put('/:id', historialController_1.historialController.update);
        this.router.delete('/:id', historialController_1.historialController.delete);
    }
}
const historialRoutes = new HistorialRoutes();
exports.default = historialRoutes.router;
