declare namespace ILanding {
  export interface IDataCheckItem {
    data: any,
    checked: boolean,
    name: string,
    statusError: boolean,
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

  export interface IHome {
    cx: any,
    checkboxKey: number,
    dataCardCheckbox: IListSelect[],
    handleGetValueCheckbox: (value: IDataCheckItem) => void
  }
}

export { ILanding };
