import { Router } from 'express';
import { registrocitasController } from '../controllers/registrocitasController'; 

class RegistrocitasRoutes {

  public router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  private config(): void {
    this.router.get('/', registrocitasController.list); 
    this.router.get('/:id', registrocitasController.getOne);
    this.router.post('/', registrocitasController.create);
    this.router.put('/:id', registrocitasController.update);
    this.router.delete('/:id', registrocitasController.delete);
  }
}

const registrocitasRoutes = new RegistrocitasRoutes();
export default registrocitasRoutes.router;
