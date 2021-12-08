import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Heading,
  Column2,
  Img,
  ImgWrap,
} from "../InfoSection/InfoElements";
import {
  ContactContainer,
  InputWrapper,
  Label,
  TextInput,
  TextArea,
} from "./ContactElements";
import { ButtonStandard } from "../LinkElements";
export const ContactUs = ({
  bg,
  id,
  imgStart,
  lightText,
  alt,
  info,
  topLine,
  textColor,
}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.GATSBY_SERVICE_ID,
        process.env.GATSBY_TEMPLATE_ID,
        form.current,
        process.env.GATSBY_USER_ID
      )
      .then(
        () => {
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <InfoContainer bg={bg} id={id} textColor={textColor}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{topLine}</Heading>
                <ContactContainer ref={form} onSubmit={sendEmail}>
                  <InputWrapper>
                    <Label htmlFor="user_name">Name</Label>
                    <TextInput
                      type="text"
                      name="user_name"
                      id="user_name"
                      required
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <Label htmlFor="user_email">Email</Label>
                    <TextInput
                      type="email"
                      name="user_email"
                      id="user_email"
                      required
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <Label htmlFor="message">Message</Label>
                    <TextArea name="message" id="message" required />
                  </InputWrapper>
                  <InputWrapper>
                    <ButtonStandard
                      inline="true"
                      primary="true"
                      dark="true"
                      type="submit"
                    >
                      Send
                    </ButtonStandard>
                  </InputWrapper>
                </ContactContainer>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-anchor-placement="center-bottom"
              >
                <Img image={info.img.gatsbyImageData} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};
