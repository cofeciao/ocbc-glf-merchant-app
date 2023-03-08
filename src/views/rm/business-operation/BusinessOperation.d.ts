declare namespace IBusinessOperations {
  export interface IUploadImage {
    onChange: (value: any) => void;
    defaultImage?: string;
    value?: number | string;
    loading?: boolean;
    error?: boolean;
    disabled?: boolean;
    placeholder?: string;
    name?: string;
  }
}


export { IBusinessOperations };