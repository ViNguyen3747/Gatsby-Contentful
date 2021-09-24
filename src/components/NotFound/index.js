import React from "react";
import { Container, SymbolWrapper, TextWrapper } from "./NotFoundElement";
import { LinkRouter } from "../LinkElements";
const index = () => {
  return (
    <Container>
      <SymbolWrapper>404</SymbolWrapper>
      <TextWrapper>Oops~ Where are you going? Please come back!!!</TextWrapper>
      <LinkRouter to="/">Back to Home Page</LinkRouter>
    </Container>
  );
};

export default index;
