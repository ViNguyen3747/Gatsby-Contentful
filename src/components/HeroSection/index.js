import React from "react";
import Video from "../../../static/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  HeroBtnWrapper,
  LinkScroll,
} from "./HeroElements";
const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="videomp4" />
      </HeroBg>
      <HeroContent>
        <HeroH2>Welcome To </HeroH2>
        <HeroH1>My Creative World</HeroH1>
        <HeroP>
          This website is one of my self-project to showcase my website
          development skills
        </HeroP>
        <HeroBtnWrapper>
          <LinkScroll
            to="about"
            primary="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get started
          </LinkScroll>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
