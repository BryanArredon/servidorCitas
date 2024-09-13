"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recordatoriosCrontroller_1 = require("../controllers/recordatoriosCrontroller");
class RecordatoriosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', recordatoriosCrontroller_1.recordatoriosController.list);
        this.router.get('/:id', recordatoriosCrontroller_1.recordatoriosController.getOne);
        this.router.post('/', recordatoriosCrontroller_1.recordatoriosController.create);
        this.router.put('/:id', recordatoriosCrontroller_1.recordatoriosController.update);
        this.router.delete('/:id', recordatoriosCrontroller_1.recordatoriosController.delete);
    }
}
const recordatoriosRoutes = new RecordatoriosRoutes();
exports.default = recordatoriosRoutes.router;
