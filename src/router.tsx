import React from "react";
import { Route } from "react-router-dom";
import GlobalContext from "./common/GlobalContext";
import Home from "./views/landing";
import DemoForm from "./views/demo-form";

export default [
  <Route exact path="/" component={Home} key="/" />,
  <Route exact path="/demo-form" component={DemoForm} key="/demo-form" />,
];
