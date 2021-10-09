import React from "react";
import Layout from "./src/components/Layout";
import { GlobalStyle } from "./src/styles/GlobalStyle";
export function wrapRootElement({ element }) {
  return (
    <>
      <GlobalStyle />
      <Layout>{element}</Layout>
    </>
  );
}
