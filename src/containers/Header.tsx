import { Layout } from "antd";
import styled from "styled-components";
import Logo from "../assets/icons/logo.svg";
import BasketIcon from "../assets/icons/basket.svg";

const HeaderLayout = styled(Layout.Header)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 76px;
  background-color: #1ea4ce;
  color: #ffffff;
  position: relative;
  padding: 0 104px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1232px !important;
  position: relative;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;
const HeaderTotalPrice = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  background-color: #147594;
  font-size: 14px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderLayout>
      <Container>
          <img src={Logo} alt="" />
        <HeaderTotalPrice>
          <img src={BasketIcon} alt="" /> {1000}
        </HeaderTotalPrice>
      </Container>
    </HeaderLayout>
  );
};

export default Header;
