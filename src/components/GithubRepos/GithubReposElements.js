import styled from "styled-components";
import * as palette from "../../styles/Variables";
import BackgroundImg from "../../images/leaf.webp";
export const ReposContainer = styled.div`
  color: ${palette.LIGHT};
  background: ${palette.DARK};
  position: relative;
  width: 100vw;
  @media screen and (max-width: ${palette.BP_MEDIUM}) {
    padding: 100px 0;
  }
  @media screen and (max-width: ${palette.BP_SMALL}) {
    padding-bottom: 150px;
  }
`;

export const ReposWrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: 80vw;
  min-height: 100vh;
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
  @media screen and (max-width: ${palette.BP_XLARGE}) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding-top: 50px;
  grid-area: col1;
  @media screen and (min-width: ${palette.BP_XLARGE}) {
    transform: rotateY(-30deg);
    padding-top: 0;
  }
`;

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
  display: grid;
  grid-template-rows: repeat(4, 100px);
  grid-gap: 20px;
  width: 90%;
  padding-bottom: 50px;
  @media screen and (min-width: ${palette.BP_XLARGE}) {
    transform: rotateY(30deg);
    padding-bottom: 0px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 60vw;
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
  line-height: 1.1;
  font-weight: 600;
  color: ${palette.LIGHT};

  @media screen and (max-width: ${palette.BP_SMALL}) {
    font-size: 32px;
  }
`;

export const RepoCard = styled.a`
  background-color: ${palette.YELLOW_GREEN};
  color: ${palette.LIGHT};
  display: box;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
  line-height: 25px;
  transition: all 0.5s ease-out;
  will-change: transform;
  &:hover {
    background-color: ${palette.LIGHT};
    color: ${palette.DARK_GREEN};
  }
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
export const GithubName = styled.div`
  font-size: 17px;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  letter-spacing: 3px;
  margin: 10px;
`;

export const BtnWrap = styled.div`
  margin: 10px 0px;
`;

export const GithubContainer = styled.section`
  position: relative;
  height: 100vh;
  overflow-x: scroll;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const GithubWrapper = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  grid-template-columns: repeat(${(props) => props.columns}, 500px);
  grid-auto-rows: 100px;
  grid-gap: 5vh;
  padding-left: 10px;
`;
