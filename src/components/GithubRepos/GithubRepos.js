import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  ReposContainer,
  ReposRow,
  ReposWrapper,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  RepoCard,
  GithubName,
  BtnWrap,
  LanguageWrapper,
  Circle,
} from "./GithubReposElements";
import { LinkRouter, LinkScroll } from "../LinkElements";
const GithubRepos = () => {
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
            id
          }
        }
      }
    }
  `);
  const repos = data.allGithubData.edges[0].node.data.viewer.repositories.edges;
  const reposSample = repos.slice(0, 4);
  return (
    <ReposContainer id="repo">
      <ReposWrapper>
        <ReposRow>
          <Column1>
            <TextWrapper>
              <TopLine>Github Repos</TopLine>
              <Heading>
                This is where you can find all of my coding projects
              </Heading>
              <BtnWrap>
                <br />
                <LinkRouter to="/github">To Github Repos</LinkRouter>
              </BtnWrap>
              <BtnWrap>
                <br />
                <LinkScroll
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-75}
                >
                  Hire Me
                </LinkScroll>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            {reposSample.map((repo, index) => (
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
          </Column2>
        </ReposRow>
      </ReposWrapper>
    </ReposContainer>
  );
};

export default GithubRepos;
