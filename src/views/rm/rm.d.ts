declare namespace IRMFlow {
  export interface IUploadImage {
    onChange: (value: any) => void;
    onRemove?: () => void;
    defaultImage?: string;
    value?: any;
    loading?: boolean;
    error?: boolean;
    disabled?: boolean;
    placeholder?: string;
    name?: string;
  }
  export interface IMultipleUploadImage {
    onChange: (value: any) => void;
    onRemove?: (index: number) => void;
    defaultImage?: string;
    values?: any[];
    loading?: boolean;
    error?: boolean;
    disabled?: boolean;
    placeholder?: string;
    name?: string;
  }
}


export { IRMFlow };