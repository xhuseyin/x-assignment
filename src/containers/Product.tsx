import { useEffect } from "react";
import styled from "styled-components";
import { Row, Col, Image, Button, Spin } from "antd";
import CategoryButton from "../components/CategoryButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest } from "../commons/store/actions/postsActions";
import { RootState } from "../commons/store/reducers/rootReducer";
import { filterPostsRequest } from "../commons/store/actions/postsActions";

const Container = styled(Col)`
  width: 100%;
  border-radius: 2px;
`;

const Title = styled.h1`
  margin-bottom: 16px;
  font-size: 20px;
  color: #6f6f6f;
`;

const ProductsWrapper = styled(Row)`
width: 100%;
background: #FFFFFF;
box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
border-radius: 2px;
padding: 20px 9px;
margin-top: 16px;
margin-left: 0 !important;
margin-right: 0 !important;
`;

const ProductCard = styled(Col)`
 margin-left: 0;
 margin-right: 0;
`;

const ProductImageWrapper = styled.div`
  border: 1.17666px solid #F3F0FE;
  border-radius: 12px;
  padding: 16px;
`;

const ProductName = styled.div`
width: 100%;
color: #191919;
font-size: 14px;
font-weight: 600;
line-height: 20px;
margin-bottom: 9px;
height: 40px;
`;

const ProductPrice = styled.div`
width: 100%;
color: #1ea4ce;
font-size: 14px;
line-height: 20px;
`;

const AddToBasketButton = styled(Button)`   
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1EA4CE;
  border-radius: 2px;
  color: #f2f0fd;
  font-size: 12px;
  font-weight: 600;
  height: 22px;
  padding: 0;
  width: 100%;
`;

const Product = () => {
    const dispatch = useDispatch();
    const { pending, posts, error } = useSelector(
        (state: RootState) => state.posts
    );

    useEffect(() => {
        dispatch(fetchPostsRequest());
    }, []);

    const handleFilter = (item: string) => {
        const queryStr = '?itemType=' + item; 
        dispatch(filterPostsRequest(queryStr));
    };  

    return (
        <Container>
            <Col span={24}>
                <Title>Products</Title>
            </Col>
            <Col span={24}>
                <CategoryButton onClick={() => handleFilter('mug')}>
                    mug
                </CategoryButton>
                <CategoryButton onClick={() => handleFilter('shirt')}>
                    shirt
                </CategoryButton>
            </Col>
            <Col span={24}>
                <ProductsWrapper gutter={[24, { xs: 4, sm: 8, md: 16, lg: 20 }]}>
                    {pending ? (                        
                         <Spin size="large" tip="Loading...">
                       </Spin>
                    ) : error ? (
                        <div>Error</div>
                    ) : (
                        posts?.map((item, index) => (
                            <ProductCard key={index} md={12} lg={8} xl={6}>
                                <ProductImageWrapper>
                                    <Image src="https://fakeimg.pl/368/" alt={item.name} />
                                </ProductImageWrapper>
                                <ProductPrice>
                                    ₺ { item.price }
                                </ProductPrice>
                                <ProductName>
                                    { item.name }
                                </ProductName>
                                <AddToBasketButton>Add</AddToBasketButton>
                            </ProductCard>
                        ))
                    )}
                </ProductsWrapper>
            </Col>
        </Container>
    );
}

export default Product;
