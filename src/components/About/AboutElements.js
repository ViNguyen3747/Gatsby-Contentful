import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import * as palette from "../../styles/Variables";

export const PostContainer = styled.section`
  position: relative;
  height: 90vh;
  background-color: ${palette.LIGHT};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: 0;
`;

export const PostsCard = styled.div`
  position: relative;
  background: ${palette.LIGHT};

  font-weight: bolder;
  border-radius: 10px;
  backdrop-filter: blur(2rem);
  width: max-content;
  height: auto;
  padding: 10px;
  margin: 20px;
  margin-left: 100px;
`;

export const PostsIcon = styled(GatsbyImage)`
  height: auto;
  width: 250px;
  @media screen and (min-width: ${palette.BP_XXLARGE}) {
    width: 350px;
  }
  border-radius: 10px;
  backdrop-filter: blur(2rem);
`;
export const TitleWrapper = styled.div`
  height: fit-content;
  width: 100%;
`;
export const PostsH1 = styled.h1`
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${palette.DARK_GREEN};
  @media screen and (max-width: ${palette.BP_SMALL}) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
  @media screen and (min-width: ${palette.BP_XXLARGE}) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`;

export const PostsP = styled.p`
  font-size: 1.2rem;
  line-height: 2rem;
  color: ${palette.DARK};
  @media screen and (min-width: ${palette.BP_XXLARGE}) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;
