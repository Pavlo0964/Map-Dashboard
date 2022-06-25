import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Logo from '../assets/logo.png';
import "./style.css";

const NavBar = ({ menu }) => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="navbar">
      <Button
        className="menu"
        type="primary"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title=""
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}
      > 
        {menu}
     </Drawer>
     <img src={Logo} alt="not found" className="navbar-logo"/>
    </nav>
  );
};

export default NavBar;