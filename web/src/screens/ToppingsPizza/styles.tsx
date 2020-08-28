import styled from "styled-components";

interface SelectedToppingPizza {
  selected: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 870px;
  width: 100%;
  padding: 30px;
`;

export const Warning = styled.h2`
  color: #000;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  padding: 10px 0;
`;

export const OptionsToppings = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 10px;
  justify-content: space-between;
  margin: 30px 0 0;
`;

export const SelectTopping = styled.button<SelectedToppingPizza>`
  border: 2px solid ${(props) => (props.selected ? "#000" : "#fff")};
  background: none;
  padding: 15px 10px;
  margin: 0 5px;
  display: flex;
  align-items: center;

  > h1 {
    font-size: 26px;
  }
  img {
    margin-right: 15px;
  }
`;
