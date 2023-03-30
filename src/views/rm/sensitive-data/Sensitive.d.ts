declare namespace ISensitive {
  export interface IProps {
    ref: any
  }
  export interface IConfirmModal {
    open: boolean;
    onClose: () => void;
  }

}

export { ISensitive };
