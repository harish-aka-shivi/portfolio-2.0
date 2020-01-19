import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StartButtonContainer = styled.div`
  position:relative;
`;

const StartButton = styled.div`
  font-family: Anonymous Pro,monospace;
  display: inline-block;
  font-size: 1.1em;
  font-weight: 700;
  color: #000;
  padding: 10px 15px 10px 13px;
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


const DropDownContent = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
`;

function Dropdown({ title }) {
  return (
    <StartButtonContainer>
      <StartButton>
        <span role="button">{title}</span>
      </StartButton>
      <DropDownContent open>
        Demo
      </DropDownContent>
    </StartButtonContainer>
  );
}

Dropdown.defaultProps = {
  title: '',
};

Dropdown.propTypes = {
  title: PropTypes.string,
};

export default Dropdown;
