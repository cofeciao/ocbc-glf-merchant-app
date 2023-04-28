import { GridSize } from "@material-ui/core";

export interface IListCheckBox {
  label?: string;
  textError?: string;
  dataCardCheckbox: ICheckBox[];
  checkboxKey?: number;
  getValue?: Function;
  lg?: boolean | GridSize;
  md?: boolean | GridSize;
  sm?: boolean | GridSize;
  xs?: boolean | GridSize;
}

export interface ICheckBox {
  label: JSX.Element | string;
  description?: string;
  checked?: boolean;
  value: string;
  expandedListCheckbox?: IExpandedCheckBox[];
}

export interface IExpandedCheckBox {
  description?: string;
  listCheckbox: Array<{
    label: JSX.Element | string;
    checked?: boolean;
    value: string;
    disabled?: boolean;
  }>;
}
