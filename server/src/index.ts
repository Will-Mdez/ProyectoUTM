import express, {Application} from 'express';
import institutosRoutes from './routes/institutosRoutes';
import indexRoutes from './routes/indexRoutes';
import morgan from 'morgan';
import cors from 'cors';
import { institutosController } from './controllers/institutosController';


class Server
{
    public app: Application;    
    constructor()
    {
        this.app = express();
        this.config();
        this.routes();
        this.app.use(express.static(__dirname+"/img"));

    }
    config (): void
    {
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes (): void
    {
        this.app.use(indexRoutes);
        //this.app.use('/api/institutos',institutosController);
        this.app.use('/api',institutosRoutes);
    }
    start(): void
    {
        this.app.listen(this.app.get('port'),"0.0.0.0",()=>
        {
            console.log('Server on port',this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();