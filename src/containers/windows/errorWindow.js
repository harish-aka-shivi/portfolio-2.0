import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DraggableWindow from './draggableWindow';
import Window from './window';
import alert from './icons/alert.svg';
import WindowsContext from './windowsContext';

const ErrorBodyRoot = styled.div`
  background-color: #bdbdbd;
  margin: -20px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

const OkButton = styled.button`
  box-shadow: inset -2px -2px 0 rgba(0,0,0,.25), inset 2px 2px 0 hsla(0,0%,100%,.8);
  cursor: pointer;
  user-select: none;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: 600;
  font-size: 1.5em;
  margin-bottom: 12px;
`;

const ErrorTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom:12px;
`;

const AlertIcon = styled.img`
  height:20px;
  width:20px;
  margin-right: 12px;
`;

const ErrorText = styled.p`
  display: flex;
  font-size: 1.5em;
  font-weight: 600;
`;


function ErrorBody() {
  return (
    <ErrorBodyRoot>
      <ErrorTextContainer>
        <AlertIcon alt="Alert Icon" src={alert} />
        <ErrorText>Error</ErrorText>
      </ErrorTextContainer>
      <OkButton>Ok</OkButton>
    </ErrorBodyRoot>
  );
}

function ErrorWindow({ controlledPosition }) {
  return (
    <WindowsContext.Consumer>
      {() => (
        <DraggableWindow
          controlledPosition={controlledPosition}
        >
          <Window>
            <Window.Toolbar
              icon={alert}
            >
              <> Error </>
            </Window.Toolbar>
            <Window.Content>
              <ErrorBody />
            </Window.Content>
          </Window>
        </DraggableWindow>
      )}
    </WindowsContext.Consumer>
  );
}

ErrorWindow.propTypes = {
  controlledPosition: PropTypes.exact({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default ErrorWindow;
