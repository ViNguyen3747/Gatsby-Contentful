import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  Circle,
  GithubContainer,
  GithubLink,
  GithubWrapper,
  LanguageWrapper,
  RepoCard,
} from "./ReposElement";
import HorizontalScroll from "../horizontal-scroll";
import Header from "../Header";

const Repos = () => {
  const data = useStaticQuery(graphql`
    {
      allGithubData {
        edges {
          node {
            data {
              viewer {
                repositories {
                  edges {
                    node {
                      createdAt(formatString: "MMMM DD YYYY")
                      homepageUrl
                      languages {
                        nodes {
                          color
                          name
                        }
                      }
                      name
                      url
                      updatedAt(formatString: "MMMM DD YYYY")
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const repos = data.allGithubData.edges[0].node.data.viewer.repositories.edges;
  console.log(repos);
  return (
    <>
      <Header />
      <HorizontalScroll>
        <GithubContainer id="github">
          <GithubWrapper columns={Math.round(repos.length / 2)}>
            {repos.map((repo, index) => (
              <RepoCard key={index}>
                <GithubLink
                  href={repo.node.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.node.name}
                </GithubLink>
                <LanguageWrapper>
                  {repo.node.languages.nodes.map((l) => (
                    <div>
                      <Circle bg={l.color} />
                      {l.name}
                    </div>
                  ))}
                </LanguageWrapper>
              </RepoCard>
            ))}
          </GithubWrapper>
        </GithubContainer>
      </HorizontalScroll>
    </>
  );
};

export default Repos;
