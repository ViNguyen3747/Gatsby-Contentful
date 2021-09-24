import React, { useState } from "react";
import Video from "../../../static/videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { LinkScroll } from "../LinkElements";
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
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
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </LinkScroll>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
