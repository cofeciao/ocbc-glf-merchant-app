declare namespace IContinueLaterDialog {
  export interface IDialog {
    handleOpenContinueLaterDialog: Function;
  }
  export interface IReviewAndSaveDialog {
    dataRedux: {
      email: string;
      name: string;
      contactNumber: string;
    };
    onCloseDialog: Function;
  }
}

export { IContinueLaterDialog };
