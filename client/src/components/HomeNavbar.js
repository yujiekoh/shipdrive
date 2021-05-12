import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Menu, Typography, Space } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
import AuthNav from "./AuthNav";

const { Title } = Typography;

const HomeNavbar = () => {
    const [homeMenu, setHomeMenu] = useState("");

    const handleClick = (e) => {
      console.log(e.key + " clicked");
      setHomeMenu(e.key);
    //   history.push(`/${e.key}`);
    };

    return (
      <Menu onClick={handleClick} selectedKeys={homeMenu} mode="horizontal">
        <Menu.Item key="company" icon={<MailOutlined />}>
          Company
        </Menu.Item>
        <Menu.Item key="pricing" icon={<MailOutlined />}>
          Pricing
        </Menu.Item>
        <Space>
            <AuthNav />
          {/* <SignupButton />
          <LoginButton /> */}
        </Space>
      </Menu>
    );
}

export default HomeNavbar
