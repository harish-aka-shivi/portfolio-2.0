/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

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
  const disabled = window.screen.width < 700;
  // console.log('disable ==>', disabled, window.screen.width);
  const actualControlledPosition = disabled ? { x: 0, y: 0 } : controlledPosition;

  return (
    <Draggable
      axis="both"
      handle=".handle"
      // defaultPosition={{ x, y }}
      position={actualControlledPosition}
      // grid={[25, 25]}
      scale={1}
      disabled={disabled}
      // onStart={handleStart}
      onMouseDown={internalHandleOnMouseDown}
      onDrag={handleDrag}
      // onStop={this.handleStop}
    >
      <div style={{ position: 'absolute' }}>{children}</div>
    </Draggable>
  );
}

DraggableWindow.propTypes = {
  children: PropTypes.arrayOf.isRequired,
  controlledPosition: PropTypes.objectOf.isRequired,
  setControlledPosition: PropTypes.func.isRequired,
  handleOnMouseDown: PropTypes.func.isRequired,
};

export default DraggableWindow;
