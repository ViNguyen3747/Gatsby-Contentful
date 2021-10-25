import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as palette from "../../styles/Variables";
import BackgroundImg from "../../images/leaf.webp";
export const PostContainer = styled.section`
  position: relative;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: scroll;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const PostsWrapper = styled.div`
  position: relative;
  padding: 15vh 0 0 100px;
  display: flex;
  flex-flow: row nowrap;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  align-items: center;
`;

export const PostsCard = styled(Link)`
  text-decoration: none;
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
  width: 400px;
  height: 550px;

  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: ${palette.BP_SMALL}) {
    transform: scale(0.9);
  }
  @media screen and (min-width: ${palette.BP_XXLARGE}) {
    transform: scale(1.25);
  }
`;

export const PostsIcon = styled(GatsbyImage)`
  height: auto;
  width: 100%;
`;

export const PostsH1 = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  @media screen and (max-width: ${palette.BP_SMALL}) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: ${palette.BP_XXLARGE}) {
    font-size: 3rem;
  }
`;

export const PostsP = styled.div`
  height: max-content;
  margin-bottom: 20px;
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
