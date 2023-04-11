declare namespace IBusinessOperations {
  export interface IUploadImage {
    onChange: (value: any) => void;
    onRemove?: () => void;
    defaultImage?: string;
    value?: number | string;
    loading?: boolean;
    error?: boolean;
    disabled?: boolean;
    placeholder?: string;
    name?: string;
  }
  export interface IBusinessInfomation {
    optionSelected:
      | "e-commerce"
      | "point-of-sales"
      | "point-of-sales-e-commerce";
    data: any;
    dataRedux?: any;
    register?: Function;
    unregister?: Function;
    setValue?: Function;
    errors?: any;
    setError: Function;
    clearErrors: Function;
  }
}

export { IBusinessOperations };
