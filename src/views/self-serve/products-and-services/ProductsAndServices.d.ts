import { IAmountTextField } from "@/components/AmountTextField/AmountTextField";
import { ICheckBox } from "@/components/GroupCheckBox/GroupCheckBox";
import { IPercentageTextField } from "@/components/PercentageTextField/PercentageTextField";

declare namespace IProductsAndServices {
  export interface ITooltipDialog {
    title: string;
    description: string;
    cx?: any;
  }

  export interface IBusinessOfferingSection {
    cx: any;
    data: IBusinessOffering;
    register: Function;
    errors: any;
    dataRedux: any;
    name: string;
  }

  export interface IBusinessOffering {
    title: string;
    description: string;
    textField: ITextField;
  }

  export interface ITextField {
    keyName?: string;
    label?: string;
    description?: string;
    helperText?: string;
    helperTextGuide?: string;
  }
  export interface IListCheckbox {
    description?: string;
    list: ICheckBox[];
  }
  export interface IListRadio {
    description?: string;
    list: {
      label: string;
      value: string;
      checked?: boolean;
    }[];
  }
  export interface IListDropdown {
    label: string;
    description?: string;
    placeholder?: string;
    list: {
      name: string;
      value: string;
    }[];
  }

  export interface IFulfilmentInformation {
    title?: string;
    listRadio?: IListRadio;
    listDropdown?: IListDropdown;
    listCheckbox?: IListCheckbox;
    textField?: IPercentageTextField;
    listCheckboxSecondary?: IListCheckbox;
    listRadioSecondary?: IListRadio;
  }

  export interface IFulfilmentInformationSection {
    cx: any;
    data: IFulfilmentInformation;
    dataRedux?: any;
    variant?: string;
    unregister?: any;
    setError?: any;
    clearErrors?: any;
    setValue?: any;
    register?: any;
    errors?: any;
    control?: any;
  }

  export interface IFulfillmentOverAPeriodOfTime {
    cx: any;
    data: IFulfilmentInformation;
    dataRedux?: any;
    variant?: string;
    unregister?: Function;
    setError?: Function;
    clearErrors?: Function;
    setValue?: any;
    register?: Function;
    errors?: any;
    control?: any;
  }

  export interface IImmediateFulfillment {
    cx: any;
    data: IFulfilmentInformation;
    dataRedux?: any;
    variant?: string;
    unregister?: any;
    setError?: any;
    clearErrors?: any;
    setValue?: any;
    register?: any;
    errors?: any;
    control?: any;
  }

  export interface IForm {
    cx: any;
    data: {
      businessOffering: IBusinessOffering;
      fulfilmentInformation: IFulfilmentInformation;
      salesForecast: ISalesForecast;
    };
    dataRedux?: any;
    title?: string;
    optionSelected?: string;
    variant: string;
    register: any;
    unregister: any;
    setValue: any;
    errors?: any;
    clearErrors?: any;
    setError?: any;
    control?: any;
  }

  export interface ISalesForecast {
    title: string;
    description: string;
    listTextField: IAmountTextField[];
  }

  export interface ISalesForecastSection {
    cx: any;
    data: ISalesForecast;
    dataRedux?: any;
    title?: string;
    optionSelected?: string;
    variant?: string;
    register?: Function;
    unregister?: Function;
    setValue?: Function;
    errors?: any;
    clearErrors?: Function;
    setError?: any;
  }
}

export { IProductsAndServices };
