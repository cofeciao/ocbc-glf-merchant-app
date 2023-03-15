declare namespace IRmFlow {
  export interface IMultipleUploadImages {
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

}

export { IRmFlow };
