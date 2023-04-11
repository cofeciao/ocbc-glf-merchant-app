declare namespace IProductionServices {
  export interface IProps {
    ref?: any;
  }

  export interface IBusinessOffering {
    cx: any;
    paramsBusinessService: any;
    setParamsBusinessService: (values: any) => void;
    register?: any;
    errors?: any;
    dataRedux?: any;
  }

  export interface IRefundPolicy {
    cx: any;
    paramsBusinessService: any;
    setParamsBusinessService: (values: any) => void;
  }
}

export { IProductionServices };
