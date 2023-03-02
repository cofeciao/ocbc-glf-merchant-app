declare namespace IContactInformation {
  export interface IProps {
    handleCallAPI:(a: string) => void,
    ref: any
  }
  export interface IValueData {
    value: string;
    error: string;
  }

}

export { IContactInformation };
