import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./views/home";
import SelfServePage from "./views/self-serve";
import AcknowledgementPage from "./views/acknowledgement";
import ErrorPage from "./views/error";

export default [
  // Home
  <Route exact path="/" component={HomePage} key="/" />,

  // Self
  <Route exact path="/self/:slug" component={SelfServePage} key="/self/:slug" />,

  // Acknowledgement
  <Route
    exact
    path="/acknowledgement/:slug"
    component={AcknowledgementPage}
    key="/acknowledgement/:slug"
  />,

  // Error
  <Route
    exact
    path="/error"
    component={ErrorPage}
    key="/error"
  />,
];
