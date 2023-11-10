declare module "*.scss" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}

declare module "*.gif" {
  const content: any;
  export default content;
}

declare module "*.css" {
  const content: any;
  export default content;
}

declare module "styled-components";

declare module "@sectionsg/orc";

declare module "enzyme-adapter-react-16";

declare module "react-router-dom";

declare module "redux-logger";

declare module "react-redux";

declare module "react-vis";

declare module "history";

declare module "glob";

declare module "i18next-node-fs-backend";

declare module "typesafe-actions";

declare module "react-transition-group";

declare module "react-slick";

declare module "body-scroll-lock";

declare module "react-spinners/DotLoader";
declare interface ITransaction {
  id: string;
  icon: string; // @FIXME: potential security leak
  amount: number;
  currency?: string;
  from: string;
  identifier?: string;
  localizedtime: string;
  timezone: string;
  timestamp: number;
  reference: string;
  pending: boolean;
  debit: boolean;
  canDispute?: boolean;
  canSplitToInstallments?: boolean;
}

declare module "joi-validation-strategy";
declare module "react-validation-mixin";
declare interface IValidation {
  errors: { [field: string]: string };
  validate: (error: any) => void;
  isValid: (key: string) => boolean;
  getValidationMessages: (key: string) => string[];
  clearValidations: () => void;
}
