import React, { useState } from 'react'
import UserNavbar from '../components/UserNavbar';
import { Typography } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
import ProjectsByStatus from '../components/Dashboard/ProjectsByStatus';

const { Title, Paragraph } = Typography;

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth0();
  const { sub, nickname } = user;

  const [message, setMessage] = useState("");
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const { getAccessTokenSilently } = useAuth0();

  // const callApi = async () => {
  //   try {
  //     const response = await fetch(`${serverUrl}/api/messages/public-message`);

  //     const responseData = await response.json();

  //     setMessage(responseData.message);
  //   } catch (error) {
  //     setMessage(error.message);
  //   }
  // };

    return (
      <div>
        <UserNavbar />
        <Title level={2} className="views__title">Dashboard</Title>
        <Paragraph>{sub}</Paragraph>
        <Paragraph>{nickname}</Paragraph>
        <Paragraph>{user["https://example.com/roles"]}</Paragraph>
        
        <ProjectsByStatus />

      </div>
    );
}

export default Dashboard
