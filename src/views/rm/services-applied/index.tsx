// import modules
import { Category, Button } from "@sectionsg/orc";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";
import { Link } from "react-router-dom";
import _ from "lodash";

// import constants
import { STEP_RM, URL_MANUAL_FLOW, NEXT, CONTINUE_LATER } from "@/utils/constants-rm";

// import style
import styles from "./ServicesApplied.scss";

// import types
import { IServicesApplied } from "./ServicesApplied";

//import icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// import stores
import { saveDataServicesApplied } from "@/store/form";

// import components
import TransactionCard from "./TransactionCard";
import OtherServices from "./OtherServices";

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
  const [dataRadio, setDataRadio] = useState<IServicesApplied.ISectionRadios>({
    instalmentPaymentPlan: otherServices.sectionRadios.instalmentPaymentPlan,
    directCurrencyConversion: otherServices.sectionRadios.directCurrencyConversion,
    mailOrder: otherServices.sectionRadios.mailOrder,
  });
  const [dataCheckboxRepayment, setDataCheckboxRepayment] = useState(
    otherServices.sectionRadios.instalmentPaymentPlan.repaymentPeriodsOffered.listCheckBox
  )

  /**
   * Retrieves data of dataListCheckbox from Store
   */
  const dataListCheckbox = useSelector(
    (state: any) =>
      state.form.servicesAppliedStep.transactionAndCardAcceptanceTypeStep
  );

  /**
   * Get data from list check box
   * @param data
   */
  const getDataFromListCheckbox = (data: any) => {
    dispatch(saveDataServicesApplied(data));
  };

  /**
   * render UI button
   * @returns {HTML}
   */
  const renderButton = () => {
    return (
      <Button
        backgroundClass="bgGunmetalBluegrey"
        onClick={() => {
          history.push(URL_MANUAL_FLOW.businessOperation);
        }}
      >
        <>
          {NEXT} <ArrowForwardIcon className={cx("arrow", "mrl-dt-5")} />
        </>
      </Button>
    );
  };
  /**
   * handle back button
   */
  const handlePrev = () => {
    if (typeof window !== 'undefined') {
      const prePathName = localStorage.getItem("firstStepPath");
      history.push(prePathName);
    }
  }

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
    if (dataRadio && !!dataRadio.instalmentPaymentPlan.listRadio.length 
      && !!dataRadio.directCurrencyConversion.listRadio.length 
      && !!dataRadio.mailOrder.listRadio.length) {
      setDataRadio(dataRadio);
    }
  }, [dataRadio]);

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
      <SectionWrapper cx={cx} title={otherServices.title} >
        <OtherServices 
          cx={cx} 
          sectionRadios={dataRadio} 
          setDataRadio={setDataRadio} 
          dataCheckboxRepayment={dataCheckboxRepayment}
          setDataCheckboxRepayment={setDataCheckboxRepayment}
        />
      </SectionWrapper>

      {/* Section button  */}
      <section className={cx('button-wrapper', 'd-flex space-between mt-dt-40')}>
        <Button backgroundClass="square" onClick={handlePrev}>
          <ArrowBackIcon className={cx('arrow')} />
        </Button>
        <div>
          <div className={cx('d-inline')}>
            <Link to="/">{CONTINUE_LATER}</Link>
          </div>
          <div className="ml-dt-30 d-inline">
            {renderButton()}
          </div>
        </div>
      </section>
    </Box>
  );
};
export default ServicesApplied;
