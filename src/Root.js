import React from "react";
import { Layout, Menu, Icon } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default () => (
  <Layout style={{ minHeight: "100vh" }}>
    <Sider collapsible>
      <div
        style={{
          height: "32px",
          background: "rgba(255,255,255,.2)",
          margin: "16px"
        }}
      />
      <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span>nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span>nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span>nav 3</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ background: "#fff", padding: 0 }}>
        <Icon className="trigger" type="menu-fold" />
      </Header>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          background: "#fff",
          minHeight: 280
        }}
      >
        Content
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
);
