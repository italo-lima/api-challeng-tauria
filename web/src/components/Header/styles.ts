import styled from "styled-components";

export const Container = styled.header`
  height: 60px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000000;

  img {
    width: 170px;
  }

  button {
    display: flex;
    align-items: center;
    background: none;

    p {
      line-height: 24px;
      font-weight: 600;
    }
  }
`;

export const Logout = styled.button``;
