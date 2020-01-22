import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import account from './icons/account.svg';
import work from './icons/work.svg';
import mail from './icons/mail.svg';
import WindowsContext from './windowsContext';
import { TYPE_ABOUT_WINDOW, TYPE_CONTACT_WINDOW, TYPE_WORK_WINDOW } from './constants';

const IconsContainer = styled.div`
  position: absolute;
  top: 38px;
  left: 45px;
`;

const IconButton = styled.button`
  text-decoration: none;
  text-align: center;
  display: block;
  margin-bottom: 50px;
  background-color: transparent;
  color: white;
  border: none;
  font-size:1em;
  letter-spacing:1px;
  text-shadow: 1px 2px 0 rgba(0, 0, 0, 0.5);
  cursor: pointer;
  outline-color: orange;
`;

const IconImage = styled.img`
  width: 10vh;
  height:10vh;
  display: block;
  margin-bottom: 12px;
`;

function Icon({ title, image, onButtonClick }) {
  return (
    <IconButton
      onClick={() => {
        if (onButtonClick) {
          onButtonClick();
        }
      }}
      type="button"
    >
      <IconImage src={image} alt={title} />
      {title}
    </IconButton>
  );
}

export default function Icons() {
  return (
    <WindowsContext.Consumer>
      {({ addToOpenWindows }) => (
        <IconsContainer>
          <Icon title="About" image={account} onButtonClick={() => addToOpenWindows(TYPE_ABOUT_WINDOW)} />
          <Icon title="Work" image={work} onButtonClick={() => addToOpenWindows(TYPE_WORK_WINDOW)} />
          <Icon title="Contact" image={mail} onButtonClick={() => addToOpenWindows(TYPE_CONTACT_WINDOW)} />
        </IconsContainer>
      )}
    </WindowsContext.Consumer>
  );
}

Icon.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
