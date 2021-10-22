import styled from "styled-components";
import BackgroundImg from "../../../images/leaf.webp";
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
  grid-auto-rows: 90px;
  grid-gap: 5vh;
  padding-left: 15vh;
`;
