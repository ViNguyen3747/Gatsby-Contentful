import React from "react";
import Footer from "./src/components/Footer";
import { GlobalStyle } from "./src/styles/GlobalStyle";

export function wrapPageElement({ element }) {
  return (
    <>
      <GlobalStyle />
      {element}
      <Footer />
    </>
  );
}
