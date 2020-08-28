import styled from "styled-components";

interface SelectedSizePizza {
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

export const OptionsPizza = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 20px 0;
`;

export const SelectPizza = styled.button<SelectedSizePizza>`
  border: 2px solid ${(props) => (props.selected ? "#000" : "#fff")};
  background: none;
  padding: 30px;

  svg {
    margin-top: 5px;
  }
  > h1 {
    font-size: 26px;
    margin-top: 15px;
  }
`;
