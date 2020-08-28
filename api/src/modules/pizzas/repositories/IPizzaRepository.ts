import Pizza from '@modules/pizzas/infra/typeorm/entities/Pizza';

import ICreatePizzaDTO from '@modules/pizzas/dtos/ICreatePizzaDTO';

interface IPizzaRepository {
  create(data: ICreatePizzaDTO): Promise<Pizza>;
}

export default IPizzaRepository;
