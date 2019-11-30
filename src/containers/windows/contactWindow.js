import React from "react";
import DraggableWindow from "./draggableWindow";
import Window from "./window";

export default function ContactWindow() {
  return (
    <DraggableWindow>
      <Window>
        <Window.Toolbar>
          <> Contact </>
        </Window.Toolbar>
        <Window.Content>
          <p>Hey, Please contact me on these links:</p>
        </Window.Content>
      </Window>
    </DraggableWindow>
  );
}
