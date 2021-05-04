import React from 'react'
import UserNavbar from '../components/UserNavbar';
import { Typography } from "antd";

const { Title } = Typography;

const Projects = () => {
    return (
      <div>
        <UserNavbar />
        <Title>Projects</Title>
      </div>
    );
}

export default Projects
