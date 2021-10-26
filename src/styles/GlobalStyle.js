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
    html {
        @media screen and (max-width: 770px) {
            overflow-x: hidden;
        }
    }

    ::-webkit-scrollbar {
        background: #010606;
        width: 12px;
        height: 13px;
    }

    ::-webkit-scrollbar-thumb {
        background: #177629;        
        border-radius: 5px;
        border: 3px solid white;
    }
`;
