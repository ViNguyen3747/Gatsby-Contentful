import styled from "styled-components";
export const GithubContainer = styled.section`
  position: relative;
  width: fit-content;
`;

export const GithubWrapper = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  padding-top: 20vh;
  grid-template-columns: repeat(${(props) => props.columns}, 500px);
  grid-auto-rows: 90px;
  grid-gap: 30px;
`;
export const ImgWrap = styled.div`
  grid-row: 1 / span 3;
`;

export const Img = styled.img`
  width: 100%;
`;
