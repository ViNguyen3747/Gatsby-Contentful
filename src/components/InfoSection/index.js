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
import { LinkScroll, LinkRouter, LinkStandard } from "../LinkElements";
const index = ({
  bg,
  id,
  imgStart,
  topLine,
  buttonRoute,
  buttonScroll,
  buttonLink,
  alt,
  primary,
  dark,
  to,
  route,
  link,
  info,
  textColor,
}) => {
  return (
    <>
      <InfoContainer bg={bg} id={id} textColor={textColor}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{info.headline}</Heading>
                <Subtitle>{info.description}</Subtitle>
                {link ? (
                  <BtnWrap>
                    <LinkStandard
                      href={link}
                      target="_blank"
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                    >
                      {buttonLink}
                    </LinkStandard>
                  </BtnWrap>
                ) : null}
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
                      offset={-75}
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
