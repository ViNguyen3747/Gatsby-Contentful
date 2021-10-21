import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GithubContainer, GithubWrapper } from "./ReposElement";
import {
  Circle,
  GithubName,
  RepoCard,
  LanguageWrapper,
} from "../GithubReposElements";
import Header from "../../Header";

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
                      homepageUrl
                      languages {
                        nodes {
                          color
                          name
                        }
                      }
                      name
                      url
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
  return (
    <>
      <Header link="/" title="Back" />

      <GithubContainer id="github">
        <GithubWrapper columns={Math.ceil(repos.length / 4)}>
          {repos.map((repo, index) => (
            <RepoCard
              key={index}
              href={repo.node.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubName>{repo.node.name}</GithubName>
              <LanguageWrapper>
                {repo.node.languages.nodes.map((l) => (
                  <div key={l.name}>
                    <Circle bg={l.color} />
                    {l.name}
                  </div>
                ))}
              </LanguageWrapper>
            </RepoCard>
          ))}
        </GithubWrapper>
      </GithubContainer>
    </>
  );
};

export default Repos;
