import React, { useEffect, useState, useCallback } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { usePizza, ToppingsPizza } from "../../context";
import {
  Content,
  Container,
  HeaderContent,
  Title,
  InfoPizza,
  Info,
  ListToppings,
  Topping,
} from "./styles";

import formatValue from "../../utils/formatValue";
import api from "../../services/api";
import Footer from "../../components/Footer";
import HeaderContentPage from "../../components/HeaderContentPage";

const ViewPizza: React.FC = () => {
  const [total, setTotal] = useState(0);
  const [costAditional, setCostAditional] = useState("$ 0");
  const [toppings, setToppings] = useState<ToppingsPizza[]>([]);

  const history = useHistory();
  const { pizza, toppingsPizzas } = usePizza();

  const handleSubmitPizza = useCallback(async () => {
    try {
      await api.post("/pizzas", {
        size: pizza.size,
        crust: pizza.crust,
        toppings: pizza.toppings,
        total,
      });

      toast.success("Order successfully completed");
      setTimeout(() => {
        history.push("/");
      }, 2500);
    } catch {
      toast.error("Error when placing order");
    }
  }, [history, pizza, total]);

  useEffect(() => {
    if (pizza) {
      const ingredients = pizza.toppings?.split(",");
      const totalPizza = Number(pizza.valueSize) + Number(pizza.valueCrust);

      const filteredToppings = toppingsPizzas.filter((topping) =>
        ingredients?.includes(topping.name)
      );
      setToppings(filteredToppings);

      if (ingredients && ingredients?.length > 3) {
        const aditional = (ingredients?.length - 3) * 0.5;
        setTotal(totalPizza + aditional);
        setCostAditional(formatValue(aditional));
        return;
      }

      setTotal(totalPizza);
    }
  }, [pizza, toppingsPizzas, total]);

  return (
    <>
      {!pizza.crust && <Redirect to="/" />}
      <Container>
        <Content>
          <HeaderContentPage title="Pizza information" />

          <InfoPizza>
            <Info>
              Size: {pizza.size} - Value: {formatValue(pizza.valueSize || 0)}
            </Info>
            <Info>
              Crust: {pizza.crust} - Value: {formatValue(pizza.valueCrust || 0)}
            </Info>
            <Info> Additional cost of toppings: {costAditional} </Info>

            {toppings.length ? (
              <>
                <Info>Toppings</Info>
                <ListToppings>
                  {toppings.map((topping) => (
                    <Topping key={topping.name}>
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
                    </Topping>
                  ))}
                </ListToppings>
              </>
            ) : (
              <Info>Toppings: none</Info>
            )}

            <Info>Total: {formatValue(total)}</Info>
          </InfoPizza>

          <Footer
            goBack={true}
            nextPage={handleSubmitPizza}
            titleNextPage="Finish"
          />
        </Content>
      </Container>
    </>
  );
};

export default ViewPizza;
