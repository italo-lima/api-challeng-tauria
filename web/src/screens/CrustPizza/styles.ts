import styled from "styled-components";

interface SelectedCrustPizza {
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

export const OptionCrust = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 20px 0;
`;

export const SelectCrustPizza = styled.button<SelectedCrustPizza>`
  border: 2px solid ${(props) => (props.selected ? "#000" : "#fff")};
  background: none;
  padding: 15px;

  > h1 {
    display: flex;
    align-items: center;
    font-size: 26px;

    svg {
      margin-right: 15px;
    }
  }
`;
