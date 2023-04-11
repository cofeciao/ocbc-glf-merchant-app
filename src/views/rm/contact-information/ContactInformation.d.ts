declare namespace IContactInformation {
  export interface IProps {
    handleCallAPI:(a: string) => void,
    ref?: any
  }
  export interface IValueData {
    value: string;
    error: string;
  }

  export interface IDirectors {
    name: string;
    nricNumber: string;
  }

}

export { IContactInformation };
