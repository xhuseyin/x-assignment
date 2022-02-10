import './App.css';
import Layout from "./components/Layout";
import Header from './containers/Header';
import Content from './components/Content';
import { Row, Col } from "antd";

const App = () => (
<Layout>
<Header/>
<Content>
      <Row>
      <Col span={6} style={{backgroundColor:'red'}}>col-8</Col>
      <Col span={12} style={{backgroundColor:'blue'}}>col-8</Col>
      <Col span={6} style={{backgroundColor:'green'}}>col-8</Col>
      </Row>
    </Content>
</Layout>
);

export default App;
