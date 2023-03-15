declare namespace IFeesRates {
  export interface IProps {
    ref: any
  }
  export interface IFees {
    cx: any
  }
  export interface IHeaderTable {
    title: string;
    width?: number;
    align?: "center" | "inherit" | "left" | "right" | "justify"
  }

  export interface ITableEdtiting {
    cx: any;
    dataSource: any[];
    handleEditRow: (indexCurrent: number, e: React.ChangeEvent<HTMLInputElement>, keyName: string) => void;
    headers: any[]
  }

}

export { IFeesRates };
