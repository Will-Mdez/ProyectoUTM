"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const institutosController_1 = require("../controllers/institutosController");
const eventosController_1 = require("../controllers/eventosController");
const actividadesController_1 = require("../controllers/actividadesController");
class InstitutosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', institutosController_1.institutosController.list);
        //PROFESORES Y USUARIOS
        this.router.get("/usuarios/:correo/:password", institutosController_1.institutosController.existe);
        this.router.get('/usuarios/:idProfesor', institutosController_1.institutosController.existeProfesor);
        this.router.get('/profesores', institutosController_1.institutosController.listProfesores);
        this.router.get('/profesores/:idInstituto', institutosController_1.institutosController.listProfesoresPorInstituto);
        this.router.post('/nuevoprofesor/', institutosController_1.institutosController.createProfesor);
        this.router.delete('/eliminarprofesor/:idP', institutosController_1.institutosController.eliminarProfesor);
        this.router.put('/actualizarprofesor/:idP', institutosController_1.institutosController.actualizarProfesor);
        this.router.get('/institutos/', institutosController_1.institutosController.listInstitutos);
        this.router.get('/institutos/:idInstituto', institutosController_1.institutosController.listOneInstituto);
        //Carreras
        this.router.get('/carrerasporinstituto/:idInstituto', institutosController_1.institutosController.listCarrerasPorInstituto);
        this.router.get('/carreras/', institutosController_1.institutosController.listCarreras);
        this.router.get('/carreras/:idCarrera', institutosController_1.institutosController.listOneCarrera);
        this.router.get('/articulos/', institutosController_1.institutosController.listArticulos);
        this.router.get('/articulo/:idarticulo', institutosController_1.institutosController.listOneArticulo);
        this.router.get('/listarticulo/:idProfesor/:ini/:fin', institutosController_1.institutosController.listaArticulosIniFin);
        this.router.get('/listarticuloyprofesor/:idarticulo/:inicio/:final', institutosController_1.institutosController.listArticulosYProfesores);
        this.router.get('/listprofesoresdearticulos/:idprofesor', institutosController_1.institutosController.listProfesoresDeArticulos);
        this.router.get('/tablaarticulos/:idProfesor/:ini/:fin', institutosController_1.institutosController.listByidProfesorIniFin);
        //CRUD PROFESOR
        this.router.post('/nuevoprofesor/', institutosController_1.institutosController.createProfesor);
        this.router.delete('/eliminarprofesor/:idP', institutosController_1.institutosController.eliminarProfesor);
        this.router.put('/actualizarprofesor/:idP', institutosController_1.institutosController.actualizarProfesor);
        //Eventos
        this.router.get('/eventosdeprofesor/:idProfesor', eventosController_1.eventosController.listEventosdeProfesor);
        this.router.get('/unevento/:id', eventosController_1.eventosController.listOneEvento);
        //Post
        this.router.post('/nuevoevento', eventosController_1.eventosController.createEvento);
        this.router.delete('/eliminarevento/:idP', eventosController_1.eventosController.eliminarEvento);
        this.router.put('/actualizarevento/:idP', eventosController_1.eventosController.actualizarEvento);
        ////////ACTIVIDADES
        this.router.get('/actividadesdeprofesor/:id', actividadesController_1.actividadesController.listActividadesdeProfesor);
        this.router.get('/unaactividad/:id', actividadesController_1.actividadesController.listOneActividad);
        //Post
        this.router.post('/nuevaactividad', actividadesController_1.actividadesController.createActividad);
        this.router.delete('/eliminaractividad/:idP', actividadesController_1.actividadesController.eliminarActividad);
        this.router.put('/actualizaractividad/:idP', actividadesController_1.actividadesController.actualizarActividad);
    }
}
const institutosRoutes = new InstitutosRoutes();
exports.default = institutosRoutes.router;
