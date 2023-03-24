declare namespace IGroupRadios {

  export interface IGroupRadio {
    cx: any;
    listRadio: any[];
    name: string;
    label?: string;
    value: string;
    disabled?: boolean;
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
    isRow?: boolean;
  }

  export interface IRadio {
    value: string;
    label: string;
    checked?: boolean;
  }
}

export { IGroupRadios };
