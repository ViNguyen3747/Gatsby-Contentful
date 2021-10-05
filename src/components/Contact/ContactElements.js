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
  color: ${palette.DARK};
  font-weight: bold;
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

export const Button = styled.button`
  cursor: pointer;
  width: 150px;
  height: 40px;
  position: relative;
  background-color: ${palette.DARK_GREEN};
  color: ${palette.LIGHT};
  border: 0;
  text-align: center;
  margin-left: 30px;
  font-weight: bold;
  &::after,
  &::before {
    content: "";
    position: absolute;
    border: 3.5px solid ${palette.DARK_GREEN};
    width: calc(100% - 40px);
    height: 40px;
    transition: 0.5s ease;
  }

  &::after {
    top: -10px;
    left: -10px;
    border-right: none;
    border-bottom: none;
  }

  &::before {
    bottom: -10px;
    right: -10px;
    border-left: none;
    border-top: none;
  }

  &:hover:after,
  &:hover:before {
    width: calc(100% + 5px);
    height: 15px;
  }
`;
