import React from "react";

declare namespace IRepricingRequest {
  export interface IProps {
    handleCallAPI?: (a: string) => void,
    checkMatchOptionNonRepricingAndPricing: () => boolean;
    ref: any;
    children: any;
  }
}

export { IRepricingRequest };
