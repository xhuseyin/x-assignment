import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import styled from "styled-components";
import { Row } from "antd";
import RoundCheckbox from "../components/RoundCheckbox";

const ListItem = styled(Row)`
  margin-bottom: 16px;
  & > span {
    margin-top: 3px;
    margin-left: 12px;
    font-size: 14px;
  }
`;

const Sorting = () => {
  return (
    <>
      <SectionTitle title={"Sorting"} />
      <Section>
      <ListItem>
      <RoundCheckbox/>
      <span>Price low to high</span>
      </ListItem>  
      <ListItem>
      <RoundCheckbox/>
      <span>Price high to low</span>
      </ListItem>  
      <ListItem>
      <RoundCheckbox/>
      <span>New to old</span>
      </ListItem>  
      <ListItem>
      <RoundCheckbox/>
      <span>Old to new</span>
      </ListItem>      
      </Section>
    </>
  );
};

export default Sorting;
