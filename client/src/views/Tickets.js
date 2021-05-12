import React, { useEffect } from 'react';
import UserNavbar from "../components/UserNavbar";
import { Typography } from "antd";
import TicketsContent from '../components/Ticket/TicketsContent';
import { useStateValue } from "../provider/StateProvider";

const { Title } = Typography;

const Tickets = () => {
    const [{ allProjects }, dispatch] = useStateValue();

    useEffect(() => {
      fetch("/api/projects")
        .then(
          (data) => {
            return data.json();
          },
          (err) => {
            console.log(err);
          }
        )
        .then(
          (parsedData) => {
            console.log(parsedData);
            dispatch({
              type: "GET_ALL_PROJECTS",
              allProjects: parsedData,
            });
          },
          (err) => {
            console.log(err);
          }
        );
    }, []);

    return (
      <div>
        <UserNavbar />
        <TicketsContent allProjects={allProjects} />
      </div>
    );
}

export default Tickets
