import React from "react";

declare namespace ILanding {
  export interface IProps {

  }
  export interface IDataCheckItem {
    data: any,
    checked: boolean,
    name: string,
    statusError: boolean,
  }

  export interface IItemCheckbox {
    label: string,
    checked: boolean
  }

  export interface ILandingDemo {
    handleSetDefaultManualJointBorrower: (a: string) => void,
    handleAddBothRepricingAndLengthening: () => void,
  }


  export interface IListSelect {
    label: string,
    checked: boolean
  }

  export interface IDataFullRedemption {
    lockIn: string,
    reason: string,
    youRate?: string,
  }
  export interface IDataPartialPrepayment {
    lockIn: string,
    yourRate: string,
  }

  export interface IDataLengtheningOfLoanTenure {
    purpose: string,
  }

  export interface IDataFormLanding {
    lockIn: string,
    reason: string,
    yourRate: string,
    purpose: string,
    national: string,
    termLoan: string,
    mainApplicant?: string;
  }

  export interface IDataCommon {
    cx: any,
    formReduxData: any,
    contentShow: any,
  }

  export interface IOTP {
    cx: any,
    handleError: (a: any) => void,
    getCodeOTP: (a: string, b: any) => void,
    isDisableModalVerified: boolean,
    codeOTP: any,
    isResend: boolean,
    times: number,
    closeDialog: () => void,
    prevOtp: any[],
    setTimes: any,
    isError: boolean, 
    setIsError: (a: boolean) => void,
    CountDown: () => void,
    timeRef: any,
    setIsResend: (a: boolean) => void,
    handlePrevOTP: (a: any) => void
    formReduxData: any,
    handleClickChangeStep: (a: string, b: number) => void,
    stepInstruction: any,
    handleScrollTopId: (a: string) => void,
    handleCallApiLoanAppMgmt: (a: string) => void,
    handleClickOkForOTP: () => void
    handleGenerateOTP: () => void;
  }

  export interface IDataSelectCommon {
    value: string,
    key: string
  }

  export interface IHomeLoanRequest {
    cx: any,
    checkboxKey: number,
    dataCardCheckbox: IListSelect[],
    handleGetValueCheckbox: (value: IDataCheckItem) => void
  }

  export interface ILandingMessage {
    cx: any,
    keyValidation: number,
    contentShow: string[],
    listSelectPurpose: IDataSelectCommon,
    setValueFormLandingPage: (a: string, b: string) => void,
    formDataLanding: IDataFormLanding,
    errCheckbox: boolean,
    checkMatchOption: any,
    listSelectPartialPrepayment: IDataSelectCommon,
    listSelectFullRedemption: IDataSelectCommon,
  }

  export interface ILandingWhatYouNeed {
    cx: any,
    keyValidation: number,
    contentShow: string[],
    checkMatchOption: any,
    checkMatchOptionBorrowerFlow: any,
    formReduxData: any,
    formDataLanding: IDataFormLanding,
    openDialog: (a: string) => void,
    history: any,
    handleShowListDocument: () => void,
    setValueFormLandingPage: (a: string, b: string) => void,
    handleCheckManualAndLenthenTenureMoreThanOne: () => boolean,
    handleNextPage: (name: string) => void,
    checkReturnConditionListDocumentDefault: () => boolean,
    checkReturnConditionListDocumentForManual: () => boolean,
    handleVerifyChangeUI: () => boolean,
    handleClickButtonNextForManual: () => void
    handleCallApiLoanAppMgmt: (value: string, code: string) => void,
    simulatorLoginSingPass: any,
    handleValidation?: any
    query?: any;
    dispatch?: any;
    getListDocument?: any;
    setLoading?: any;
  }
}

export { ILanding };
