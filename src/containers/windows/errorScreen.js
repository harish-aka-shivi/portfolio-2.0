import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContactWindow from './contactWindow';

const WindowsContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const initialState = {
  windows: [],
  pos: { x: 10, y: 10 },
  aboutPos: { x: window.screen.width, y: 0 },
  done: false,
  aboutWindows: [],
  yIncrement: 30,
};

function reducer(state, action) {
  const {
    windows,
    pos,
    done,
    aboutPos,
    aboutWindows,
    yIncrement,
  } = state;
  if (action.type === 'increment') {
    if (windows.length < 50) {
      let yIncrementTemp = yIncrement;
      if (pos.y >= window.screen.height / 2 && Math.sign(yIncrement) === 1) {
        yIncrementTemp = -1 * yIncrement;
      } else if (pos.y < 0 && Math.sign(yIncrement) === -1) {
        yIncrementTemp = Math.abs(yIncrement);
      }
      return {
        pos: { x: pos.x + 15, y: pos.y + yIncrement },
        windows,
        done,
        aboutWindows,
        aboutPos,
        yIncrement: yIncrementTemp,
      };
    }
    return {
      pos, windows, done: true, aboutPos, aboutWindows, yIncrement,
    };
  }
  if (action.type === 'windows') {
    const newWindows = windows.concat({ x: pos.x, y: pos.y });
    const newAboutWindows = aboutWindows.concat({ x: aboutPos.x, y: aboutPos.y });
    return {
      windows: newWindows, pos, done, aboutWindows: newAboutWindows, aboutPos, yIncrement,
    };
  }
  return initialState;
}

function ErrorScreen({ setError }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    windows, pos, done,
  } = state;

  if (done) {
    setError(false);
  }

  useEffect(() => {
    const intervalId = setInterval((() => {
      dispatch({ type: 'increment' });
    }), 20);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    dispatch({ type: 'windows' });
  }, [pos]);
  return (
    <WindowsContainer>
      {windows.map((window, index) => (
        <div>
          <ContactWindow
            controlledPosition={window}
            // eslint-disable-next-line react/no-array-index-key
            key={`${window.x}${window.y}${index}`}
          />
        </div>
      ))}
    </WindowsContainer>
  );
}

ErrorScreen.propTypes = {
  setError: PropTypes.func.isRequired,
};

export default ErrorScreen;
