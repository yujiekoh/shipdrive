import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import { Menu, Typography, Space } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import AuthNav from './AuthNav';
import { useAuth0 } from "@auth0/auth0-react";

const { Title, Text } = Typography;

const UserNavbar = () => {
    const [userMenu, setUserMenu] = useState("");
    const history = useHistory();
    const { user } = useAuth0();

    const handleClick = (e) => {
        console.log(e.key + " clicked");
        setUserMenu(e.key);
        // history.push(`/${e.key}`);
    }

    return (
      <Menu onClick={handleClick} selectedKeys={userMenu} mode="horizontal">
        <Menu.Item key="dashboard" icon={<MailOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="projects" icon={<MailOutlined />}>
          <Link to="/projects">Projects</Link>
        </Menu.Item>
        <Menu.Item key="tickets" icon={<MailOutlined />}>
          <Link to="/tickets">Tickets</Link>
        </Menu.Item>
        <Menu.Item key="profile" icon={<MailOutlined />}>
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Space>
          <AuthNav />
          <Text>
            Hi {user.nickname}, you're a {user["https://example.com/roles"]}
          </Text>
        </Space>
        {/* <Menu.Item key="faq" icon={<MailOutlined />}>
          FAQ
        </Menu.Item> */}
      </Menu>
    );
}

export default UserNavbar
