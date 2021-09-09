import styled from "styled-components";
import * as palette from "../../styles/Variables";
export const GithubContainer = styled.section`
  position: relative;
  width: fit-content;
  height: 100vh;
  background: black;
`;

export const GithubWrapper = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  padding: 250px 100px 0 100px;
  grid-template-columns: repeat(${(props) => props.columns}, 500px);
  grid-auto-rows: 100px;
  grid-gap: 30px;
`;

export const RepoCard = styled.div`
  background: white;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
`;

export const Circle = styled.span`
  border-radius: 50%;
  display: inline-block;
  background-color: ${({ bg }) => bg};
  height: 20px;
  width: 20px;
  position: relative;
  margin-left: 10px;
  margin-right: 4px;
  margin-top: 2px;
`;

export const GithubLink = styled.a`
  color: ${palette.DARK};
  font-size: 17px;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  letter-spacing: 3px;
  margin: 10px;
  transition: all 0.4s ease-out;
  will-change: transform;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background-color: ${palette.DARK_GREEN};
    transform: scale(0, 1); //scale(x, y)
    transform-origin: 0% 100%;
    will-change: transform;
    transition: transform 1s cubic-bezier(0, 1, 0.22, 1);
  }
  &:hover:after {
    background-color: ${palette.DARK_GREEN};
    transform: scale(1);
    transition: transform 1s cubic-bezier(0, 1, 0.22, 1),
      background-color 0.5s ease-out;
  }
  &:hover {
    text-decoration: none;
    color: ${palette.LIGHT_GREEN};
  }
`;

export const LanguageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 1em;
`;
