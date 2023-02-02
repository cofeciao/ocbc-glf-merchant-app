import React from "react";

declare namespace IAccountInformation {
  export interface IProps {
    checkMatchOptionNonRepricing: () => boolean;
    checkMatchOptionNonRepricingAndPricingInvestment: () => boolean;
    ref: any;
    children: any;
  }

  export interface IValueData {
    value: string;
    error: string;
  }
}

export { IAccountInformation };
