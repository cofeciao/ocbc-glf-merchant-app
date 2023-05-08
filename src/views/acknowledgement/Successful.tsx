// import modules
import React from "react";
import classnames from "classnames/bind";
import _ from "lodash";
// import images
import AcknowledgementSuccess from "@/assets/images/acknowledgement-success.png";

// import constants
import { ACKNOWLEDGEMENT_PAGE } from "@/utils/constants";

// import style
import styles from "./Acknowledgement.scss";

// import components
import { Box, Container, Grid, Typography } from "@material-ui/core";
import Category from "@/components/Category";

const Successful: React.FC = () => {
  const {
    LABEL_APPLY_FOR_OCBC_CASHLESS_PAYMENTS,
    LABEL_GREAT_WE_HAVE_RECEIVED_YOUR_APPLICATION,
    LABEL_OUR_RELATIONSHIP_MANAGER_WILL_CONTACT_YOU_WITHIN_3_WORKING_DAYS,
  } = ACKNOWLEDGEMENT_PAGE;
  const cx = classnames.bind(styles);

  return (
    <>
      {/* {Content} */}
      <Container className={cx("container pb-270")}>
        <Grid container spacing={2}>
          {/* {Category} */}
          <Grid item xs={12} lg={3}>
            <Category>{LABEL_APPLY_FOR_OCBC_CASHLESS_PAYMENTS}</Category>
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
                  {LABEL_GREAT_WE_HAVE_RECEIVED_YOUR_APPLICATION}
                </Typography>

                {/* {Description} */}
                <Typography className={cx("description")}>
                  {
                    LABEL_OUR_RELATIONSHIP_MANAGER_WILL_CONTACT_YOU_WITHIN_3_WORKING_DAYS
                  }
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Successful;
