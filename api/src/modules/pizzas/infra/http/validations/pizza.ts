import { Segments, Joi, celebrate } from 'celebrate';

export const createPizza = celebrate({
  [Segments.BODY]: Joi.object({
    size: Joi.string().required(),
    crust: Joi.string().required(),
    toppings: Joi.string().required(),
    total: Joi.number().required(),
  }),
});
