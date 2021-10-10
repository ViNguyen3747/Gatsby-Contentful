import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
    html {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Encode Sans Expanded", sans-serif;
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
