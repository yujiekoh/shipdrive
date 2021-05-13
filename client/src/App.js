import logo from './logo.svg';
import './App.css';

import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import Projects from "./views/Projects";
import Tickets from "./views/Tickets";
import Profile from "./views/Profile";
import Loading from "./components/Loading";
import ProtectedRoute from "./auth/ProtectedRoute";
import ProjectDetails from './views/ProjectDetails';
import TicketDetails from "./views/TicketDetails";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/projects/:projectId" component={ProjectDetails} />
        <ProtectedRoute path="/projects" exact component={Projects} />
        <ProtectedRoute path="/tickets/:ticketId" component={TicketDetails} />
        <ProtectedRoute path="/tickets" component={Tickets} />
        <ProtectedRoute path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
