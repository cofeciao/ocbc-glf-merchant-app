// import modules
import React from "react";
import classnames from "classnames/bind";
import { Category } from "@sectionsg/orc";
import { Box, Container, Grid } from "@material-ui/core";
import _ from "lodash";

// import images
import AcknowledgementSuccess from "@/assets/images/acknowledgement-success.png";

// import constants
import { ACKNOWLEDGEMENT_PAGE } from "@/utils/constants";

// import style
import styles from "./Acknowledgement.scss";

const Interest: React.FC<any> = () => {
  const {
    LABEL_APPLY_FOR_OCBC_CASHLESS_PAYMENTS,
    LABEL_THANK_YOU_FOR_YOUR_INTEREST,
    LABEL_TO_APPLY_FOR_PAYNOW_PLEASE_VISIT,
    LABEL_BUSINESS_INTERNET_BANKING,
  } = ACKNOWLEDGEMENT_PAGE;
  const cx = classnames.bind(styles);

  return (
    <>
      {/* {Content} */}
      <Container className={cx("container pb-270")}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={3}>
            {/* {Category} */}
            <Box className={cx("category-wrapper")}>
              <Category>{LABEL_APPLY_FOR_OCBC_CASHLESS_PAYMENTS}</Category>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box className={cx("acknowledgement-wrapper")}>
              <img
                src={AcknowledgementSuccess}
                alt="successful-image"
                className={cx("acknowledgement-image")}
              />
              <Box className={cx("acknowledgement-title")}>
                {LABEL_THANK_YOU_FOR_YOUR_INTEREST}
              </Box>
              <Box className={cx("acknowledgement-description")}>
                {LABEL_TO_APPLY_FOR_PAYNOW_PLEASE_VISIT}&nbsp;
                <a href="#" className={cx("acknowledgement-link")}>
                  {LABEL_BUSINESS_INTERNET_BANKING}
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Interest;
