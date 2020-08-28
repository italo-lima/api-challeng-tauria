import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateServicePizza from '@modules/pizzas/services/CreateServicePizza';
import ListPizzaService from '@modules/pizzas/services/ListPizzaService';

export default class PizzasController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { crust, size, toppings, total } = req.body;

    const pizzaService = container.resolve(CreateServicePizza);

    const pizza = await pizzaService.execute({
      crust,
      size,
      toppings,
      total,
    });

    return res.json(pizza);
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const listPizzasService = container.resolve(ListPizzaService);

    const pizzas = await listPizzasService.execute();

    return res.json(pizzas);
  }
}
