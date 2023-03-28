export type IGroupCheckBox = {
  listCheckbox: ICheckBox[];
  getValue?: Function;
  layout?: "horizontal" | "vertical";
  register?: Function;
  required?: boolean;
  name?: string;
  onBlur?: Function;
  onChange?: Function;
};

export type ICheckBox = {
  label: JSX.Element | string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  value: string;
};
