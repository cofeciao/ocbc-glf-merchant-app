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

  export interface IGroupRadio {
    cx?: any;
    listRadio: any[];
    name: string;
    label?: string;
    value: string;
    disabled?: boolean;
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  }

  export interface IRadio {
    value: string;
    label: string;
  }

}

export { IRmFlow };