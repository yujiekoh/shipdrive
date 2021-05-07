import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout, user, isAuthenticated } = useAuth0();
    const [userObj, setUserObj] = useState({});

    // const { getAccessTokenSilently } = useAuth0();

    // const token = await getAccessTokenSilently();
    // console.log(token);

    const userModel = {
      user_id: user.sub,
      username: user.nickname,
      email: user.email,
      role: user["https://example.com/roles"]
    };

    useEffect(() => {
      // setUserObj(userModel);
      // const token = await getAccessTokenSilently();
      fetch("/users", {
        method: "POST",
        body: JSON.stringify(userModel),
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((resJson) => {
          console.log("resJson", resJson);
          console.log("msg", resJson.msg);
        })
        .catch((error) => console.log(error));
    }, []);

    return (
      <Button type="primary" onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        Log Out
        {/* {sub} */}
      </Button>
    );
}

export default LogoutButton
