export interface IListCheckBox {
  label: string;
  textError: string;
  dataCardCheckbox: ICheckBox[];
  checkboxKey: number;
  getValue?: Function;
}

export interface ICheckBox {
  label: JSX.Element | string;
  description?: string;
  checked: boolean;
}
