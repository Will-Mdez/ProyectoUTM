"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventosController_1 = require("../controllers/eventosController");
class EventosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/eventosdeprofesor/:idProfesor', eventosController_1.eventosController.listEventosdeProfesor);
        this.router.get('/unevento/:id', eventosController_1.eventosController.listOneEvento);
        //Post
        this.router.post('/nuevoevento', eventosController_1.eventosController.createEvento);
        this.router.delete('/eliminarevento/:idP', eventosController_1.eventosController.eliminarEvento);
        this.router.put('/actualizarevento/:idP', eventosController_1.eventosController.actualizarEvento);
    }
}
const eventosRoutes = new EventosRoutes();
exports.default = eventosRoutes.router;
