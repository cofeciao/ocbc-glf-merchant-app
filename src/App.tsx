import React from "react";
import {
  StylesProvider,
  createGenerateClassName,
  ThemeProvider,
} from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import propTypes from "prop-types";
import routerRules from "./router";
import theme from "./theme";
import GlobalContext from "./common/GlobalContext";
import { createStore } from "@reduxjs/toolkit";
import form from "./store/form";
import { HashRouter } from "react-router-dom";

const generateClassName = createGenerateClassName({
  productionPrefix: "$(DOMAIN)-$(PROJECT_NAME)-",
});

const App = (props: MFEPropsType) => {
  const { activeRule } = props;
  const store = createStore(form);
  const history = createBrowserHistory({ basename: activeRule });

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <GlobalContext.Provider value={{ ...props }}>
          <Router history={history}>
            <HashRouter>
              <Switch>{routerRules}</Switch>
            </HashRouter>
          </Router>
        </GlobalContext.Provider>
      </ThemeProvider>
    </StylesProvider>
  );
};

App.propTypes = {
  activeRule: propTypes.string.isRequired,
  theme: propTypes.object.isRequired,
};

export default App;
