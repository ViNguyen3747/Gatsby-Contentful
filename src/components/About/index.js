import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  PostContainer,
  PostsH1,
  PostsWrapper,
  PostsCard,
  PostsIcon,
  TitleWrapper,
  PostsP,
} from "./AboutElements";
import HorizontalScroll from "../horizontal-scroll";

const About = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulFact(sort: { fields: factId, order: ASC }) {
        edges {
          node {
            fact
            illustration {
              gatsbyImageData(placeholder: DOMINANT_COLOR, formats: WEBP)
            }
            title
            id
          }
        }
      }
    }
  `);
  const infos = data.allContentfulFact.edges;
  return (
    <HorizontalScroll>
      <PostContainer id="aboutInfo">
        <PostsWrapper>
          {infos.map(({ node: info }) => (
            <PostsCard key={info.id}>
              <PostsIcon
                image={info.illustration.gatsbyImageData}
                alt={info.title}
              />
              <TitleWrapper>
                <PostsH1>{info.title}</PostsH1>
              </TitleWrapper>
              <TitleWrapper>
                <PostsP>{info.fact}</PostsP>
              </TitleWrapper>
            </PostsCard>
          ))}
        </PostsWrapper>
      </PostContainer>
    </HorizontalScroll>
  );
};

export default About;
