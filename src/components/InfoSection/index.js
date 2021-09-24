import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  Img,
  ImgWrap,
} from "./InfoElements";
import { LinkScroll, LinkRouter } from "../LinkElements";

const index = ({
  bg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonRoute,
  buttonScroll,
  img,
  alt,
  primary,
  dark,
  to,
  route,
  info,
}) => {
  return (
    <>
      <InfoContainer bg={bg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{info.headline}</Heading>
                <Subtitle darkText={darkText}>{info.description}</Subtitle>

                {route ? (
                  <BtnWrap>
                    <LinkRouter
                      to={route}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                    >
                      {buttonRoute}
                    </LinkRouter>
                  </BtnWrap>
                ) : null}
                {to ? (
                  <BtnWrap>
                    <LinkScroll
                      to={to}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                    >
                      {buttonScroll}
                    </LinkScroll>
                  </BtnWrap>
                ) : null}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img image={info.img.gatsbyImageData} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default index;
