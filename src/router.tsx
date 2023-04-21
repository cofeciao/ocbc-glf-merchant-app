import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./views/home";
import SelfServe from "./views/self-serve";
import AcknowledgementPage from "./views/acknowledgement";

export default [
  // Home
  <Route exact path="/" component={HomePage} key="/" />,

  // Self
  <Route exact path="/self/:slug" component={SelfServe} key="/self/:slug" />,
  <Route
    exact
    path="/self/:slug/:slug"
    component={SelfServe}
    key="/self/:slug/:slug"
  />,

  // Acknowledgement
  <Route
    exact
    path="/acknowledgement/:slug"
    component={AcknowledgementPage}
    key="/acknowledgement/:slug"
  />,
];
