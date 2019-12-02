import React from 'react';
import PropTypes from 'prop-types';
import DraggableWindow from './draggableWindow';
import Window from './window';
import WindowContext from './windowsContext';
import { TYPE_CONTACT_WINDOW } from './constants';
import ContactBody from './contactBody';

export default function ContactWindow({
  controlledPosition,
  setControlledPosition,
}) {
  return (
    <WindowContext.Consumer>
      {({ removeFromOpenWindows, setActiveWindow }) => (
        <DraggableWindow
          controlledPosition={controlledPosition}
          setControlledPosition={setControlledPosition}
          handleOnMouseDown={() => setActiveWindow(TYPE_CONTACT_WINDOW)}
        >
          <Window>
            <Window.Toolbar
              onClose={() => removeFromOpenWindows(TYPE_CONTACT_WINDOW)}
            >
              <> Contact </>
            </Window.Toolbar>
            <Window.Content>
              <p>Hey, Please contact me on these links:</p>
              <ContactBody />
            </Window.Content>
          </Window>
        </DraggableWindow>
      )}
    </WindowContext.Consumer>
  );
}

ContactWindow.propTypes = {
  controlledPosition: PropTypes.objectOf.isRequired,
  setControlledPosition: PropTypes.func.isRequired,
};
