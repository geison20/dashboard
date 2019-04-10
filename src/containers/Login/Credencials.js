import React, { Component } from "react";
import { Form, Icon, Input, Button, Row } from "antd";
import { Link } from "react-router-dom";

class Credencials extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="login-container">
        <Row>
          <Form.Item>
            {getFieldDecorator("userName", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
        </Row>
        <Row>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
        </Row>
        <Row type="flex" justify="space-between" align="middle">
          <a className="login-form-forgot" href="">
            Esqueçeu sua senha?
          </a>
          <Link to="/register">Criar Conta</Link>
        </Row>
        <Row>
          <Button className="btnLogin" type="primary" htmlType="submit" block>
            Acessar
          </Button>
        </Row>
      </Form>
    );
  }
}

export default Form.create({ name: "normal_login" })(Credencials);
