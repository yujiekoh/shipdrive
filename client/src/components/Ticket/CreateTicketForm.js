import React, { useEffect } from "react";
import { Button, Modal, Form, Input, Radio, Select } from "antd";
import { useStateValue } from "../../provider/StateProvider";

const { TextArea } = Input;
const { Option } = Select;

const CreateTicketForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();

    const onOk = () => {
        form.validateFields()
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
    }

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
            status: "open",
          }}
        >

        </Form>
        </Modal>
    )
};

export default CreateTicketForm;
