import React, { useState, useCallback } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

import { usePizza } from "../../context";
import {
  Container,
  Content,
  OptionsToppings,
  SelectTopping,
  Warning,
} from "./styles";
import Footer from "../../components/Footer";
import HeaderContentPage from "../../components/HeaderContentPage";

const ToppingsPizza: React.FC = () => {
  const [allToppings, setAllToppings] = useState<string[]>([]);

  const { createInfoPizza, toppingsPizzas, pizza } = usePizza();
  const history = useHistory();

  const handleSelectedToppings = useCallback(
    (topping: string) => {
      const checkTopping = allToppings.findIndex((item) => item === topping);
      if (checkTopping >= 0) {
        const newAllToppings = allToppings.filter(
          (thisTopping) => thisTopping !== topping
        );
        setAllToppings(newAllToppings);
      } else {
        setAllToppings([...allToppings, topping]);
      }
    },
    [allToppings]
  );

  const handleScreenFinish = useCallback(() => {
    if (allToppings.length > pizza.maxIngredients) {
      toast.error(
        `For ${pizza.size} pizza, you can choose up to ${pizza.maxIngredients} ingredients`
      );
      return;
    }

    const formattedToppings = allToppings.join(",");

    createInfoPizza({
      ...pizza,
      toppings: formattedToppings,
    });
    history.push("/view");
  }, [allToppings, pizza, history, createInfoPizza]);

  return (
    <>
      {!pizza.crust && <Redirect to="/" />}
      <Container>
        <Content>
          <HeaderContentPage title="Choose your Toppings" />

          <Warning>
            You are entitled to 3 ingredients. Each additional ingredient will
            cost $ 0.50
          </Warning>

          <OptionsToppings>
            {toppingsPizzas.map((topping) => (
              <SelectTopping
                key={topping.name}
                type="button"
                selected={allToppings.includes(topping.name)}
                onClick={() => handleSelectedToppings(topping.name)}
              >
                <img
                  style={{
                    backgroundImage: `url(${require(`../../assets/${topping.icon}`)})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "50px",
                    height: "50px",
                    borderRadius: "25px",
                  }}
                />
                <h1>{topping.name}</h1>
              </SelectTopping>
            ))}
          </OptionsToppings>
          <Footer
            goBack={true}
            nextPage={handleScreenFinish}
            titleNextPage="View Pizza"
          />
        </Content>
      </Container>
    </>
  );
};

export default ToppingsPizza;
