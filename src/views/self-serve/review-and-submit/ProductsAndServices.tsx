// import modules
import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./ReviewAndSubmit.scss";

// import constants
import {
  OPTION_POS_AND_ECOM,
  SELF_SERVE_PAGE,
} from "@/utils/constants";

// import types
import { IReviewAndSubmit } from "./ReviewAndSubmit";

// render UI
const ProductsAndServices: React.FC<IReviewAndSubmit.IProductsAndServices> = (
  props
) => {
  const { data, optionSelected } = props;
  const {
    LABEL_POINT_OF_SALES_TERMINAL,
    LABEL_ECOMMERCE,
    LABEL_TYPE_OF_PRODUCT_AND_SERVICE,
    LABEL_ORDER_FULFILMENT,
    LABEL_AVERAGE_AMOUNT_PER_CREDIT_CARD_TRANSACTION,
    LABEL_ANNUAL_CREDIT_CARD_SALES_FORECAST,
    LABEL_PRODUCT_DELIVERED_FROM,
    LABEL_PRODUCT_DELIVERY,
    LABEL_PERCENTAGE_OF_SERVICES_NOT_FULFILLED_IMMEDIATELY,
    LABEL_DURATION,
    LABEL_DELIVERY_TIME_TO_CUSTOMERS,
    LIST_RADIO_HOW_QUICKLY_DOES_YOUR_BUSINESS_FULFIL_THESE_PRODUCTS_AND_SERVICES:
      { listRadio },
  } = SELF_SERVE_PAGE;
  const { eCommerce, pointOfSales } = data;

  // classnames
  const cx = classnames.bind(styles);

  // Filter
  const listProductDeliveredFrom = _.filter(
    eCommerce.productDeliveredFrom,
    (item) => item.checked
  );

  return (
    <Box>
      {/* {Point-of-Sales terminal} */}
      {_.isEqual(optionSelected, OPTION_POS_AND_ECOM) && (
        <Typography className={cx("sub-section-title")}>
          {LABEL_POINT_OF_SALES_TERMINAL}
        </Typography>
      )}

      <Grid container className={cx("point-of-sales-container")}>
        <Grid item xs={12} className={cx("n-wrap")}>
          <Grid container className={cx("n-wrap")}>
            {/* {Type of product and/or service} */}
            {
              <Grid item xs={12} md={4}>
                {!_.isEmpty(_.get(pointOfSales, "typeOfProductAndService")) && (
                  <Box className={cx("d-flex-column w70p")}>
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_TYPE_OF_PRODUCT_AND_SERVICE}
                    </Box>
                    <Box component="span" className={cx("text-item-value")}>
                      {pointOfSales.typeOfProductAndService}
                    </Box>
                  </Box>
                )}
              </Grid>
            }

            {/* {Order fulfilment} */}
            {
              <Grid item xs={12} md={4}>
                {!_.isEmpty(_.get(pointOfSales, "orderFulfilment")) && (
                  <Box className={cx("d-flex-column w70p")}>
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_ORDER_FULFILMENT}
                    </Box>
                    <Box component="span" className={cx("text-item-value")}>
                      {pointOfSales.orderFulfilment}
                    </Box>
                  </Box>
                )}
              </Grid>
            }

            <Grid item xs={12} md={4}></Grid>
          </Grid>
        </Grid>

        {_.isEqual(
          _.get(pointOfSales, "orderFulfilment"),
          listRadio[1].label
        ) && (
          <Grid item xs={12} className={cx("n-wrap")}>
            <Grid container className={cx("n-wrap")}>
              {/* {Duration} */}
              {
                <Grid item xs={12} md={4}>
                  {!_.isEmpty(_.get(pointOfSales, "duration")) && (
                    <Box className={cx("d-flex-column w70p")}>
                      <Box component="span" className={cx("text-item-input")}>
                        {LABEL_DURATION}
                      </Box>
                      <Box component="span" className={cx("text-item-value")}>
                        {pointOfSales.duration.charAt(0).toUpperCase() +
                          pointOfSales.duration.slice(1).replace(/-/g, " ")}
                      </Box>
                    </Box>
                  )}
                </Grid>
              }

              {/* {Percentage of products/services not fulfilled immediately} */}
              {
                <Grid item xs={12} md={4}>
                  {
                    <Box className={cx("d-flex-column w70p")}>
                      <Box component="span" className={cx("text-item-input")}>
                        {LABEL_PERCENTAGE_OF_SERVICES_NOT_FULFILLED_IMMEDIATELY}
                      </Box>
                      <Box component="span" className={cx("text-item-value")}>
                        {!_.isEmpty(
                          _.get(
                            pointOfSales,
                            "percentageOfProductsNotFulfilledImmediately"
                          )
                        )
                          ? pointOfSales.percentageOfProductsNotFulfilledImmediately
                          : "-"}
                      </Box>
                    </Box>
                  }
                </Grid>
              }
            </Grid>
            <Grid item xs={12} md={4}></Grid>
          </Grid>
        )}

        {!_.isEmpty(_.get(pointOfSales, "estimatedAmount")) && (
          <Grid item xs={12} className={cx("n-wrap")}>
            <Grid container className={cx("n-wrap")}>
              {/* {Estimated amount per credit card transaction (SGD)} */}
              {
                <Grid item xs={12} md={4}>
                  {!_.isEmpty(_.get(pointOfSales, "estimatedAmount")) && (
                    <Box className={cx("d-flex-column w70p")}>
                      <Box component="span" className={cx("text-item-input")}>
                        {LABEL_AVERAGE_AMOUNT_PER_CREDIT_CARD_TRANSACTION}
                      </Box>
                      <Box component="span" className={cx("text-item-value")}>
                        {pointOfSales.estimatedAmount}
                      </Box>
                    </Box>
                  )}
                </Grid>
              }

              {/* {Estimated annual credit card sales (SGD)} */}
              {
                <Grid item xs={12} md={4}>
                  {!_.isEmpty(_.get(pointOfSales, "estimatedAnnualCredit")) && (
                    <Box className={cx("d-flex-column w70p")}>
                      <Box component="span" className={cx("text-item-input")}>
                        {LABEL_ANNUAL_CREDIT_CARD_SALES_FORECAST}
                      </Box>
                      <Box component="span" className={cx("text-item-value")}>
                        {pointOfSales.estimatedAnnualCredit}
                      </Box>
                    </Box>
                  )}
                </Grid>
              }

              <Grid item xs={12} md={4}></Grid>
            </Grid>
          </Grid>
        )}
      </Grid>

      {/* {Ecommerce} */}
      {_.isEqual(optionSelected, OPTION_POS_AND_ECOM) && (
        <Typography className={cx("sub-section-title")}>
          {LABEL_ECOMMERCE}
        </Typography>
      )}

      <Grid container className={cx("ecommerce-container")}>
        <Grid item xs={12} className={cx("n-wrap")}>
          <Grid container className={cx("n-wrap")}>
            {/* {Type of product and/or service} */}
            {
              <Grid item xs={12} md={4}>
                {!_.isEmpty(_.get(eCommerce, "typeOfProductAndService")) && (
                  <Box className={cx("d-flex-column w70p")}>
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_TYPE_OF_PRODUCT_AND_SERVICE}
                    </Box>
                    <Box component="span" className={cx("text-item-value")}>
                      {eCommerce.typeOfProductAndService}
                    </Box>
                  </Box>
                )}
              </Grid>
            }

            {/* {Order fulfilment} */}
            {
              <Grid item xs={12} md={4}>
                {!_.isEmpty(_.get(eCommerce, "orderFulfilment")) && (
                  <Box className={cx("d-flex-column w70p")}>
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_ORDER_FULFILMENT}
                    </Box>
                    <Box component="span" className={cx("text-item-value")}>
                      {eCommerce.orderFulfilment}
                    </Box>
                  </Box>
                )}
              </Grid>
            }

            {/* {Percentage of products/services not fulfilled immediately} */}
            {
              <Grid item xs={12} md={4}>
                {!_.isEmpty(
                  _.get(
                    eCommerce,
                    "percentageOfProductsNotFulfilledImmediately"
                  )
                ) && (
                  <Box className={cx("d-flex-column w70p")}>
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_PERCENTAGE_OF_SERVICES_NOT_FULFILLED_IMMEDIATELY}
                    </Box>
                    <Box component="span" className={cx("text-item-value")}>
                      {`${eCommerce.percentageOfProductsNotFulfilledImmediately}%`}
                    </Box>
                  </Box>
                )}
              </Grid>
            }
          </Grid>
        </Grid>

        {!_.isEmpty(_.get(eCommerce, "productDeliveredFrom")) && (
          <Grid item xs={12} className={cx("n-wrap")}>
            <Grid container className={cx("n-wrap")}>
              {/* {Product delivered from} */}
              {
                <Grid item xs={12} md={4}>
                  {!_.isEmpty(_.get(eCommerce, "productDeliveredFrom")) && (
                    <Box className={cx("d-flex-column w70p")}>
                      <Box component="span" className={cx("text-item-input")}>
                        {LABEL_PRODUCT_DELIVERED_FROM}
                      </Box>
                      {_.map(listProductDeliveredFrom, (item, index) => {
                        return _.size(listProductDeliveredFrom) > 1 ? (
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
                            component="span"
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

              {/* {Delivery time to customers} */}
              {
                <Grid item xs={12} md={4}>
                  {!_.isEmpty(_.get(eCommerce, "deliveryTimeToCustomers")) && (
                    <Box className={cx("d-flex-column w70p")}>
                      <Box component="span" className={cx("text-item-input")}>
                        {LABEL_DELIVERY_TIME_TO_CUSTOMERS}
                      </Box>
                      <Box component="span" className={cx("text-item-value")}>
                        {eCommerce.deliveryTimeToCustomers
                          .charAt(0)
                          .toUpperCase() +
                          eCommerce.deliveryTimeToCustomers
                            .slice(1)
                            .replace(/-/g, " ")}
                      </Box>
                    </Box>
                  )}
                </Grid>
              }

              {/* {Product delivery} */}
              {
                <Grid item xs={12} md={4}>
                  {!_.isEmpty(_.get(eCommerce, "productDelivery")) && (
                    <Box className={cx("d-flex-column w70p")}>
                      <Box component="span" className={cx("text-item-input")}>
                        {LABEL_PRODUCT_DELIVERY}
                      </Box>
                      <Box component="span" className={cx("text-item-value")}>
                        {eCommerce.productDelivery}
                      </Box>
                    </Box>
                  )}
                </Grid>
              }
            </Grid>
          </Grid>
        )}

        {!_.isEmpty(_.get(eCommerce, "estimatedAmount"))  && (
          <Grid item xs={12} className={cx("n-wrap")}>
            <Grid container className={cx("n-wrap")}>
              {/* {Estimated amount per credit card transaction (SGD)} */}
              {
                <Grid item xs={12} md={4}>
                  {!_.isEmpty(_.get(eCommerce, "estimatedAmount")) && (
                    <Box className={cx("d-flex-column w70p")}>
                      <Box component="span" className={cx("text-item-input")}>
                        {LABEL_AVERAGE_AMOUNT_PER_CREDIT_CARD_TRANSACTION}
                      </Box>
                      <Box component="span" className={cx("text-item-value")}>
                        {eCommerce.estimatedAmount}
                      </Box>
                    </Box>
                  )}
                </Grid>
              }

              {/* {Estimated annual credit card sales (SGD)} */}
              {
                <Grid item xs={12} md={4}>
                  {!_.isEmpty(_.get(eCommerce, "estimatedAnnualCredit")) && (
                    <Box className={cx("d-flex-column w70p")}>
                      <Box component="span" className={cx("text-item-input")}>
                        {LABEL_ANNUAL_CREDIT_CARD_SALES_FORECAST}
                      </Box>
                      <Box component="span" className={cx("text-item-value")}>
                        {eCommerce.estimatedAnnualCredit}
                      </Box>
                    </Box>
                  )}
                </Grid>
              }
              <Grid item xs={4}></Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
export default ProductsAndServices;
