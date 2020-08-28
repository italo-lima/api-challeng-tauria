import React, { useState, useCallback } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

import { usePizza, CrustPizza as CrustPizzaInfo } from "../../context";
import { Container, Content, OptionCrust, SelectCrustPizza } from "./styles";
import { FaArrowCircleRight } from "react-icons/fa";
import Footer from "../../components/Footer";
import HeaderContentPage from "../../components/HeaderContentPage";

const CrustPizza: React.FC = () => {
  const [selectedCrustPizza, setSelectedCrustPizza] = useState<CrustPizzaInfo>(
    {} as CrustPizzaInfo
  );

  const { createInfoPizza, crustPizzas, pizza } = usePizza();
  const history = useHistory();

  const handleSelectedCrust = useCallback(({ type, price }: CrustPizzaInfo) => {
    setSelectedCrustPizza({ type, price });
  }, []);

  const handleScreenToppings = useCallback(() => {
    if (!selectedCrustPizza.type) {
      toast.error("Choose a pizza crust");
      return;
    }

    createInfoPizza({
      ...pizza,
      crust: selectedCrustPizza.type,
      valueCrust: selectedCrustPizza.price,
    });

    history.push("/toppings");
  }, [selectedCrustPizza, history, createInfoPizza, pizza]);

  return (
    <>
      {!pizza.size && <Redirect to="/" />}
      <Container>
        <Content>
          <HeaderContentPage title="Choose your crust" />

          <OptionCrust>
            {crustPizzas.map(({ type, price }) => (
              <SelectCrustPizza
                key={type}
                type="button"
                selected={selectedCrustPizza.type === type}
                onClick={() => handleSelectedCrust({ type, price })}
              >
                <h1>
                  <FaArrowCircleRight size={18} color="#000" />
                  {type} - ${price}
                </h1>
              </SelectCrustPizza>
            ))}
          </OptionCrust>
          <Footer
            goBack={true}
            nextPage={handleScreenToppings}
            titleNextPage="Choose Toppings"
          />
        </Content>
      </Container>
    </>
  );
};

export default CrustPizza;
