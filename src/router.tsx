import React from "react";
import { Route } from "react-router-dom";
import GlobalContext from "./common/GlobalContext";
import Home from "./views/home";
import SelfServe from "./views/self-serve";
import LoginPage from "./views/login";
import LaunchConfirmtion from "./views/launch-confirmtion"
import Welcome from "./views/welcome"
import ContainerManual from "./views/manual";

export default [
  <Route exact path="/" component={Home} key="/" />,
  <Route exact path="/login" component={LoginPage} key="/login" />,
  <Route exact path="/welcome" component={Welcome} key="/welcome" />,
  <Route exact path="/launch-confirmtion" component={LaunchConfirmtion} key="/launch-confirmtion" />,
  <Route exact path="/manual-form/:slug" component={ContainerManual} key="/manual-form/:slug" />,
  <Route exact path="/self-serve" component={SelfServe} key="/self-serve" />,
  <Route exact path="/self-serve/:slug" component={SelfServe} key="/self-serve/:slug" />,

];
