import React from "react";
import { Layout } from "antd";
import Sidebar from "./layout/Sidebar";
import NavBar from "./layout/Navbar";
import TopicMenu from "./layout/Menu";
import Dashboard from "./components/Dashboard";
function App() {
  const Menu = <TopicMenu />;
  return (
    <div className="App">
      <NavBar menu={Menu} />
      <Layout>
        <Sidebar menu={Menu} />
        <Layout.Content className="content">
          <Dashboard />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
