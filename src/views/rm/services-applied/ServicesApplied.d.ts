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
    labelSeeMore: string;
    labelLess: string;
    listCheckBox: IListCheckBox[]
  }
  interface ISectionRadios {
    instalmentPaymentPlan: {
      title: string;
      name: string;
      checked?: boolean;
      value?: string;
      listRadio: IRadio[];
      repaymentPeriodsOffered: IRepaymentPeriodsOffered;
    };
    directCurrencyConversion: {
      title: string;
      name: string;
      checked?: boolean;
      value?: string;
      listRadio: IRadio[];
    };
    mailOrder: {
      title: string;
      name: string;
      checked?: boolean;
      value?: string;
      listRadio: IRadio[];
    }
  }

  export interface IOtherServices {
    cx: any;
    dataOtherServices: ISectionRadios; 
    setDataOtherService: (value: any) => void;
  }

}

export { IServicesApplied };
