/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  @media (max-width: 768px) {
    transform: none !important;
  }
`;

function DraggableWindow({
  children,
  controlledPosition,
  setControlledPosition,
  handleOnMouseDown,
}) {
  const handleDrag = (event, position) => {
    setControlledPosition({ x: position.x, y: position.y });
  };

  const internalHandleOnMouseDown = () => {
    if (handleOnMouseDown) {
      handleOnMouseDown();
    }
  };

  // eslint-disable-next-line no-undef
  // const disabled = window.screen.width < 700;
  // console.log('disable ==>', disabled, window.screen.width);
  // const actualControlledPosition = disabled ? { x: 0, y: 0 } : controlledPosition;

  return (
    <Draggable
      axis="both"
      handle=".handle"
      // defaultPosition={{ x, y }}
      position={controlledPosition}
      // grid={[25, 25]}
      scale={1}
      // disabled={disabled}
      // onStart={handleStart}
      onMouseDown={internalHandleOnMouseDown}
      onDrag={handleDrag}
      // onStop={this.handleStop}
    >
      <Div style={{ position: 'fixed' }}>{children}</Div>
    </Draggable>
  );
}

DraggableWindow.defaultProps = {
  // children: null,
};

DraggableWindow.propTypes = {
  children: PropTypes.node.isRequired,
  controlledPosition: PropTypes.exact({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  setControlledPosition: PropTypes.func.isRequired,
  handleOnMouseDown: PropTypes.func.isRequired,
};

export default DraggableWindow;
