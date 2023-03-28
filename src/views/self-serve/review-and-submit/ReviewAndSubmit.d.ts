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
      businessAccount?: string;
      existingWebsite?: string;
      placeOrderThroughWebsite?: string;
      numberOfOutlets?: string;
      cardPaymentAvailableAtRetailStore?: string;
      websiteLiveDate: string;
      businessOfferings?: {
        name: string;
      }[];
      availableSpaces?: {
        name: string;
      }[];
    };
  }

  export interface IBusinessDetails {
    optionSelected: string;
    listWebsiteUrl: Array<string>;
    data: {
      businessReadyToOperate?: string;
      businessAccount?: string;
      existingWebsite?: string;
      placeOrderThroughWebsite?: string;
      numberOfOutlets?: string;
      cardPaymentAvailableAtRetailStore?: string;
      websiteLiveDate: string;
      businessOfferings?: {
        name: string;
      }[];
      availableSpaces?: {
        name: string;
      }[];
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
        averageAmountPerCreditCardTransaction: string;
        annualCreditCardSalesForecast: string;
        productDeliveredFrom: {
          name: string;
        }[];
        percentageOfProductsNotFulfilledImmediately: string;
      };
      pointOfSales: {
        orderFulfilment: string;
        typeOfProductAndService: string;
        averageAmountPerCreditCardTransaction: string;
        annualCreditCardSalesForecast: string;
        deliveryTimeToCustomers: string;
        percentageOfProductsNotFulfilledImmediately: string;
        duration: string;
      };
    };
  }
}

export { IReviewAndSubmit };
