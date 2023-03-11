import { TaskController } from '../../controllers/Task.js';
import { Router } from '../../utils/router.js';

const router = new Router();
const task = new TaskController();

router.get('/tasks', task.getAll);
router.get('/tasks/:id', task.get);
router.post('/tasks', task.create);
router.put('/tasks/:id', task.update);
router.delete('/tasks/:id', task.delete);

export const statusRouter = router;
export const statusRoutes = router.routes;