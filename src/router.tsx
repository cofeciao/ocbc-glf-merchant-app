import React from "react";
import { Route } from "react-router-dom";
import GlobalContext from "./common/GlobalContext";

import Home from "./views/landing";
import DemoForm from "./views/demo-form";
import LoginPage from "./views/login";
import LaunchConfirmtion from "./views/launch-confirmtion"

export default [
  <Route exact path="/" component={Home} key="/" />,
  <Route exact path="/login" component={LoginPage} key="/login" />,
  <Route exact path="/launch-confirmtion" component={LaunchConfirmtion} key="/launch-confirmtion" />,
  
  <Route exact path="/demo-form" component={DemoForm} key="/demo-form" />,
];
