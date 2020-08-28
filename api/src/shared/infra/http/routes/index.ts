import { Router } from 'express';

const routes = Router();

import pizzasRoutes from '@modules/pizzas/infra/http/routes/pizzas.routes';

routes.use('/pizzas', pizzasRoutes);

export default routes;
