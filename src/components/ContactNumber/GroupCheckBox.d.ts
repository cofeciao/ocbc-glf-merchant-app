export type IContactNumber = {
  listCountry: ICountry[];
  register?: Function;
  unregister?: any;
  errors?: any;
  required?: boolean;
  name?: string;
  dataRedux?: any;
  setError?: any;
  setValue?: any;
  label?: string;
  helperText?: string;
};

export type ICountry = {
  label: JSX.Element | string;
  name?: string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  value: string;
};
