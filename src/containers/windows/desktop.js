import React from "react";
import styled from "styled-components";
import Dock from "./dock";
import Icons from "./icons";
import Window from "./window";

const DesktopWindow = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: #367e7f;
`;

export default function Desktop() {
  return (
    <DesktopWindow>
      <Icons />
      <Window />
      <Dock />
    </DesktopWindow>
  );
}
