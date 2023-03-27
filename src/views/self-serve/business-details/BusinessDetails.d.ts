declare namespace ICompanyAndContactInformation {
  export interface IBusinessInfomation {
    listField?: [];
    register?: any;
    errors?: any;
    unregister?: any;
    setValue?: any;
    dataRedux?: any;
    optionSelected?: any;
  }

  export interface IWebsiteInformation {
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

  export interface IOtherInformation {
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
}

export { ICompanyAndContactInformation };
