import styled from "styled-components";

interface Props {
  rightOneElement: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: ${({ rightOneElement }) =>
    rightOneElement ? "space-between" : "flex-end"};
  margin-top: 15px;
  padding: 20px;
  font-size: 16px;
`;

export const NextStep = styled.button`
  background: none;
  display: flex;
  justify-content: flex-end;
  font-size: 16px;

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
