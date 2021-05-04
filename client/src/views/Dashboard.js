import React from 'react'
import UserNavbar from '../components/UserNavbar';
import { Typography } from "antd";

const { Title } = Typography;

const Dashboard = () => {
    return (
      <div>
        <UserNavbar />
        <Title>Dashboard</Title>
      </div>
    );
}

export default Dashboard
