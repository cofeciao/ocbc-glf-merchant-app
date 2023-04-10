declare namespace IFeesRates {
  export interface IProps {
    ref: any
  }
  export interface IFees {
    cx: any,
    form: {
      setValue: any,
      register: any,
      watch: any
    }
  }
  export interface IHeaderTable {
    title: string;
    width?: number;
    align?: "center" | "inherit" | "left" | "right" | "justify"
  }

  export interface ITableEdtiting {
    cx: any;
    headers: any;
    dataSource: any,
    setDataSource: (values: any) => void;
    handleEditRow?: (indexCurrent: number, e: React.ChangeEvent<HTMLInputElement>, keyName: string) => void;
  }

}

export { IFeesRates };
