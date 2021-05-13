import React, { useEffect } from "react";
import { Form, Input, List, Avatar, Space, Typography, Radio, Select } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { useParams } from "react-router";

const { TextArea } = Input;
const { Title } = Typography;
const { Option } = Select;

const EditProjectForm = ({ editProjectFormData }) => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
      name="form_in_project_details"
      initialValues={editProjectFormData}
    >
      <Form.Item name="name" value="name" label={<Title level={5}>Name</Title>}>
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
  );
};

export default EditProjectForm
