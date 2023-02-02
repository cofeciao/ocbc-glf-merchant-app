import React from 'react';
import { REGION, LANGUAGE } from "../utils/constants";

const GlobalContext = React.createContext({
  theme: {},
  container: "#app",
  activeRule: "",
  maxPageSize: 200,
  APIServer: '',
  country: REGION.SG,
  language: LANGUAGE.EN,
  redirectTo404: (): void => null
});

export default GlobalContext;