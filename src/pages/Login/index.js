import React, { Component } from "react";

import { Login } from "../../containers";

class LoginPage extends Component {
  render() {
    return <Login {...this.props} />;
  }
}

export default LoginPage;
