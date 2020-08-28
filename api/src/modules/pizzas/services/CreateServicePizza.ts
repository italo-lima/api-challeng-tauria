import { injectable, inject } from 'tsyringe';

import IPizzaRepository from '@modules/pizzas/repositories/IPizzaRepository';

import Pizza from '@modules/pizzas/infra/typeorm/entities/Pizza';

interface IRequest {
  size: string;
  crust: string;
  toppings: string;
  total: number;
}

@injectable()
class CreatePizzaService {
  constructor(
    @inject('PizzaRepository')
    private pizzasRepository: IPizzaRepository,
  ) {}

  public async execute({
    size,
    crust,
    toppings,
    total,
  }: IRequest): Promise<Pizza> {
    const pizza = await this.pizzasRepository.create({
      size,
      crust,
      toppings,
      total,
    });

    return pizza;
  }
}

export default CreatePizzaService;
