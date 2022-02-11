import './App.css';
import Layout from "./components/Layout";
import Header from './containers/Header';
import Content from './components/Content';
import { Row, Col } from "antd";
import SortingSection from './containers/SortingSection';
import BrandSection from './containers/BrandSection';
import TagSection from './containers/TagSection';
import Product from './containers/Product';
import Footer from './components/Footer';
import Basket from './containers/Basket';

const App = () => (
<Layout>
<Header/>
<Content>
      <Row gutter={16}>
      <Col sm={12} md={12} lg={8} xl={6}>
          <SortingSection/>
          <BrandSection/>
          <TagSection/>
      </Col>
      <Col sm={12} md={12} lg={16} xl={12}>
       <Product/>        
      </Col>
      <Col sm={12} md={12} lg={24} xl={6}>
        <Basket/>
      </Col>
      </Row>
    </Content>
    <Footer/>
</Layout>
);

export default App;
