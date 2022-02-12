import { useEffect, useState } from "react";
import Input from "../components/Input";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import styled from "styled-components";
import { Row, Spin } from "antd";
import SquareCheckbox from "../components/SquareCheckbox";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrandsRequest } from "../commons/store/actions/brandActions";
import { RootState } from "../commons/store/reducers/rootReducer";

const Container = styled.div`
width: 100%;
padding: 0 3px;
max-height: 148px;
overflow: auto;

&::-webkit-scrollbar {
  width: 4px;
}
&::-webkit-scrollbar-thumb {  
  border-radius: 4px;
  background: #e0e0e0;
}
`;

const ListItem = styled(Row)`
  align-items: flex-start;
  flex-wrap: initial;
  cursor: pointer;
  margin-bottom: 18px;
  display: flex;
  justify-content: flex-start;

  & > span {
    margin-top: 3px;
    margin-left: 12px;
    font-size: 14px;
    & > span {
      color: #a8a8a8;
    }
  }
`;

const BrandSection = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const { pending, brands, error } = useSelector(
      (state: RootState) => state.brands
  );

  useEffect(() => {
      dispatch(fetchBrandsRequest());
  }, []);

    return (
        <>
            <SectionTitle title={"Brands"} />
            <Section>
                <Input
                    type="text"
                    value={searchText}
                    placeholder={"Search brand"}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <Container>
                {pending ? (                        
                         <Spin size="small"></Spin>
                    ) : error ? (
                        <div>Error</div>
                    ) : (
                        brands
                        .filter(
                          (item) => item.toUpperCase().indexOf(searchText.toUpperCase()) > -1
                        )
                        .map((item, index) => (
                    <ListItem key={index}>
                        <SquareCheckbox />
                        <span>
                        { item } <span></span>
                        </span>                        
                    </ListItem>
                                            ))
                                            )}
                </Container>
            </Section>
        </>
    );
};

export default BrandSection;
