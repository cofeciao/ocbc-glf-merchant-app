// import modules
import React from "react";
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

  const listWebsiteUrlFilter = _.filter(
    listWebsiteUrl,
    (website: string) =>  _.size(website)
  );

  return (
    <Box>
      {/* {Section Title} */}
      {_.isEqual(optionSelected, "point-of-sales-e-commerce") && (
        <Typography className={cx("sub-section-title")}>
          {LABEL_POINT_OF_SALES_TERMINAL}
        </Typography>
      )}

      <Grid container className={cx("point-of-sales-container")}>
        {/* {Number of outlets with Point-of-Sales termimals} */}
        {!_.isEmpty(numberOfOutlets) && (
          <Grid item xs={12} className={cx("row-item")}>
            <Box className={cx("d-flex-column")}>
              {/* {Label} */}
              <Box component="span" className={cx("text-item-input")}>
                {LABEL_NUMBER_OF_OUTLETS_WITH_POINT_OF_SALES_TERMIMALS}
              </Box>

              {/* {Content} */}
              <Box component="span" className={cx("text-item-value")}>
                {numberOfOutlets}
              </Box>
            </Box>
          </Grid>
        )}

        {/* {Business ready to operate} */}
        {!_.isEmpty(businessReadyToOperate) && (
          <Grid item xs={12} className={cx("row-item")}>
            <Box className={cx("d-flex-column")}>
              {/* {Label} */}
              <Box component="span" className={cx("text-item-input")}>
                {LABEL_BUSINESS_READY_TO_OPERATE}
              </Box>

              {/* {Content} */}
              <Box component="span" className={cx("text-item-value")}>
                {businessReadyToOperate}
              </Box>
            </Box>
          </Grid>
        )}

        {/* {OCBC business account} */}
        {!_.isEmpty(businessAccount) && (
          <Grid item xs={12} className={cx("row-item")}>
            <Box className={cx("d-flex-column")}>
              {/* {Label} */}
              <Box component="span" className={cx("text-item-input")}>
                {LABEL_OCBC_BUSINESS_ACCOUNT}
              </Box>

              {/* {Content} */}
              <Box component="span" className={cx("text-item-value")}>
                {businessAccount}
              </Box>
            </Box>
          </Grid>
        )}
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
            {!_.isEmpty(existingWebsite) && (
              <Grid item xs={12} md={6}>
                <Box className={cx("d-flex-column")}>
                  {/* {Label} */}
                  <Box component="span" className={cx("text-item-input")}>
                    {LABEL_EXISTING_WEBSITE}
                  </Box>

                  {/* {Content} */}
                  <Box component="span" className={cx("text-item-value")}>
                    {existingWebsite}
                  </Box>
                </Box>
              </Grid>
            )}

            {/* {Website’s URL} */}
            {!_.isEmpty(listWebsiteUrlFilter) && (
              <Grid item xs={12} md={6}>
                <Box className={cx("d-flex-column")}>
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
            {!_.isEmpty(websiteLiveDate) && (
              <Grid item xs={12} md={6}>
                <Box className={cx("d-flex-column")}>
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
          </Grid>
        </Grid>

        {/* {Place order through website} */}
        {!_.isEmpty(placeOrderThroughWebsite) && (
          <Grid item xs={12} className={cx("row-item")}>
            <Box className={cx("d-flex-column")}>
              {/* {Label} */}
              <Box component="span" className={cx("text-item-input")}>
                {LABEL_PLACE_ORDER_THROUGH_WEBSITE}
              </Box>

              {/* {Content} */}
              <Box component="span" className={cx("text-item-value")}>
                {placeOrderThroughWebsite}
              </Box>
            </Box>
          </Grid>
        )}

        {/* {Business offerings} */}
        {!_.isEmpty(businessOfferings) && (
          <Grid item xs={12} className={cx("row-item")}>
            <Box className={cx("d-flex-column")}>
              {/* {Label} */}
              <Box component="span" className={cx("text-item-input")}>
                {LABEL_BUSINESS_OFFERINGS}
              </Box>

              {/* {Content list} */}
              {_.map(businessOfferings, (item, index) => {
                return (
                  <Box
                    key={index}
                    component="span"
                    className={cx("text-item-value")}
                  >
                    {item.name}
                  </Box>
                );
              })}
            </Box>
          </Grid>
        )}

        <Grid item xs={12} className={cx("row-item")}>
          <Grid container className={cx("n-wrap")}>
            {/* {Available spaces} */}
            {!_.isEmpty(availableSpaces) && (
              <Grid item xs={12} md={6}>
                <Box className={cx("d-flex-column")}>
                  {/* {Label} */}
                  <Box component="span" className={cx("text-item-input")}>
                    {LABEL_AVAILABLE_SPACES}
                  </Box>

                  {/* {Content list} */}
                  {_.map(availableSpaces, (item, index) => {
                    return _.size(availableSpaces) > 1 ? (
                      <Box
                        key={index}
                        component="ul"
                        className={cx("text-item-value")}
                      >
                        <Box component="li">{item.name}</Box>
                      </Box>
                    ) : (
                      <Box
                        key={index}
                        component="div"
                        className={cx("text-item-value")}
                      >
                        {item.name}
                      </Box>
                    );
                  })}
                </Box>
              </Grid>
            )}

            {/* {Card payment available at retail store} */}
            {!_.isEmpty(cardPaymentAvailableAtRetailStore) && (
              <Grid item xs={12} md={6}>
                <Box className={cx("d-flex-column")}>
                  {/* {Label} */}
                  <Box component="span" className={cx("text-item-input")}>
                    {LABEL_CARD_PAYMENT_AVAILABLE_AT_RETAIL_STORE}
                  </Box>

                  {/* {Content} */}
                  <Box component="span" className={cx("text-item-value")}>
                    {cardPaymentAvailableAtRetailStore}
                  </Box>
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default BusinessDetails;
