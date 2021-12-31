import React from "react";
import { graphql } from "gatsby";
import {
  ProjectContainer,
  ProjectWrapper,
  Column1,
  Column2,
  TextWrapper,
  Title,
  MediaImg,
  ImageWrapper,
  Tag,
  Wrapper,
} from "./ProjectsElement";
import Header from "../../components/Header";
import { LinkStandard } from "../../components/LinkElements";
import Seo from "../../components/seo";

const Projects = ({ data }) => {
  const { title, images, tags, githubLink, websiteLink } =
    data.contentfulGithubRepo;
  return (
    <>
      <Seo title={title} />
      <Header link="/projects" title="Back" />
      <ProjectContainer>
        <ProjectWrapper>
          <Column1>
            <TextWrapper>
              <Title> {title}</Title>
              <Wrapper>
                {tags.map((tag, index) => (
                  <Tag key={index}>#{tag}</Tag>
                ))}
              </Wrapper>
              <Wrapper>
                <br />
                <LinkStandard
                  target="_blank"
                  rel="noopener noreferrer"
                  href={githubLink}
                  dark="true"
                >
                  Git Hub Source
                </LinkStandard>
              </Wrapper>
              {websiteLink ? (
                <Wrapper>
                  <br />
                  <LinkStandard
                    target="_blank"
                    rel="noopener noreferrer"
                    href={websiteLink}
                    dark="true"
                  >
                    Demo
                  </LinkStandard>
                </Wrapper>
              ) : null}
            </TextWrapper>
          </Column1>
          <Column2>
            <ImageWrapper>
              {images.map((image) => (
                <MediaImg
                  alt="project pictures"
                  key={image.id}
                  image={image.gatsbyImageData}
                />
              ))}
            </ImageWrapper>
          </Column2>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};
export const query = graphql`
  query ($slug: String!) {
    contentfulGithubRepo(slug: { eq: $slug }) {
      githubLink
      tags
      websiteLink
      title
      images {
        gatsbyImageData(formats: WEBP, placeholder: BLURRED)
        id
      }
    }
  }
`;
export default Projects;
