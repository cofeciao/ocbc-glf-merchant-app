import React from "react";

declare namespace IAccountInformation {
  export interface IProps {
    checkMatchOptionNonRepricing: () => boolean;
    checkMatchOptionNonRepricingAndPricingInvestment: () => boolean;
    ref: any,
    children: any
  }

  export interface IValueData {
    value: string;
    error: string;
    ref: any
  }

  export interface IRadio {
    text: string,
    checked: boolean
  }
}

export { IAccountInformation };
