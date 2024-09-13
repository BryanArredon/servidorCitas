import { Router } from 'express';
import { recordatoriosController } from '../controllers/recordatoriosCrontroller'; 

class RecordatoriosRoutes {

  public router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  private config(): void {
    this.router.get('/', recordatoriosController.list); 
    this.router.get('/:id', recordatoriosController.getOne);
    this.router.post('/', recordatoriosController.create);
    this.router.put('/:id', recordatoriosController.update);
    this.router.delete('/:id', recordatoriosController.delete);
  }
}

const recordatoriosRoutes = new RecordatoriosRoutes();
export default recordatoriosRoutes.router;
