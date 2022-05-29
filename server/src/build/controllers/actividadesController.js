"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actividadesController = void 0;
const database_1 = __importDefault(require("../database"));
class ActividadesController {
    listActividadesdeProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM actividades WHERE idProfesor=?', [id]);
            res.json(respuesta);
            return;
        });
    }
    listOneActividad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM actividades WHERE idActividad = ?', [id]);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'actividad no encontrado' });
        });
    }
    createActividad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //let password = req.body.password as any;
            //vas salt = bcrypt.getSaltSync(10);
            //bcrypt.hash(password,salt).then(function(nuevoPassword)
            //{
            //req.body.password=nuevoPassword;
            const resp = database_1.default.query("INSERT INTO actividades set ?", [req.body]);
            res.json(resp);
            //})
        });
    }
    eliminarActividad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idP } = req.params;
            const respuesta = yield database_1.default.query('DELETE FROM actividades WHERE idActividad=?', [idP]);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(200).json({ 'mensaje': 'Eliminado' });
        });
    }
    actualizarActividad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idP } = req.params;
            const respuesta = yield database_1.default.query('UPDATE actividades SET ? WHERE idActividad=?', [req.body, idP]);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(200).json({ 'mensaje': 'Actualizado' });
        });
    }
}
exports.actividadesController = new ActividadesController();
