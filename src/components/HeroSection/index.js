import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  HeroBtnWrapper,
} from "./HeroElements";
import { ButtonScroll } from "../LinkElements";
const HeroSection = ({ info }) => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={info.video.file.url}
          type="videomp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH2>Welcome To </HeroH2>
        <HeroH1>My Creative World</HeroH1>
        <HeroP>
          This website is one of my self-project to showcase my website
          development skills
        </HeroP>
        <HeroBtnWrapper>
          <ButtonScroll
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get started
          </ButtonScroll>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
