import React from "react";

import { Container, Title, SubTitle } from "./styles";

interface PropsHeaderPage {
  title: string;
  subTitle?: string;
}

const HeaderContentPage: React.FC<PropsHeaderPage> = ({ title, subTitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </Container>
  );
};

export default HeaderContentPage;
