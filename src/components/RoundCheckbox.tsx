import { Checkbox } from "antd";
import styled from "styled-components";

const RoundCheckbox = styled(Checkbox)`
border-radius: 45px;

& > span > span.ant-checkbox-inner {
  border-radius: 45px !important;
  background-color: #ffffff;
  border-color: #dfdee2 !important;
  width: 22px;
  height: 22px;
}
& > span.ant-checkbox-checked > span.ant-checkbox-inner {
  border-color: #1ea4ce !important;
}
& > span > span.ant-checkbox-inner::after {
  border-color: #1ea4ce !important;
  left: 6px;
}
`;

export default RoundCheckbox;
