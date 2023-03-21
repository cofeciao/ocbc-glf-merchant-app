declare namespace IServicesApplied {
  export interface ITransactionCard {
    dataCheckbox: any[];
    keyCheckbox: number;
    getDataFromListCheckbox: (values: any) => void;
  }

  interface IRadio {
    text: string;
    checked: boolean;
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
      checked: boolean;
      listRadio: IRadio[];
      repaymentPeriodsOffered: IRepaymentPeriodsOffered;
    };
    directCurrencyConversion: {
      title: string;
      name: string;
      checked: boolean;
      listRadio: IRadio[];
    };
    mailOrder: {
      title: string;
      name: string;
      checked: boolean;
      listRadio: IRadio[];
    }
  }

  export interface IOtherServices {
    cx: any;
    sectionRadios: ISectionRadios; 
    setDataRadio: (value: any) => void;
    setDataCheckboxRepayment: (value: any) => void;
    dataCheckboxRepayment: any   
  }

}

export { IServicesApplied };
