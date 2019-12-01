import React from "react";
import DraggableWindow from "./draggableWindow";
import Window from "./window";
import WindowContext from "./windowsContext";
import { TYPE_CONTACT_WINDOW } from "./constants";

export default function ContactWindow({
  controlledPosition,
  setControlledPosition
}) {
  return (
    <WindowContext.Consumer>
      {({ removeFromOpenWindows }) => (
        <DraggableWindow
          controlledPosition={controlledPosition}
          setControlledPosition={setControlledPosition}
        >
          <Window>
            <Window.Toolbar
              onClose={() => removeFromOpenWindows(TYPE_CONTACT_WINDOW)}
            >
              <> Contact </>
            </Window.Toolbar>
            <Window.Content>
              <p>Hey, Please contact me on these links:</p>
            </Window.Content>
          </Window>
        </DraggableWindow>
      )}
    </WindowContext.Consumer>
  );
}
