// import modules
import { Category, Button } from "@sectionsg/orc";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Divider } from "@material-ui/core";
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
import { saveDataTransactionServicesApplied, saveDataOtherServicesApplied } from "@/store/form";

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
  const [dataOtherService, setDataOtherService] = useState<IServicesApplied.ISectionRadios>({
    instalmentPaymentPlan: otherServices.sectionRadios.instalmentPaymentPlan,
    directCurrencyConversion: otherServices.sectionRadios.directCurrencyConversion,
    mailOrder: otherServices.sectionRadios.mailOrder,
  });
  const [validateListCheckboxMonth, setValidateListCheckboxMonth] = useState<boolean>(false);

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
    (state: any) =>
      state.form.servicesAppliedStep.otherServices
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
   * render UI button
   * @returns {HTML}
   */
  const handleNext = () => {
    const isValidate = dataOtherService.instalmentPaymentPlan.repaymentPeriodsOffered.listCheckBox.some(
      item => item.checked
    );
    if (dataOtherService.instalmentPaymentPlan.checked && !isValidate) {
      setValidateListCheckboxMonth(true);
      return;
    }  
    
    history.push(URL_MANUAL_FLOW.businessOperation);
    getDataOtherServices(dataOtherService)
    setValidateListCheckboxMonth(false)
  }

  /**
   * render UI button
   * @returns {HTML}
   */
  const renderButton = () => {
    return (
      <Button
        backgroundClass="bgGunmetalBluegrey"
        onClick={handleNext}
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
      if (dataTransactionAndCardAcceptanceTypeStore && !!dataTransactionAndCardAcceptanceTypeStore.length) {
        setDataCheckbox(dataTransactionAndCardAcceptanceTypeStore);
      }
    }, [dataTransactionAndCardAcceptanceTypeStore]);
  
  /**
   * Handle update state when dataRadio updated from store
   */
  useEffect(() => {
    if (dataOtherServicesStore 
      && Object.keys(dataOtherServicesStore.instalmentPaymentPlan).length > 0 
      && Object.keys(dataOtherServicesStore.directCurrencyConversion).length > 0
      && Object.keys(dataOtherServicesStore.mailOrder).length > 0
    ) {
      setDataOtherService({
        instalmentPaymentPlan: dataOtherServicesStore.instalmentPaymentPlan,
        directCurrencyConversion: dataOtherServicesStore.directCurrencyConversion,
        mailOrder: dataOtherServicesStore.mailOrder
      });
    } else {
      setDataOtherService({
        instalmentPaymentPlan: otherServices.sectionRadios.instalmentPaymentPlan,
        directCurrencyConversion: otherServices.sectionRadios.directCurrencyConversion,
        mailOrder: otherServices.sectionRadios.mailOrder,
      })
    }
  }, [dataOtherServicesStore, otherServices]);

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
          dataOtherServices={dataOtherService} 
          setDataOtherService={setDataOtherService}
          validateListCheckboxMonth={validateListCheckboxMonth}
          setValidateListCheckboxMonth={setValidateListCheckboxMonth}
        />
      </SectionWrapper>
      
      <Divider light />

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
