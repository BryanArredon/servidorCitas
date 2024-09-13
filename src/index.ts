import express,{Application,Request,Response} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import loginRoutes from './routes/loginRoutes';
import historialRoutes from './routes/historialRoutes';
import recordatoriosRoutes from './routes/recordatoriosRoute';
import registrocitasRoutes from './routes/registrocitasRoutes';


class Server{
    public app : Application

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }


    config():void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }
    routes():void{
        this.app.use(indexRoutes);
        this.app.use('/api/user',usuarioRoutes);
        this.app.use('/api/login',loginRoutes);
        this.app.use('/api/historial',historialRoutes);
        this.app.use('/api/recordatorio',recordatoriosRoutes);
        this.app.use('/api/registro',registrocitasRoutes);
    }
    start():void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log("Server on Port",this.app.get('port'))
        });
    }

}
const server = new Server();
server.start();