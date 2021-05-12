import React, { useState } from 'react';
import UserNavbar from '../components/UserNavbar';
import { Typography, Button, Modal } from "antd";
import ProjectsContent from "../components/Project/ProjectsContent";

const { Title } = Typography;

const Projects = () => {

    return (
      <div>
        <UserNavbar />
        <ProjectsContent />
      </div>
    );
}

export default Projects
