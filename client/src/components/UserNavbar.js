import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Menu, Typography } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { Title } = Typography;

const UserNavbar = () => {
    const [userMenu, setUserMenu] = useState("");
    const history = useHistory();

    const handleClick = (e) => {
        console.log(e.key + " clicked");
        setUserMenu(e.key);
        history.push(`/${e.key}`);
    }

    return (
      <Menu onClick={handleClick} selectedKeys={userMenu} mode="horizontal">
        <Menu.Item key="dashboard" icon={<MailOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="projects" icon={<MailOutlined />}>
          Projects
        </Menu.Item>
        <Menu.Item key="tickets" icon={<MailOutlined />}>
          Tickets
        </Menu.Item>
        {/* <Menu.Item key="faq" icon={<MailOutlined />}>
          FAQ
        </Menu.Item> */}
      </Menu>
    );
}

export default UserNavbar
