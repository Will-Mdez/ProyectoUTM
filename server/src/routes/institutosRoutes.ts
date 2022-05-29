import { Router } from 'express';
import { institutosController} from '../controllers/institutosController';
import { eventosController} from '../controllers/eventosController';
import { actividadesController} from '../controllers/actividadesController';
class InstitutosRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config():void
    {
        this.router.get('/',institutosController.list);
        
        //PROFESORES Y USUARIOS
        this.router.get("/usuarios/:correo/:password",institutosController.existe);
        this.router.get('/usuarios/:idProfesor', institutosController.existeProfesor);
        this.router.get('/profesores', institutosController.listProfesores);
        this.router.get('/profesores/:idInstituto', institutosController.listProfesoresPorInstituto);
        this.router.post('/nuevoprofesor/',institutosController.createProfesor);
        this.router.delete('/eliminarprofesor/:idP',institutosController.eliminarProfesor);
        this.router.put('/actualizarprofesor/:idP',institutosController.actualizarProfesor);

        this.router.get('/institutos/',institutosController.listInstitutos);
        this.router.get('/institutos/:idInstituto', institutosController.listOneInstituto);

        //Carreras
        this.router.get('/carrerasporinstituto/:idInstituto',institutosController.listCarrerasPorInstituto);
        this.router.get('/carreras/',institutosController.listCarreras);
        this.router.get('/carreras/:idCarrera', institutosController.listOneCarrera);
        
        this.router.get('/articulos/',institutosController.listArticulos);
        this.router.get('/articulo/:idarticulo', institutosController.listOneArticulo);

        this.router.get('/listarticulo/:idProfesor/:ini/:fin',institutosController.listaArticulosIniFin);
        this.router.get('/listarticuloyprofesor/:idarticulo/:inicio/:final',institutosController.listArticulosYProfesores);
        this.router.get('/listprofesoresdearticulos/:idprofesor',institutosController.listProfesoresDeArticulos);


        this.router.get('/tablaarticulos/:idProfesor/:ini/:fin',institutosController.listByidProfesorIniFin);

        //CRUD PROFESOR

        this.router.post('/nuevoprofesor/',institutosController.createProfesor);
        this.router.delete('/eliminarprofesor/:idP',institutosController.eliminarProfesor);
        this.router.put('/actualizarprofesor/:idP',institutosController.actualizarProfesor);

        //Eventos
        this.router.get('/eventosdeprofesor/:idProfesor',eventosController.listEventosdeProfesor);
        this.router.get('/unevento/:id',eventosController.listOneEvento);
        

        this.router.post('/nuevoevento',eventosController.createEvento);
        this.router.delete('/eliminarevento/:idP',eventosController.eliminarEvento);
        this.router.put('/actualizarevento/:idP',eventosController.actualizarEvento);

        ////////ACTIVIDADES
        this.router.get('/actividadesdeprofesor/:id',actividadesController.listActividadesdeProfesor);
        this.router.get('/unaactividad/:id',actividadesController.listOneActividad);
        

        this.router.post('/nuevaactividad',actividadesController.createActividad);
        this.router.delete('/eliminaractividad/:idP',actividadesController.eliminarActividad);
        this.router.put('/actualizaractividad/:idP',actividadesController.actualizarActividad);
    }
}

const institutosRoutes = new InstitutosRoutes();
export default institutosRoutes.router;


 