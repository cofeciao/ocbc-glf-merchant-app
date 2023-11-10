export type IStepper = {
  getStepContent?: () => JSX.Element;
  getSteps?: () => IDataStep[];
  pathStep: string;
};

export type IDataStep = {
  id: string;
  text: string;
};
