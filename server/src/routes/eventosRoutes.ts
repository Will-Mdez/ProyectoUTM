import { Router } from 'express';
import { eventosController} from '../controllers/eventosController';
class EventosRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config():void
    {
        this.router.get('/eventosdeprofesor/:idProfesor',eventosController.listEventosdeProfesor);
        this.router.get('/unevento/:id',eventosController.listOneEvento);
        //Post

        this.router.post('/nuevoevento',eventosController.createEvento);
        this.router.delete('/eliminarevento/:idP',eventosController.eliminarEvento);
        this.router.put('/actualizarevento/:idP',eventosController.actualizarEvento);
    }
}

const eventosRoutes = new EventosRoutes();
export default eventosRoutes.router;