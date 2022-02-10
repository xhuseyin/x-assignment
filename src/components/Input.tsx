import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 2px;
  color: #a8a8a8;
  font-size: 14px;
  margin-bottom: 17px;

  &:focus,
  &:focus-visible {
    border: 2px solid #e0e0e0 !important;
    outline: none;
  },
  &:active
`;

export default Input;