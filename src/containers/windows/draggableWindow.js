/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Draggable from "react-draggable";
import PropTypes from "prop-types";

function DraggableWindow({ children }) {
  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{ x: 200, y: 200 }}
      // position={null}
      // grid={[25, 25]}
      scale={1}
      // onStart={this.handleStart}
      // onDrag={this.handleDrag}
      // onStop={this.handleStop}
    >
      <div>{children}</div>
    </Draggable>
  );
}

DraggableWindow.propTypes = {
  children: PropTypes.element.isRequired
};

export default DraggableWindow;
