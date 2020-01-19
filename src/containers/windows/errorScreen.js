import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContactWindow from './contactWindow';
import AboutWindow from './aboutWindow';
import { TYPE_CONTACT_WINDOW, TYPE_ABOUT_WINDOW, TYPE_WORK_WINDOW } from './constants';
import WorkWindow from './workWindow';

const WindowsContainer = styled.div`
  height: 100vh;
  width: 100vw;
  /* position:absolute;
  top:0;
  left:0; */
`;

const initialState = {
  windows: [],
  pos: { x: 100, y: 100 },
};

function reducer(state, action) {
  const { windows, pos } = state;
  if (action.type === 'increment') {
    if (windows.length < 4) {
      return { pos: { x: pos.x + 10, y: pos.y + 10 }, windows };
    }
    return { pos, windows };
  } else if (action.type === 'windows') {
    const newWindows = windows.concat({ x: pos.x, y: pos.y });
    return { windows: newWindows, pos };
  }
  return initialState;
}

function ErrorScreen() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { windows, pos } = state;
  // const [windows, setWindows] = useState([]);
  // const [x, setX] = useState(100);
  // const [y, setY] = useState(100);

  // const [pos, setPos] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const intervalId = setInterval((() => {
      dispatch({ type: 'increment' });
      // console.log(x, y, windows.length);
      // const newWindows = windows.concat({ x: x + 10, y: y + 10 });
      // console.log(windows, newWindows);
      // setWindows(newWindows);
      // setX(x + 10);
      // setY(y + 10);
      // setPos((posCallback) => ({ x: posCallback.x + 10, y: posCallback.y + 10 }));
    }), 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    dispatch({ type: 'windows' });
    // const newWindows = windows.concat({ x: pos.x, y: pos.y });
    // console.log(windows, newWindows, pos);
    // setWindows(newWindows);
  }, [pos]);

  // const [contactPosition, setContactPosition] = useState({ x: windowWidth / 5, y: 100 });
  // const [aboutPosition, setAboutPosition] = useState({ x: windowWidth / 2, y: 100 });
  // const [workPosition, setWorkPosition] = useState({ x: windowWidth / 3, y: windowHeight / 4 });

  return (
    <WindowsContainer>
      {windows.map((window, index) => (
        <ContactWindow
          controlledPosition={window}
          // setControlledPosition={window}
          key={index}
        />
      ))}
    </WindowsContainer>
  );
}

ErrorScreen.propTypes = {
  // openWindows: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.string))
  //   .isRequired,
};

export default ErrorScreen;
