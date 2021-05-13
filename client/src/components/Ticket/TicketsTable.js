import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Menu, Dropdown, Button } from "antd";
import { useStateValue } from "../../provider/StateProvider";

const TicketsTable = ({ ticketCreated }) => {
    const [{ allTickets }, dispatch] = useStateValue();
    console.log(allTickets);

    const data = allTickets;

    useEffect(() => {
        fetch("./api/tickets") 
            .then((data) => {
                return data.json();
            }, (err) => {
                console.log(err);
            })
            .then((parsedData) => {
                console.log(parsedData);
                dispatch({
                  type: "GET_ALL_TICKETS",
                  allTickets: parsedData,
                });
            }, (err) => {
                console.log(err);
            })
    }, [ticketCreated]);

    const handleClick = (ticketData) => {
      console.log("Details clicked: ", ticketData);
      dispatch({
        type: "GET_A_TICKET_DETAILS",
        ticketDetails: ticketData,
      });
    };

    const columns = [
      {
        title: "Summary",
        dataIndex: "summary",
        // defaultSortOrder: "ascend",
        // sorter: (a, b) => a.name.length - b.name.length,
        // sortDirections: ["ascend", "descend"],
      },
      {
        title: "Type",
        dataIndex: "type",
        // defaultSortOrder: "ascend",
        // sorter: (a, b) => a.age - b.age,
      },
      {
        title: "Priority",
        dataIndex: "priority",
        // sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Status",
        dataIndex: "status",
        // sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Project",
        dataIndex: "project_name",
        // sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Reported by",
        dataIndex: "reporter_username",
        // sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Assigned to",
        dataIndex: "assignee_username",
        // sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "",
        key: "action",
        render: (text, record) => (
          <Link
            to={{ pathname: `/tickets/${record._id}` }}
            onClick={() => handleClick(record)}
          >
            Details
          </Link>
        ),
      },
    ];

    function onChange(pagination, filters, sorter, extra) {
      console.log("params", pagination, filters, sorter, extra);
    }

    return (
      <Table
        className="projects__table"
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    );
};

export default TicketsTable;
