// import modules
import { Category, Button } from "@sectionsg/orc";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveDataListCheckbox } from "@/store/form";
import { Box } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";

// import constants
import { LIST_ROUTER, NEXT, SELF_SERVE_PAGE } from "@/utils/constants";

// import style
import styles from "./ProductsAndServices.scss";

// import types

//import icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import IsYourSalesForecast from "./IsYourSalesForecast";
import IsYourBusinessOffering from "./IsYourBusinessOffering";

// render UI
const ProductsAndServices: React.FC<any> = () => {
  const {
    list_step: {
      products_and_service: {
        text,
        sections: { is_your_sales_forecast, is_your_business_offering },
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
   * render UI button
   * @returns {HTML}
   */
  const renderButton = () => {
    return (
      <Button
        backgroundClass="bgGunmetalBluegrey"
        onClick={() => {
          history.push(LIST_ROUTER.review_and_submit);
        }}
      >
        <>
          {NEXT} <ArrowForwardIcon className={cx("arrow", "mrl-dt-5")} />
        </>
      </Button>
    );
  };

  return (
    <Box className={cx("products-and-services-wrapper step-wrapper")}>
      {/* {Category} */}
      <Box className={cx("category-wrapper")}>
        <Category>{text}</Category>
      </Box>

      {/* {Section Is Your Business Offering} */}
      <SectionWrapper
        cx={cx}
        description={is_your_business_offering.description}
      >
        <IsYourBusinessOffering
          data={is_your_business_offering}
          cx={cx}
        />
      </SectionWrapper>

      {/* {Section Is Your Sales Forecast} */}
      <SectionWrapper cx={cx} description={is_your_sales_forecast.description}>
        <IsYourSalesForecast cx={cx} data={is_your_sales_forecast} />
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
export default ProductsAndServices;
