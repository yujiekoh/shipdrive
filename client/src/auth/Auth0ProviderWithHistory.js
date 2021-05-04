import React from 'react';
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  // domain and clientId are necessary for the Auth0 React SDK to connect with the correct Auth0 application to process authentication
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
//   const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  const history = useHistory(); // Enables us to redirect a user to a specific URL

  // If there is a returnTo URL, history.push() takes users back to the route they intended to access before authentication, otherwise it would send them to the root of the application.
  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin} // redirectUri is the root of where the application is hosted
      onRedirectCallback={onRedirectCallback}
      // Now that we're specifying an audience, Auth0 will send the access token in the format of a JWT.
      // Before this, the access token was not in the format of a JWT.
    //   audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory
