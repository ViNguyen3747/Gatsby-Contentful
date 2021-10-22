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
        overflow-x: hidden;
    }

    ::-webkit-scrollbar {
        background: #010606;
        width: 10px;
        height: 12px;
    }

    ::-webkit-scrollbar-thumb {
        background: #177629;
    }
`;
