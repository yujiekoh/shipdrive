import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Table, Menu, Dropdown, Button } from "antd";
import { useStateValue } from "../../provider/StateProvider";

const ProjectsTable = ({ projectCreated }) => {
    const [{ allProjects }, dispatch] = useStateValue();
    console.log(allProjects);

    const data = allProjects;

    useEffect(() => {
        fetch("./api/projects") 
            .then((data) => {
                return data.json();
            }, (err) => {
                console.log(err);
            })
            .then((parsedData) => {
                console.log(parsedData);
                dispatch({
                  type: "GET_ALL_PROJECTS",
                  allProjects: parsedData,
                });
            }, (err) => {
                console.log(err);
            })
    }, [projectCreated]);

    const handleClick = (projectData) => {
      console.log("Details clicked: ", projectData);
      dispatch({
        type: "GET_A_PROJECT_DETAILS",
        projectDetails: projectData,
      });
    }

    // const handleMenuClick = (e) => {
    //   console.log("click", e);
    // };

    // const menu = (id) => {
    //   <Menu onClick={handleMenuClick}>
    //     <Menu.Item key="details">Details</Menu.Item>
    //     <Menu.Item key="delete" style={{color: "red"}}>Delete</Menu.Item>
    //   </Menu>
    // }

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        defaultSortOrder: "ascend",
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ["ascend", "descend"],
      },
      {
        title: "Description",
        dataIndex: "description",
        // defaultSortOrder: "ascend",
        // sorter: (a, b) => a.age - b.age,
      },
      {
        title: "Owner",
        dataIndex: "owner_username",
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
        title: "",
        key: "action",
        render: (text, record) => (
          <Link to={{pathname: `/projects/${record._id}`}} onClick={() => handleClick(record)}>Details</Link>
        )
      },
    ];

    function onChange(pagination, filters, sorter, extra) {
      console.log("params", pagination, filters, sorter, extra);
    }

    return (
        <Table className="projects__table" columns={columns} dataSource={data} onChange={onChange}/>
    )
}

export default ProjectsTable
