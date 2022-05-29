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
exports.tablaArticulos = void 0;
const database_1 = __importDefault(require("../database"));
class TablaArticulos {
    listaArticulosIni(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("listaArticulosIniFin");
            const { idProfesor, ini, fin } = req.params;
            let consulta = 'SELECT A.idarticulo,A.titulo, date_format(A.fechaedicion, "%d-%m-%Y") as fecha from articulos A INNER JOIN profesorYarticulo PA ON PA.idarticulo = A.idarticulo INNER JOIN Profesores P ON P.idProfesor=PA.idprofesor WHERE P.idProfesor = ' + idProfesor + ' AND fechaedicion>="' + ini + '" AND fechaedicion<="' + fin + '" ORDER BY fechaedicion;';
            const respuesta = yield database_1.default.query(consulta);
            for (let data of respuesta) {
                let consultaAutores = 'SELECT PA.idprofesor, P.nombreProfesor, P.apellidoPaterno, P.apellidoMaterno, PA.idarticulo, PA.pos, PA.validado FROM articulos A INNER JOIN profesorYarticulo PA ON A.idarticulo=PA.idarticulo INNER JOIN Profesores P ON P.idProfesor=PA.idProfesor WHERE PA.idarticulo=' + data.idArticulo + " ORDER BY PA.pos";
                const respuestaAutores = yield database_1.default.query(consultaAutores);
                data.autores = respuestaAutores;
            }
            res.json(respuesta);
        });
    }
}
exports.tablaArticulos = new TablaArticulos();
