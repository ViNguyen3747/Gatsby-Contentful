import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";
import * as palette from "../../styles/Variables";

const Flicker = keyframes`
 0%,
  100% {
    opacity: 1;
  }
  41.99% {
    opacity: 1;
  }
  42% {
    opacity: 0;
  }
  43% {
    opacity: 0;
  }
  43.01% {
    opacity: 1;
  }
  45.99% {
    opacity: 1;
  }
  46% {
    opacity: 0;
  }
  46.9% {
    opacity: 0;
  }
  46.91% {
    opacity: 1;
  }
  51.99% {
    opacity: 1;
  }
  52% {
    opacity: 0;
  }
  52.8% {
    opacity: 0;
  }
  52.81% {
    opacity: 1;
  }
`;
export const Container = styled.main`
  min-height: 100vh;
  background-color: ${palette.DARK};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: ${palette.LIGHT};
`;

export const SymbolWrapper = styled.div`
  font-size: 20vw;
  font-weight: 100px;

  letter-spacing: 30px;
  animation: ${Flicker} 4s linear infinite both;
`;

export const TextWrapper = styled.div`
  font-size: 3vw;
  margin-bottom: 20px;
`;
