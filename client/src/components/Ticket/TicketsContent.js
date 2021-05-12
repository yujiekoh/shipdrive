import React, { useState } from 'react';
import { Typography, Button, Modal, Form, Input } from "antd";
import TicketsTable from './TicketsTable';
import CreateTicketForm from "./CreateTicketForm";

const { Title } = Typography;

const TicketsContent = ({ allProjects }) => {
    // console.log(allProjects);

    const [ticket, setTicket] = useState({
        visible: false,
        ticketCreated: false,
    })

    const onCreate = (values) => {
        console.log("received values of create ticket form: ", values);
    }

    return (
      <div>
        <div className="page__title__button">
          <Title level={2} className="page__title">
            Tickets
          </Title>
          <Button
            className="create__button"
            type="primary"
            onClick={() => {
              console.log("created ticket clicked");
              setTicket({
                ...ticket,
                visible: true,
              });
            }}
          >
            Create Ticket
          </Button>
        </div>
        <CreateTicketForm
          visible={ticket.visible}
          onCreate={onCreate}
          ticketCreated={ticket.ticketCreated}
          onCancel={() => {
            setTicket({
              ...ticket,
              visible: false,
            });
          }}
          allProjects={allProjects}
        />
        <TicketsTable ticketCreated={ticket.ticketCreated} />
      </div>
    );
}

export default TicketsContent
