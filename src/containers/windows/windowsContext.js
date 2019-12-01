import React from 'react';

const WindowsContext = React.createContext({
  openWindows: [],
  setActiveWindow: () => {},
  removeFromOpenWindows: () => {},
  addToOpenWindows: () => {},
});

export default WindowsContext;
