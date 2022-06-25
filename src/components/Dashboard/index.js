import { Table } from "antd";
import React from "react";
import DashboardImg from "../../assets/dashboard.png";
import "./style.css";

const Dashboard = () => {
  const dataSource = [
    {
      key: "1",
      name: "Innovation Dock",
      connections: 2,
      role: "Hybrid",
      admin: "Clear",
    },
    {
      key: "2",
      name: "Innovation Dock",
      connections: 2,
      role: "Hybrid",
      admin: "Clear",
    },
    {
      key: "3",
      name: "Innovation Dock",
      connections: 2,
      role: "Hybrid",
      admin: "Clear",
    },
    {
      key: "4",
      name: "Innovation Dock",
      connections: 2,
      role: "Hybrid",
      admin: "Clear",
    },
 
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Connections",
      dataIndex: "connections",
      key: "connections",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Admin",
      dataIndex: "admin",
      key: "admin",
    },
  ];
  return (
    <div className="map-container">
      <img src={DashboardImg} alt="map" className="map" />
      <div className="custom-table">
          <h3 className="table-heading">Your tenants snapshot</h3>
        <Table dataSource={dataSource} columns={columns} pagination={false}  />;
      </div>
    </div>
  );
};

export default Dashboard;
