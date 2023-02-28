// import modules
import { Category, Button } from "@sectionsg/orc";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveDataListCheckbox } from "@/store/form";
import { Box, Grid } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";

// import constants
import { LIST_ROUTER, NEXT, SELF_SERVE_PAGE } from "@/utils/constants";

// import style
import styles from "./BusinessDetails.scss";

// import types

//import icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import BusinessInfomation from "./BusinessInfomation";
import WebsiteInformation from "./WebsiteInformation";
import OtherInformation from "./OtherInformation";

const BusinessDetails: React.FC<any> = () => {
  const {
    list_step: {
      business_details: {
        text,
        section: { business_infomation, other_infomation },
      },
    },
  } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const [key, setKey] = useState<number>(0);
  const history = useHistory();
  const [dataCheckbox, setDataCheckbox] = useState(
    SELF_SERVE_PAGE.list_step.transaction_and_card_acceptance_type.section
      .which_service_are_you_applying_for.data_list_checkbox
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
    if (dataListCheckbox.length) {
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
          history.push(LIST_ROUTER.products_and_services);
        }}
        buttonType=""
      >
        <>
          {NEXT} <ArrowForwardIcon className={cx("arrow", "mrl-dt-5")} />
        </>
      </Button>
    );
  };

  // render UI
  return (
    <Box
      className={cx(
        "transaction-and-card-acceptance-type-wrapper step-wrapper"
      )}
    >
      {/* {Category} */}
      <Box className={cx("category-wrapper")}>
        <Category>{text}</Category>
      </Box>

      {/* {Section Business Information} */}
      <SectionWrapper cx={cx} title="Business information">
        <BusinessInfomation listRadio={business_infomation.listRadio} />
      </SectionWrapper>

      {/* {Section Website Information} */}
      <SectionWrapper cx={cx} title="Website Information">
        <WebsiteInformation listRadio={business_infomation.listRadio} />
      </SectionWrapper>

      {/* {Section Other information} */}
      <SectionWrapper cx={cx} title="Other Information">
        <OtherInformation sections={other_infomation.sections} />
      </SectionWrapper>

      {/* {Next Button}  */}
      <Box className={cx("button-wrapper", "d-flex justify-end mt-dt-40")}>
        <Button backgroundClass="square" onClick={() => history.goBack()}>
          <ArrowBackIcon className={cx("arrow")} />
        </Button>
        <Box>
          <Box className="ml-dt-30 d-inline">{renderButton()}</Box>
        </Box>
      </Box>
    </Box>
  );
};
export default BusinessDetails;
