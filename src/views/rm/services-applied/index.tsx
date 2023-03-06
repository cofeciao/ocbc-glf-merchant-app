// import modules
import { Category, Button } from "@sectionsg/orc";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveDataTransactionAndCardAcceptanceTypeStep } from "@/store/form";
import { Box } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";

// import constants
import { LIST_ROUTER, NEXT } from "@/utils/constants";
import { STEP_RM } from "@/utils/constants-rm";

// import style
import styles from "./ServicesApplied.scss";

// import types

//import icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// import components
import TransactionCard from "./TransactionCard";
import OtherServices from "./OtherServices";
import { IServicesApplied } from "./ServicesApplied";

// render UI
const ServicesApplied: React.FC<any> = () => {
  const {
    list_step: {
      services_applied: {
        text,
        section: { transaction_and_card_acceptance_type, other_services },
      },
    },
  } = STEP_RM;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  
  // States
  const [key, setKey] = useState<number>(0);
  const history = useHistory();
  const [dataCheckbox, setDataCheckbox] = useState(
    transaction_and_card_acceptance_type.data_list_checkbox
  );
  
  const [dataRadio, setDataRadio] = useState<IServicesApplied.ISectionRadios>({
    instalment_payment_plan: other_services.sectionRadios.instalment_payment_plan,
    direct_currency_conversion: other_services.sectionRadios.direct_currency_conversion,
    mail_order: other_services.sectionRadios.mail_order,
  });
  const [dataCheckboxRepayment, setDataCheckboxRepayment] = useState(
    other_services.sectionRadios.instalment_payment_plan.repayment_periods_offered.listCheckBox
  )
  
  /**
   * Get data from list check box
   * @param data
   */
  const getDataFromListCheckbox = (data: any) => {
    dispatch(saveDataTransactionAndCardAcceptanceTypeStep(data));
  };

  /**
   * Retrieves data of dataListCheckbox from Store
   */
  const dataListCheckbox = useSelector(
    (state: any) =>
      state.form.transactionAndCardAcceptanceTypeStep.dataListCheckbox
  );

  /**
   * Handle update state when dataListCheckbox updated from store
   */
  useEffect(() => {
    if (dataListCheckbox && !!dataListCheckbox.length) {
      setDataCheckbox(dataListCheckbox);
    }
  }, [dataListCheckbox]);

  /**
   * Handle update state when dataRadio updated from store
   */
  useEffect(() => {
    if (dataRadio && !!dataRadio.instalment_payment_plan.listRadio.length 
      && !!dataRadio.direct_currency_conversion.listRadio.length 
      && !!dataRadio.mail_order.listRadio.length) {
      setDataRadio(dataRadio);
    }
  }, [dataRadio]);

  /**
   * render UI button
   * @returns {HTML}
   */
  const renderButton = () => {
    return (
      <Button
        backgroundClass="bgGunmetalBluegrey"
        onClick={() => {
          history.push(LIST_ROUTER.business_details);
        }}
      >
        <>
          {NEXT} <ArrowForwardIcon className={cx("arrow", "mrl-dt-5")} />
        </>
      </Button>
    );
  };

  return (
    <Box
      className={cx(
        "servicer-applied-wrapper step-wrapper"
      )}
    >
      {/* {Category} */}
      <Box className={cx("category-wrapper")}>
        <Category>{text}</Category>
      </Box>

      {/* {Section Transaction and card acceptaner type} */}
      <SectionWrapper
        cx={cx}
        title={transaction_and_card_acceptance_type.title}
        description={transaction_and_card_acceptance_type.description}
      >
        <TransactionCard 
          dataCheckbox={dataCheckbox}
          key={key} 
          getDataFromListCheckbox={getDataFromListCheckbox} 
        />
      </SectionWrapper>

      {/* {Section Other Services} */}
      <SectionWrapper cx={cx} title={other_services.title} >
        <OtherServices 
          cx={cx} 
          sectionRadios={dataRadio} 
          setDataRadio={setDataRadio} 
          dataCheckboxRepayment={dataCheckboxRepayment}
          setDataCheckboxRepayment={setDataCheckboxRepayment}
        />
      </SectionWrapper>

      {/* {Next Button}  */}
      <section className={cx("button-wrapper", "d-flex justify-end mt-dt-40")}>
        <Button backgroundClass="square" onClick={() => history.push(LIST_ROUTER.company_and_contact_information)}>
          <ArrowBackIcon className={cx("arrow")} />
        </Button>
        <Box>
          <div className="ml-dt-30 d-inline">{renderButton()}</div>
        </Box>
      </section>
    </Box>
  );
};
export default ServicesApplied;
