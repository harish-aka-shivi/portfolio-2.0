import React, { useState } from "react";
import styled from "styled-components";
import Dock from "./dock";
import Icons from "./icons";
import WindowsManager from "./windowsManager";
import WindowsContext from "./windowsContext";
import { TYPE_CONTACT_WINDOW, TYPE_ABOUT_WINDOW } from "./constants";

const DesktopWindow = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: #367e7f;
`;

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState([
    TYPE_CONTACT_WINDOW,
    TYPE_ABOUT_WINDOW
  ]);

  const addToOpenWindow = window => {
    const newOpenWindows = openWindows.slice(0);
    newOpenWindows.splice(0, 0, window);
    setOpenWindows(newOpenWindows);
  };

  const removeFromOpenWindows = window => {
    const newOpenWindows = openWindows.slice(0);
    const indexOfWindow = newOpenWindows.indexOf(window);
    newOpenWindows.splice(indexOfWindow, 1);
    setOpenWindows(newOpenWindows);
  };

  const setActiveWindow = window => {
    const newOpenWindows = openWindows.slice(0);
    const indexOfWindow = newOpenWindows.indexOf(window);
    newOpenWindows.splice(indexOfWindow, 1);
    newOpenWindows(0, 0, window);
    setOpenWindows(newOpenWindows);
  };

  const state = {
    openWindows,
    addToOpenWindow,
    setActiveWindow,
    removeFromOpenWindows
  };

  return (
    <WindowsContext.Provider value={state}>
      <DesktopWindow>
        <Icons />
        <WindowsManager openWindows={openWindows} />
        <Dock />
      </DesktopWindow>
    </WindowsContext.Provider>
  );
}
