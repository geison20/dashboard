import React, { Component } from "react";
import { Form, Icon, Input, Button, Row } from "antd";
import { Link } from "react-router-dom";

class Credencials extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const {
      form: { validateFields }
    } = this.props;

    validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="login-container">
        <Row>
          <Form.Item hasFeedback={true} label="E-mail" required>
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "Não é um e-mail válido"
                },
                {
                  required: true,
                  message: "E-mail é obrigatório"
                },
                {
                  whitespace: true,
                  message: "Não é permitid espaços em branco"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="email"
                placeholder="Ex. carlossampaio@gmail.com"
              />
            )}
          </Form.Item>
        </Row>
        <Row>
          <Form.Item hasFeedback={true} label="Senha" required>
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "E-mail é obrigatório"
                },
                {
                  whitespace: true,
                  message: "Não é permitid espaços em branco"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Ex. ************"
              />
            )}
          </Form.Item>
        </Row>
        <Row type="flex" justify="space-between" align="middle">
          <Link to="/login">Já possuí uma conta?</Link>
        </Row>
        <Row>
          <Button className="btnLogin" type="primary" htmlType="submit" block>
            Criar Conta
          </Button>
        </Row>
      </Form>
    );
  }
}

export default Form.create({ name: "normal_login" })(Credencials);
