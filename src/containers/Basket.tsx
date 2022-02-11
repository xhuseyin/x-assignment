import { Col, Row, Divider } from "antd";
import styled from "styled-components";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";

const BasketWrapper = styled(Col)`
  border-radius: 2px;
  border: 8px solid #1EA4CE;
  padding: 26px 22px 16px;
`;

const ListItem = styled(Row)``;

const ListDivider = styled(Divider)`
  margin: 16px 0;
  background: #F4F4F4;
`;

const ProductName = styled.div`
width: 100%;
color: #191919;
font-size: 14px;
line-height: 18px;
margin-bottom: 4px;
`;

const ProductPrice = styled.div`
width: 100%;
color: #1ea4ce;
font-size: 14px;
font-weight: 600;
line-height: 18px;
`;

const BadgeWrapper = styled(Row)``;

const Badge = styled.div`
vertical-align: middle;
display: flex;
justify-content: center;
align-items: center;
background-color: #1ea4ce;
color: #f2f0fd;
font-size: 15px;
font-weight: 700;
width: 32px;
height: 32px;
padding-left: 12px;
padding-right: 12px;
`;

const PlusMinusButton = styled.button`
background-color: unset;
border: unset;
cursor: pointer;
`;

const TotalPriceBox = styled.div`
background: #FFFFFF;
border: 2px solid #1EA4CE;
border-radius: 2px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 600;
font-size: 14px;
padding: 17px 24px;
`;

const Basket = () => {
  return (
    <BasketWrapper span={24}>
      <ListItem justify="space-between">
        <Col span={16}>
          <ProductName>
            Lorem Ipsum Sit
          </ProductName>
          <ProductPrice>
            ₺ 14,99
          </ProductPrice>
        </Col>  
        <Col span={8}>          
          <BadgeWrapper>       
          <PlusMinusButton>
          <img src={MinusIcon} alt="" />
          </PlusMinusButton>          
          <Badge>1</Badge>          
          <PlusMinusButton>
          <img src={PlusIcon} alt="" />
          </PlusMinusButton>
          </BadgeWrapper>
        </Col>
      </ListItem>
      <ListDivider />
      <ListItem justify="space-between">
        <Col span={16}>
          <ProductName>
            Lorem Ipsum Sit
          </ProductName>
          <ProductPrice>
            ₺ 14,99
          </ProductPrice>
        </Col>  
        <Col span={8}>          
          <BadgeWrapper>       
          <PlusMinusButton>
          <img src={MinusIcon} alt="" />
          </PlusMinusButton>          
          <Badge>1</Badge>          
          <PlusMinusButton>
          <img src={PlusIcon} alt="" />
          </PlusMinusButton>
          </BadgeWrapper>
        </Col>
      </ListItem>
      <ListDivider />
      <ListItem justify="space-between">
        <Col span={16}>
          <ProductName>
            Lorem Ipsum Sit
          </ProductName>
          <ProductPrice>
            ₺ 14,99
          </ProductPrice>
        </Col>  
        <Col span={8}>          
          <BadgeWrapper>       
          <PlusMinusButton>
          <img src={MinusIcon} alt="" />
          </PlusMinusButton>          
          <Badge>1</Badge>          
          <PlusMinusButton>
          <img src={PlusIcon} alt="" />
          </PlusMinusButton>
          </BadgeWrapper>
        </Col>
      </ListItem>
      <ListDivider />
      <Row justify="end">
      <TotalPriceBox>₺39,97</TotalPriceBox>
      </Row>
    </BasketWrapper>
  );
};

export default Basket;
