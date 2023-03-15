import classNames from "classnames";
import React, { forwardRef, useEffect, useState } from "react";
import {
  Loading,
  Button,
  Category,
} from '@sectionsg/orc';
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

//import icon
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// import style
import styles from "./ReviewSubmit.scss";

// import constants
import { URL_MANUAL_FLOW } from "@/utils/constants-rm";

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

const ReviewSubmit: React.FC<IReviewSubmit.IProps> = forwardRef(({  }, ref) => {
  const cx = classNames.bind(styles);
  const history = useHistory()
  const dispatch = useDispatch();

  // States
  const [loading, setLoading] = useState(false);

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
   * Handle button prev
   */
  const handlePrev = () => {
    history.push(URL_MANUAL_FLOW.supplementaryDocument)
  }

   /**
   * Handle button next
   */
   const handleNext = async () => {
    history.push(URL_MANUAL_FLOW.supplementaryDocument);
  }

    /**
   * render UI Button
   * @returns {HTML}
   */
    const renderButton = () => {
      return (
        <Button 
          backgroundClass="bgGunmetalBluegrey" 
          onClick={handleNext}
          // disabled={!isValid || !isDirty}
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

      <Box className={cx('review-submit')}>
        <div className="review-submit-category" >
          <Category class="title">Review and submit</Category>
        </div>

        {/* Section Cashless payment method */}
        <SectionWrapper cx={cx} title="Cashless payment method(s)">
          <CashPaymentMethod cx={cx} data={dataReview.transactionAndCardAcceptanceType}/>
        </SectionWrapper>

        {/* Section Transaction and card acceptance type */}
        <SectionWrapper cx={cx} title="Transaction and card acceptance type" isEdit handleEdit={() => {}}>
          <TransactionAndCardAcceptanceType cx={cx} data={dataReview.transactionAndCardAcceptanceType}/>
        </SectionWrapper>

        {/* Section Fees and rates */}
        <SectionWrapper cx={cx} title="Fees and rates" isEdit handleEdit={() => {}}>
          <FeesAndRates cx={cx} data={dataReview.feesAndRates}/>
        </SectionWrapper>

        {/* Section Fee authorisation */}
        <SectionWrapper cx={cx} title="Fee authorisation" isEdit handleEdit={() => {}}>
          <MaintenanceFeeAuthorisation cx={cx} data={dataReview.maintenanceFeeAuthorisation}/>
        </SectionWrapper>

        {/* Section Company registeration */}
        <SectionWrapper cx={cx} title="Company registration" isEdit handleEdit={() => {}}>
          <CompanyRegistration cx={cx} data={dataReview.servicesApplied}/>
        </SectionWrapper>

        {/* Section Business operation details */}
        <SectionWrapper cx={cx} title="Business operation details" isEdit handleEdit={() => {}}>
          <BusinessOperationDetails cx={cx} data={dataReview.businessDetails}/>
        </SectionWrapper>

        {/* Section Products and services */}
        <SectionWrapper cx={cx} title="Products and services" isEdit handleEdit={() => {}}>
          <ProductsAndServices cx={cx} data={dataReview.productsAndServices}/>
        </SectionWrapper>

        {/* Section Sensitive data */}
        <SectionWrapper cx={cx} title="Sensitive data" isEdit handleEdit={() => {}}>
          <SensitiveData cx={cx} data={dataReview.sensitiveData}/>
        </SectionWrapper>

        {/* Section Beneficial ownership */}
        <SectionWrapper cx={cx} title="Beneficial ownership" isEdit handleEdit={() => {}}>
          <BeneficialOwnership cx={cx} data={dataReview.beneficialOwner}/>
        </SectionWrapper>

        {/* Section Supplementary documents */}
        <SectionWrapper cx={cx} title="Supplementary documents" isEdit handleEdit={() => {}}>
          <SupplementaryDocuments cx={cx} data={dataReview.supplementaryDocuments}/>
        </SectionWrapper>

       
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
    </Box>
  </React.Fragment>
  )
});

export default ReviewSubmit;