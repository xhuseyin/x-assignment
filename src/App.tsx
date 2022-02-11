import './App.css';
import Layout from "./components/Layout";
import Header from './containers/Header';
import Content from './components/Content';
import { Row, Col } from "antd";
import SortingSection from './containers/SortingSection';
import BrandSection from './containers/BrandSection';

const App = () => (
<Layout>
<Header/>
<Content>
      <Row>
      <Col span={6}>
          <SortingSection/>
          <BrandSection/>
      </Col>
      <Col span={12} style={{border:'solid 1px blue'}}></Col>
      <Col span={6} style={{border:'solid 1px green'}}></Col>
      </Row>
    </Content>
</Layout>
);

export default App;
