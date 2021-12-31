import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as palette from "../../styles/Variables";
export const PostContainer = styled.section`
  position: relative;
  background: ${palette.DARK_GREEN2};
`;

export const PostsWrapper = styled.div`
  display: flex;
  padding-top: 15vh;
  flex-flow: row wrap;
  align-items: center;
`;

export const PostsCard = styled(Link)`
  text-decoration: none;
  background: ${palette.DARK_GREEN1};
  position: relative;
  color: ${palette.LIGHT};
  display: flex;
  flex-direction: column;
  margin-right: 80px;
  flex-shrink: 0;
  align-items: left;
  border-radius: 10px;
  text-align: left;
  width: 40vw;
  min-width: 300px;
  max-width: 400px;
  height: 550px;
  margin: 20px auto;
  border: 1px solid ${palette.YELLOW_GREEN};
  &:hover {
    cursor: pointer;
    border: 1px solid ${palette.LIGHT_OPACITY};
  }
`;

export const PostsIcon = styled(GatsbyImage)`
  height: auto;
  width: 100%;
  border-radius: 10px 10px 0px 0;
`;

export const PostsH1 = styled.h1`
  font-size: 1.7rem;
  line-height: 2.4rem;
  font-weight: 800;
  padding: 20px 0px 10px 20px;
  letter-spacing: 3px;
  @media screen and (max-width: ${palette.BP_SMALL}) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: ${palette.BP_XXLARGE}) {
    font-size: 3rem;
  }
`;

export const PostsP = styled.div`
  margin-bottom: 20px;
  padding: 10px 10px 0px 20px;
`;

export const Tag = styled.span`
  letter-spacing: 3px;
  font-size: 0.8rem;
  border-radius: 5px;
  padding: 10px;
  font-weight: 700;
  display: inline-block;
  @media screen and (min-width: ${palette.BP_XXLARGE}) {
    font-size: 1.5rem;
  }
`;
