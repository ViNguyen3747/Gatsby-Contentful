import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Icon1 from "../../images/icon1.svg";
import Icon2 from "../../images/icon2.svg";
import Icon3 from "../../images/icon3.svg";

import {
  PostContainer,
  PostsH1,
  PostsWrapper,
  PostsCard,
  PostsIcon,
  PostsH2,
  PostsP,
} from "./PostsElements";
import HorizontalScroll from "../horizontal-scroll";

const Posts = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulGithubRepo {
        edges {
          node {
            githubLink
            id
            images {
              file {
                url
                details {
                  image {
                    height
                    width
                  }
                }
              }
            }
            title
            tags
            websiteLink
          }
        }
      }
    }
  `);
  console.log(data.allContentfulGithubRepo.edges);
  const repos = data.allContentfulGithubRepo.edges;
  return (
    <HorizontalScroll>
      <PostContainer id="posts">
        <PostsWrapper>
          {repos.map((repo) => (
            <PostsCard key={repo.node.id}>
              <PostsIcon src={Icon1} />
              <PostsH2>{repo.node.title}</PostsH2>
              <PostsP>
                Eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi
                proin sed libero enim.
              </PostsP>
            </PostsCard>
          ))}
        </PostsWrapper>
      </PostContainer>
    </HorizontalScroll>
  );
};

export default Posts;
