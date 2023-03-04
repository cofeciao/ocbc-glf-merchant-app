declare namespace IWelcome {
  
  export interface IParams {
    page: number,
    pageSize: number,
    keyword: string,
  }

  export interface IHeaderTable {
    title: string,
    width: number,
    align: 'inherit' | 'left' | 'center' | 'right' | 'justify',
  }

  export interface IPagination {
    onPageChange: (page: number) => void,
    totalCount: number,
    siblingCount?: number,
    currentPage: number,
    pageSize: number,
    className?: string,
  }
}

export { IWelcome };
