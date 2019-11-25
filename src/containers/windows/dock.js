import React from "react";
import styled from "styled-components";

const StartButton = styled.div`
  font-family: Anonymous Pro, monospace;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 15px 10px 13px;
  box-shadow: inset 3px 3px 0 hsla(0, 0%, 100%, 0.8),
    inset -3px -3px 0 rgba(0, 0, 0, 0.25), 2px 2px 0 #000;
  color: #000;
  vertical-align: middle;
  -webkit-appearance: initial;
  border: none;
`;

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

  ${StartButton} {
    float: left;
    margin-bottom: 8px;
  }
`;

// const StartButton = styled.button.a`
// `;

export default function Dock() {
  return (
    <DockBar>
      <StartButton role="button">
        <span role="button">Start</span>
      </StartButton>
    </DockBar>
  );
}
