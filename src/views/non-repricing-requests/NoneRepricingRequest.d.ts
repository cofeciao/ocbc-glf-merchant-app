import React from "react";

declare namespace INoneRepricingRequest {
  export interface IProps {
    checkMatchOptionNonRepricing: () => boolean;
    checkMatchOptionNonRepricingAndPricing?: () => boolean;
    checkMatchOptionNonRepricingAndPricingInvestment: () => boolean;
    ref: any;
    children: any;
  }

  export interface ICheckbox {
    text?: string,
    check: boolean,
    name?: string,
  }
  export interface IDemoPage {
    handleChangeRequestRepricing: (a: string[]) => void,
    handleRequestAccount: (a: string) => void
  }
  export interface ISelect {
    key: string,
    value: string
  }

  export interface IRadio {
    text: string,
    checked: boolean,
    disable?: boolean,
  }

  export interface IRefFullRedemption {
    handleNext: () => void
  }

  export interface IInput {
    error: string,
    value: string
    name: string,
  }

  export interface INoneRepricingRequestPartial {
    cx: any,
    isOneListChecked?: boolean;
    listDataCheckbox?: ICheckbox[],
    handleFormatCheckBox?: (a: any) => void,
    handleUpdateCheckbox?: (a: ICheckbox[]) => void,
    listPaymentMode?: ISelect[],
    selectKey?: number,
    inputKey?: number,
    formDataRepricing?: any,
    listDataCheckboxLengthening?: ICheckbox[],
    setValueFormPartialPayment?: (a: string, b: string) => void,
    setValueFormPartialPaymentHaveError?: (a: string, b: string, c: string) => void,
    handleUpdateCheckboxLengthening?: (a: ICheckbox[]) => void,
    listOptionToRevise?: ISelect[],
    handleResetDataOnchange?: (a: string, b: any, c: number) => void,
    formReduxData?: any,
    listCurrency?: ISelect[],
    handleDetectTitle?: () => any,
    handleDetectLabel?: () => any,
    handleDetectMultiInput?: () => any,
    listDocument?: string[],
    getSignatureFiles?: (a: any, b: number, c: string) => void,
    openDialog?: (a: string) => void,
    listFileUpload?: any,
    handleCheckExistSection?:(a: string) => boolean
  }

  export interface INoneRepricingRequestTitle {
    cx: any,
    title: string
  }

  export interface INoneRepricingFormFullRedemption {
    reasonForFullRedemption: string,
    lawFirmAppointment: string,
    prepaymentInstructions: string
    businessName: string,
  }


  export interface INoneRepricingFullRedemption {
    ref?: any,
    handleValidationInputFile?: () => any
    listDocument?: any,
    listFileUpload?: any
    dataSubmit?: any;
    setLoading?: (value: boolean) => any;
    setDataError?: (value: any) => any;
    openDialog?: (value: string) => any;
  }


  export interface INoneRepricingFormFullRedemptionIntro {
    handleDetectHeaderAndIntroText: () => string
  }

  export interface INoneRepricingFormFullRedemptionSection {
    dataFormFullRedemption: INoneRepricingFormFullRedemption,
    selectKey: number,
    setValueFormRedemption: (a: string, b: string) => void,
    listReason: ISelect[],
    listLawFirmAppointment: ISelect[],
    listRadio: IRadio[],
    setValueAndResetFirLawFirm: (a: string, b: string) => void,
    setChange?: (a: boolean) => void;
  }


  export interface IDocumentRequest {
    cx: any,
    formReduxData: any,
    listDocument: string[],
    selectKey: number,
    getSignatureFiles: (a: any, b: number, c: string) => void,
    openDialog: (a: string) => void,
    listFileUpload: any,
  }
}

export { INoneRepricingRequest };
