import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import GithubRepos from "../components/GithubRepos/GithubRepos";
import { HomeObjOne, HomeObjTwo } from "../components/InfoSection/Data";
import About from "../components/About";
import Seo from "../components/seo";
const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = useStaticQuery(graphql`
    {
      allContentfulInfoSection(sort: { fields: infoID, order: ASC }) {
        edges {
          node {
            description
            headline
            img {
              gatsbyImageData(placeholder: DOMINANT_COLOR, formats: WEBP)
            }
          }
        }
      }
    }
  `);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const infos = data.allContentfulInfoSection.edges;
  const aboutMeInfo = infos[0].node;
  const projectInfo = infos[1].node;
  return (
    <>
      <Seo title="Tina's Portfolio" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...HomeObjOne} info={aboutMeInfo} />
      <About />
      <InfoSection {...HomeObjTwo} info={projectInfo} />
      <GithubRepos />
    </>
  );
};

export default IndexPage;
