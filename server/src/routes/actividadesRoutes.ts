import { Router } from 'express';
import { actividadesController} from '../controllers/actividadesController';
class ActividadesRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config():void
    {
        this.router.get('/actividadesdeprofesor/:id',actividadesController.listActividadesdeProfesor);
        this.router.get('/unaactividad/:id',actividadesController.listOneActividad);
        //Post

        this.router.post('/nuevaactividad',actividadesController.createActividad);
        this.router.delete('/eliminaractividad/:idP',actividadesController.eliminarActividad);
        this.router.put('/actualizaractividad/:idP',actividadesController.actualizarActividad);
    }
}

const actividadesRoutes = new ActividadesRoutes();
export default actividadesRoutes.router;