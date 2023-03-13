declare namespace ISupplementaryDocuments {

  export interface IProps {
    ref: any
  }
  
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
}


export { ISupplementaryDocuments };