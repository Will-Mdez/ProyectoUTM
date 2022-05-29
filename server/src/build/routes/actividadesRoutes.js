"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actividadesController_1 = require("../controllers/actividadesController");
class ActividadesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/actividadesdeprofesor/:id', actividadesController_1.actividadesController.listActividadesdeProfesor);
        this.router.get('/unaactividad/:id', actividadesController_1.actividadesController.listOneActividad);
        //Post
        this.router.post('/nuevaactividad', actividadesController_1.actividadesController.createActividad);
        this.router.delete('/eliminaractividad/:idP', actividadesController_1.actividadesController.eliminarActividad);
        this.router.put('/actualizaractividad/:idP', actividadesController_1.actividadesController.actualizarActividad);
    }
}
const actividadesRoutes = new ActividadesRoutes();
exports.default = actividadesRoutes.router;
