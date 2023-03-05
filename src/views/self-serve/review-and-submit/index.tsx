// import modules
import { Category, Button } from "@sectionsg/orc";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCheckBox from "@/components/ListCheckBox";
import { saveDataTransactionAndCardAcceptanceTypeStep } from "@/store/form";
import { Box, Grid } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";
import _ from "lodash";

// import constants
import {
  CONTINUE_LATER,
  LIST_ROUTER,
  NEXT,
  SELF_SERVE_PAGE,
  SUBMIT,
} from "@/utils/constants";

// import style
import styles from "./ReviewAndSubmit.scss";

// import types

//import icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import CashlessPaymentMethod from "./CashlessPaymentMethod";
import CompanyAndContactInfomation from "./CompanyAndContactInfomation";
import TransactionAndCardAcceptanceType from "./TransactionAndCardAcceptanceType";
import AgreePolicy from "./AgreePolicy";
import ProductsAndServices from "./ProductsAndServices";

// render UI
const ReviewAndSubmit: React.FC<any> = () => {
  const {
    list_step: {
      review_and_submit: {
        text,
        // section: { which_service_are_you_applying_for },
      },
    },
  } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const [key, setKey] = useState<number>(0);
  const history = useHistory();
  const [disabledButton, setDisabledButton] = useState<boolean>(true);

  /**
   * Retrieves data of Transaction And Card Acceptance Type step from Store
   */
  const cashlessPaymentsMethods = useSelector((state: any) =>
    state.form.transactionAndCardAcceptanceTypeStep.dataListCheckbox.filter(
      (item: any) => item.checked === true
    )
  );

  /**
   * Retrieves data of Company And Contact Information step from Store
   */
  const companyAndContactInformationStep = useSelector(
    (state: any) => state.form.companyAndContactInformationStep.data
  );

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
          history.push(LIST_ROUTER.business_details);
        }}
      >
        <>{SUBMIT}</>
      </Button>
    );
  };

  return (
    <Box className={cx("review-and-submit-wrapper step-wrapper")}>
      {/* {Category} */}
      <section className={cx("category-wrapper")}>
        <Category>{text}</Category>
      </section>

      {/* {Section Contact details} */}
      <SectionWrapper cx={cx} title="Cashless payment method(s)">
        <CashlessPaymentMethod data={cashlessPaymentsMethods} />
      </SectionWrapper>

      <SectionWrapper cx={cx} title="Company registration">
        <CompanyAndContactInfomation data={companyAndContactInformationStep} />
      </SectionWrapper>

      <SectionWrapper cx={cx} title="Transaction and card acceptance type">
        <TransactionAndCardAcceptanceType />
      </SectionWrapper>

      <SectionWrapper cx={cx} title="Business details"></SectionWrapper>

      <SectionWrapper cx={cx} title="Products and services">
        <ProductsAndServices data={productsAndServicesStep} />
      </SectionWrapper>

      <AgreePolicy />

      {/* {Next Button}  */}
      <section className={cx("button-wrapper", "d-flex justify-end mt-dt-40")}>
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
      </section>
    </Box>
  );
};
export default ReviewAndSubmit;
