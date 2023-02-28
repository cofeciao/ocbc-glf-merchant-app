import React from "react";
import { Route } from "react-router-dom";
import GlobalContext from "./common/GlobalContext";
import Home from "./views/home";
import SelfServe from "./views/self-serve";

export default [
  <Route exact path="/" component={Home} key="/" />,
  <Route exact path="/self-serve" component={SelfServe} key="/self-serve" />,
  <Route exact path="/self-serve/:slug" component={SelfServe} key="/self-serve/:slug" />,
];
