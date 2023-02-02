import React from "react";

declare namespace IPropertyInformation {
  export interface IProps {
   ref: any;
   children: any;
   getDataFromPostalCode: (value: string) => void
   addressDetail: any;
  }

  export interface IValueData {
    value: string;
    error: string;
  }
}

export { IPropertyInformation };