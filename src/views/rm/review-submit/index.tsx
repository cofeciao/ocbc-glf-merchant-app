import classNames from "classnames";
import React, { forwardRef, useState } from "react";
import {
  Loading,
  Button,
  Category,
} from '@sectionsg/orc';
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

//import icon
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// import style
import styles from "./ReviewSubmit.scss";

// import constants
import { STEP_RM, URL_MANUAL_FLOW } from "@/utils/constants-rm";

//import types
import { IReviewSubmit } from "./ReviewSubmit";

//import components
import SectionWrapper from "../SectionWrapper";
import CashPaymentMethod from "./CashPaymentMethod";
import TransactionAndCardAcceptanceType from "./TransactionAndCardAcceptanceType";
import FeesAndRates from "./FeesAndRates";
import SupplementaryDocuments from "./SupplementaryDocuments";
import MaintenanceFeeAuthorisation from "./MaintenanceFeeAuthorisation";
import BeneficialOwnership from "./BeneficialOwnership";
import SensitiveData from "./SensitiveData";
import ProductsAndServices from "./ProductsAndServices";
import CompanyRegistration from "./CompanyRegistration";
import BusinessOperationDetails from "./BusinessOperationDetails";
import Declaration from "./Declaration";

const ReviewSubmit: React.FC<IReviewSubmit.IProps> = forwardRef(({  }, ref) => {
  const cx = classNames.bind(styles);
  const history = useHistory()

  const { LIST_STEP: {
    reviewAndSubmit: {
      title,
      section: {
        cashlessPaymentMethod,
        transactionAndCardAcceptanceType,
        feeAndRates,
        feeAuthorisation,
        companyRegistration,
        businessOperationDetails,
        productsAndServices,
        sensitive,
        beneficailOwnership,
        supplementaryDocuments
      }
    },
    declaration
  }} = STEP_RM;

  // States
  const [loading, setLoading] = useState(false);
  const [isDeclaration, setIsDeclaration] = useState<boolean>(false);
  const [dataDeclaration, setDataDeclaration] = useState<any>({
    valueRadio: "sign_on_device",
    reviewTheFolowing: {
      authoriseOCBC: false,
      schedules: false,
      settlement: false,
      immediate: false,
      merchant: false
    },
    provision: {
      declareInformation: false,
      authorise: false,
      declareConfirm: false
    },
    signOnDevice: '',
    uploadFile: ''
  });
  
  const { authoriseOCBC, schedules, settlement, immediate, merchant } = dataDeclaration.reviewTheFolowing;
  const { declareInformation, authorise, declareConfirm } = dataDeclaration.provision;
  
  // check validate for declare
  const errorReviewTheFollowing = [authoriseOCBC, schedules, settlement, immediate, merchant].filter((v) => v).length !== 0;
  const errorProvision = [declareInformation, authorise, declareConfirm].filter((v) => v).length !== 0; 

  const dataReview = {
    transactionAndCardAcceptanceType: {
      cashPaymentMethod: {
        typeCard: "Credit/Debit card",
        typePayment: "PayNow"
      },
      service: "Point-of-Sales terminal",
      paymentOptions: [
        "VISA",
        "UnionPay",
        "MasterCard",
        "WeChat Pay",
        "AliPay",
        "JCB",
        "Paynow",
        "OCBC Instalment Payment Plan (IPP)",
      ],
      otherServices: {
        instalmentPaymentPlan: true,
        repaymentPeriodOffered: [
          "6 months",
          "36 months",
          "12 months",
          "50 months",
          "24 months",
          "60 months",
        ],
        directCurrencyConversionForVisa: true,
        mailOrder: true
      }  
    },
    feesAndRates: {
      merchantDiscountRate: {
        acceptanceType: [
          {
            acceptanceType: "Visa",
            ocbcCards: "2.5",
            domesticCards: "2.5",
            internationalCards: "2.5"
          },
          {
            acceptanceType: "MasterCard",
            ocbcCards: "2.5",
            domesticCards: "2.5",
            internationalCards: "2.5"
          },
          {
            acceptanceType: "Union Pay",
            ocbcCards: "",
            domesticCards: "",
            internationalCards: "2.5"
          },
          {
            acceptanceType: "JCB",
            ocbcCards: "",
            domesticCards: "",
            internationalCards: "2.5"
          },
          {
            acceptanceType: "WeChat Pay",
            ocbcCards: "",
            domesticCards: "",
            internationalCards: "2.5"
          },
          {
            acceptanceType: "AliPay",
            ocbcCards: "",
            domesticCards: "",
            internationalCards: ""
          }
        ],
        services: [
          {
            acceptanceType: "Direct Currency Conversion (DCC)",
            ocbcCards: "2.5",
            domesticCards: "",
            internationalCards: ""
          },
          {
            acceptanceType: "Mail Order/Telephone Order",
            ocbcCards: "2.5",
            domesticCards: "2.5",
            internationalCards: "2.5"
          },
          {
            acceptanceType: "Instalment Payment Plan (IPP) 3 months",
            ocbcCards: "2.5",
            domesticCards: "",
            internationalCards: ""
          },
          {
            acceptanceType: "Instalment Payment Plan (IPP) 6 months",
            ocbcCards: "2.5",
            domesticCards: "",
            internationalCards: ""
          },
          {
            acceptanceType: "Instalment Payment Plan (IPP)12 months",
            ocbcCards: "0.00",
            domesticCards: "",
            internationalCards: ""
          }
        ],
      },
      fees: {
        annual: "SGD 642",
        oneTimeSetup: "SGD 1,000",
        perDomesticTransaction: "SGD 10",
        perInternationalTransaction: "SGD 10",
        others: "SGD 20",
        descriptionForOtherFees: "Misc fees"
      },
      refundableFees: {
        securityDeposit: "SGD 1,000",
      }
    },
    servicesApplied: {
      companyRegistration: {
        registeredEntityName: "AMZO Pte Ltd",
        uniqueEntityNumber: "2016347449N",
        entityType: "Private Limited Company",
        natureOfBusiness: "Café / Restaurant",
        registeredAddress: "35 Bedok North Road #09-39 Singapore 674902",
        mailingAddress: "35 Bedok North Road #09-39 Singapore 674902",
        directors: [
          "Lau Aik Miang S9300409F",
          "Zunaidi Zainal Azmian S9000555C",
        ],
      },
      contactDetail: {
        salutation: "Mrs",
        name: "Tracy Lim",
        designation: "Admin",
        email: "me@me.com",
        contactNumber: "8765 1234"
      },
      authorisedPersonDetails: {
        salutation: "Mrs",
        name: "Leong Huang Zi",
        designation: "Director",
        email: "hz@me.com",
        contactNumber: "9090 1234"
      },
    },
    businessDetails: {
      numberOfOutletWithPointOfSalesTerminals: 10,
      businessReadyToOperate: true,
      ocbcBusinessAccount: true,
      ocbcBusinessAccountNumber: "123-123456-123",
      exisitingWebsites: true,
      websiteURL: "www.abc.com",
      placeOrderThroughWebsites: true,
      businessOfferings: "Products and services",
      avaliableSpaces: [
        "Office",
        "Retail store",
        "Warehouse"
      ],
      cardPaymentAvailable: true,
      outletDetails: [
        {
          tradeName: "ABC Cafe",
          postalCode: 123456,
          blockHouseNumber: 125,
          streetName: "Tyrwhitt Road",
          unitNumber: "04-08",
        }
      ]
    },
    productsAndServices: {
      typeOfProduct: "Bistro / cafe",
      orderFulfiment: "Immediate fulfillment",
      averageAmountPerCreditCardTransaction: "SGD 100",
      annualCreditCardSalesForecast: "SGD 1,000,000 ",
      refundPolicy: true,
      copyOfRefundPolicy: "photo_2022-02-09-506.jpeg (800KB) ",
    },
    sensitiveData: {
      storeCreditCardInDatabase: true,
      dataProtectedByHierachicalStorageManagment: false,
      encryptionMethod: "XXXXXXX",
      compliantWithThePayment: true,
      pciDSSCertificate: "photo_2022-02-09-506.jpeg (800KB)",
    },
    beneficialOwner: [
      {
        salutation: "Mr",
        name: "Tracy Lim",
        designation: "Director",
        NRIC: "S1234567A",
        dateOfBirth: "02/03/1990",
        nationality: "Singaporean",
        address: "Blk 2 123 Rosewood Parc #14-14 S(120021)"
      },
      {
        salutation: "Mr",
        name: "Tracy Lim",
        designation: "Director",
        NRIC: "S1234567A",
        dateOfBirth: "02/03/1990",
        nationality: "Singaporean",
        address: "Blk 2 123 Rosewood Parc #14-14 S(120021)"
      }
    ],
    maintenanceFeeAuthorisation: {
      firstYearPayment: "OCBC account (123-123567-8)",
      subsequentYearsPayment: "Offset from daily sales"
    },
    supplementaryDocuments: {
      authorisedSignatory: "photo_2022-02-09-506.jpeg (800KB)",
      tenancyDocumentOrSiteVisitPhotos: [
        "photo_2022-02-09-506.jpeg (800KB)",
        "photo_2022-02-09-506.jpeg (800KB)",
        "photo_2022-02-09-506.jpeg (800KB)",
        "photo_2022-02-09-506.jpeg (800KB)"
      ],
      licenses: "photo_2022-02-09-506.jpeg (800KB) ",
      copyOfBankStatement: "photo_2022-02-09-506.jpeg (800KB) ",
      anyOtherSupportingDocuments: "photo_2022-02-09-506.jpeg (800KB) ",
    }
  };

  /**
    * Retrieves data of Supplementary documents from Store
   */
  const supplementaryDocumentData = useSelector(
    (state: any) => state.form.supplementaryDocumentStep
  );

  /**
    * Retrieves data of Beneficial ownership from Store
   */
  const beneficialOwnershipData = useSelector(
    (state: any) => state.form.beneficialOwnerShipStep
  );

  /**
    * Retrieves data of Sensitive from Store
  */
  const sensitiveData = useSelector(
    (state: any) => state.form.sensitiveStep
  );

  /**
    * Retrieves data of Fee And Rates from Store
  */
  const feeAndRateData = useSelector(
    (state: any) => state.form.feeAndRateStep
  );

  /**
    * Retrieves data of Sensitive from Store
  */
  const feeAuthorisationData = useSelector(
    (state: any) => state.form.feeAuthorisationStep
  );
  
  /**
   * Handle button prev
   */
  const handlePrev = () => {
    setIsDeclaration(false);
    if (!isDeclaration) { 
      history.push(URL_MANUAL_FLOW.supplementaryDocument)
    }
  }

   /**
   * Handle button next
   */
   const handleNext = async () => {
    setIsDeclaration(true);
  }

    /**
   * render UI Button
   * @returns {HTML}
   */
  const renderButton = () => {
    if (isDeclaration) {
      return (
        <Button 
          backgroundClass="bgGunmetalBluegrey" 
          onClick={() => {
            history.push("/rm/acknowledgement/successful")
            // history.push("/rm/acknowledgement/failed")
          }}
          disabled={!errorReviewTheFollowing || 
            !errorProvision
          }
        >
          Submit
          <ArrowForwardIcon className={cx('arrow', 'mrl-dt-5')} />
        </Button>
      )
    }
    return (
      <Button 
        backgroundClass="bgGunmetalBluegrey" 
        onClick={handleNext}
      >
        Next
        <ArrowForwardIcon className={cx('arrow', 'mrl-dt-5')} />
      </Button>
    )
  }

  return (
    <React.Fragment>
      {loading && <div className={cx('container-loading')}>
          <div className={cx('content-loading')}>
            <Loading />
          </div>
        </div>
      }
      {/* Review and Submit Page */}
      {!isDeclaration && (
        <Box className={cx('review-submit')}>
          <div className="review-submit-category" >
            <Category class="title">{title}</Category>
          </div>

          {/* Section Cashless payment method */}
          <SectionWrapper cx={cx} title={cashlessPaymentMethod.titleCashlesPaymentMethod}>
            <CashPaymentMethod cx={cx} titles={cashlessPaymentMethod} data={dataReview.transactionAndCardAcceptanceType}/>
          </SectionWrapper>

          {/* Section Transaction and card acceptance type */}
          <SectionWrapper cx={cx} title={transactionAndCardAcceptanceType.titleTransactionAndCardAcceptanceType} isEdit path="/rm/services-applied">
            <TransactionAndCardAcceptanceType cx={cx} titles={transactionAndCardAcceptanceType} data={dataReview.transactionAndCardAcceptanceType}/>
          </SectionWrapper>

          {/* Section Fees and rates */}
          <SectionWrapper cx={cx} title={feeAndRates.titleFeeAndRates} isEdit path="/rm/fee-rates">
            <FeesAndRates cx={cx} titles={feeAndRates} feeAndRateData={feeAndRateData}/>
          </SectionWrapper>

          {/* Section Fee authorisation */}
          <SectionWrapper cx={cx} title={feeAuthorisation.titleFeeAuthorisation} isEdit path="/rm/fee-authorisation">
            <MaintenanceFeeAuthorisation cx={cx} titles={feeAuthorisation} feeAuthorisationData={feeAuthorisationData}/>
          </SectionWrapper>

          {/* Section Company registeration */}
          <SectionWrapper cx={cx} title={companyRegistration.titleCompanyRegistration} isEdit path="/rm/contact-information">
            <CompanyRegistration cx={cx} titles={companyRegistration}/>
          </SectionWrapper>

          {/* Section Business operation details */}
          <SectionWrapper cx={cx} title={businessOperationDetails.titleBusinessOperationDetails} isEdit path="/rm/business-operation">
            <BusinessOperationDetails cx={cx} titles={businessOperationDetails} data={dataReview.businessDetails}/>
          </SectionWrapper>

          {/* Section Products and services */}
          <SectionWrapper cx={cx} title={productsAndServices.titleProductAndServices} isEdit path="/rm/products-services">
            <ProductsAndServices cx={cx} titles={productsAndServices} data={dataReview.productsAndServices}/>
          </SectionWrapper>

          {/* Section Sensitive data */}
          <SectionWrapper cx={cx} title={sensitiveData.titleSensitiveData} isEdit path="/rm/sensitive-data">
            <SensitiveData cx={cx} titles={sensitive} sensitiveData={sensitiveData}/>
          </SectionWrapper>

          {/* Section Beneficial ownership */}
          <SectionWrapper cx={cx} title={beneficailOwnership.titleBeneficialOwnership} isEdit path="/rm/beneficial-ownership">
            <BeneficialOwnership cx={cx} titles={beneficailOwnership} beneficialOwnershipData={beneficialOwnershipData} />
          </SectionWrapper>

          {/* Section Supplementary documents */}
          <SectionWrapper cx={cx} title={supplementaryDocuments.titleSupplementaryDocuments} isEdit path="/rm/supplementary-documents">
            <SupplementaryDocuments cx={cx} titles={supplementaryDocuments} supplementaryDocumentData={supplementaryDocumentData} />
          </SectionWrapper>
        </Box>
      )}

      {/* Declaration Page */}
      {isDeclaration && (
        <Box className={cx('declaration')}>
          <div className="declaration-category" >
            <Category class="title">{declaration.text}</Category>
          </div>
          <Declaration cx={cx} dataDeclaration={dataDeclaration} setDataDeclaration={setDataDeclaration} />
        </Box>
      )}

      {/* Section button  */}
      <section className={cx('button-wrapper', 'd-flex space-between mt-dt-40')}>
        <Button backgroundClass="square" onClick={handlePrev}>
          <ArrowBackIcon className={cx('arrow')} />
        </Button>
        <div>
          <div className={cx('d-inline')}>
            <Link to="/">Continue later</Link>
          </div>
          <div className="ml-dt-30 d-inline">
            {renderButton()}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
});

export default ReviewSubmit;