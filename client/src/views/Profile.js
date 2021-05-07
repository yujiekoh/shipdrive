import React from 'react';
import UserNavbar from "../components/UserNavbar";
import { Typography } from "antd";
import { useAuth0 } from "@auth0/auth0-react";

const { Title } = Typography;

const Profile = () => {
    const { user } = useAuth0();
    const { nickname, picture, email } = user;
    return (
      <div>
        <UserNavbar />
        <Title>Profile</Title>
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{nickname}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
        <div className="row">
          <pre className="col-12 text-light bg-dark p-4">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      </div>
    );
}

export default Profile
