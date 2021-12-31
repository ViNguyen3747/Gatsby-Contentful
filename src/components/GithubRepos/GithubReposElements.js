import styled from "styled-components";
import * as palette from "../../styles/Variables";
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
  margin 0 auto;
  justify-content: center;
`;

export const ReposRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1.5fr);
  align-items: center;
  grid-template-areas: "col2 col1";

  perspective: 1000px;
  @media screen and (max-width: ${palette.BP_XLARGE}) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
  @media screen and (min-width: ${palette.BP_XXLARGE}) {
    grid-auto-columns: minmax(auto, 0.5fr);
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 50px 0 0 20px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  grid-area: col2;
  display: grid;
  width: 100%;
  padding-bottom: 50px;
  @media screen and (max-width: ${palette.BP_SMALL}) {
    margin-left: -35px;
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
  line-height: 3.5rem;
  font-weight: 600;
  color: ${palette.LIGHT};

  @media screen and (max-width: ${palette.BP_SMALL}) {
    font-size: 32px;
  }
`;

export const RepoCard = styled.a`
  background: ${palette.DARK_GREEN1};
  position: relative;
  color: ${palette.LIGHT};
  width: 40vw;
  min-width: 320px;
  max-width: 550px;
  align-items: left;
  min-height: 100px;
  margin: 20px auto;
  display: box;
  border-radius: 5px;
  font-size: 1rem;
  text-decoration: none;
  font-weight: bold;
  line-height: 25px;
  border: 1px solid ${palette.LIGHT_OPACITY1};
  &:hover {
    cursor: pointer;
    border: 1px solid ${palette.LIGHT};
  }
  @media screen and (max-width: ${palette.BP_SMALL}) {
    margin: 20px 20px;
    font-size: 0.7rem;
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
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  letter-spacing: 3px;
  margin: 10px;
  @media screen and (max-width: ${palette.BP_SMALL}) {
    font-size: 1rem;
  }
`;

export const BtnWrap = styled.div`
  margin: 10px 0px;
`;

export const GithubContainer = styled.section`
  min-height: 100vh;
  position: relative;
  background: ${palette.DARK_GREEN2};
`;

export const GithubWrapper = styled.div`
  display: flex;
  padding-top: 15vh;
  flex-flow: row wrap;
  align-items: center;
`;
