import styled from "styled-components";
import { Link as LinkR } from "gatsby";
import { Link as LinkS } from "react-scroll";
import * as palette from "../styles/Variables";
const LinkStyle = ({ dark, primary }) => `
    color: ${dark ? palette.DARK : palette.LIGHT};
    font-size: 20px;
    margin-right: 10px;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    letter-spacing: 3px;
    transition: all 0.4s ease-out;
    will-change: transform;
    &:after {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        margin-top: 5px;
        background-color: ${primary ? palette.LIGHT : palette.LIGHT_GREEN};
        transform: scale(0, 1); //scale(x, y)
        transform-origin: 0% 100%;
        will-change: transform;
        transition: transform 1s cubic-bezier(0, 1, 0.22, 1);
    }
    &:hover:after {
        background-color: ${primary ? palette.LIGHT : palette.LIGHT_GREEN};
        transform: scale(1);
        transition: transform 1s cubic-bezier(0, 1, 0.22, 1),
        background-color 0.5s ease-out;
    }
    &:hover {
        text-decoration: none;
        cursor: pointer;
        color: ${palette.LIGHT_GREEN};
    }
`;

const ButtonStyle = ({ dark, primary, marginTop, inline }) => `
  cursor: pointer;
  text-decoration: none;
  display: block;
  width: 250px;
  height: max-content;
  position: relative;
  border: 3.5px solid ${dark ? palette.DARK_GREEN : palette.LIGHT};
  color: ${palette.LIGHT};
  background-color: ${primary ? palette.DARK_GREEN : "transparent"};
  text-align: center;
  padding: 20px;
  font-weight: bold;
  font-size: 20px;
  margin-top: ${marginTop};
  transform: ${inline ? "scale(0.6)" : ""};

  &::after,
  &::before {
    content: "";
    position: absolute;
    border: 3.5px solid ${dark ? palette.DARK_GREEN : palette.LIGHT};
    width: calc(100% - 60px);
    height: 60px;
    transition: 0.5s ease;
  }

  &::after {
    top: -20px;
    left: -20px;
    border-right: none;
    border-bottom: none;
  }

  &::before {
    bottom: -20px;
    right: -20px;
    border-left: none;
    border-top: none;
  }

  &:hover:after,
  &:hover:before {
    width: calc(100% + 8px);
    height: 20px;
  }
  @media screen and (max-width: ${palette.BP_MEDIUM}) {
    transform: scale(0.7);
  }
`;
export const LinkScroll = styled(LinkS)`
  ${LinkStyle};
`;
export const LinkRouter = styled(LinkR)`
  ${LinkStyle};
`;

export const LinkStandard = styled.a`
  ${LinkStyle};
`;

export const ButtonScroll = styled(LinkS)`
  ${ButtonStyle};
`;

export const ButtonStandard = styled.button`
  ${ButtonStyle};
`;
