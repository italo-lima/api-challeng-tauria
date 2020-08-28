import React from "react";
import { useHistory } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Container, GoBack, NextStep } from "./styles";

interface PropsFooter {
  goBack: boolean;
  nextPage(): void;
  titleNextPage: string;
}

const Footer: React.FC<PropsFooter> = ({ goBack, nextPage, titleNextPage }) => {
  const history = useHistory();

  return (
    <Container rightOneElement={goBack}>
      {goBack && (
        <GoBack onClick={() => history.goBack()}>
          <FaChevronLeft size={18} color="#000" />
          Back
        </GoBack>
      )}
      <NextStep onClick={nextPage}>
        {titleNextPage}
        <FaChevronRight size={18} color="#000" />
      </NextStep>
    </Container>
  );
};

export default Footer;
