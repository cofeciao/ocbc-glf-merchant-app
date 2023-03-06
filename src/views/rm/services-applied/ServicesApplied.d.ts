declare namespace IServicesApplied {
  export interface ITransactionCard {
    dataCheckbox: any[];
    key: number;
    getDataFromListCheckbox: (data: any) => void;
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
    listCheckBox: IListCheckBox[]
  }
  interface ISectionRadios {
    instalment_payment_plan: {
      title: string;
      name: string;
      checked: boolean;
      listRadio: IRadio[];
      repayment_periods_offered: IRepaymentPeriodsOffered;
    };
    direct_currency_conversion: {
      title: string;
      name: string;
      checked: boolean;
      listRadio: IRadio[];
    };
    mail_order: {
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
