import React from "react";
import { Layout } from "antd";
import "./style.css"

const SideBar = ({ menu }) => {
  return (
    <Layout.Sider
      className="sidebar"
      breakpoint={"lg"}
      collapsedWidth={0}
      trigger={null}
    >
      {menu}
   </Layout.Sider>
   );
};
export default SideBar;