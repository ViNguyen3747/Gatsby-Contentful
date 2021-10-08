import React from "react";
import { createGlobalStyle } from "styled-components";
import Footer from "./Footer";
const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Encode Sans Expanded", sans-serif;
        font-display: swap;
        }
    body {
        overflow: overlay;
        overflow-x: hidden;
    }

    ::-webkit-scrollbar {
        background: transparent;
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: #177629;
        border-radius: 10px;
    }
`;

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
      <Footer />
    </React.Fragment>
  );
}
