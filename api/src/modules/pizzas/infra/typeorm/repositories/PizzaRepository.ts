import { Repository, getRepository } from 'typeorm';

import Pizza from '@modules/pizzas/infra/typeorm/entities/Pizza';

import ICreatePizzaDTO from '@modules/pizzas/dtos/ICreatePizzaDTO';
import IPizzaRepository from '@modules/pizzas/repositories/IPizzaRepository';

class PizzaRepository implements IPizzaRepository {
  private ormRepository: Repository<Pizza>;

  constructor() {
    this.ormRepository = getRepository(Pizza);
  }

  public async create({
    crust,
    size,
    toppings,
    total,
  }: ICreatePizzaDTO): Promise<Pizza> {
    const pizza = this.ormRepository.create({
      crust,
      size,
      toppings,
      total,
    });

    await this.ormRepository.save(pizza);

    return pizza;
  }
}

export default PizzaRepository;
