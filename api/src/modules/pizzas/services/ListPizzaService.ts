import { injectable, inject } from 'tsyringe';

import IPizzaRepository from '@modules/pizzas/repositories/IPizzaRepository';

import Pizza from '@modules/pizzas/infra/typeorm/entities/Pizza';

@injectable()
class ListPizzaService {
  constructor(
    @inject('PizzaRepository')
    private pizzasRepository: IPizzaRepository,
  ) {}

  public async execute(): Promise<Pizza[]> {
    const pizzas = await this.pizzasRepository.findAll();

    return pizzas;
  }
}

export default ListPizzaService;
