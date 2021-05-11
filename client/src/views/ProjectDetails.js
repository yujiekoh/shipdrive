import React, { useEffect } from "react";
import { Form, Input, List, Avatar, Space, Typography, Radio, Select } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import UserNavbar from "../components/UserNavbar";
import { useStateValue } from "../provider/StateProvider";
import { useParams } from "react-router";

const { TextArea } = Input;
const { Title } = Typography;
const { Option } = Select;

const ProjectDetails = () => {
    const [{ createProjectForm_assignees, projectDetails, allProjects }, dispatch] = useStateValue();
    console.log(projectDetails);
    console.log(allProjects);
    // console.log(createProjectForm_assignees);
    
    const [form] = Form.useForm();
    
    const { projectId } = useParams();
    
    const projectData = allProjects.filter(project => project._id === projectId);
    console.log(projectData);

    const assignees = projectData.assigned_personnel;

    // useEffect(() => {
    //   fetch("/api/projects")
    //     .then(
    //       (data) => {
    //         return data.json();
    //       },
    //       (err) => {
    //         console.log(err);
    //       }
    //     )
    //     .then(
    //       (parsedData) => {
    //         console.log(parsedData);
    //         const projectData = parsedData.filter(project => project._id === projectId);
    //         console.log(projectData[0]);
    //         dispatch({
    //           type: "GET_A_PROJECT_DETAILS",
    //           projectDetails: projectData[0],
    //         });
    //       },
    //       (err) => {
    //         console.log(err);
    //       }
    //     );
    // }, []);

    // const allAssignees = [];
    // for (let i = 0; i < createProjectForm_assignees.length; i++) {
    //   allAssignees.push(
    //     <Option
    //       key={createProjectForm_assignees[i].user_id}
    //       value={createProjectForm_assignees[i].username}
    //       index={createProjectForm_assignees[i].user_id}
    //     >
    //       {createProjectForm_assignees[i].username} (
    //       {createProjectForm_assignees[i].role})
    //     </Option>
    //   );
    // }

    const listData = [];
    for (let i = 0; i < 23; i++) {
      listData.push({
        href: "https://ant.design",
        title: `ant design part ${i}`,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        description:
          "Ant Design, a design language for background applications, is refined by Ant UED Team.",
        content:
          "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      });
    }
    const IconText = ({ icon, text }) => (
      <Space>
        {React.createElement(icon)}
        {text}
      </Space>
    );

    return (
      <div>
        <UserNavbar />
        <div className="project__details__form__tickets">
          <div className="project__details__form">
            <Title level={3}>Details</Title>
            <br />
            <Form
              form={form}
              layout="vertical"
              name="form_in_project_details"
              initialValues={projectData[0]}
            >
              <Form.Item
                name="name"
                value="name"
                label={<Title level={5}>Name</Title>}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="description"
                value="description"
                label={<Title level={5}>Description</Title>}
              >
                <TextArea />
              </Form.Item>
              <Form.Item name="status" value="status" label="Status">
                <Radio.Group>
                  <Radio value="open">Open</Radio>
                  <Radio value="in-progress">In Progress</Radio>
                  <Radio value="completed">Completed</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                name="assigned_personnel"
                value="assigned_personnel"
                label="Assignee(s)"
              >
                {/* <Select
                  showSearch
                  mode="multiple"
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="People working on this project"
                  // onChange={handleChange}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {allAssignees}
                  
                </Select> */}
              </Form.Item>
            </Form>
          </div>

          <div className="project__details__tickets">
            <Title level={3}>Tickets</Title>
            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 5,
              }}
              dataSource={listData}
              footer={
                <div>
                  <b>ant design</b> footer part
                </div>
              }
              renderItem={(item) => (
                <List.Item
                  key={item.title}
                  actions={[
                    <IconText
                      icon={StarOutlined}
                      text="156"
                      key="list-vertical-star-o"
                    />,
                    <IconText
                      icon={LikeOutlined}
                      text="156"
                      key="list-vertical-like-o"
                    />,
                    <IconText
                      icon={MessageOutlined}
                      text="2"
                      key="list-vertical-message"
                    />,
                  ]}
                  extra={
                    <img
                      width={272}
                      alt="logo"
                      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                  }
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                  />
                  {item.content}
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    );
}

export default ProjectDetails
