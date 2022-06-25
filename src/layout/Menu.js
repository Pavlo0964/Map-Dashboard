import React from "react";
import { Menu } from "antd";
import { data } from "./data";
import Logo from "../assets/logo.png";
import "./style.css";

const TopicMenu = () => {
  return (
    <div className="sidebar-container">
      <div>
        <Menu mode="inline">
          <Menu.Item className="sidebar-logo-container">
            <img src={Logo} alt="not found" className="sidebar-logo" />
          </Menu.Item>
          {data.map((item, index) => {
            return (
              <Menu.Item key={index} className={index === 0 ? "active" : ""}>
                <a href={item.path} className="sidebar-link">
                  {item.name}
                </a>
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
      <div className="user-auth">
        <a href="/logout" className="sidebar-link">
          Logout
        </a>
      </div>
    </div>
  );
};
export default TopicMenu;
