import { GetStatus } from '../../controllers/status.js';
import { Router } from '../../utils/router.js';

const router = new Router()

router.get('/status', GetStatus)

export const statusRouter = router;
export const statusRoutes = router.routes;