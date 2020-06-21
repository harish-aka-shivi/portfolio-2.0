import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Desktop from './containers/windows/desktop';
import ResumeRedirect from './pages/resume';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/resume">
        <ResumeRedirect />
      </Route>
      <Route path="/">
        <Desktop />
      </Route>
    </Switch>
  </Router>
);

function App() {
  return (
    <main>
      <AppRouter />
    </main>
  );
}

export default App;
