import React from 'react';
import { Route } from 'react-router-dom';
import GlobalContext from "./common/GlobalContext";
import Home from "./views/landing";

export default [
  <Route exact path="/" component={Home} key="/" />,
]