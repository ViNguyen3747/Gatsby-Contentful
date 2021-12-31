import React from "react";
import { graphql } from "gatsby";
import {
  PostContainer,
  PostsH1,
  PostsWrapper,
  PostsCard,
  PostsIcon,
  PostsP,
  Tag,
} from "../components/Posts/PostsElements";
import Header from "../components/Header";
import Seo from "../components/seo";
const Posts = ({ data }) => {
  const repos = data.allContentfulGithubRepo.edges;
  return (
    <>
      <Seo
        title="Vi's Projects list"
        description="All self-projects built with ReactJS, GatsbyJS, Angular"
      />
      <Header link="/" title="Back" />
      <PostContainer id="posts">
        <PostsWrapper>
          {repos.map(({ node: repo }) => (
            <PostsCard key={repo.id} to={`/projects/${repo.slug}`}>
              <PostsIcon
                image={repo.thumbnail.gatsbyImageData}
                alt={repo.title}
              />
              <br />
              <PostsH1>{repo.title}</PostsH1>
              <PostsP>
                {repo.tags.map((tag, index) => (
                  <Tag key={index}>#{tag}</Tag>
                ))}
              </PostsP>
            </PostsCard>
          ))}
        </PostsWrapper>
      </PostContainer>
    </>
  );
};

export const query = graphql`
  {
    allContentfulGithubRepo(sort: { fields: projectID, order: DESC }) {
      edges {
        node {
          id
          slug
          title
          tags
          thumbnail {
            gatsbyImageData(placeholder: DOMINANT_COLOR, formats: WEBP)
          }
        }
      }
    }
  }
`;

export default Posts;
