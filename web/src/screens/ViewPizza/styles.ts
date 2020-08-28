import styled from "styled-components";

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
  text-align: center;
`;

export const HeaderContent = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  color: #000;
  font-size: 28px;
  font-weight: bold;
  padding: 10px 0;
`;

export const InfoPizza = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const Info = styled.h1`
  margin: 10px 0;
  color: #000;
  font-size: 28px;
  font-weight: bold;
`;

export const ListToppings = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 10px;
  justify-content: space-between;
  margin: 10px 0;
`;

export const Topping = styled.div`
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

export const FooterNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
  padding: 20px;
  font-size: 16px;
`;

export const Finish = styled.button`
  background: none;
  display: flex;
  justify-content: flex-end;

  svg {
    margin-left: 10px;
  }
`;

export const GoBack = styled.button`
  background: none;
  display: flex;
  justify-content: flex-end;
  font-size: 16px;

  svg {
    margin-right: 10px;
  }
`;
