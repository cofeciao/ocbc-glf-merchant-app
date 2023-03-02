import React from "react";
import { Route } from "react-router-dom";
import GlobalContext from "./common/GlobalContext";
import Home from "./views/home";
import SelfServe from "./views/self-serve";
import LoginPage from "./views/login";
import LaunchConfirmtionPage from "./views/launch-confirmtion"
import WelcomePage from "./views/welcome"
import ContainerManual from "./views/rm";

export default [
  <Route exact path="/" component={Home} key="/" />,
  <Route exact path="/rm/login" component={LoginPage} key="/rm/login" />,
  <Route exact path="/rm/welcome" component={WelcomePage} key="/rm/welcome" />,
  <Route exact path="/rm/launch-confirmtion" component={LaunchConfirmtionPage} key="/rm/launch-confirmtion" />,
  <Route exact path="/rm/:slug" component={ContainerManual} key="/rm/:slug" />,
  <Route exact path="/self-serve" component={SelfServe} key="/self-serve" />,
  <Route exact path="/self-serve/:slug" component={SelfServe} key="/self-serve/:slug" />,
];
