import { Router } from 'express';

import PizzasController from '@modules/pizzas/infra/http/controllers/PizzasController';
import { createPizza } from '@modules/pizzas/infra/http/validations/pizza';

const pizzasRoutes = Router();
const pizzasController = new PizzasController();

pizzasRoutes.post('/', createPizza, pizzasController.create);

export default pizzasRoutes;
