import React from "react";
import Footer from "./src/components/Footer";
import { GlobalStyle } from "./src/styles/GlobalStyle";
import "normalize.css";
export function wrapRootElement({ element }) {
  return (
    <>
      <GlobalStyle />
      {element}
      <Footer />
    </>
  );
}
