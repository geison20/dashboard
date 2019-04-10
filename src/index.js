import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { LocaleProvider } from "antd";

import pt_BR from "antd/lib/locale-provider/pt_BR";

import Routes from "./Routes";
import Root from "./Root";
import GlobalStyle from "./GlobalStyle";

const App = () => (
  <LocaleProvider locale={pt_BR}>
    <HashRouter>
      <GlobalStyle>
        <Routes />
      </GlobalStyle>
    </HashRouter>
  </LocaleProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
