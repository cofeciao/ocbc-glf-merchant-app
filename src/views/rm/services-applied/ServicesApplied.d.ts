declare namespace IServicesApplied {
  export interface ITransactionCard {
    dataCheckbox: any[];
    keyCheckbox: number;
    getDataFromListCheckbox: (values: any) => void;
  }

  interface IRadio {
    label: string;
    value: string;
  }

  interface IListCheckBox {
    label: string;
    checked: boolean;
    value: string;
  }

  export interface IRepaymentPeriodsOffered {
    title?: string;
    labelSeeMore?: string;
    labelLess?: string;
    listCheckBox: IListCheckBox[];
    errorText?: string
  }

  export interface IDataOtherServices {
    description?: string;
    name?: string;
    checked?: boolean;
    value?: string;
    repaymentPeriodsOffered?: IRepaymentPeriodsOffered;
  }
  interface ISectionRadios {
    instalmentPaymentPlan: IDataOtherServices;
    directCurrencyConversion: IDataOtherServices;
    mailOrder: IDataOtherServices
  }

  export interface IOtherServices {
    cx: any;
    dataOtherService: ISectionRadios;
    setDataOtherService: (value: any) => void;
    validateListCheckboxMonth: boolean;
    setValidateListCheckboxMonth: (value: any) => void;
  }

}

export { IServicesApplied };
