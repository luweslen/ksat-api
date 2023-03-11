import { GetStatus, StatusController } from '../../controllers/status.js';
import { Router } from '../../utils/router.js';

const router = new Router();
const status = new StatusController();

router.get('/status', status.get);

export const statusRouter = router;
export const statusRoutes = router.routes;