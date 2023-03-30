// import modules
import React from "react";
import { Box, Grid } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";
import { SELF_SERVE_PAGE } from "@/utils/constants";

// import style
import styles from "./ReviewAndSubmit.scss";
import { IReviewAndSubmit } from "./ReviewAndSubmit";

// render UI
const CompanyAndContactInfomation: React.FC<
  IReviewAndSubmit.ICompanyAndContactInfomation
> = (props) => {
  const { data } = props;
  const {
    LABEL_CONTACT_DETAILS,
    LABEL_REGISTERED_ENTITY_NAME,
    LABEL_COMPANY_TYPE,
    LABEL_UNIQUE_ENTITY_NUMBER,
    LABEL_SALUTATION,
    LABEL_NAME,
    LABEL_EMAIL,
    LABEL_DESIGNATION,
    LABEL_CONTACT_NUMBER,
  } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);

  return (
    <Box>
      <Grid container className={cx("company-registration-container")}>
        <Grid item xs={12} className={cx("n-wrap")}>
          <Grid container className={cx("n-wrap")}>
            <Grid item xs={12} md={6}>
              <Box className={cx("d-flex-column")}>
                <Box component="span" className={cx("text-item-input")}>
                  {LABEL_REGISTERED_ENTITY_NAME}
                </Box>
                <Box component="span" className={cx("text-item-value")}>
                  {data.registeredEntityName}
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box className={cx("d-flex-column")}>
                <Box component="span" className={cx("text-item-input")}>
                  {LABEL_COMPANY_TYPE}
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
              {LABEL_UNIQUE_ENTITY_NUMBER}
            </Box>
            <Box component="span" className={cx("text-item-value")}>
              {data.uniqueEntityNumber}
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box className={cx("sub-title-contact-detail")}>{LABEL_CONTACT_DETAILS}</Box>

      <Grid container className={cx("contact-details-container")}>
        <Grid item xs={12}>
          <Box className={cx("d-flex-column")}>
            <Box component="span" className={cx("text-item-input")}>
              {LABEL_SALUTATION}
            </Box>
            <Box component="span" className={cx("text-item-value")}>
              {data.salutation}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} className={cx("n-wrap")}>
          <Grid container className={cx("n-wrap")}>
            <Grid item xs={12} md={6}>
              <Box className={cx("d-flex-column")}>
                <Box component="span" className={cx("text-item-input")}>
                  {LABEL_NAME}
                </Box>
                <Box component="span" className={cx("text-item-value")}>
                  {data.name}
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box className={cx("d-flex-column")}>
                <Box component="span" className={cx("text-item-input")}>
                  {LABEL_DESIGNATION}
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
            <Grid item xs={12} md={6}>
              <Box className={cx("d-flex-column")}>
                <Box component="span" className={cx("text-item-input")}>
                  {LABEL_EMAIL}
                </Box>
                <Box component="span" className={cx("text-item-value")}>
                  {data.email}
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box className={cx("d-flex-column")}>
                <Box component="span" className={cx("text-item-input")}>
                  {LABEL_CONTACT_NUMBER}
                </Box>
                <Box component="span" className={cx("text-item-value")}>
                  {data.areaCode}
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
export default CompanyAndContactInfomation;
