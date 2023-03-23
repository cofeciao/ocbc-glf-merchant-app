// import modules
import { Category, Button } from "@sectionsg/orc";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid } from "@material-ui/core";
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

// import types

// render UI
const ReviewAndSubmit: React.FC<any> = () => {
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

  /**
   * Handle scrolling to top on page load
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

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
      {/* {Category} */}
      <Box className={cx("category-wrapper")}>
        <Category>{text}</Category>
      </Box>

      {/* {Section Cashless Payment Method} */}
      <SectionWrapper cx={cx} title={LABEL_CASHLESS_PAYMENT_METHOD}>
        <CashlessPaymentMethod data={cashlessPaymentsMethods} />
      </SectionWrapper>

      {/* {Section Company And Contact Infomation} */}
      <SectionWrapper cx={cx} title={LABEL_COMPANY_REGISTRATION}>
        <CompanyAndContactInfomation data={companyAndContactInformationStep} />
      </SectionWrapper>

      {/* {Section Transaction And Card Acceptance Type} */}
      <SectionWrapper
        cx={cx}
        title={LABEL_TRANSACTION_AND_CARD_ACCEPTANCE_TYPE}
      >
        <TransactionAndCardAcceptanceType
          data={transactionAndCardAcceptanceTypeStep}
        />
      </SectionWrapper>

      {/* {Section Business Details} */}
      <SectionWrapper cx={cx} title={LABEL_BUSINESS_DETAILS}>
        <BusinessDetails
          data={businessDetailsStep}
          listWebsiteUrl={listWebsiteUrl}
          optionSelected={optionSelected}
        />
      </SectionWrapper>

      {/* {Section Products And Services} */}
      <SectionWrapper cx={cx} title={LABEL_PRODUCTS_AND_SERVICES}>
        <ProductsAndServices
          data={productsAndServicesStep}
          optionSelected={optionSelected}
        />
      </SectionWrapper>

      {/* {Agree Policy} */}
      <AgreePolicy getValue={(value: boolean) => setDisableButton(!value)} />

      {/* {Next Button}  */}
      <RedirectButton
        disabledNextButton={disabledButton}
        continueLater
        backButton
        variant="submit"
        onClickBack={() => {
          history.push(LIST_ROUTER.products_and_services);
        }}
        onClickNext={() => {
          history.push(LIST_ROUTER.acknowledgement_successful);
        }}
      />
    </Box>
  );
};
export default ReviewAndSubmit;
