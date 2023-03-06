// import modules
import React, { useState, useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./ReviewAndSubmit.scss";

// render UI
const BusinessDetails: React.FC<any> = () => {
  const cx = classnames.bind(styles);

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Box className={cx("d-flex-column")}>
            <Box component="span" className={cx("text-item-input")}>
              Modes
            </Box>
            <Box component="span" className={cx("text-item-value")}>
              Credit/Debit card
            </Box>
            <Box component="span" className={cx("text-item-value")}>
              PayNow
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default BusinessDetails;