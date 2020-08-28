import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateServicePizza from '@modules/pizzas/services/CreateServicePizza';

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
}
