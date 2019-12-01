import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContactWindow from './contactWindow';
import AboutWindow from './aboutWindow';
import { TYPE_CONTACT_WINDOW, TYPE_ABOUT_WINDOW } from './constants';

const WindowsContainer = styled.div`
  height: 100vh;
  width: 100vw;
  /* position:absolute;
  top:0;
  left:0; */
`;

function WindowsManager({ openWindows }) {
  const [contactPosition, setContactPosition] = useState({ x: 100, y: 100 });
  const [aboutPosition, setAboutPosition] = useState({ x: 100, y: 100 });

  return (
    <WindowsContainer>
      {openWindows.map((window) => {
        if (window === TYPE_CONTACT_WINDOW) {
          return (
            <ContactWindow
              controlledPosition={contactPosition}
              setControlledPosition={setContactPosition}
              key={TYPE_CONTACT_WINDOW}
            />
          );
        }
        if (window === TYPE_ABOUT_WINDOW) {
          return (
            <AboutWindow
              controlledPosition={aboutPosition}
              setControlledPosition={setAboutPosition}
              key={TYPE_ABOUT_WINDOW}
            />
          );
        }
        return null;
      })}
    </WindowsContainer>
  );
}

WindowsManager.propTypes = {
  openWindows: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.string))
    .isRequired,
};

export default WindowsManager;
