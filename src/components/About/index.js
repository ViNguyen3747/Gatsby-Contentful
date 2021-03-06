import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {
  PostContainer,
  PostsH1,
  PostsCard,
  PostsIcon,
  TitleWrapper,
  PostsP,
} from "./AboutElements";
import { ButtonScroll } from "../LinkElements";

const Layer = ({ offset, info }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.5}>
      <PostsIcon
        marginTop={info.marginTop}
        image={info.illustration.gatsbyImageData}
        alt={info.title}
      />
    </ParallaxLayer>
    <ParallaxLayer offset={offset + 0.1} speed={0.6}>
      <PostsCard marginTop={info.marginTop}>
        <TitleWrapper>
          <PostsH1>{info.title}</PostsH1>
        </TitleWrapper>
        {info.fact ? (
          <TitleWrapper>
            <PostsP>{info.fact}</PostsP>
          </TitleWrapper>
        ) : null}
      </PostsCard>
    </ParallaxLayer>
  </>
);
const About = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulFact(sort: { fields: factId, order: ASC }) {
        edges {
          node {
            fact
            offset
            illustration {
              gatsbyImageData(placeholder: DOMINANT_COLOR, formats: WEBP)
            }
            title
            id
            marginTop
          }
        }
      }
    }
  `);
  const infos = data.allContentfulFact.edges;
  const first = infos[0].node;
  const second = infos.slice(1, 9);
  const third = infos[9].node;
  const fourth = infos.slice(10, infos.length);
  return (
    <PostContainer id="aboutInfo">
      <Parallax pages={6} horizontal>
        <Layer offset={0} info={first} />
        {second.map(({ node: info }) => (
          <Layer key={info.id} offset={info.offset} info={info} />
        ))}
        <Layer offset={3.5} info={third} />
        {fourth.map(({ node: info }) => (
          <Layer key={info.id} offset={info.offset} info={info} />
        ))}
        <ParallaxLayer offset={5.4} speed={0.6}>
          <ButtonScroll
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-75}
            primary="true"
            marginTop="40vh"
          >
            To My Projects
          </ButtonScroll>
        </ParallaxLayer>
      </Parallax>
    </PostContainer>
  );
};

export default About;
