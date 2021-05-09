import React, { useEffect } from 'react';
import { Button, Modal, Form, Input, Radio, Select } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
import { useStateValue } from "../../provider/StateProvider";

const { TextArea } = Input;
const { Option } = Select;

// Test Assignee(s) dropdown
// const children = [];
// for (let i = 10; i < 36; i++) {
//   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
// }

const CreateProjectForm = ({ visible, onCreate, onCancel }) => {
    const { user } = useAuth0();

    const [{ createProjectForm_assignees }, dispatch] = useStateValue();
    // console.log(createProjectForm_assignees);

    const allAssignees = [];
    for (let i = 0; i < createProjectForm_assignees.length; i++) {
        allAssignees.push(
          <Option
            key={createProjectForm_assignees[i].user_id}
            value={createProjectForm_assignees[i].username}
            index={createProjectForm_assignees[i].user_id}
          >
            {createProjectForm_assignees[i].username} (
            {createProjectForm_assignees[i].role})
          </Option>
        );
    }

    const [form] = Form.useForm();

    const onOk = () => {
        form.validateFields()
            .then((values) => {
                form.resetFields();
                console.log(values);
                if (values.assigned_personnel === undefined) {
                  console.log("values.assigned_personnel: ", values.assigned_personnel);
                  let newValues = {
                    ...values,
                    assigned_personnel: [],
                  };
                  onCreate(newValues);  
                } else {
                  onCreate(values);
                }
            })
            .catch((info) => {
                console.log("Validate failed:", info);
            });
    }

    const handleChange = (value) => {
        console.log(`selected ${value}`);
        // console.log(`${value}`);
        // const selectedIndex = event.target.selectedIndex;
        // console.log(selectedIndex);
    }

    // const handleSelect = (key) => {
    //     console.log(`${key}`);
    // }

    useEffect(() => {
        fetch("/api/users")
            .then((data) => {
                return data.json();
            }, (err) => {
                console.log(err);
            })
            .then((parsedData) => {
                // console.log(parsedData);
                const assignees = parsedData.filter(assignee => assignee.user_id !== user.sub);
                // console.log(assignees);
                dispatch({
                  type: "GET_ALL_ASSIGNEES",
                  assignees: assignees,
                });
            }, (err) => console.log(err))
    }, [])

    return (
      <Modal
        visible={visible}
        title="Create Project"
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
            status: "open",
          }}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please give your project a name.",
              },
            ]}
          >
            <Input placeholder="Enter a project name" />
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
            <TextArea placeholder="What your project aims to achieve" />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[
              {
                required: true,
                message: "Please select your project status.",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="open">Open</Radio>
              <Radio value="in-progress">In Progress</Radio>
              <Radio value="completed">Completed</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="assigned_personnel" label="Assignee(s)">
            <Select
              showSearch
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="People working on this project"
              onChange={handleChange}
            //   onSelect={handleSelect}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {allAssignees}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    );
}

export default CreateProjectForm
