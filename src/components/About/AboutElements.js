import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import * as palette from "../../styles/Variables";

export const PostContainer = styled.section`
  position: relative;
  width: fit-content;
  height: auto;
`;

export const PostsWrapper = styled.div`
  position: relative;
  height: 100%;
  padding: 70px 0 0 100px;
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
`;

export const PostsIcon = styled(GatsbyImage)`
  height: auto;
  width: 250px;
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
`;

export const PostsP = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${palette.DARK};
`;
