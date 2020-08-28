import React, { useState, useCallback } from "react";
import { FaPizzaSlice, FaChevronRight } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { Container, Content, OptionsPizza, SelectPizza } from "./styles";
import { usePizza, SizePizza as SizePizzaInfo } from "../../context";
import Footer from "../../components/Footer";
import HeaderContentPage from "../../components/HeaderContentPage";

const SizePizza: React.FC = () => {
  const [selectedSizePizza, setSelectedSizePizza] = useState<SizePizzaInfo>(
    {} as SizePizzaInfo
  );

  const { sizePizzas, createInfoPizza } = usePizza();
  const history = useHistory();

  const handleSelectedPizza = useCallback(
    ({ name, price, maxIngredients }: SizePizzaInfo) => {
      setSelectedSizePizza({ name, price, maxIngredients });
    },
    []
  );

  const handleScreenCrust = useCallback(() => {
    if (!selectedSizePizza.name) {
      toast.error("Choose a pizza size");
      return;
    }

    createInfoPizza({
      size: selectedSizePizza.name,
      valueSize: selectedSizePizza.price,
      maxIngredients: selectedSizePizza.maxIngredients,
    });
    history.push("/crust");
  }, [selectedSizePizza, createInfoPizza, history]);

  return (
    <Container>
      <Content>
        <HeaderContentPage
          title="Welcome the pizzeria of Tauria"
          subTitle="Choose the size of your pizza"
        />

        <OptionsPizza>
          {sizePizzas.map(({ name, price, maxIngredients }) => (
            <SelectPizza
              key={name}
              type="button"
              selected={selectedSizePizza.name === name}
              onClick={() =>
                handleSelectedPizza({ name, price, maxIngredients })
              }
            >
              <FaPizzaSlice size={32} color="#000" />
              <h1>
                {name} - ${price}
              </h1>
            </SelectPizza>
          ))}
        </OptionsPizza>

        <Footer
          goBack={false}
          nextPage={handleScreenCrust}
          titleNextPage="Choose Crust"
        />
      </Content>
    </Container>
  );
};

export default SizePizza;
