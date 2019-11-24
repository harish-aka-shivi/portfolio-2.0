import React from "react";
import styled from "styled-components";

const DockBar = styled.section`
  display: block;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #bdbdbd;
  padding: 8px 0 0 8px;
  box-shadow: inset 0 4px 0 hsla(0, 0%, 100%, 0.8);
  z-index: 3;
`;

// const StartButton = styled.button.a`
// `;

export default function Dock() {
  return <DockBar />;
}
