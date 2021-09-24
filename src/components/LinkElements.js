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
export const LinkScroll = styled(LinkS)`
  ${LinkStyle};
`;
export const LinkRouter = styled(LinkR)`
  ${LinkStyle};
`;

export const LinkStandard = styled.a`
  ${LinkStyle};
`;
