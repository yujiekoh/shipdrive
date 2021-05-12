import React from 'react';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import SignupButton from "./SignupButton";

import { useAuth0 } from "@auth0/auth0-react";

const AuthButton = () => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? <LogoutButton /> : <div><SignupButton /> <LoginButton /></div>;
}

export default AuthButton
