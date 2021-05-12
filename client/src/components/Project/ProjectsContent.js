import React, { useState } from 'react';
import { Typography, Button, Modal, Form, Input } from "antd";
import CreateProjectForm from './CreateProjectForm';
import { useAuth0 } from "@auth0/auth0-react";
import { useStateValue } from "../../provider/StateProvider";
import ProjectsTable from './ProjectsTable';

const { Title, Paragraph, Text } = Typography;

const ProjectsContent = () => {
    const { user} = useAuth0();

    const [{ createProjectForm_assignees }, dispatch] = useStateValue();

    const [visible, setVisible] = useState(false);
    const [projectCreated, setProjectCreated] = useState(false);

    let userRole = user["https://example.com/roles"];

    const onCreate = (values) => {
      console.log("received values of form: ", values);
      // assigned_personnel is the array to send to projects model
      const assigned_personnel = [];
      if (values.assigned_personnel) {
        const assigned_personnel_usernames = values.assigned_personnel;
        for (let i = 0; i < assigned_personnel_usernames.length; i++) {
          const index = createProjectForm_assignees.findIndex(
            (assignee) => assignee.username === assigned_personnel_usernames[i]
          );
          assigned_personnel.push(createProjectForm_assignees[index]);
        }
      }
      // const assigned_personnel_usernames = values.assigned_personnel;
      // for (let i = 0; i < assigned_personnel_usernames.length; i++) {
      //   const index = createProjectForm_assignees.findIndex(
      //     (assignee) => assignee.username === assigned_personnel_usernames[i]
      //   );
      //   assigned_personnel.push(createProjectForm_assignees[index]);
      // }
      console.log(assigned_personnel);
      const createProjectSchema = {
        owner_id: user.sub,
        owner_username: user.nickname,
        name: values.name,
        description: values.description,
        status: values.status,
        assigned_personnel: assigned_personnel,
      };
      console.log(createProjectSchema);
      fetch("/api/projects", {
        method: "POST",
        body: JSON.stringify(createProjectSchema),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((resjson) => {
          console.log(resjson)
        })
        .catch((err) => console.log(err));

      setVisible(false);
      setProjectCreated(!projectCreated);
    }
    // const [modal, setModal] = useState({
    //   loading: false,
    //   visible: false,
    // });

    // const showModal = () => {
    //   console.log("create project clicked");
    //   setModal({
    //     ...modal,
    //     visible: true,
    //   });
    // };

    // const handleOk = () => {
    //   setModal({
    //     ...modal,
    //     loading: true,
    //   });
    //   setTimeout(() => {
    //     setModal({
    //       loading: false,
    //       visible: false,
    //     });
    //   }, 1000);
    // };

    // const handleCancel = () => {
    //   setModal({
    //     ...modal,
    //     visible: false,
    //   });
    // };

    return (
      <div>
        <div className="page__title__button">
          <Title level={2} className="page__title">
            Projects
          </Title>
          {userRole === "manager" ? (
            <Button
              className="create__button"
              type="primary"
              onClick={() => {
                setVisible(true);
              }}
            >
              Create Project
            </Button>
          ) : null}
        </div>
        {userRole === "manager" ? (
          <CreateProjectForm
            visible={visible}
            onCreate={onCreate}
            projectCreated={projectCreated}
            onCancel={() => {
              setVisible(false);
            }}
          />
        ) : null}
        <ProjectsTable projectCreated={projectCreated} />
        {/* <Modal
          visible={modal.visible}
          title="Create Project"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button
              key="submit"
              type="primary"
              loading={modal.loading}
              onClick={handleOk}
            >
              Create
            </Button>,
            <Button type="text" key="back" onClick={handleCancel}>
              Cancel
            </Button>,
          ]}
        >
          <p>content</p>
        </Modal> */}
      </div>
    );
}

export default ProjectsContent;
