// import modules
import { Category } from "@sectionsg/orc";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import SectionWrapper from "@/views/self-serve/SectionWrapper";
import CashlessPaymentMethod from "./CashlessPaymentMethod";
import CompanyAndContactInfomation from "./CompanyAndContactInfomation";
import TransactionAndCardAcceptanceType from "./TransactionAndCardAcceptanceType";
import AgreePolicy from "./AgreePolicy";
import ProductsAndServices from "./ProductsAndServices";
import BusinessDetails from "./BusinessDetails";
import RedirectButton from "../RedirectButton";
import _ from "lodash";

// import constants
import { LIST_ROUTER, SELF_SERVE_PAGE } from "@/utils/constants";

// import style
import styles from "./ReviewAndSubmit.scss";
import Loading from "@/components/Loading";

// render UI
const ReviewAndSubmit: React.FC = () => {
  const {
    LABEL_CASHLESS_PAYMENT_METHOD,
    LABEL_COMPANY_REGISTRATION,
    LABEL_TRANSACTION_AND_CARD_ACCEPTANCE_TYPE,
    LABEL_BUSINESS_DETAILS,
    LABEL_PRODUCTS_AND_SERVICES,
    LIST_STEP: {
      reviewAndSubmit: { text },
    },
  } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);
  const [disabledButton, setDisableButton] = useState<boolean>(true);
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * Handle scrolling to top on page load
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  /**
   * Temporarily put here for dev
   */
  const handleSubmit = async () => {
    setLoading(true);
    const dataForm = {
      cashlessPaymentsMethods: cashlessPaymentsMethods,
      companyAndContactInformationStep: companyAndContactInformationStep,
      transactionAndCardAcceptanceTypeStep:
        transactionAndCardAcceptanceTypeStep,
      businessDetailsStep: {
        listWebsiteUrl: listWebsiteUrl,
        businessDetailsStep,
      },
      productsAndServicesStep: productsAndServicesStep,
    };
    setTimeout(() => {
      history.push(LIST_ROUTER.acknowledgement_successful);
    }, 2000);
  };

  /**
   * Retrieves data of Transaction And Card Acceptance Type step from Store
   */
  const cashlessPaymentsMethods = useSelector((state: any) =>
    state.form.cashlessPaymentMethod.filter(
      (item: any) => item.checked === true
    )
  );

  /**
   * * Retrieves data of Transaction And Card Acceptance Type step from Store
   * * return "point-of-sales" || "e-commerce" || "point-of-sales-e-commerce"
   */
  const optionSelected = useSelector((state: any) =>
    state.form.transactionAndCardAcceptanceTypeStep
      .map((item: any) => (item.checked === true ? item.value : ""))
      .filter((item: string) => item !== "")
      .join("-")
  );

  /**
   * Retrieves data of Company And Contact Information step from Store
   */
  const companyAndContactInformationStep = useSelector(
    (state: any) => state.form.companyAndContactInformationStep
  );

  /**
   * Retrieves data of Transaction And Card Acceptance Type step from Store
   */
  const transactionAndCardAcceptanceTypeStep = useSelector((state: any) =>
    state.form.transactionAndCardAcceptanceTypeStep.filter(
      (item: any) => item.checked === true
    )
  );

  /**
   * Retrieves data of Business Details step from Store
   */
  const businessDetailsStep = useSelector(
    (state: any) => state.form.businessDetailsStep
  );

  /**
   * Retrieves data of List Website Url step from Store
   * List Website Url as data from Business Details step
   */
  const listWebsiteUrl = useSelector((state: any) => state.form.listWebsiteUrl);

  /**
   * Retrieves data of Products And Services step from Store
   */
  const productsAndServicesStep = useSelector(
    (state: any) => state.form.productsAndServicesStep
  );

  return (
    <Box className={cx("review-and-submit-wrapper step-wrapper")}>
      {loading && <Loading />}

      {/* {Category} */}
      <Box className={cx("category-wrapper")}>
        <Category>{text}</Category>
      </Box>

      {/* {Section Cashless Payment Method} */}
      <SectionWrapper cx={cx} title={LABEL_CASHLESS_PAYMENT_METHOD}>
        <CashlessPaymentMethod data={cashlessPaymentsMethods} />
      </SectionWrapper>

      {/* {Section Company And Contact Infomation} */}
      <SectionWrapper
        cx={cx}
        title={LABEL_COMPANY_REGISTRATION}
        edit={true}
        onClickEdit={() => {
          history.push(LIST_ROUTER.company_and_contact_information);
        }}
      >
        <CompanyAndContactInfomation data={companyAndContactInformationStep} />
      </SectionWrapper>

      {/* {Section Transaction And Card Acceptance Type} */}
      <SectionWrapper
        cx={cx}
        title={LABEL_TRANSACTION_AND_CARD_ACCEPTANCE_TYPE}
        edit={true}
        onClickEdit={() => {
          history.push(LIST_ROUTER.transaction_and_card_acceptance_type);
        }}
      >
        <TransactionAndCardAcceptanceType
          data={transactionAndCardAcceptanceTypeStep}
        />
      </SectionWrapper>

      {/* {Section Business Details} */}
      <SectionWrapper
        cx={cx}
        title={LABEL_BUSINESS_DETAILS}
        edit={true}
        onClickEdit={() => {
          history.push(LIST_ROUTER.business_details);
        }}
      >
        <BusinessDetails
          data={businessDetailsStep}
          listWebsiteUrl={listWebsiteUrl}
          optionSelected={optionSelected}
        />
      </SectionWrapper>

      {/* {Section Products And Services} */}
      <SectionWrapper
        cx={cx}
        title={LABEL_PRODUCTS_AND_SERVICES}
        edit={true}
        onClickEdit={() => {
          history.push(LIST_ROUTER.products_and_services);
        }}
      >
        <ProductsAndServices
          data={productsAndServicesStep}
          optionSelected={optionSelected}
        />
      </SectionWrapper>

      {/* {Divider} */}
      <Box id={cx("divider")} />

      {/* {Agree Policy} */}
      <AgreePolicy onGetValue={(value: boolean) => setDisableButton(!value)} />

      {/* {Next Button}  */}
      <RedirectButton
        disabledNextButton={disabledButton}
        continueLater
        backButton
        isIcon={false}
        variant="submit"
        onClickBack={() => {
          history.push(LIST_ROUTER.products_and_services);
        }}
        onClickNext={() => {
          handleSubmit();
        }}
      />
    </Box>
  );
};
export default ReviewAndSubmit;
