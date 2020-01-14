import React from 'react';
import PropTypes from 'prop-types';
import DraggableWindow from './draggableWindow';
import Window from './window';
import WindowsContext from './windowsContext';
import { TYPE_ABOUT_WINDOW } from './constants';
import AboutBody from './aboutBody';
import account from './icons/account.svg';

export default function AboutWindow({
  controlledPosition,
  setControlledPosition,
}) {
  return (
    <WindowsContext.Consumer>
      {({ removeFromOpenWindows, setActiveWindow }) => (
        <DraggableWindow
          controlledPosition={controlledPosition}
          setControlledPosition={setControlledPosition}
          handleOnMouseDown={() => setActiveWindow(TYPE_ABOUT_WINDOW)}
        >
          <Window>
            <Window.Toolbar
              icon={account}
              onClose={() => removeFromOpenWindows(TYPE_ABOUT_WINDOW)}
            >
              <> About </>
            </Window.Toolbar>
            <Window.Content>
              <AboutBody />
            </Window.Content>
          </Window>
        </DraggableWindow>
      )}
    </WindowsContext.Consumer>
  );
}

AboutWindow.propTypes = {
  controlledPosition: PropTypes.exact({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  setControlledPosition: PropTypes.func.isRequired,
};
