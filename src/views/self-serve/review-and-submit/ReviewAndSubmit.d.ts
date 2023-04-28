import { ICheckBox } from "@/components/GroupCheckBox/GroupCheckBox";

declare namespace IReviewAndSubmit {
  export interface IAgreePolicy {
    onGetValue: Function;
  }
  export interface ICashlessPaymentMethod {
    data: {
      label: string;
      description?: string;
      value: string;
      checked?: boolean;
    }[];
  }
  export interface ICompanyAndContactInfomation {
    data: {
      registeredEntityName?: string;
      uniqueEntityNumber?: string;
      companyType?: string;
      salutation?: string;
      name?: string;
      email?: string;
      designation?: string;
      areaCode?: string;
      contactNumber?: string;
    };
  }
  export interface ITransactionAndCardAcceptanceType {
    data: {
      label: string;
      value: string;
      checked: true;
      expandedListCheckbox: {
        description: string;
        listCheckbox: {
          label: string;
          checked: true;
          value: string;
          disabled: true;
        }[];
      };
    }[];
  }
  export interface IBusinessDetails {
    optionSelected: string;
    listWebsiteUrl: Array<string>;
    data: {
      businessReadyToOperate?: string;
      operationStartingPeriod?: string;
      businessAccount?: string;
      existingWebsite?: string;
      placeOrderThroughWebsite?: string;
      numberOfOutlets?: string;
      cardPaymentAvailableAtRetailStore?: string;
      websiteLiveDate: string;
      businessOfferings?: ICheckBox[];
      availableSpaces?: ICheckBox[];
    };
  }

  export interface IProductsAndServices {
    optionSelected: string;
    data: {
      eCommerce: {
        orderFulfilment: string;
        productDelivery: string;
        typeOfProductAndService: string;
        deliveryTimeToCustomers: string;
        estimatedAmount: string;
        estimatedAnnualCredit: string;
        productDeliveredFrom: ICheckBox[];
        percentageOfProductsNotFulfilledImmediately: string;
      };
      pointOfSales: {
        orderFulfilment: string;
        typeOfProductAndService: string;
        estimatedAmount: string;
        estimatedAnnualCredit: string;
        deliveryTimeToCustomers: string;
        percentageOfProductsNotFulfilledImmediately: string;
        duration: string;
      };
    };
  }
}

export { IReviewAndSubmit };
