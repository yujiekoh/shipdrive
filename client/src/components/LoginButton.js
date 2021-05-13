import React from 'react';
import { Button } from "antd";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    let redirectUri = "";

    if (process.env.NODE_ENV === "production") {
      redirectUri = "https://shipdrive.herokuapp.com/dashboard";
    } else {
      redirectUri = "http://localhost:3000/dashboard";
    }

    return (
      <Button type="primary" onClick={() => loginWithRedirect({
          redirectUri: redirectUri
      })}>
        Login
      </Button>
    );
}

export default LoginButton
