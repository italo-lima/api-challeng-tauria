import { container } from 'tsyringe';

import IPizzaRepository from '@modules/pizzas/repositories/IPizzaRepository';
import PizzaRepository from '@modules/pizzas/infra/typeorm/repositories/PizzaRepository';

container.registerSingleton<IPizzaRepository>(
  'PizzaRepository',
  PizzaRepository,
);
