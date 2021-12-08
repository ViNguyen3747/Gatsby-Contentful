import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useStaticQuery, graphql } from "gatsby";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import GithubRepos from "../components/GithubRepos/GithubRepos";
import {
  AboutSection,
  ProjectSection,
  ContactSection,
} from "../components/InfoSection/Data";
import About from "../components/About";
import Seo from "../components/seo";
import { ContactUs } from "../components/Contact";
const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
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
            video {
              file {
                url
              }
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
  const homeInfo = infos[0].node;
  const aboutMeInfo = infos[1].node;
  const projectInfo = infos[2].node;
  const contactInfo = infos[3].node;
  return (
    <>
      <Seo title="Vi's Portfolio" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection info={homeInfo} />
      <InfoSection {...AboutSection} info={aboutMeInfo} />
      <About />
      <InfoSection {...ProjectSection} info={projectInfo} />
      <GithubRepos />
      <ContactUs {...ContactSection} info={contactInfo} />
    </>
  );
};

export default IndexPage;
