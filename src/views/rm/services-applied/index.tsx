// import modules
import { Category } from "@sectionsg/orc";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Divider } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";
import _ from "lodash";
import TransactionCard from "./TransactionCard";
import OtherServices from "./OtherServices";
import RedirectButton from "../RedirectButton";

// import constants
import {
  STEP_RM,
  URL_MANUAL_FLOW,
  WELCOME_PATH,
} from "@/utils/constants-rm";

// import styles
import styles from "./ServicesApplied.scss";

// import types
import { IServicesApplied } from "./ServicesApplied";

// import stores
import {
  saveDataTransactionServicesApplied,
  saveDataOtherServicesApplied,
} from "@/store/form";

// render UI
const ServicesApplied: React.FC<any> = (props) => {
  const {
    LIST_STEP: {
      servicesApplied: {
        text,
        section: { transactionAndCardAcceptanceType, otherServices },
      },
    },
  } = STEP_RM;

  // classnames
  const cx = classnames.bind(styles);

  // hooks
  const dispatch = useDispatch();
  const history = useHistory();

  // States
  const [key, setKey] = useState<number>(0);
  const [dataCheckbox, setDataCheckbox] = useState(
    transactionAndCardAcceptanceType.dataListCheckbox
  );
  const [dataOtherService, setDataOtherService] =
    useState<IServicesApplied.ISectionRadios>({
      instalmentPaymentPlan: otherServices.sectionRadios.instalmentPaymentPlan,
      directCurrencyConversion:
        otherServices.sectionRadios.directCurrencyConversion,
      mailOrder: otherServices.sectionRadios.mailOrder,
    });
  const [validateListCheckboxMonth, setValidateListCheckboxMonth] =
    useState<boolean>(false);

  /**
   * Handle scrolling to top on page load
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  /**
   * Retrieves data of Transaction and card acceptance type from Store
   */
  const dataTransactionAndCardAcceptanceTypeStore = useSelector(
    (state: any) =>
      state.form.servicesAppliedStep.transactionAndCardAcceptanceTypeStep
  );

  /**
   * Retrieves data of other service from Store
   */
  const dataOtherServicesStore = useSelector(
    (state: any) => state.form.servicesAppliedStep.otherServices
  );

  /**
   * Set data from Transaction and card acceptance type section
   * @param data
   */
  const getDataFromListCheckbox = (datas: any) => {
    dispatch(saveDataTransactionServicesApplied(datas));
  };

  /**
   * get data from Other services section
   * @param data
   */
  const getDataOtherServices = (datas: IServicesApplied.ISectionRadios) => {
    dispatch(saveDataOtherServicesApplied(datas));
  };

  /**
   * Handle update state when dataListCheckbox updated from store
   */
  useEffect(() => {
    if (
      dataTransactionAndCardAcceptanceTypeStore &&
      !!dataTransactionAndCardAcceptanceTypeStore.length
    ) {
      setDataCheckbox(dataTransactionAndCardAcceptanceTypeStore);
    }
  }, [dataTransactionAndCardAcceptanceTypeStore]);

  /**
   * Handle update state when dataRadio updated from store
   */
  useEffect(() => {
    if (
      dataOtherServicesStore &&
      Object.keys(dataOtherServicesStore.instalmentPaymentPlan).length > 0 &&
      Object.keys(dataOtherServicesStore.directCurrencyConversion).length > 0 &&
      Object.keys(dataOtherServicesStore.mailOrder).length > 0
    ) {
      setDataOtherService({
        instalmentPaymentPlan: dataOtherServicesStore.instalmentPaymentPlan,
        directCurrencyConversion:
          dataOtherServicesStore.directCurrencyConversion,
        mailOrder: dataOtherServicesStore.mailOrder,
      });
    } else {
      setDataOtherService({
        instalmentPaymentPlan:
          otherServices.sectionRadios.instalmentPaymentPlan,
        directCurrencyConversion:
          otherServices.sectionRadios.directCurrencyConversion,
        mailOrder: otherServices.sectionRadios.mailOrder,
      });
    }
  }, [dataOtherServicesStore, otherServices]);

  return (
    <Box className={cx("servicer-applied-wrapper step-wrapper")}>
      {/* {Category} */}
      <Box className={cx("category-wrapper")}>
        <Category>{text}</Category>
      </Box>

      {/* {Section Transaction and card acceptaner type} */}
      <SectionWrapper
        cx={cx}
        title={transactionAndCardAcceptanceType.title}
        description={transactionAndCardAcceptanceType.description}
      >
        <TransactionCard
          keyCheckbox={key}
          dataCheckbox={dataCheckbox}
          getDataFromListCheckbox={getDataFromListCheckbox}
        />
      </SectionWrapper>

      {/* {Section Other Services} */}
      <SectionWrapper cx={cx} title={otherServices.title}>
        <OtherServices
          cx={cx}
          dataOtherServices={dataOtherService}
          setDataOtherService={setDataOtherService}
          validateListCheckboxMonth={validateListCheckboxMonth}
          setValidateListCheckboxMonth={setValidateListCheckboxMonth}
        />
      </SectionWrapper>

      <Divider light />

      {/* Section button  */}
      <RedirectButton
        // disabledNextButton={!isValid}
        continueLater
        backButton
        variant="next"
        onClickBack={() => {
          if (typeof window !== "undefined") {
            const prePathName = localStorage.getItem("firstStepPath");
            history.push(prePathName);
          }
        }}
        onClickNext={() => {
          const isValidate =
            dataOtherService.instalmentPaymentPlan.repaymentPeriodsOffered.listCheckBox.some(
              (item) => item.checked
            );
          if (dataOtherService.instalmentPaymentPlan.checked && !isValidate) {
            setValidateListCheckboxMonth(true);
            return;
          }

          history.push(URL_MANUAL_FLOW.businessOperation);
          getDataOtherServices(dataOtherService);
          setValidateListCheckboxMonth(false);
        }}
        onClickContinue={() => {
          history.push(WELCOME_PATH);
        }}
      />
    </Box>
  );
};
export default ServicesApplied;
