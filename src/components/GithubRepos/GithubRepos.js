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
  Subtitle,
  RepoCard,
  GithubLink,
  BtnWrap,
  LanguageWrapper,
  Circle,
} from "./GithubReposElements";
import { ButtonRouter } from "../ButtonElement";
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
    <ReposContainer id="github">
      <ReposWrapper>
        <ReposRow>
          <Column1>
            <TextWrapper>
              <TopLine>Github Repository</TopLine>
              <Heading>Ornare arcu odio ut sem</Heading>
              <Subtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi
                proin sed libero enim. Feugiat sed lectus vestibulum mattis.
                Pellentesque sit amet porttitor eget dolor morbi. Egestas purus
                viverra accumsan in nisl nisi scelerisque.
              </Subtitle>
              <BtnWrap>
                <ButtonRouter to="/github" primary="true">
                  Learn More
                </ButtonRouter>
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
                <GithubLink>{repo.node.name}</GithubLink>
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
