import React from 'react';
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Spin } from "antd";

const ProtectedRoute = ({ component, ...args }) => {
  return (
    <Route
      component={withAuthenticationRequired(component, {
        onRedirecting: () => <Spin className="loading" size="large" />,
      })}
      {...args}
    />
  );
};

export default ProtectedRoute
