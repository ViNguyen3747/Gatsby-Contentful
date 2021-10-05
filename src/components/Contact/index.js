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
  Button,
} from "./ContactElements";

export const ContactUs = ({ bg, id, imgStart, lightText, alt, info }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        form.current,
        process.env.USER_ID
      )
      .then(
        (result) => {
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <InfoContainer bg={bg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{info.headline}</Heading>
                <ContactContainer ref={form} onSubmit={sendEmail}>
                  <InputWrapper>
                    <Label>Name</Label>
                    <TextInput type="text" name="user_name" required />
                  </InputWrapper>
                  <InputWrapper>
                    <Label>Email</Label>
                    <TextInput type="email" name="user_email" required />
                  </InputWrapper>
                  <InputWrapper>
                    <Label>Message</Label>
                    <TextArea name="message" required />
                  </InputWrapper>
                  <InputWrapper>
                    <Button type="submit">Send</Button>
                  </InputWrapper>
                </ContactContainer>
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
