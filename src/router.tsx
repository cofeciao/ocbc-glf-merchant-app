import React from "react";
import { Route } from "react-router-dom";
import GlobalContext from "./common/GlobalContext";
import HomePage from "./views/home";
import SelfServe from "./views/self-serve";
import LoginPage from "./views/login";
import LaunchConfirmtionPage from "./views/launch-confirmtion";
import WelcomePage from "./views/welcome";
import ContainerManual from "./views/rm";
import AcknowledgementPage from "./views/acknowledgement";
import RMAcknowledgementPage from "./views/rm-acknowledgement";

export default [
  <Route exact path="/" component={HomePage} key="/" />,
  <Route exact path="/rm/login" component={LoginPage} key="/rm/login" />,
  <Route exact path="/rm/welcome" component={WelcomePage} key="/rm/welcome" />,
  <Route exact path="/rm/launch-confirmtion" component={LaunchConfirmtionPage} key="/rm/launch-confirmtion" />,
  <Route exact path="/rm/:slug" component={ContainerManual} key="/rm/:slug" />,
  <Route
    exact
    path="/rm/launch-confirmtion"
    component={LaunchConfirmtionPage}
    key="/rm/launch-confirmtion"
  />,
  <Route exact path="/rm/:slug" component={ContainerManual} key="/rm/:slug" />,
  <Route exact path="/self/:slug" component={SelfServe} key="/self/:slug" />,
  <Route
    exact
    path="/rm/acknowledgement/:slug"
    component={RMAcknowledgementPage}
    key="/rm/acknowledgement/:slug"
  />,
  <Route
    exact
    path="/acknowledgement/:slug"
    component={AcknowledgementPage}
    key="/acknowledgement/:slug"
  />,
];
