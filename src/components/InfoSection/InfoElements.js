import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import * as palette from "../../styles/Variables";

export const InfoContainer = styled.div`
  color: ${({ textColor }) => textColor};
  background: ${({ bg }) => bg};
  padding: 30px 0;
  @media screen and (max-width: ${palette.BP_MEDIUM}) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  margin-bottom: 0;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(50%, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: ${palette.BP_MEDIUM}) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  margin-left: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: ${palette.GREEN};
  font-size: 25px;
  line-height: 25px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 3.5rem;
  font-weight: 600;
  @media screen and (max-width: ${palette.BP_SMALL}) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 35px;
`;

export const BtnWrap = styled.div`
  margin: 10px 0px;
`;

export const ImgWrap = styled.div`
  max-width: 500px;
  height: 100%;
`;

export const Img = styled(GatsbyImage)`
  width: 100%;
  height: auto;
  max-height: 500px;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
