import React from 'react';
import logo from './logo.svg';
import {Counter} from './features/counter/Counter';
import './App.css';

import {BrowserRouter as Router, Redirect, Route, Switch, useLocation} from "react-router-dom";
import {NavTab} from "./features/navigation/NavTab";
import {Echo} from "./features/echo/Echo";
import {Login} from "./features/login/Login";

const Home: React.FC = () => {
    return <h2>Home</h2>;
}

const About: React.FC = () => {
    return <h2>About</h2>;
}

const CounterPage: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <span>
          <span>Learn </span>
          <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
            </header>
        </div>
    );
}

const NoMatch: React.FC = () => {
    let location = useLocation();

    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}

const App: React.FC = () =>  {
    return (
        <Router>
            <div>
                <NavTab />

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/counter">
                        <CounterPage />
                    </Route>
                    <Redirect to="/counter" path="/redirect" />
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/echo/:message">
                        <Echo />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
