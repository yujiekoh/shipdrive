import React from 'react';
import { Button } from "antd";
import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
      <Button type="primary" onClick={() => loginWithRedirect({
            screen_hint: "signup",
          })
        }
      >
        Sign Up
      </Button>
    );
}

export default SignupButton
