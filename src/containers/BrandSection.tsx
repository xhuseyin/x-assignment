import React, { useState } from "react";
import Input from "../components/Input";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import styled from "styled-components";
import { Row } from "antd";
import SquareCheckbox from "../components/SquareCheckbox";

const Container = styled.div`
  margin-top: 12px;
  margin-bottom: 24px;
  padding: 24px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 2px;
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

    return (
        <>
            <SectionTitle title={"Brands"} />
            <Section>
                <Input
                    type="text"
                    value={'test'}
                    placeholder={"Search brand"}
                />
                <Container>
                    <ListItem>
                        <SquareCheckbox />
                        <span>
                        {'TEST'} <span>({10})</span>
                        </span>                        
                    </ListItem>
                    <ListItem>
                        <SquareCheckbox />
                        <span>
                        {'TEST'} <span>({10})</span>
                        </span>                        
                    </ListItem>
                    <ListItem>
                        <SquareCheckbox />
                        <span>
                        {'TEST'} <span>({10})</span>
                        </span>                        
                    </ListItem>
                </Container>
            </Section>
        </>
    );
};

export default BrandSection;
