import { Layout } from "antd";
import styled from "styled-components";

const LayoutFooter = styled(Layout.Footer)`
  text-align: center;
  width: 100%;
  background-color: unset;
  margin-top: 136px;
  margin-bottom: 40px;
  padding: unset;
`;

const Text = styled.span`
font-size: 13px;
color: #1EA4CE;
`;

const Footer = () => <LayoutFooter> 
  <Text>©2019 Market</Text>
  <Text style={{padding: '0 16px'}}>•</Text>
  <Text>Privacy Policy</Text>   
  </LayoutFooter>;

export default Footer;
