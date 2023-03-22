declare namespace IReviewSubmit {
  export interface IProps {
    ref: any
  }
  export interface ICashPaymentMethod {
    cx: any;
    data: any;
    titles: {
      titleCashlesPaymentMethod: string;
      titleMode: string;
    }
  }

  export interface ITransactionAndCardAcceptanceType {
    cx: any;
    data: any;
    titles: {
      titleTransactionAndCardAcceptanceType: string;
      titleService: string;
      titlePaymentOptions: string;
      otherServices: {
        titleOtherServices: string;
        titleInstalmentPaymentPlan: string;
        titleRepaymentPeriodsOffered: string;
        titleDirectCurrencyConversion: string;
        titleMailOrder: string;
      }
    }
  }

  export interface IFeesAndRates {
    cx: any;
    data: any;
    titles: {
      titleMerchantDiscountRate: string;
      titleFeeAndRates: string;
      fees: {
        titleFees: string;
        titleAnnual: string;
        titleOneTimeSetupFee: string
        titlePerDomesticTransaction: string
        titlePerInternationalTransaction: string;
        titleTokenisation: string;
        titleOtherFees: string;
        titleDescriptionForOtherFees: string;
      },
      refundableFees: {
        titleRefundableFees: string;
      }
    }
  }

  export interface ISupplementaryDocuments {
    cx: any;   
    titles: {
      titleSupplementaryDocuments: string;
      titleAuthorisedSignatory: string;
      titleTenancyDocument: string;
      titleCopyOfBankStatement: string;
      titleAnyOtherSupportingDocuments: string;
    }; 
  }

  export interface IMaintenanceFeeAuthorisation {
    cx: any;
    data: any;
    titles: {
      titleFeeAuthorisation: string;
      titleFirstYearPayment: string;
      titleSubsequentYearsPayment: string;
    }
  }

  export interface IBeneficialOwnership {
    cx: any;
    titles: {
      titleBeneficialOwnership: string;
      titleSalutation: string;
      titleName: string;
      titleDesignation: string;
      titleNRIC: string
      titleDateOfBirth: string;
      titleNationality: string;
      titleAddress: string;
    };
    data: any;
  }

  export interface ISensitiveData {
    cx: any;
    data: any;
    titles: {
      titleStoreCreditCard: string;
      titleDataProtectedByHierachical: string;
      titleEncryptionMothod: string;
      titleCompliantWithThePaymentCard: string;
      titlePCIDSSCertificate: string;
    }
  }

  export interface IProductsAndServices {
    cx: any;
    data: any;
    titles: {
      titleTypeOfProduct: string;
      titleOrderFulfilment: string;
      titleAverageAmountPerCreditCardTransaction: string;
      titleAnnualCreditCardSalesForecast: string;
      refundPolicy: {
        titleRefundPolicy: string;
        titleCopyOfRefundPolicy: string;
      }
    }
  }

  export interface IDirectors {
    name: string;
    nricNumber: string;
  }

  export interface ICompanyRegistration {
    cx: any;
    titles: {
      titleCompanyRegistration: string;
      titleRegisteredEntityName: string;
      titleUniqueEntityNumber: string;
      titleEntityType: string;
      titleNatureOfBusiness: string;
      titleRegisteredAddress: string;
      titleMailingAddress: string;
      titleDirectors: string;
      contactDetail: {
        titleContactDetails: string;
        titleSalutation: string;
        titleName: string;
        titleDesignation: string;
        titleEmail: string;
        titleContactNumber: string;
      }
      authorisedPersonDetails: {
        titleAuthorisedPersonDetails: string;
        titleSalutation: string;
        titleName: string;
        titleDesignation: string;
        titleEmail: string;
        titleContactNumber: string;
      }
    }
  }
  export interface IBusinessOperationDetails {
    cx: any;
    data: any;
    titles: {
      titleBusinessOperationDetails: string;
      titleNumberOfOutlets: string;
      titleBusinessReadyToOperate: string;
      titleOCBCBusinessAccount: string;
      titleOCBCCusinessAccountNumber: string;
      titleExistingWebsite: string;
      titleWebsiteURL: string;
      titlePlaceOrderThroughWebsite: string;
      titleBusinessOfferings: string;
      titleAvailableSpaces: string;
      titleCardPaymentAvailable: string;
      outlet: {
        titleTradeName: string;
        titlePostalCode: string;
        titleBlockNumber: string;
        titleStreetName: string;
        titleUnitNumber: string;
      }
    }
  }

  export interface IDeclaration {
    cx: any;
    dataDeclaration: any;
    setDataDeclaration: (values: any) => void;
  }
}


export { IReviewSubmit };