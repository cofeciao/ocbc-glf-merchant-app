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
import { useEffect } from "react";
import {
  adobeAbandon,
  adobeLastField,
  getInitData,
  trackingData,
} from "./utils/adobeTracking";
import { createStore } from "@reduxjs/toolkit";
import form from "./store/form";
import { useSelector } from "react-redux";
import { HashRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

const generateClassName = createGenerateClassName({
  productionPrefix: "$(DOMAIN)-$(PROJECT_NAME)-",
});

const App = (props: MFEPropsType) => {
  const { activeRule } = props;
  const store = createStore(form);
  const history = createBrowserHistory({ basename: activeRule });

  useEffect(() => {
    trackingData("", "");
  }, []);

  // call function adobe tracking
  useEffect(() => {
    return history.listen((location: any) => {
      trackingData(location.pathname, "");
    });
  }, [history]);
  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <GlobalContext.Provider value={{ ...props }}>
          <Router history={history}>
            <HashRouter>
              <Switch>{routerRules}</Switch>
            </HashRouter>
          </Router>
          {process.env.env !== "prod" && process.env.env !== "staging" && (
            <div className="check-build">
              {process.env.__HASH__} - {process.env.__COMMIT_DATE_TIME__}
            </div>
          )}
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
