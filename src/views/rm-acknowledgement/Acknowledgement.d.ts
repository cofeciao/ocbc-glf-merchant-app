
declare namespace ILogin {
  export interface ILoginForm {
    cx: any;
  }

  export interface IInitialValues {
    username: string;
    password: string;
    errorPassword?: boolean;
    errorUsername?: boolean;
  }
}

export { ILogin };