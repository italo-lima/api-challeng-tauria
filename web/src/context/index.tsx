import React, { createContext, useContext, useCallback, useState } from "react";

import api from "../services/api";

export interface InfoPizza {
  size?: string;
  valueSize?: number;
  maxIngredients: number;
  crust?: string;
  valueCrust?: number;
  toppings?: string;
}

export interface CreatePizza {
  size: string;
  crust: string;
  toppings: string;
  total: number;
}

export interface SizePizza {
  name: string;
  price: number;
  maxIngredients: number;
}

export interface CrustPizza {
  type: string;
  price: number;
}

export interface ToppingsPizza {
  name: string;
  icon: string;
}

interface PizzaContext {
  sizePizzas: Array<SizePizza>;
  crustPizzas: Array<CrustPizza>;
  toppingsPizzas: Array<ToppingsPizza>;
  pizza: InfoPizza;
  createInfoPizza(data: InfoPizza): void;
  savePizza(data: CreatePizza): Promise<void>;
}

const PizzaContext = createContext<PizzaContext>({} as PizzaContext);

export const PizzaProvider: React.FC = ({ children }) => {
  const [pizza, setPizza] = useState({} as InfoPizza);

  const createInfoPizza = useCallback(async (data: InfoPizza) => {
    setPizza({ ...data });
  }, []);

  const savePizza = useCallback(async (data: CreatePizza) => {
    await api.post("/pizzas", data);
  }, []);

  const sizePizzas: Array<SizePizza> = [
    { name: "Small", price: 8, maxIngredients: 5 },
    { name: "Medium", price: 10, maxIngredients: 7 },
    { name: "Large", price: 12, maxIngredients: 9 },
  ];

  const crustPizzas: Array<CrustPizza> = [
    { type: "Thin", price: 2 },
    { type: "Thick", price: 4 },
  ];

  const toppingsPizzas: Array<ToppingsPizza> = [
    { name: "Pepperoni", icon: "pepperoni.png" },
    { name: "Mushrooms", icon: "mushrooms.png" },
    { name: "Onions", icon: "onions.png" },
    { name: "Sausage", icon: "sausage.png" },
    { name: "Bacon", icon: "bacon.png" },
    { name: "Extra cheese", icon: "cheese.png" },
    { name: "Black olives", icon: "black-olives.png" },
    { name: "Green peppers", icon: "green-pepper.png" },
    { name: "Pineapple", icon: "pineapple.png" },
    { name: "Spinach", icon: "spinach.png" },
  ];

  return (
    <PizzaContext.Provider
      value={{
        pizza,
        sizePizzas,
        crustPizzas,
        toppingsPizzas,
        createInfoPizza,
        savePizza,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export function usePizza(): PizzaContext {
  const context = useContext(PizzaContext);

  return context;
}
