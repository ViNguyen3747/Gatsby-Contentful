import styled from "styled-components";
import * as palette from "../../styles/Variables";

const BoxStyle = () => `
    border-radius: 10px;
    border: 3px solid ${palette.GREEN};
`;
export const ContactContainer = styled.form`
  justify-content: flex-start;
  align-items: center;
  width: min-content;
`;

export const InputWrapper = styled.div`
  padding-bottom: 20px;
  font-weight: bold;
`;

export const Label = styled.label`
  display: block;
  width: 10vw;
  padding-bottom: 10px;
`;

export const TextInput = styled.input`
  width: 30vw;
  height: 40px;
  padding: 10px;
  ${BoxStyle};
  @media screen and (max-width: ${palette.BP_MEDIUM}) {
    width: 70vw;
  }
`;

export const TextArea = styled.textarea`
  width: 30vw;
  height: 250px;
  padding: 10px;
  ${BoxStyle};
  @media screen and (max-width: ${palette.BP_MEDIUM}) {
    width: 70vw;
  }
`;
