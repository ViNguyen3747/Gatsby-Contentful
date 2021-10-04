import styled from "styled-components";
import * as palette from "../../styles/Variables";

const BoxStyle = () => `
    border-radius: 10px;
    border: 3px solid ${palette.GREEN};
`;
export const ContactContainer = styled.form`
  justify-content: flex-start;
  align-items: center;
`;

export const InputWrapper = styled.div`
  padding-bottom: 20px;
  color: ${palette.DARK};
`;

export const Label = styled.label`
  display: block;
  width: 100px;
  padding-bottom: 10px;
`;

export const TextInput = styled.input`
  width: 400px;
  height: 40px;
  padding: 10px;
  ${BoxStyle};
`;

export const TextArea = styled.textarea`
  width: 400px;
  height: 250px;
  padding: 10px;
  ${BoxStyle};
`;

export const Button = styled.input`
  width: 70px;
  height: 30px;
  background-color: ${palette.DARK_GREEN};
  color: ${palette.LIGHT};
  border-radius: 5px;
`;
