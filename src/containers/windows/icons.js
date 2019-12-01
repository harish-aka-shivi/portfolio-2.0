import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import account from './icons/account.png';
import work from './icons/work.png';
import mail from './icons/mail.png';
import WindowsContext from './windowsContext';
import { TYPE_ABOUT_WINDOW, TYPE_CONTACT_WINDOW } from './constants';

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
  text-shadow: 1px 2px 0 rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const IconImage = styled.img`
  width: 60px;
  display: block;
  margin-bottom: 15px;
`;

// <a target="_blank" href="/icons/set/windows-live-mail">Windows Live Mail icon</a> by <a target="_blank" href="https://icons8.com">Icons8</a>

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
          <Icon title="Work" image={work} />
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
