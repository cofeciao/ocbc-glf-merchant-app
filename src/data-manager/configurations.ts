
const config: MFEPropsType = {
  theme: {},
  container: "#app",
  activeRule: "",
  maxPageSize: 200,
  APIServer: 'https://ext1.wearesection.com/node/api/post',
  country: '',
  language: '',
  redirectTo404: (): void => null
};
const inititalGlobalProps = (props: MFEPropsType) => {
  Object.assign(config, props);
};

const getServer = () => ({ APIServer: config.APIServer });

const getConfig = () => ({ ...config });

export default inititalGlobalProps;

export { getServer, getConfig };