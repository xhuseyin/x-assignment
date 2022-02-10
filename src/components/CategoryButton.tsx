import { Button } from "antd";
import { FunctionComponent } from "react";
import styled from "styled-components";

export interface Props extends React.HTMLAttributes<HTMLElement> {
  active?: string;
}

const CategoryButton: FunctionComponent<Props> = styled(Button)<Props>`
  background-color: ${(props) => (props.active ? "#1ea4ce" : "#F2F0FD")};
  color: ${(props) => (props.active ? "#ffffff" : "#1ea4ce")};
  width: auto;
  padding: 4px 16px;
  font-size: 13px;
  font-weight: 600;
  line-height: 0;
  vertical-align: middle;
  margin-right: 8px;
  outline: none;
  border: none;  
  cursor: pointer;
  
  &:hover,
  &:active,
  &:focus {
    background-color: #1ea4ce;
    color: #ffffff;
  }
`;

export default CategoryButton;
