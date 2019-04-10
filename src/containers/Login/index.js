import React, { Component } from "react";
import { Layout, Col, Row } from "antd";

import Title from "../../components/Title";
import LayoutStyle from "./Layout.style";

class Login extends Component {
  render() {
    const { children } = this.props;

    return (
      <Layout>
        <LayoutStyle>
          <Row
            className="login-row-container"
            type="flex"
            justify="center"
            align="middle"
          >
            <Col span={8} className="login-col-container">
              <Row
                className="row-100"
                style={{ backgroundColor: "#25b864" }}
                type="flex"
                justify="center"
                align="middle"
              >
                <Title>OI MUNDO</Title>
              </Row>
              <Row
                className="row-300"
                type="flex"
                justify="center"
                align="middle"
              >
                {children}
              </Row>
            </Col>
          </Row>
        </LayoutStyle>
      </Layout>
    );
  }
}

export default Login;
