import { Router } from 'express';

import telegeamRoutes from './telegram';

const routes = Router();

routes.use('/telegram', telegeamRoutes);

export default routes;
