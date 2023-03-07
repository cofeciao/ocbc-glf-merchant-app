// import modules
import { Category, Button } from "@sectionsg/orc";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveDataListCheckbox } from "@/store/form";
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
    list_step: {
      business_operation: {
        text,
        section: { business_details, other_infomation, website_infomation, outlet_details },
      },
    },
  } = STEP_RM;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const [key, setKey] = useState<number>(0);
  const history = useHistory();
  const [dataCheckbox, setDataCheckbox] = useState(
    STEP_RM.list_step.services_applied.section
      .transaction_and_card_acceptance_type.data_list_checkbox
  );

  /**
   * Get data from list check box
   * @param data
   */
  const getDataFromListCheckbox = (data: any) => {
    dispatch(saveDataListCheckbox(data));
  };

  /**
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
          // history.push(URL_MANUAL_FLOW.productsServices);
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
      <SectionWrapper cx={cx} title="Business Details">
        <BusinessInfomation listRadio={business_details.listRadio} />
      </SectionWrapper>

      {/* {Section Website Information} */}
      <SectionWrapper cx={cx} title="Website Information">
        <WebsiteInformation listRadio={website_infomation.listRadio} />
      </SectionWrapper>

      {/* {Section Other information} */}
      <SectionWrapper cx={cx} title="Other Information">
        <OtherInformation sections={other_infomation.sections} />
      </SectionWrapper>

      <SectionWrapper cx={cx} title="Outlet Details">
        <OutletDetails listRadio={outlet_details.listRadio} />
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
