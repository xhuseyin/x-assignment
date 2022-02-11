import './App.css';
import Layout from "./components/Layout";
import Header from './containers/Header';
import Content from './components/Content';
import { Row, Col } from "antd";
import SortingSection from './containers/SortingSection';
import BrandSection from './containers/BrandSection';
import TagSection from './containers/TagSection';
import Product from './containers/Product';

const App = () => (
<Layout>
<Header/>
<Content>
      <Row>
      <Col span={6}>
          <SortingSection/>
          <BrandSection/>
          <TagSection/>
      </Col>
      <Col span={12}>
       <Product/>        
      </Col>
      <Col span={6}></Col>
      </Row>
    </Content>
</Layout>
);

export default App;
