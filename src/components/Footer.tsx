import { Layout } from "antd";
import styled from "styled-components";

const LayoutFooter = styled(Layout.Footer)`
  text-align: center;
  width: 100%;
  background-color: unset;
  margin-top: 100px;
`;

const Footer = () => <LayoutFooter> ©2019 Market • Privacy Policy</LayoutFooter>;

export default Footer;
