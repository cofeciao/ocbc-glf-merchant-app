// import modules
import React, { useState, useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./ReviewAndSubmit.scss";

// render UI
const TransactionAndCardAcceptanceType: React.FC<any> = () => {
  const cx = classnames.bind(styles);

  return (
    <Box>
      <Grid item xs={12} className={cx("n-wrap")}>
        <Grid container className={cx("n-wrap")}>
          <Grid xs={12} md={6}>
            <Box className={cx("d-flex-column")}>
              <Box component="span" className={cx("text-item-input")}>
                Service
              </Box>
              <Box component="span" className={cx("text-item-value")}>
                Point-of-Sales terminal
              </Box>
            </Box>
          </Grid>

          <Grid xs={12} md={6}>
            <Box className={cx("d-flex-column")}>
              <Box component="span" className={cx("text-item-input")}>
                Payment options (Includes Mastercard and Visa)
              </Box>
              <Box component="span" className={cx("text-item-value")}>
                VISA
              </Box>
              <Box component="span" className={cx("text-item-value")}>
                Mastercard
              </Box>
              <Box component="span" className={cx("text-item-value")}>
                Alipay
              </Box>
              <Box component="span" className={cx("text-item-value")}>
                JCB
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default TransactionAndCardAcceptanceType;
