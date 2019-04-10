import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Credencials from "./containers/Login/Credencials";
import Register from "./containers/Login/Register";
import { Login } from "./pages";

const Home = () => <div>Home</div>;

const routes = [
  {
    path: "/login",
    component: () => (
      <Login>
        <Credencials />
      </Login>
    )
  },
  {
    path: "/register",
    component: () => (
      <Login>
        <Register />
      </Login>
    )
  },
  {
    path: "*",
    component: () => <div>404</div>
  }
];

const Routes = ({ location }) => (
  <Switch location={location}>
    {routes.map(({ path, component }) => (
      <Route key={path} path={path} component={component} exact />
    ))}
  </Switch>
);

export default withRouter(Routes);
