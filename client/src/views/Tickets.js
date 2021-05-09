import React from 'react';
import UserNavbar from "../components/UserNavbar";
import { Typography } from "antd";

const { Title } = Typography;

const Tickets = () => {
    return (
      <div>
        <UserNavbar />
        <Title level={2} className="views__title">Tickets</Title>
      </div>
    );
}

export default Tickets
