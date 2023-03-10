declare namespace IProductionServices {
  export interface IProps {
    ref: any
  }

  export interface IBusinessInformation {
    cx: any;
    paramsBusinessService: any;
    setParamsBusinessService: (values: any) => void;
  }

  export interface IRefundPolicy {
    cx: any;
    paramsBusinessService: any;
    setParamsBusinessService: (values: any) => void;
  }
}

export { IProductionServices };
