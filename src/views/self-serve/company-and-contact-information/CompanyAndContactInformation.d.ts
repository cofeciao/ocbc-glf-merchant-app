import { FieldValues, RegisterOptions } from "react-hook-form";

declare namespace ICompanyAndContactInformation {
  export interface FormData {
    registeredEntityName: string;
    uniqueEntityNumber: string;
    companyType: string;
    contactNumber: string;
    salutation: string;
    name: string;
    email: string;
    designation: string;
    areaCode: string;
  }
  export interface ITextField {
    description?: string;
    label: string;
    helperText?: string;
    requiredText?: string;
  }

  export interface ICompanyRegistration {
    cx: any;
    errors?: any;
    register?: any;
    data: {
      title: string;
      description: string;
      inputFields: {
        registeredEntityName: ITextField;
        uniqueEntityNumber: ITextField;
        companyType: ITextField;
      };
    };
    dataRedux?: any;
  }

  export interface IContactDetails {
    cx: any;
    errors?: any;
    register?: any;
    setValue?: any;
    setError: any;
    data: {
      title?: string;
      description?: string;
      inputFields: {
        contactNumber: ITextField;
        salutation: ITextField;
        name: ITextField;
        email: ITextField;
        designation: ITextField;
      };
    };
    dataRedux?: FormData;
  }
}

export { ICompanyAndContactInformation };
