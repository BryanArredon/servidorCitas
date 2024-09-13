import { Router } from 'express';
import { historialController } from '../controllers/historialController'; 

class HistorialRoutes {

  public router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  private config(): void {
    this.router.get('/', historialController.list); 
    this.router.get('/:id', historialController.getOne);
    this.router.post('/', historialController.create);
    this.router.put('/:id', historialController.update);
    this.router.delete('/:id', historialController.delete);
  }
}

const historialRoutes = new HistorialRoutes();
export default historialRoutes.router;
