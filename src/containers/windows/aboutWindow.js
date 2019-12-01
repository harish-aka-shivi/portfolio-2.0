import React from "react";
import DraggableWindow from "./draggableWindow";
import Window from "./window";

export default function AboutWindow({
  controlledPosition,
  setControlledPosition
}) {
  return (
    <DraggableWindow
      controlledPosition={controlledPosition}
      setControlledPosition={setControlledPosition}
    >
      <Window>
        <Window.Toolbar>
          <> About </>
        </Window.Toolbar>
        <Window.Content>
          <p>This is about</p>
        </Window.Content>
      </Window>
    </DraggableWindow>
  );
}
