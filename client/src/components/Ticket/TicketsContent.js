import React, { useState } from 'react';
import { Typography, Button, Modal, Form, Input } from "antd";
import TicketsTable from './TicketsTable';
import CreateTicketForm from "./CreateTicketForm";
import { useAuth0 } from "@auth0/auth0-react";

const { Title } = Typography;

const TicketsContent = ({ allProjects }) => {
    const { user } = useAuth0();

    const [ticket, setTicket] = useState({
        visible: false,
        ticketCreated: false,
    })

    const onCreate = (values) => {
        console.log("received values of create ticket form: ", values);
        const createTicketSchema = {
            project_id: values.project_id,
            project_name: values.project_name,
            type: values.type,
            summary: values.summary,
            description: values.description,
            priority: values.priority,
            status: "open",
            assignee_id: values.assignee_id,
            assignee_username: values.assignee_username,
            reporter_id: user.sub,
            reporter_username: user.nickname,
        };
        console.log(createTicketSchema);
        fetch("/api/tickets", {
          method: "POST",
          body: JSON.stringify(createTicketSchema),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((resjson) => {
            console.log(resjson);
          })
          .catch((err) => console.log(err));
          setTicket({
            visible: false,
            ticketCreated: !ticket.ticketCreated,
          });
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
