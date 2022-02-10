import { FunctionComponent } from "react";
import styled from "styled-components";

type Props = {
  name: string;
};
const Wrapper: FunctionComponent<Props> = styled.div<Props>`
  color: #191919;
  font-size: 14px;
  font-weight: 600;
`;

const ProductName: FunctionComponent<Props> = ({ name }) => (
  <Wrapper name={name}>
    {name}
  </Wrapper>
);

export default ProductName;
