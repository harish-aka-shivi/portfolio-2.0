import React from "react";
import styled from "styled-components";

const WindowRoot = styled.section`
  width: 400px;
  cursor: default;
  padding-bottom: 9px;
  background: #bdbdbd;
  display: inline-block;
  box-shadow: -3px -3px 0 #f2f2f2, inset -3px -3px 0 rgba(0, 0, 0, 0.25);
  transform: translate(198.882px, 51.4572px);
`;

const Toolbar = styled.div`
  padding: 5px 7px 7px;
  position: relative;
  top: 2px;
  left: 3px;
  height: 30px;
  width: calc(100% - 26px);
  vertical-align: middle;
  background: linear-gradient(90deg, #de241e 0, #fff200);
`;

const ToolbarTitle = styled.div`
  float: left;
  /* position:relative; */
  color: #fff;
  font-size: 16px;
  margin-top: 2px;
  min-width: 160px;
  vertical-align: middle;
`;

const Content = styled.div`
  margin-top: 7px;
  width: calc(100% - 30px);
  /* position:relative; */
  /* width:100%;  */
  padding: 10px;
  min-height: 200px;
  margin-left: 3px;
  background: #fff;
  box-shadow: 3px 3px 0 hsla(0, 0%, 100%, 0.6), inset 3px 3px rgba(0, 0, 0, 0.5);
`;

export default function Window() {
  return (
    <WindowRoot>
      <Toolbar>
        <ToolbarTitle>Contact</ToolbarTitle>
      </Toolbar>
      <Content>
        <p>Hey, Please contact me on these links:</p>
      </Content>
    </WindowRoot>
  );
}
