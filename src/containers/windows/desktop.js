import React, { useState } from 'react';
import styled from 'styled-components';
import Dock from './dock';
import Icons from './icons';
import WindowsManager from './windowsManager';
import WindowsContext from './windowsContext';
import { TYPE_CONTACT_WINDOW, TYPE_ABOUT_WINDOW, TYPE_WORK_WINDOW } from './constants';
import ErrorScreen from './errorScreen';

const DesktopWindow = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: #367e7f;
`;

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState([
    // TYPE_CONTACT_WINDOW,
    TYPE_ABOUT_WINDOW,
    // TYPE_WORK_WINDOW,
  ]);

  const [dockPrograms, setDockPrograms] = useState(openWindows);
  // static, Update as the first opened window changes.
  const [activeProgram, setActiveProgram] = useState(TYPE_ABOUT_WINDOW);

  const [showError, setError] = useState(false);

  const removeFromDockPrograms = (window) => {
    const programsCopy = dockPrograms.slice(0);
    const indexOfPrograms = programsCopy.indexOf(window);
    programsCopy.splice(indexOfPrograms, 1);
    setDockPrograms(programsCopy);
  };

  const addToDockPrograms = (window) => {
    const programsCopy = dockPrograms.slice(0);
    programsCopy.push(window);
    setDockPrograms(programsCopy);
  };

  const removeFromOpenWindows = (window) => {
    const newOpenWindows = openWindows.slice(0);
    const indexOfWindow = newOpenWindows.indexOf(window);
    newOpenWindows.splice(indexOfWindow, 1);
    setOpenWindows(newOpenWindows);
    removeFromDockPrograms(window);
  };

  const setActiveWindow = (window) => {
    const newOpenWindows = openWindows.slice(0);
    const indexOfWindow = newOpenWindows.indexOf(window);
    newOpenWindows.splice(indexOfWindow, 1);
    // newOpenWindows.splice(0, 0, window);
    newOpenWindows.push(window);
    setOpenWindows(newOpenWindows);
    setActiveProgram(window);
  };

  const addToOpenWindows = (window) => {
    const newOpenWindows = openWindows.slice(0);
    // newOpenWindows.splice(0, 0, window);
    const indexOfWindow = newOpenWindows.indexOf(window);
    if (indexOfWindow !== -1) {
      setActiveWindow(window);
      return;
    }
    newOpenWindows.push(window);
    setOpenWindows(newOpenWindows);
    addToDockPrograms(window);
  };

  const state = {
    openWindows,
    addToOpenWindows,
    setActiveWindow,
    removeFromOpenWindows,
  };

  // let errorScreen = null;

  // if (showError) {
  //   errorScreen = <ErrorScreen setError={setError} />;
  // }

  if (showError) {
    return (
      <DesktopWindow>
        <ErrorScreen setError={setError} />
      </DesktopWindow>
    );
  }

  return (
    <WindowsContext.Provider value={state}>
      <DesktopWindow>
        <Icons />
        <WindowsManager openWindows={openWindows} />
        <Dock
          setError={setError}
          activeProgram={activeProgram}
          dockPrograms={dockPrograms}
          setActiveWindow={setActiveWindow}
        />
      </DesktopWindow>
    </WindowsContext.Provider>
  );
}
