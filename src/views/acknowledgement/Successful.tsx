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

const Successful: React.FC<any> = () => {
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
          <Grid item xs={12} lg={3}>
            {/* {Category} */}
            <Box className={cx("category-wrapper")}>
              <Category>{LABEL_APPLY_FOR_OCBC_CASHLESS_PAYMENTS}</Category>
            </Box>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Box className={cx("acknowledgement-wrapper")}>
              <img
                src={AcknowledgementSuccess}
                alt="successful-image"
                className={cx("acknowledgement-image")}
              />
              <Box className={cx("acknowledgement-title")}>
                {LABEL_GREAT_WE_HAVE_RECEIVED_YOUR_APPLICATION}
              </Box>
              <Box className={cx("acknowledgement-description")}>
                {
                  LABEL_OUR_RELATIONSHIP_MANAGER_WILL_CONTACT_YOU_WITHIN_3_WORKING_DAYS
                }
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Successful;
