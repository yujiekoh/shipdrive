import logo from './logo.svg';
import './App.css';

import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import Projects from "./views/Projects";
import Tickets from "./views/Tickets";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        {/* Change the below 3 routes to <ProtectedRoute /> */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/projects" component={Projects} />
        <Route path="/tickets" component={Tickets} />
        {/* <Route path="/profile" component={Profile} /> */}
      </Switch>
    </div>
  );
}

export default App;
