export type IRedirectButton = {
  variant: string;
  continueLater?: boolean;
  backButton?: boolean;
  onClickNext?: () => void;
  onClickBack?: () => void;
  disabledNextButton?: boolean;
  isIcon?: boolean;
};
