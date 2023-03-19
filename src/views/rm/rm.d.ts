declare namespace IRmFlow {
  export interface IMultipleUploadImages {
    onChange: (value: any) => void;
    onRemove?: (value?: any) => void;
    defaultImage?: string;
    values?: any;
    loading?: boolean;
    error?: boolean;
    disabled?: boolean;
    placeholder?: string;
    name?: string;
  }

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

}

export { IRmFlow };
