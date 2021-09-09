import styled from "styled-components";
import * as palette from "../../styles/Variables";
export const PostContainer = styled.section`
  position: relative;
  width: fit-content;
  height: 100vh;
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

export const PostsCard = styled.div`
  margin-top: 70px;
  position: relative;
  background: ${palette.LIGHT};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 80px;
  flex-shrink: 0;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  height: 500px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`;

export const PostsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const PostsH1 = styled.h1`
  font-size: 2.5rem;
  color: ${palette.LIGHT};
  margin-bottom: 64px;
  @media screen and (max-width: ${palette.BP_SMALL}) {
    font-size: 2rem;
  }
`;

export const PostsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const PostsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
