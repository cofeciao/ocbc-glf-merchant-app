// import modules
import { Category, Button } from "@sectionsg/orc";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveDataListCheckbox } from "@/store/form";
import { Box } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import BusinessDetailsForm from "./BusinessDetailsForm";

// import constants
import {
  CONTINUE_LATER,
  LIST_ROUTER,
  NEXT,
  SELF_SERVE_PAGE,
} from "@/utils/constants";

// import style
import styles from "./BusinessDetails.scss";

// import types

//import icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";

const BusinessDetails: React.FC<any> = () => {
  const {
    list_step: {
      business_details: {
        text,
        forms: { pointOfSales, pointOfSalesAndEcommerce, ecommerce },
      },
    },
  } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const [key, setKey] = useState<number>(0);
  const history = useHistory();
  // const [dataCheckbox, setDataCheckbox] = useState(
  //   SELF_SERVE_PAGE.list_step.transaction_and_card_acceptance_type.section
  //     .which_service_are_you_applying_for.data_list_checkbox
  // );

  /**
   * Retrieves data of step transactionAndCardAcceptanceTypeStep from Store
   */
  const optionSelected = useSelector((state: any) =>
    state.form.transactionAndCardAcceptanceTypeStep.dataListCheckbox
      .map((item: any) => (item.checked === true ? item.value : ""))
      .join("-")
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
   * Handle update list checkbox
   */
  // useEffect(() => {
  //   if (dataListCheckbox.length) {
  //     setDataCheckbox(dataListCheckbox);
  //   }
  // }, [dataListCheckbox]);

  /**
   * render UI button
   * @returns {HTML}
   */
  const renderButton = () => {
    return (
      <Button
        backgroundClass="bgGunmetalBluegrey"
        disabled={true}
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

      <BusinessDetailsForm
        cx={cx}
        optionSelected={optionSelected}
        businessInfomation={
          pointOfSalesAndEcommerce.sections.business_infomation
        }
        otherInfomation={pointOfSalesAndEcommerce.sections.other_infomation}
        websiteInfomation={pointOfSalesAndEcommerce.sections.website_infomation}
      />

      {/* {Next Button}  */}
      <Box className={cx("button-wrapper", "d-flex justify-end mt-dt-40")}>
        <Button backgroundClass="square" onClick={() => history.goBack()}>
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
export default BusinessDetails;
