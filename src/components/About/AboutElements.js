import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import * as palette from "../../styles/Variables";

export const PostContainer = styled.section`
  position: relative;
  width: fit-content;
  min-height: 100vh;
`;

export const PostsWrapper = styled.div`
  position: relative;
  padding: 10vh;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const PostsCard = styled.div`
  position: relative;
  background: ${palette.LIGHT};
  display: flex;
  flex-direction: column;
  margin-right: 80px;
  align-items: center;
  text-align: center;
  font-weight: bolder;
  border-radius: 10px;

  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  backdrop-filter: blur(2rem);
  width: 350px;
  height: 500px;
  padding: 30px;
  @media screen and (min-width: ${palette.BP_XXLARGE}) {
    width: 500px;
    height: 720px;
  }
`;

export const PostsIcon = styled(GatsbyImage)`
  height: auto;
  width: 250px;
  @media screen and (min-width: ${palette.BP_XXLARGE}) {
    width: 360px;
  }
`;
export const TitleWrapper = styled.div`
  height: fit-content;
  width: 100%;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    margin: 10px 0 20px 0;
    background-color: ${palette.DARK_GREEN};
  }
`;
export const PostsH1 = styled.h1`
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${palette.DARK_GREEN};
  @media screen and (max-width: ${palette.BP_SMALL}) {
    font-size: 1.3rem;
    line-height: 2rem;
  }
  @media screen and (min-width: ${palette.BP_XXLARGE}) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`;

export const PostsP = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${palette.DARK};
  @media screen and (min-width: ${palette.BP_XXLARGE}) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;
