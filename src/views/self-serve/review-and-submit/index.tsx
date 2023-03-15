// import modules
import { Category, Button } from "@sectionsg/orc";
import React, { useState } from "react";
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
import _ from "lodash";

// import constants
import {
  CONTINUE_LATER,
  LIST_ROUTER,
  SELF_SERVE_PAGE,
  SUBMIT,
} from "@/utils/constants";

// import style
import styles from "./ReviewAndSubmit.scss";

// import types

//import icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

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
   * Retrieves data of Transaction And Card Acceptance Type step from Store
   */
  const cashlessPaymentsMethods = useSelector((state: any) =>
    state.form.transactionAndCardAcceptanceTypeStep.filter(
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

  /**
   * render UI button
   * @returns {HTML}
   */
  const renderButton = () => {
    return (
      <Button
        backgroundClass="bgGunmetalBluegrey"
        disabled={disabledButton}
        onClick={() => {
          history.push(LIST_ROUTER.acknowledgement_successful);
        }}
      >
        <>{SUBMIT}</>
      </Button>
    );
  };

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

      <AgreePolicy getValue={(value: boolean) => setDisableButton(!value)} />

      {/* {Next Button}  */}
      <Box className={cx("button-wrapper", "d-flex justify-end mt-dt-40")}>
        <Button
          backgroundClass="square"
          onClick={() => history.push(LIST_ROUTER.products_and_services)}
        >
          <ArrowBackIcon className={cx("arrow")} />
        </Button>
        <Box>
          <Box className={cx("d-inline")}>
            <Link to="/">{CONTINUE_LATER}</Link>
          </Box>
          <Box className="ml-dt-30 d-inline">{renderButton()}</Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ReviewAndSubmit;
