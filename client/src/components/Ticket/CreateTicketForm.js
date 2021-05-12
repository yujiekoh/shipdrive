import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Input, Radio, Select, Typography, Space, Popover } from "antd";
import { useStateValue } from "../../provider/StateProvider";
import { useAuth0 } from "@auth0/auth0-react";
import { QuestionCircleTwoTone } from "@ant-design/icons";

const { TextArea } = Input;
const { Text, Paragraph } = Typography;
const { Option } = Select;

const CreateTicketForm = ({ visible, onCreate, onCancel, allProjects }) => {
    const [project, setProject] = useState({
        projectId: "",
        projectObj: {},
        projectAssignees: [],
    })

    console.log(allProjects);

    const projectsDropdown = [];
    for (let i = 0; i < allProjects.length; i++) {
        projectsDropdown.push(
          <Option key={allProjects[i]._id} value={allProjects[i]._id}>{allProjects[i].name}</Option>
        );
    }
    console.log(projectsDropdown);

    const priorityContent = (
      <div>
        <Paragraph>Low: Minor issues that most users won't notice</Paragraph>
        <Paragraph>Med: Issues that most users will face</Paragraph>
        <Paragraph>High: Issues where UI and/or logic are heavily impacted</Paragraph>
        <Paragraph>Very High: Prevents other high priority issues from getting fixed if not fixed</Paragraph>
      </div>
    );

    const assigneeDropdown = [];


    const [form] = Form.useForm();

    const { user } = useAuth0();

    function onChange(value) {
      console.log(`selected ${value}`);
      
    }

    function onBlur() {
      console.log("blur");
    }

    function onFocus() {
      console.log("focus");
    }

    function onSearch(val) {
      console.log("search:", val);
    }

    const onOk = () => {
        form
        .validateFields()
        .then((values) => {
            form.resetFields();
            console.log(values);
            onCreate(values);
            // if (values.assigned_personnel === undefined) {
            //   console.log("values.assigned_personnel: ", values.assigned_personnel);
            //   let newValues = {
            //     ...values,
            //     assigned_personnel: [],
            //   };
            //   onCreate(newValues);
            // } else {
            //   onCreate(values);
            // }
        })
        .catch((info) => {
            console.log("Validate failed:", info);
        });
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

  return (
    <Modal
      visible={visible}
      title="Create Ticket"
      onCancel={onCancel}
      onOk={onOk}
      footer={[
        <Button key="submit" type="primary" onClick={onOk}>
          Create
        </Button>,
        <Button type="text" key="back" onClick={onCancel}>
          Cancel
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          type: "bug",
          status: "open",
          reporter: `${user.nickName}`,
        }}
      >
        <Form.Item
          name="project_id"
          label="Project"
          rules={[
            {
              required: true,
              message: "Please select a project.",
            },
          ]}
        >
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a project"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {projectsDropdown}
          </Select>
        </Form.Item>
        <Form.Item
          name="type"
          label="Ticket Type"
          rules={[
            {
              required: true,
              message: "Please select a ticket type.",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="bug">Bug</Radio>
            <Radio value="feature-request">Feature Request</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="summary"
          label="Summary"
          rules={[
            {
              required: true,
              message: "Please provide a summary.",
            },
          ]}
        >
          <Input placeholder="The issue you're facing" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please provide a description.",
            },
          ]}
        >
          <TextArea placeholder="Describe the issue in detail" />
        </Form.Item>

        <Form.Item
          name="priority"
          label={
            <Space>
              <Text>Priority</Text>
              <Popover
                content={priorityContent}
                title="How to prioritise a ticket?"
              >
                <QuestionCircleTwoTone />
              </Popover>
            </Space>
          }
          rules={[
            {
              required: true,
              message: "Please select a priority level.",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="low">Low</Radio>
            <Radio value="med">Med</Radio>
            <Radio value="high">High</Radio>
            <Radio value="very-high">Very High</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="assignee"
          label="Assignee"
        >
          <Select
            showSearch
            style={{ width: 200 }}
            // placeholder="Select a project"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {projectsDropdown}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateTicketForm;
