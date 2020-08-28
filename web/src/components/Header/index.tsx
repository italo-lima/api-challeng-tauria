import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img
          src="https://static.zebu.io/tauria-website/preact_tauria_logo_desktop.39e7d47d.svg"
          alt="Tauria"
        />
      </Link>
    </Container>
  );
};

export default Header;
