// import modules
import React from "react";
import classnames from "classnames/bind";
import { Category } from "@sectionsg/orc";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import _ from "lodash";

// import images
import AcknowledgementSuccess from "@/assets/images/acknowledgement-success.png";

// import constants
import { ACKNOWLEDGEMENT_PAGE } from "@/utils/constants";

// import style
import styles from "./Acknowledgement.scss";

const Interest: React.FC = () => {
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
          {/* {Category} */}
          <Grid item xs={12} lg={3}>
            <Box className={cx("category-wrapper")}>
              <Category>{LABEL_APPLY_FOR_OCBC_CASHLESS_PAYMENTS}</Category>
            </Box>
          </Grid>

          {/* {Acknowledgement} */}
          <Grid item xs={12} lg={4}>
            <Box className={cx("acknowledgement-wrapper")}>
              {/* {Image} */}
              <Box className={cx("image-wrapper")}>
                <img src={AcknowledgementSuccess} alt="successful-image" />
              </Box>

              {/* {Content} */}
              <Box className={cx("content-wrapper")}>
                {/* {Title} */}
                <Typography className={cx("title")}>
                  {LABEL_THANK_YOU_FOR_YOUR_INTEREST}
                </Typography>

                {/* {Description} */}
                <Typography className={cx("description")}>
                  {LABEL_TO_APPLY_FOR_PAYNOW_PLEASE_VISIT}&nbsp;
                  {/* {Text Link} */}
                  <a href="#" className={cx("acknowledgement-link")}>
                    {LABEL_BUSINESS_INTERNET_BANKING}
                  </a>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Interest;
