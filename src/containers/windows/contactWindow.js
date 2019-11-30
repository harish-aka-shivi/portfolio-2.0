import React from "react";
import Window from "../../components/window";

export default function ContactWindow() {
  return (
    <Window>
      <Window.Toolbar>
        <> Contact </>
      </Window.Toolbar>
      <Window.Content>
        <p>Hey, Please contact me on these links:</p>
      </Window.Content>
    </Window>
  );
}
