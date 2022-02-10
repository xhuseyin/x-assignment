import { Row } from "antd";
import { FunctionComponent } from "react";
import styled from "styled-components";

type Props = {
  title: string;
};
const Wrapper = styled(Row)`
  font-size: 13px;
  font-weight: 600;
  color: #697488;  
`;

const SectionTitle: FunctionComponent<Props> = ({ title }) => (
  <Wrapper>{title}</Wrapper>
);

export default SectionTitle;
