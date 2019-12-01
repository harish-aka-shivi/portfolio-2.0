/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import PropTypes from "prop-types";

function DraggableWindow({
  children,
  controlledPosition,
  setControlledPosition
}) {
  const [x, setX] = useState(100);
  const [y, setY] = useState(100);

  const handleStart = event => {
    console.log(event);
  };

  useEffect(() => {
    console.log("use effect of draggable window is called");
  }, []);

  const handleDrag = ({ clientX, offsetX, clientY, offsetY }, position) => {
    console.log(
      "in drag  => ",
      clientY,
      clientX,
      offsetY,
      offsetX,
      x,
      y,
      position.x,
      position.y
    );
    setControlledPosition({ x: position.x, y: position.y });
    // const trueValueX = clientX - offsetX;
    // const trueValueY = clientY - offsetY;
    // setX(trueValueX);
    // setY(trueValueY);
  };

  console.log("x ==>", x, "y ===> ", y);

  // useEffect(() => {

  // }, []);

  return (
    <Draggable
      axis="both"
      handle=".handle"
      // defaultPosition={{ x, y }}
      position={controlledPosition}
      // grid={[25, 25]}
      scale={1}
      onStart={handleStart}
      // onMouseDown
      onDrag={handleDrag}
      // onStop={this.handleStop}
    >
      <div style={{ position: "absolute" }}>{children}</div>
    </Draggable>
  );
}

DraggableWindow.propTypes = {
  children: PropTypes.element.isRequired
};

export default DraggableWindow;
