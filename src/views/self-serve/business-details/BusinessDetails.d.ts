declare namespace IBusinessDetails {
  export interface IBusinessDetailsForm {
    cx: any;
    data: {
      businessInfomation?: IBusinessInfomation;
      otherInfomation?: IOtherInformation;
      websiteInfomation?: IWebsiteInformation;
    };
    optionSelected: string;
    register?: any;
    unregister?: any;
    errors?: any;
    setValue?: any;
    dispatch?: any;
    dataRedux: any;
    listWebsiteRedux: Array<string>;
  }

  export interface IBusinessInfomation {
    title?: string;
    subTitle?: string;
    listField: {
      listRadio?: IRadio[];
      textField?: ITextField;
      dropdownField?: IDropdown;
    };
    register?: any;
    errors?: any;
    unregister?: any;
    setValue?: any;
    dataRedux?: any;
    optionSelected?: any;
  }

  export type IRadio = {
    description?: string;
  };

  export type ITextField = {
    description?: string;
    label?: string;
    helperText?: string;
    requiredText?: string;
    inputValue?: string;
  };

  export type IDropdown = {
    description?: string;
    placeholder?: string;
    helperText?: string;
    requiredText?: string;
    list: {
      name: string;
      value: string;
    }[];
  };

  export type ICheckBox = {
    description: string;
    list: {
      text: string;
      check: boolean;
    }[];
  };

  export interface IWebsiteInformation {
    title?: string;
    subTitle?: string;
    listField: {
      listRadioExistingWebsite?: IRadio;
      listRadioPlaceOrderThroughWebsite?: IRadio;
      dropdownField?: IDropdown;
      textField?: ITextField;
    };
    register?: any;
    errors?: any;
    unregister?: any;
    setValue?: any;
    dataRedux?: any;
    optionSelected?: any;
    listWebsiteRedux?: Array<string>;
  }

  export interface IOtherInformation {
    title?: string;
    sections: {
      listCheckboxBusinessOfferings: ICheckBox;
      listCheckboxAvailableSpaces: ICheckBox;
      listRadio: IRadio;
    };
    setValue?: any;
    dataRedux?: any;
  }
}

export { IBusinessDetails };
