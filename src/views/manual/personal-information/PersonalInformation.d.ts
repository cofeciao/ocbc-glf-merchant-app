import React from "react";

declare namespace IPersonalInformation {
  export interface IProps {
    handleCallAPI:(a: string) => void,
    ref: any
  }
  export interface IValueData {
    value: string;
    error: string;
  }

  export interface IRadio {
    text: string,
    checked: boolean
  }
}

export { IPersonalInformation };
