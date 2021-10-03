import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as palette from "../../styles/Variables";

export const PostContainer = styled.section`
  position: relative;
  width: fit-content;
  height: max-content;
`;

export const PostsWrapper = styled.div`
  position: relative;
  height: 100%;
  padding: 0 0 0 100px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const PostsCard = styled(Link)`
  text-decoration: none;
  margin-top: 70px;
  position: relative;
  background: ${palette.LIGHT};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-right: 80px;
  flex-shrink: 0;
  align-items: center;
  border-radius: 10px;
  color: ${palette.GREEN};
  text-align: center;
  padding: 20px;
  width: 350px;
  height: 500px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }

  @media screen and (min-width: ${palette.BP_XXLARGE}) {
    width: 500px;
    height: 720px;
  }
`;

export const PostsIcon = styled(GatsbyImage)`
  height: auto;
  width: 100%;
`;

export const PostsH1 = styled.h1`
  font-size: 1.5rem;
  @media screen and (max-width: ${palette.BP_SMALL}) {
    font-size: 2rem;
  }
  @media screen and (min-width: ${palette.BP_XXLARGE}) {
    font-size: 2.5rem;
  }
`;

export const PostsP = styled.div`
  height: max-content;
`;

export const Tag = styled.span`
  background: ${palette.LIGHT_GREEN};
  color: ${palette.LIGHT};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 0.6rem;
  border-radius: 5px;
  padding: 10px;
  margin: 0 10px 10px 0;
  font-weight: bolder;
  display: inline-block;
  @media screen and (min-width: ${palette.BP_XXLARGE}) {
    font-size: 1.5rem;
  }
`;
