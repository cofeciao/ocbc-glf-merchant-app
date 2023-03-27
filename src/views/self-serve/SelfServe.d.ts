declare namespace ISelfServe {
  export interface ISectionWrapper {
    title?: JSX.Element | string;
    description?: string;
    cx?: any;
    edit?: boolean;
    onClickEdit?: () => void;
    children?: string | JSX.Element | JSX.Element[];
    className?: string;
  }

  export interface IDataStepper {
    id: string;
    numerical: string;
    text: string;
    check: boolean;
    status: boolean;
  }

  export interface IRedirectButton {
    variant: "submit" | "next" | "start";
    continueLater?: boolean;
    backButton?: boolean;
    onClickNext: () => void;
    onClickBack?: () => void;
    disabledNextButton?: boolean;
  }
}

export { ISelfServe };
