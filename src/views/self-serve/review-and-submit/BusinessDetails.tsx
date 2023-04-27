// import modules
import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./ReviewAndSubmit.scss";
import { SELF_SERVE_PAGE } from "@/utils/constants";
import { IReviewAndSubmit } from "./ReviewAndSubmit";

// render UI
const BusinessDetails: React.FC<IReviewAndSubmit.IBusinessDetails> = (
  props
) => {
  const {
    LABEL_NUMBER_OF_OUTLETS_WITH_POINT_OF_SALES_TERMIMALS,
    LABEL_BUSINESS_READY_TO_OPERATE,
    LABEL_OPERATION_STARTING_PERIOD,
    LABEL_OCBC_BUSINESS_ACCOUNT,
    LABEL_ECOMMERCE,
    LABEL_POINT_OF_SALES_TERMINAL,
    LABEL_EXISTING_WEBSITE,
    LABEL_WEBSITE_LIVE_DATE,
    LABEL_WEBSITE_URL,
    LABEL_PLACE_ORDER_THROUGH_WEBSITE,
    LABEL_BUSINESS_OFFERINGS,
    LABEL_AVAILABLE_SPACES,
    LABEL_CARD_PAYMENT_AVAILABLE_AT_RETAIL_STORE,
  } = SELF_SERVE_PAGE;
  const { optionSelected, data, listWebsiteUrl } = props;

  const {
    businessReadyToOperate,
    operationStartingPeriod,
    businessAccount,
    existingWebsite,
    websiteLiveDate,
    cardPaymentAvailableAtRetailStore,
    placeOrderThroughWebsite,
    numberOfOutlets,
    businessOfferings,
    availableSpaces,
  } = data;
  const cx = classnames.bind(styles);

  // Filter
  const listWebsiteUrlFilter = _.filter(listWebsiteUrl, (website: string) =>
    _.size(website)
  );
  const listBusinessOfferings =
    _.filter(businessOfferings, (item) => item.checked) || [];
  const listAvailableSpaces =
    _.filter(availableSpaces, (item) => item.checked) || [];

  return (
    <Box>
      {/* {Section Title} */}
      {_.isEqual(optionSelected, "point-of-sales-e-commerce") && (
        <Typography className={cx("sub-section-title")}>
          {LABEL_POINT_OF_SALES_TERMINAL}
        </Typography>
      )}

      <Grid container className={cx("point-of-sales-container")}>
        <Grid item xs={12} className={cx("n-wrap")}>
          <Grid container className={cx("n-wrap")}>
            {/* {Number of outlets with Point-of-Sales termimals} */}
            {
              <Grid item xs={12} md={4} className={cx("row-item")}>
                {!_.isEmpty(numberOfOutlets) && (
                  <Box className={cx("d-flex-column w70p")}>
                    {/* {Label} */}
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_NUMBER_OF_OUTLETS_WITH_POINT_OF_SALES_TERMIMALS}
                    </Box>

                    {/* {Content} */}
                    <Box component="span" className={cx("text-item-value")}>
                      {numberOfOutlets}
                    </Box>
                  </Box>
                )}
              </Grid>
            }

            {/* {Business ready to operate} */}
            {
              <Grid item xs={12} md={4} className={cx("row-item")}>
                {!_.isEmpty(businessReadyToOperate) && (
                  <Box className={cx("d-flex-column w70p")}>
                    {/* {Label} */}
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_BUSINESS_READY_TO_OPERATE}
                    </Box>

                    {/* {Content} */}
                    <Box component="span" className={cx("text-item-value")}>
                      {businessReadyToOperate}
                    </Box>
                  </Box>
                )}
              </Grid>
            }

            {/* {Operation starting period} */}
            {
              <Grid item xs={12} md={4}>
                {!_.isEmpty(operationStartingPeriod) &&
                  _.isEqual(businessReadyToOperate, "No") && (
                    <Box className={cx("d-flex-column w70p")}>
                      {/* {Label} */}
                      <Box component="span" className={cx("text-item-input")}>
                        {LABEL_OPERATION_STARTING_PERIOD}
                      </Box>

                      {/* {Content} */}
                      <Box component="span" className={cx("text-item-value")}>
                        {operationStartingPeriod.charAt(0).toUpperCase() +
                          operationStartingPeriod.slice(1).replace(/-/g, " ")}
                      </Box>
                    </Box>
                  )}
              </Grid>
            }
          </Grid>
        </Grid>

        {/* {OCBC business account} */}
        {
          <Grid item xs={12} className={cx("row-item")}>
            {!_.isEmpty(businessAccount) && (
              <Box className={cx("d-flex-column w70p")}>
                {/* {Label} */}
                <Box component="span" className={cx("text-item-input")}>
                  {LABEL_OCBC_BUSINESS_ACCOUNT}
                </Box>

                {/* {Content} */}
                <Box component="span" className={cx("text-item-value")}>
                  {businessAccount}
                </Box>
              </Box>
            )}
          </Grid>
        }
      </Grid>

      {/* {Section Title} */}
      {_.isEqual(optionSelected, "point-of-sales-e-commerce") && (
        <Typography className={cx("sub-section-title")}>
          {LABEL_ECOMMERCE}
        </Typography>
      )}

      <Grid container className={cx("ecommerce-container")}>
        <Grid item xs={12} className={cx("row-item")}>
          <Grid container className={cx("n-wrap")}>
            {/* {Existing website} */}
            {
              <Grid item xs={12} md={4}>
                {!_.isEmpty(existingWebsite) && (
                  <Box className={cx("d-flex-column w70p")}>
                    {/* {Label} */}
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_EXISTING_WEBSITE}
                    </Box>

                    {/* {Content} */}
                    <Box component="span" className={cx("text-item-value")}>
                      {existingWebsite}
                    </Box>
                  </Box>
                )}
              </Grid>
            }

            {/* {Website’s URL} */}
            {!_.isEmpty(listWebsiteUrlFilter) &&
              _.isEqual(existingWebsite, "Yes") && (
                <Grid item xs={12} md={4}>
                  <Box className={cx("d-flex-column w70p")}>
                    {/* {Label} */}
                    {
                      <Box component="span" className={cx("text-item-input")}>
                        {LABEL_WEBSITE_URL}
                      </Box>
                    }

                    {/* {Content list} */}
                    {_.map(listWebsiteUrlFilter, (website, index) => {
                      return _.size(listWebsiteUrlFilter) > 1 ? (
                        <Box
                          key={index}
                          component="ul"
                          className={cx("text-item-value")}
                        >
                          <Box component="li">{website}</Box>
                        </Box>
                      ) : (
                        <Box
                          key={index}
                          component="span"
                          className={cx("text-item-value")}
                        >
                          {website}
                        </Box>
                      );
                    })}
                  </Box>
                </Grid>
              )}

            {/* {Website live date} */}
            {!_.isEmpty(websiteLiveDate) &&
              _.isEqual(existingWebsite, "No") && (
                <Grid item xs={12} md={4}>
                  <Box className={cx("d-flex-column w70p")}>
                    {/* {Label} */}
                    {
                      <Box component="span" className={cx("text-item-input")}>
                        {LABEL_WEBSITE_LIVE_DATE}
                      </Box>
                    }

                    {/* {Content} */}
                    <Box component="span" className={cx("text-item-value")}>
                      {websiteLiveDate}
                    </Box>
                  </Box>
                </Grid>
              )}

            {/* {Place order through website} */}
            {
              <Grid item xs={12} md={4} className={cx("row-item")}>
                {!_.isEmpty(placeOrderThroughWebsite) && (
                  <Box className={cx("d-flex-column w70p")}>
                    {/* {Label} */}
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_PLACE_ORDER_THROUGH_WEBSITE}
                    </Box>

                    {/* {Content} */}
                    <Box component="span" className={cx("text-item-value")}>
                      {placeOrderThroughWebsite}
                    </Box>
                  </Box>
                )}
              </Grid>
            }
          </Grid>
        </Grid>

        <Grid item xs={12} className={cx("row-item")}>
          <Grid container className={cx("n-wrap")}>
            {/* {Business offerings} */}
            {
              <Grid item xs={12} md={4} className={cx("row-item")}>
                {!_.isEmpty(businessOfferings) && (
                  <Box className={cx("d-flex-column w70p")}>
                    {/* {Label} */}
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_BUSINESS_OFFERINGS}
                    </Box>

                    {/* {Content list} */}
                    {_.map(listBusinessOfferings, (item, index) => {
                      return _.size(listBusinessOfferings) > 1 ? (
                        <Box
                          key={index}
                          component="ul"
                          className={cx("text-item-value")}
                        >
                          <Box component="li">{item.label}</Box>
                        </Box>
                      ) : (
                        <Box
                          key={index}
                          component="div"
                          className={cx("text-item-value")}
                        >
                          {item.label}
                        </Box>
                      );
                    })}
                  </Box>
                )}
              </Grid>
            }

            {/* {Available spaces} */}
            {
              <Grid item xs={12} md={4}>
                {!_.isEmpty(availableSpaces) && (
                  <Box className={cx("d-flex-column w70p")}>
                    {/* {Label} */}
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_AVAILABLE_SPACES}
                    </Box>

                    {/* {Content list} */}
                    {_.map(listAvailableSpaces, (item, index) => {
                      return _.size(listAvailableSpaces) > 1 ? (
                        <Box
                          key={index}
                          component="ul"
                          className={cx("text-item-value")}
                        >
                          <Box component="li">{item.label}</Box>
                        </Box>
                      ) : (
                        <Box
                          key={index}
                          component="div"
                          className={cx("text-item-value")}
                        >
                          {item.label}
                        </Box>
                      );
                    })}
                  </Box>
                )}
              </Grid>
            }

            {/* {Card payment available at retail store} */}
            {
              <Grid item xs={12} md={4}>
                {!_.isEmpty(cardPaymentAvailableAtRetailStore) && (
                  <Box className={cx("d-flex-column w70p")}>
                    {/* {Label} */}
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_CARD_PAYMENT_AVAILABLE_AT_RETAIL_STORE}
                    </Box>

                    {/* {Content} */}
                    <Box component="span" className={cx("text-item-value")}>
                      {cardPaymentAvailableAtRetailStore}
                    </Box>
                  </Box>
                )}
              </Grid>
            }
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default BusinessDetails;
