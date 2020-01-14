import React from 'react';
import PropTypes from 'prop-types';
import DraggableWindow from './draggableWindow';
import Window from './window';
import WindowContext from './windowsContext';
import { TYPE_WORK_WINDOW } from './constants';
import ContactBody from './contactBody';
import work from './icons/work.svg';

export default function WorkWindow({
  controlledPosition,
  setControlledPosition,
}) {
  return (
    <WindowContext.Consumer>
      {({ removeFromOpenWindows, setActiveWindow }) => (
        <DraggableWindow
          controlledPosition={controlledPosition}
          setControlledPosition={setControlledPosition}
          handleOnMouseDown={() => setActiveWindow(TYPE_WORK_WINDOW)}
        >
          <Window>
            <Window.Toolbar
              icon={work}
              onClose={() => removeFromOpenWindows(TYPE_WORK_WINDOW)}
            >
              <> Work </>
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

WorkWindow.propTypes = {
  controlledPosition: PropTypes.exact({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  setControlledPosition: PropTypes.func.isRequired,
};
