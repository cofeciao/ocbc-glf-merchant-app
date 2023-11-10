

declare interface MFEPropsType {
  theme: object,
  container: any,
  activeRule: string,
  maxPageSize: number,
  APIServer: string,
  country: string,
  language: string,
  redirectTo404: () => void,
}
