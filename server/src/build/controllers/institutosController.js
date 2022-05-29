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
exports.institutosController = void 0;
const database_1 = __importDefault(require("../database"));
class InstitutosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('SELECT * FROM usuarios ORDER BY idUsuarios');
            res.json(respuesta);
            return;
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM usuarios WHERE idUsuarios = ?', [id]);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'Instituto no encontrado' });
        });
    }
    existe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { correo, password } = req.params;
            const respuesta = yield database_1.default.query("SELECT idUsuarios FROM usuarios WHERE correo = ? AND password = ?", [correo, password]);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.json(-1);
            return;
        });
    }
    //PROFESORES
    existeProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idProfesor } = req.params;
            const respuesta = yield database_1.default.query("SELECT * FROM Profesores WHERE idProfesor = ?", [idProfesor]);
            console.log(respuesta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.json(-1);
            return;
        });
    }
    listProfesores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idInstituto } = req.params;
            const respuesta = yield database_1.default.query("SELECT * FROM Profesores ");
            console.log(respuesta);
            if (respuesta.length > 0) {
                res.json(respuesta);
                return;
            }
            res.json(-1);
            return;
        });
    }
    listProfesoresPorInstituto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idInstituto } = req.params;
            const respuesta = yield database_1.default.query("SELECT * FROM Profesores WHERE idInstituto =? ", [idInstituto]);
            console.log(respuesta);
            if (respuesta.length > 0) {
                res.json(respuesta);
                return;
            }
            res.json(-1);
            return;
        });
    }
    ///INSTITUTOS!!!
    listInstitutos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query("SELECT * FROM Institutos ");
            console.log(respuesta);
            res.json(respuesta);
            return;
        });
    }
    listOneInstituto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idInstituto } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM Institutos WHERE idInstitutos = ?', [idInstituto]);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.json(-1);
            return;
        });
    }
    ////CARRERAS!
    listCarreras(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query("SELECT * FROM Carreras ");
            console.log(respuesta);
            res.json(respuesta);
            return;
        });
    }
    listCarrerasPorInstituto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idInstituto } = req.params;
            const respuesta = yield database_1.default.query("SELECT * FROM Carreras WHERE idInstituto =? ", [idInstituto]);
            console.log(respuesta);
            if (respuesta.length > 0) {
                res.json(respuesta);
                return;
            }
            res.json(-1);
            return;
        });
    }
    listOneCarrera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCarrera } = req.params;
            const respuesta = yield database_1.default.query("SELECT * FROM Carreras WHERE idCarrera = ?", [idCarrera]);
            console.log(respuesta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.json(-1);
            return;
        });
    }
    //ARTICULOS
    listArticulos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query("SELECT * FROM articulos ");
            console.log(respuesta);
            res.json(respuesta);
            return;
        });
    }
    listOneArticulo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idarticulo } = req.params;
            const respuesta = yield database_1.default.query("SELECT * FROM articulos WHERE idarticulo = ?", [idarticulo]);
            console.log(respuesta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.json(-1);
            return;
        });
    }
    //ARTICULOS Y PROFESORES
    listArticulosYProfesores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idarticulo } = req.params;
            const respuesta = yield database_1.default.query("SELECT * FROM profesorYarticulo WHERE idarticulo =", [idarticulo]);
            console.log(respuesta);
            if (respuesta.length > 0) {
                res.json(respuesta);
                return;
            }
            res.json(respuesta);
            return;
        });
    }
    listProfesoresDeArticulos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idprofesor, inicio, final } = req.params;
            const respuesta = yield database_1.default.query("SELECT * FROM profesorYarticulo WHERE idprofesor = ?" + idprofesor + "AND fechaedicion>='" + inicio + "' AND fechaedicion<='" + final + "' ORDER BY fechaedicion");
            console.log(respuesta);
            if (respuesta.length > 0) {
                res.json(respuesta);
                return;
            }
            res.json(-1);
            return;
        });
    }
    ////Articulos
    listaArticulosIniFin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("listaArticulosIniFin");
            const { idProfesor, ini, fin } = req.params;
            let consulta = 'SELECT A.idarticulo,A.titulo, date_format(A.fechaedicion, "%d-%m-%Y") as fecha from Articulos A INNER JOIN profesorYarticulo PA ON PA.idarticulo = A.idarticulo INNER JOIN Profesores P ON P.idProfesor=PA.idprofesor WHERE P.idProfesor = ' + [idProfesor] + ' AND fechaedicion>="' + [ini] + '" AND fechaedicion<="' + [fin] + '" ORDER BY fechaedicion';
            const respuesta = yield database_1.default.query(consulta);
            for (let data of respuesta) {
                let consultaAutores = 'SELECT PA.idprofesor, P.nombreProfesor, P.apellidoPaterno, P.apellidoMaterno, PA.idarticulo, PA.pos, PA.validado FROM Articulos A INNER JOIN profesorYarticulo PA ON A.idarticulo=PA.idarticulo INNER JOIN Profesores P ON P.idProfesor=PA.idprofesor WHERE PA.idarticulo=' + [data.idarticulo] + 'ORDER BY PA.pos';
                const respuestaAutores = yield database_1.default.query(consultaAutores);
                data.autores = respuestaAutores;
            }
            res.json(respuesta);
            return;
        });
    }
    listByidProfesorIniFin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("listByidProfesorIniFin");
            const { idProfesor, ini, fin } = req.params;
            let consulta = 'SELECT A.idArticulo,A.tipoCRL,A.tipoNI,A.titulo, date_format(A.fechaEdicion, "%d-%m-%Y") as fecha  from Articulos A INNER JOIN profesorYarticulo PA ON PA.idArticulo = A.idArticulo INNER JOIN Profesores P ON P.idProfesor=PA.idProfesor WHERE  P.idProfesor = ' + idProfesor + ' AND fechaedicion>="' + ini + '" AND fechaedicion<="' + fin + '" ORDER BY fechaedicion';
            const respuesta = yield database_1.default.query(consulta);
            for (let data of respuesta) {
                let consultaAutores = 'SELECT PA.idProfesor, P.nombreProfesor, P.apellidoPaterno, P.apellidoMaterno, PA.idArticulo, PA.pos, PA.validado FROM Articulos A  INNER JOIN profesorYarticulo PA ON A.idArticulo=PA.idArticulo  INNER JOIN Profesores P ON P.idProfesor=PA.idProfesor WHERE PA.idArticulo=' + data.idArticulo + " ORDER BY PA.pos";
                const respuestaAutores = yield database_1.default.query(consultaAutores);
                data.autores = respuestaAutores;
            }
            res.json(respuesta);
        });
    }
    //POST
    createProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //let password = req.body.password as any;
            //vas salt = bcrypt.getSaltSync(10);
            //bcrypt.hash(password,salt).then(function(nuevoPassword)
            //{
            //req.body.password=nuevoPassword;
            const resp = database_1.default.query("INSERT INTO Profesores set ?", [req.body]);
            res.json(resp);
            //})
        });
    }
    //ACTUALIZAR Y ELIMINAR
    eliminarProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idP } = req.params;
            const respuesta = yield database_1.default.query('DELETE FROM Profesores WHERE idProfesor=?', [idP]);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(200).json({ 'mensaje': 'Eliminado' });
        });
    }
    actualizarProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idP } = req.params;
            const respuesta = yield database_1.default.query('UPDATE Profesores SET ? WHERE idProfesor=?', [req.body, idP]);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(200).json({ 'mensaje': 'Actualizado' });
        });
    }
}
exports.institutosController = new InstitutosController();
