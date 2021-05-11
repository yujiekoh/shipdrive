import React from 'react';
import UserNavbar from "../components/UserNavbar";
import { Typography } from "antd";
import TicketsContent from '../components/Ticket/TicketsContent';

const { Title } = Typography;

const Tickets = () => {
    return (
      <div>
        <UserNavbar />
        <TicketsContent />
      </div>
    );
}

export default Tickets
