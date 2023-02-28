import React from 'react';
import { StylesProvider, createGenerateClassName, ThemeProvider } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import { Router, Switch, HashRouter } from 'react-router-dom';
import propTypes from 'prop-types';
import routerRules from './router';
import theme from './theme';
import GlobalContext from "./common/GlobalContext";
import { useEffect } from 'react';
import { trackingData } from './utils/adobeTracking';

const generateClassName = createGenerateClassName({ productionPrefix: '$(DOMAIN)-$(PROJECT_NAME)-' });

const App = (props: MFEPropsType) => {
  const { activeRule } = props;
  const history = createBrowserHistory({ basename: activeRule });

  useEffect(() => {
    trackingData('', '')
 },[])

  // call function adobe tracking
  useEffect(() => {
    return history.listen((location: any) => { 
      trackingData(location.pathname, '')
    })
 },[history])
  return (
    <HashRouter>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>
          <GlobalContext.Provider value={{ ...props }}>
            <Router history={history}>
              <Switch>{routerRules}</Switch>
            </Router>
          {process.env.env !== 'prod' && process.env.env !== 'staging' && <div className='check-build'>{process.env.__HASH__} - {process.env.__COMMIT_DATE_TIME__}</div>}
          </GlobalContext.Provider>
        </ThemeProvider>
      </StylesProvider>
    </HashRouter>
  );
};

App.propTypes = {
  activeRule: propTypes.string.isRequired,
  theme: propTypes.object.isRequired,
};

export default App;
