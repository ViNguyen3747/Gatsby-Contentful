import styled from "styled-components";
import * as palette from "../../styles/Variables";

export const ReposContainer = styled.div`
  color: ${palette.DARK};
  background: ${palette.LIGHT};
  @media screen and (max-width: ${palette.BP_MEDIUM}) {
    padding: 100px 0;
  }
`;

export const ReposWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ReposRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col2 col1";

  perspective: 1000px;
  @media screen and (max-width: ${palette.BP_MEDIUM}) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  @media screen and (min-width: ${palette.BP_MEDIUM}) {
    transform: rotateY(-30deg);
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  margin-left: 15px;
  padding: 0 15px;
  grid-area: col2;
  display: grid;
  grid-template-rows: repeat(4, 100px);
  grid-gap: 20px;
  width: 100%;
  @media screen and (min-width: ${palette.BP_MEDIUM}) {
    transform: rotateY(30deg);
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: ${palette.GREEN};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${palette.DARK_GREEN};

  @media screen and (max-width: ${palette.BP_SMALL}) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${palette.DARK};
`;

export const RepoCard = styled.a`
  background-color: ${palette.DARK_GREEN};
  color: ${palette.LIGHT};
  display: box;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.5s ease-out;
  will-change: transform;
  &:hover {
    background-color: ${palette.LIGHT};
    color: ${palette.DARK_GREEN};
  }
`;
export const GithubLink = styled.div`
  font-size: 17px;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  letter-spacing: 3px;
  margin: 10px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const LanguageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 1em;
  line-height: 2em;
`;

export const Circle = styled.span`
  border-radius: 50%;
  display: inline-block;
  background-color: ${({ bg }) => bg};
  height: 15px;
  width: 15px;
  position: relative;
  margin-left: 10px;
  margin-right: 4px;
  margin-top: 2px;
`;
