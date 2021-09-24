import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import * as palette from "../../styles/Variables";
import BackgroundImg from "../../../static/images/background.webp";
const layout = ({ num }) => `
  column-count: ${num};
  -moz-column-count: ${num};
  -webkit-column-count: ${num};
  column-width: calc(${1 / num});
  -moz-column-width:calc(${1 / num});
  -webkit-column-width: calc(${1 / num});
`;

export const ProjectContainer = styled.div`
  position: relative;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  padding: 100px 10vw 0 10vw;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: ${palette.DARK_GREEN};
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent);
    z-index: 2;
  }
`;

export const ProjectWrapper = styled.div`
  z-index: 3;
  margin: 0 auto;
  width: 100%;
  background: transparent;
  position: relative;
  @media only screen and (min-width: ${palette.BP_LARGE}) {
    display: grid;
    grid-auto-columns: 0.8fr 1.4fr;
    column-gap: 10px;
    grid-template-areas: "col1 col2";
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  align-items: center;
`;

export const Column2 = styled.div`
  grid-area: col2;
`;

export const ImageWrapper = styled.div`
  ${layout({ num: 2 })}
  -webkit-column-gap: 15px;
  -moz-column-gap: 15px;
  column-gap: 15px;
  margin-top: 20px;
  @media screen and (max-width: 500px) {
    ${layout({ num: 1 })}
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Title = styled.h1`
  margin: 50px 0 24px 0;
  font-size: 2.2rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${palette.LIGHT};

  @media screen and (max-width: ${palette.BP_SMALL}) {
    font-size: 32px;
  }
`;

export const MediaImg = styled(GatsbyImage)`
  margin-bottom: 20px;
  width: 100%;
  height: auto;
  background: rgb(192, 192, 192);
`;

export const Wrapper = styled.div`
  width: 100%;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    margin: 10px 0 20px 0;
    background-color: ${palette.LIGHT};
  }
`;
export const Tag = styled.span`
  background: ${palette.LIGHT};
  color: ${palette.DARK_GREEN};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
  border-radius: 5px;
  padding: 10px;
  margin: 0 20px 20px 0;
  font-weight: bolder;
  display: inline-block;
`;
