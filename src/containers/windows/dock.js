import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Timer from './timer';

const StartButton = styled.div`
  font-family: Anonymous Pro,monospace;
  display: inline-block;
  font-size: 1.1em;
  font-weight: 700;
  padding: 10px 15px 10px 13px;
  color: #000;
  vertical-align: middle;
  -webkit-appearance: initial;
  border: none;
  padding-top: ${(props) => (props.active ? '12px ' : '10px')};
  padding-bottom: ${(props) => (props.active ? '8px ' : '10px')};
  background: ${(props) => (props.active ? '#e6e6e6' : '')};
  box-shadow: ${(props) => (props.active
    ? 'inset 2px 2px 0 #000, 1px 1px 0 #fff, inset -2px -2px 0 #ddd, inset 4px 4px 0 #888'
    : 'inset 3px 3px 0 hsla(0, 0%, 100%, 0.8), inset -3px -3px 0 rgba(0, 0, 0, 0.25), 2px 2px 0 #000;')}; 
`;

const ProgramButtonStyle = styled.div`
  font-family: Anonymous Pro,monospace;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 15px 10px 13px;
  color: #000;
  vertical-align: middle;
  -webkit-appearance: initial;
  margin-right:12px;
  border: none;
  padding-top: ${(props) => (props.active ? '12px ' : '10px')};
  padding-bottom: ${(props) => (props.active ? '8px ' : '10px')};
  background: ${(props) => (props.active ? '#e6e6e6' : '')};
  box-shadow: ${(props) => (props.active
    ? 'inset 2px 2px 0 #000, 1px 1px 0 #fff, inset -2px -2px 0 #ddd, inset 4px 4px 0 #888'
    : 'inset 3px 3px 0 hsla(0, 0%, 100%, 0.8), inset -3px -3px 0 rgba(0, 0, 0, 0.25), 2px 2px 0 #000;')};
`;

const DockBar = styled.section`
  display: block;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #bdbdbd;
  padding: 8px 0 0 8px;
  box-shadow: inset 0 4px 0 hsla(0, 0%, 100%, 0.8);
  z-index: 3;

  ${StartButton} {
    float: left;
    margin-bottom: 8px;
  }
`;

const ProgramList = styled.div`
  float: left;
  margin-left: 10px;
  padding-left: 10px;
  position: relative;

  &:before {
    position: absolute;
    top: 1px;
    left: 0;
    display: block;
    content: "";
    height: 99%;
    width: 1px;
    border-left: 2px solid hsla(0,0%,100%,.8);
    border-right: 2px solid rgba(0,0,0,.25);
    /* margin-bottom: 8px; */
  }
`;

const TimerContainer = styled.div`
  font-size: 18px;
  float: right;
  font-weight: 700;
  box-shadow: inset 3px 3px 0 rgba(0,0,0,.25), 2px 2px 0 hsla(0,0%,100%,.8);
  margin-top: -3px;
  margin-right: 5px;
  padding: 15px 20px 11px;
`;

function StartButtonWindow({ title }) {
  return (
    <StartButton
      role="button"
    >
      <span role="button">{title}</span>
    </StartButton>
  );
}

StartButtonWindow.propTypes = {
  title: PropTypes.string.isRequired,
};

function ProgramButton({ title, active = false, onClick }) {
  return (
    <ProgramButtonStyle
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      active={active}
      role="button"
    >
      <span role="button">{title}</span>
    </ProgramButtonStyle>
  );
}

ProgramButton.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function Dock({ activeProgram, dockPrograms, setActiveWindow }) {
  const toUpperCaseJustFirstLetter = (word) => word.slice(0, 1)
    .toUpperCase() + word.slice(1).toLowerCase();

  return (
    <DockBar>
      <StartButtonWindow title="Start" />
      <ProgramList>
        {
          dockPrograms.map((item) => (
            <ProgramButton
              key={item}
              active={activeProgram === item}
              title={toUpperCaseJustFirstLetter(item)}
              onClick={() => setActiveWindow(item)}
            />
          ))
        }
      </ProgramList>
      <TimerContainer>
        <Timer />
      </TimerContainer>
    </DockBar>
  );
}

Dock.propTypes = {
  activeProgram: PropTypes.string.isRequired,
  dockPrograms: PropTypes.arrayOf.isRequired,
  setActiveWindow: PropTypes.func.isRequired,
};
