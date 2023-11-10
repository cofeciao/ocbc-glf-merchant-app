import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import inititalGlobalProps from './data-manager/configurations';
import initMultiLingual from './utils/initMultiLingual';
import { REGION, LANGUAGE } from "./utils/constants";
import store from './store';

import './assets/style/style.scss';
import { useEffect } from 'react';

function render(props: MFEPropsType) {
  const { container } = props;
  // for API initial
  inititalGlobalProps({ ...props });
  props.language = props.language || LANGUAGE.EN;
  props.country = props.country || REGION.SG;
  const languageContent = initMultiLingual(props.language, props.country);
  ReactDOM.render(<IntlProvider locale={props.language} messages={languageContent}>
    <Provider store={store}>
      <App {...props} />
    </Provider>
  </IntlProvider>, container ? container.querySelector('#root') : document.querySelector('#root'));
}

// applicaiton can start in dev mode even though it does not work with stitcher
if (!(window as any).__POWERED_BY_QIANKUN__ && process.env.NODE_ENV === 'development') {
  const theme = createMuiTheme({});
  render({
    theme,
    container: null,
    activeRule: process.env.activeRule,
    maxPageSize: parseInt(process.env.maxPageSize),
    APIServer: '',
    country: REGION.SG,
    language: LANGUAGE.EN,
    redirectTo404: (): void => { window.location.pathname = "/"; }
  });
}

// applicaiton can start in dev mode even though it does not work with stitcher
if (!(window as any).__POWERED_BY_QIANKUN__ && process.env.NODE_ENV === 'production') {
  const theme = createMuiTheme({});
  render({
    theme,
    container: null,
    activeRule: process.env.activeRule,
    maxPageSize: parseInt(process.env.maxPageSize),
    APIServer: '',
    country: REGION.SG,
    language: LANGUAGE.EN,
    redirectTo404: (): void => { window.location.pathname = "/"; }
  });
}

// applicaiton can start in dev mode even though it does not work with stitcher
if (!(window as any).__POWERED_BY_QIANKUN__ && process.env.NODE_ENV === 'none') {
  const theme = createMuiTheme({});
  render({
    theme,
    container: null,
    activeRule: process.env.activeRule,
    maxPageSize: parseInt(process.env.maxPageSize),
    APIServer: '',
    country: REGION.SG,
    language: LANGUAGE.EN,
    redirectTo404: (): void => { window.location.pathname = "/"; }
  });
}

export async function bootstrap() {
  console.log('react app bootstrap');
}

export async function mount(props: MFEPropsType) {
  render(props);
}

export async function unmount(props: MFEPropsType) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector('#root')
      : document.querySelector('#root'),
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
