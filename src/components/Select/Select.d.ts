import { SelectProps } from '@material-ui/core/Select';

export interface ISelect extends SelectProps {
  listSelect: ISelectItem[];
  register?: Function;
  required?: boolean;
  name?: string;
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  onChange?: (event: React.ChangeEvent<{value: unknown, name?: string}>) => void;
  onBlur?: (event: React.FocusEvent<{value: unknown, name?: string}>) => void;
}

export type ISelectItem = {
  name: string;
  value: string;
};
