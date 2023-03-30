import { ICheckBox } from "@/components/ListCheckBox/ListCheckBox";

declare namespace IHome {
  export interface IDataCheckItem {
    data: any,
    checked: boolean,
    name: string,
    statusError: boolean,
  }

  export interface IDataCommon {
    cx: any,
    formReduxData: any,
    contentShow: any,
  }

  export interface IListSelect {
    label: JSX.Element | string,
    description?: string,
    checked: boolean
  }

  export interface IItemCheckbox {
    label: string,
    checked: boolean
  }

  export interface IHomeCashlessPaymentMethods {
    cx: any,
    title: string,
    description: string,
    errorMessage: string,
    checkboxKey?: number,
    dataCardCheckbox: ICheckBox[],
    getValueCheckbox?: Function
  }

  export interface IHomeThingsToTakeNoteOf {
    cx: any,
    title: string,
    listItem: string[]
  }
}

export { IHome };
