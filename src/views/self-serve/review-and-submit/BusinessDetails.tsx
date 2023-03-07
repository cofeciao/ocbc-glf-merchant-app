// import modules
import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./ReviewAndSubmit.scss";
import { SELF_SERVE_PAGE } from "@/utils/constants";

// render UI
const BusinessDetails: React.FC<any> = (props) => {
  const {
    LABEL_NUMBER_OF_OUTLETS_WITH_POINT_OF_SALES_TERMIMALS,
    LABEL_BUSINESS_READY_TO_OPERATE,
    LABEL_OCBC_BUSINESS_ACCOUNT,
    LABEL_ECOMMERCE,
    LABEL_POINT_OF_SALES_TERMINAL,
    LABEL_EXISTING_WEBSITE,
    LABEL_WEBSITE_URL,
    LABEL_PLACE_ORDER_THROUGH_WEBSITE,
    LABEL_BUSINESS_OFFERINGS,
    LABEL_AVAILABLE_SPACES,
    LABEL_CARD_PAYMENT_AVAILABLE_AT_RETAIL_STORE,
  } = SELF_SERVE_PAGE;
  const { optionSelected, data, listWebsiteUrl } = props;
  const {
    businessReadyToOperate,
    businessAccount,
    existingWebsite,
    placeOrderThroughWebsite,
    numberOfOutlets,
    businessOfferings,
    availableSpaces,
  } = data;
  const cx = classnames.bind(styles);

  const listWebsiteUrlFilter = _.filter(
    listWebsiteUrl,
    (website: string) => website !== ""
  );

  const listBusinessOfferingsFilter = _.filter(
    businessOfferings,
    (item: any) => item.checked === true
  );

  const listAvailableSpacesFilter = _.filter(
    availableSpaces,
    (item: any) => item.checked === true
  );

  return (
    <Box>
      {/* {Section Title} */}
      {_.isEqual(optionSelected, "point-of-sales-e-commerce") && (
        <Typography className={cx("section-title")}>
          {LABEL_POINT_OF_SALES_TERMINAL}
        </Typography>
      )}

      <Grid container>
        <Grid item xs={12}>
          <Box className={cx("d-flex-column")}>
            <Box component="span" className={cx("text-item-input")}>
              {LABEL_NUMBER_OF_OUTLETS_WITH_POINT_OF_SALES_TERMIMALS}
            </Box>
            <Box component="span" className={cx("text-item-value")}>
              {numberOfOutlets}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box className={cx("d-flex-column")}>
            <Box component="span" className={cx("text-item-input")}>
              {LABEL_BUSINESS_READY_TO_OPERATE}
            </Box>
            <Box component="span" className={cx("text-item-value")}>
              {businessReadyToOperate}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box className={cx("d-flex-column")}>
            <Box component="span" className={cx("text-item-input")}>
              {LABEL_OCBC_BUSINESS_ACCOUNT}
            </Box>
            <Box component="span" className={cx("text-item-value")}>
              {businessAccount}
            </Box>
          </Box>
        </Grid>

        {/* {Section Title} */}
        {_.isEqual(optionSelected, "point-of-sales-e-commerce") && (
          <Typography className={cx("section-title")}>
            {LABEL_ECOMMERCE}
          </Typography>
        )}

        <Grid item xs={12}>
          <Grid container className={cx("n-wrap")}>
            <Grid item xs={12} md={6}>
              <Box className={cx("d-flex-column")}>
                <Box component="span" className={cx("text-item-input")}>
                  {LABEL_EXISTING_WEBSITE}
                </Box>
                <Box component="span" className={cx("text-item-value")}>
                  {existingWebsite}
                </Box>
              </Box>
            </Grid>
            {_.isEqual(existingWebsite, "Yes") &&
              !_.isEmpty(listWebsiteUrlFilter) && (
                <Grid item xs={12} md={6}>
                  <Box className={cx("d-flex-column")}>
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_WEBSITE_URL}
                    </Box>
                    {_.map(listWebsiteUrlFilter, (website) => {
                      return (
                        <Box component="span" className={cx("text-item-value")}>
                          {website}
                        </Box>
                      );
                    })}
                  </Box>
                </Grid>
              )}
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Box className={cx("d-flex-column")}>
            <Box component="span" className={cx("text-item-input")}>
              {LABEL_PLACE_ORDER_THROUGH_WEBSITE}
            </Box>
            <Box component="span" className={cx("text-item-value")}>
              {placeOrderThroughWebsite}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box className={cx("d-flex-column")}>
            <Box component="span" className={cx("text-item-input")}>
              {LABEL_BUSINESS_OFFERINGS}
            </Box>
            {_.map(listBusinessOfferingsFilter, (item) => {
              return (
                <Box component="span" className={cx("text-item-value")}>
                  {item.label}
                </Box>
              );
            })}
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Grid container className={cx("n-wrap")}>
            <Grid item xs={12} md={6}>
              <Box className={cx("d-flex-column")}>
                <Box component="span" className={cx("text-item-input")}>
                  {LABEL_AVAILABLE_SPACES}
                </Box>
                {_.map(listAvailableSpacesFilter, (item) => {
                  return (
                    <Box component="span" className={cx("text-item-value")}>
                      {item.label}
                    </Box>
                  );
                })}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={cx("d-flex-column")}>
                <Box component="span" className={cx("text-item-input")}>
                  {LABEL_CARD_PAYMENT_AVAILABLE_AT_RETAIL_STORE}
                </Box>
                <Box component="span" className={cx("text-item-value")}>
                  Yes
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default BusinessDetails;
