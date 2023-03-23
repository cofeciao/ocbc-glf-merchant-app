declare namespace ISelfServe {
  export interface ISectionWrapper {
    title?: JSX.Element | string;
    description?: string;
    cx?: any;
    edit?: string;
    children?: string | JSX.Element | JSX.Element[];
    className?: string
  }
  export interface IDataStepper {
    id: string;
    numerical: string;
    text: string;
    check: boolean;
    status: boolean;
  }
}

export { ISelfServe };
