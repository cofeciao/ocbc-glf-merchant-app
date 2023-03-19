// import modules
import { Category, Button } from "@sectionsg/orc";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";
import { Link } from "react-router-dom";

// import constants
import {  NEXT, } from "@/utils/constants";
import { URL_MANUAL_FLOW, STEP_RM } from "@/utils/constants-rm";

// import style
import styles from "./BusinessOperation.scss";

// import types

//import icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// import components
import BusinessInfomation from "./BusinessInfomation";
import WebsiteInformation from "./WebsiteInformation";
import OtherInformation from "./OtherInformation";
import OutletDetails from "./OutletDetails";

const BusinessOperation: React.FC<any> = () => {
  const {
    LIST_STEP: {
      businessOperation: {
        text,
        section: { businessInformation, otherInfomation, websiteInfomation, outletDetails },
      },
    },
  } = STEP_RM;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const [key, setKey] = useState<number>(0);
  const history = useHistory();
  const [dataCheckbox, setDataCheckbox] = useState(
    STEP_RM.LIST_STEP.servicesApplied.section
      .transactionAndCardAcceptanceType.dataListCheckbox
  );


  /**
   * 
   * Retrieves data from Store
   */
  const dataListCheckbox = useSelector(
    (state: any) => state.form.dataListCheckbox
  );

  /**
   * Handle disable next button
   */
  useEffect(() => {
    if (dataListCheckbox) {
      setDataCheckbox(dataListCheckbox);
    }
  }, [dataListCheckbox]);

  /**
   * render UI button
   * @returns {HTML}
   */
  const renderButton = () => {
    return (
      <Button
        backgroundClass="bgGunmetalBluegrey"
        onClick={() => {
          history.push(URL_MANUAL_FLOW.productsServices);
        }}
        buttonType=""
      >
        <>
          {NEXT} <ArrowForwardIcon className={cx("arrow", "mrl-dt-5")} />
        </>
      </Button>
    );
  };

  const handlePrev = () => {
    history.push(URL_MANUAL_FLOW.servicesApplied);
  }

  // render UI
  return (
    <Box
      className={cx(
        "business-wrapper step-wrapper"
      )}
    >
      {/* {Category} */}
      <Box className={cx("category-wrapper")}>
        <Category>{text}</Category>
      </Box>

      {/* {Section Business Information} */}
      <SectionWrapper cx={cx} title={businessInformation.titleBusinessInformation}>
        <BusinessInfomation 
          listRadioIsYourBusinessReadyForOperation={businessInformation.listRadioIsYourBusinessReadyForOperation} 
          listRadioYouCurrentlyHaveAnOCBC={businessInformation.listRadioYouCurrentlyHaveAnOCBC}
        />
      </SectionWrapper>

      {/* {Section Website Information} */}
      <SectionWrapper cx={cx} title={websiteInfomation.titleWebsiteInfomation}>
        <WebsiteInformation listRadio={websiteInfomation.listRadio} />
      </SectionWrapper>

      {/* {Section Other information} */}
      <SectionWrapper cx={cx} title={otherInfomation.titleOtherInformation}>
        <OtherInformation 
          sections={otherInfomation.sections} 
          listRadio={otherInfomation.listRadio} 
          labelDoesYourRetailStoreAccpetCardPayment={otherInfomation.labelDoesYourRetailStoreAccpetCardPayment}
        />
      </SectionWrapper>

      <SectionWrapper cx={cx} title={outletDetails.titleOutletDetail} description={outletDetails.description}>
        <OutletDetails listRadio={outletDetails.listRadio} />
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
  );
};
export default BusinessOperation;
