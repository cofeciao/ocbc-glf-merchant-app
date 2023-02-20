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
    checkboxKey: number,
    dataCardCheckbox: IListSelect[],
    handleGetValueCheckbox: (value: IDataCheckItem) => void
  }

  export interface IHomeThingsToTakeNoteOf {
    cx: any
  }
}

export { IHome };
