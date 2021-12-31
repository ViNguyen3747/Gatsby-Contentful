import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import * as palette from "../../styles/Variables";
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
  min-height: 100vh;
  padding: 100px 10vw 0 10vw;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: ${palette.LIGHT};
`;

export const ProjectWrapper = styled.div`
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
  letter-spacing: 1px;
  font-weight: 600;
  color: ${palette.DARK_GREEN};

  @media screen and (max-width: ${palette.BP_SMALL}) {
    font-size: 1.8rem;
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
`;
export const Tag = styled.span`
  letter-spacing: 2px;
  font-size: 1.2rem;
  padding: 10px;
  margin: 0 10px 10px 0;
  font-weight: 800;
  display: inline-block;
  @media screen and (max-width: ${palette.BP_SMALL}) {
    font-size: 0.7rem;
    margin: 0 5px 5px 0;
    padding: 5px;
  }
`;
