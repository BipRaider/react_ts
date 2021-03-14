import React from 'react';

import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import AboutPage from './views/AboutPage';
import TodoPage from './views/TodoPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Navbar />
      </header>
      <main className="App-main">
        <Switch>
          <Route component={TodoPage} path="/" exact />
          <Route component={AboutPage} path="/about" exact />
          <Redirect to="/" />
        </Switch>
      </main>

      <footer className="App-footer"></footer>
    </BrowserRouter>
  );
};

export default App;
