// import modules
import React, { useState, useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./ReviewAndSubmit.scss";

// render UI
const CompanyRegistration: React.FC<any> = (props) => {
  const { data } = props;
  const cx = classnames.bind(styles);

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} className={cx("n-wrap")}>
          <Grid container className={cx("n-wrap")}>
            <Grid xs={12} md={6}>
              <Box className={cx("d-flex-column")}>
                <Box component="span" className={cx("text-item-input")}>
                  Registered entity name
                </Box>
                <Box component="span" className={cx("text-item-value")}>
                  {data.registeredEntityName}
                </Box>
              </Box>
            </Grid>

            <Grid xs={12} md={6}>
              <Box className={cx("d-flex-column")}>
                <Box component="span" className={cx("text-item-input")}>
                  Company type
                </Box>
                <Box component="span" className={cx("text-item-value")}>
                  {data.companyType}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Box className={cx("d-flex-column")}>
            <Box component="span" className={cx("text-item-input")}>
              Unique Entity Number (UEN)
            </Box>
            <Box component="span" className={cx("text-item-value")}>
              {data.uniqueEntityNumber}
            </Box>
          </Box>
        </Grid>

        <Box className={cx("section-title")}>Contact details</Box>

        <Grid item xs={12}>
          <Box className={cx("d-flex-column")}>
            <Box component="span" className={cx("text-item-input")}>
              Salutation
            </Box>
            <Box component="span" className={cx("text-item-value")}>
              Credit/Debit card
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} className={cx("n-wrap")}>
          <Grid container className={cx("n-wrap")}>
            <Grid xs={12} md={6}>
              <Box className={cx("d-flex-column")}>
                <Box component="span" className={cx("text-item-input")}>
                  Name
                </Box>
                <Box component="span" className={cx("text-item-value")}>
                  {data.name}
                </Box>
              </Box>
            </Grid>

            <Grid xs={12} md={6}>
              <Box className={cx("d-flex-column")}>
                <Box component="span" className={cx("text-item-input")}>
                  Designation
                </Box>
                <Box component="span" className={cx("text-item-value")}>
                  {data.designation}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className={cx("n-wrap")}>
          <Grid container className={cx("n-wrap")}>
            <Grid xs={12} md={6}>
              <Box className={cx("d-flex-column")}>
                <Box component="span" className={cx("text-item-input")}>
                  Email
                </Box>
                <Box component="span" className={cx("text-item-value")}>
                  {data.email}
                </Box>
              </Box>
            </Grid>

            <Grid xs={12} md={6}>
              <Box className={cx("d-flex-column")}>
                <Box component="span" className={cx("text-item-input")}>
                  Contact number
                </Box>
                <Box component="span" className={cx("text-item-value")}>
                  {data.contactNumber}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default CompanyRegistration;
