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
  padding: 8px 15px 8px 13px;
  vertical-align: middle;
  -webkit-appearance: initial;
  border: none;
  cursor: pointer;
  user-select:none;
  background: ${(props) => (props.active ? '#e6e6e6' : '')};
  box-shadow: ${(props) => (props.active
    ? 'inset 2px 2px 0 #000, 1px 1px 0 #fff, inset -2px -2px 0 #ddd, inset 4px 4px 0 #888'
    : 'inset 3px 3px 0 hsla(0, 0%, 100%, 0.8), inset -3px -3px 0 rgba(0, 0, 0, 0.25), 2px 2px 0 #000;')}; 
`;


const DropDownContentInternal = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;
  min-width: 160px;
  padding: 12px 16px;
  z-index: 1;
  background: #bdbdbd;
  bottom:45px;
  padding-top: 12px; 
  left: 0px;
  padding-bottom: 12px;
  box-shadow: ${(props) => (props.active
    ? 'inset 2px 2px 0 #000, 1px 1px 0 #fff, inset -2px -2px 0 #ddd, inset 4px 4px 0 #888'
    : 'inset 3px 3px 0 hsla(0, 0%, 100%, 0.8), inset -3px -3px 0 rgba(0, 0, 0, 0.25), 2px 2px 0 #000;')}; 
`;

const ProgramButtonIcon = styled.img`
  height:12px;
  width:12px;
  margin-right:10px;
`;

const DropdownContext = React.createContext();


function DropDownContent({ children }) {
  return (
    <DropdownContext.Consumer>
      {({ active }) => (
        <DropDownContentInternal open={active}>
          {children}
        </DropDownContentInternal>
      )}
    </DropdownContext.Consumer>
  );
}

function Dropdown({ title, children, icon }) {
  const [active, setActive] = React.useState(false);
  const onClick = () => {
    setActive(!active);
  };
  return (
    <StartButtonContainer>
      <DropdownContext.Provider value={{ active, setActive }}>
        <StartButton onClick={onClick} active={active}>
          { icon && <ProgramButtonIcon src={icon} />}
          <span role="button">{title}</span>
        </StartButton>
        {children}
      </DropdownContext.Provider>
    </StartButtonContainer>
  );
}

Dropdown.defaultProps = {
  title: '',
  children: [],
  icon: '',
};

Dropdown.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
  icon: PropTypes.string,
};

DropDownContent.defaultProps = {
  children: null,
};

DropDownContent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

Dropdown.DropDownContent = DropDownContent;
export default Dropdown;
