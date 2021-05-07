import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import { Menu, Typography, Space } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import AuthNav from './AuthNav';

const { Title } = Typography;

const UserNavbar = () => {
    const [userMenu, setUserMenu] = useState("");
    const history = useHistory();

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
        </Space>

        {/* <Menu.Item key="faq" icon={<MailOutlined />}>
          FAQ
        </Menu.Item> */}
      </Menu>
    );
}

export default UserNavbar
