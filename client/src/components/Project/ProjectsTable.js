import React, { useEffect, useState } from 'react';
import { Table } from "antd";
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
    ];

    // const data = [
    //   {
    //     key: "1",
    //     name: "John Brown",
    //     age: 32,
    //     address: "New York No. 1 Lake Park",
    //   },
    //   {
    //     key: "2",
    //     name: "Jim Green",
    //     age: 42,
    //     address: "London No. 1 Lake Park",
    //   },
    //   {
    //     key: "3",
    //     name: "Joe Black",
    //     age: 32,
    //     address: "Sidney No. 1 Lake Park",
    //   },
    //   {
    //     key: "4",
    //     name: "Jim Red",
    //     age: 32,
    //     address: "London No. 2 Lake Park",
    //   },
    // ];

    function onChange(pagination, filters, sorter, extra) {
      console.log("params", pagination, filters, sorter, extra);
    }

    return (
        <Table className="projects__table" bordered columns={columns} dataSource={data} onChange={onChange}/>
    )
}

export default ProjectsTable
