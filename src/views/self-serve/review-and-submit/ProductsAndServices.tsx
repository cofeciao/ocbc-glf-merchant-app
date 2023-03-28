// import modules
import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./ReviewAndSubmit.scss";

// import constants
import { SELF_SERVE_PAGE } from "@/utils/constants";

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
    LABEL_SGD,
    LABEL_PERCENTAGE_OF_SERVICES_NOT_FULFILLED_IMMEDIATELY,
    LABEL_DURATION,
    LABEL_DELIVERY_TIME_TO_CUSTOMERS,
  } = SELF_SERVE_PAGE;
  const { eCommerce, pointOfSales } = data;
  const cx = classnames.bind(styles);

  // Filter
  const listProductDeliveredFrom = _.filter(
    eCommerce.productDeliveredFrom,
    (item) => item.checked
  );

  return (
    <Box>
      {/* {Point-of-Sales terminal} */}
      {_.isEqual(optionSelected, "point-of-sales-e-commerce") && (
        <Typography className={cx("sub-section-title")}>
          {LABEL_POINT_OF_SALES_TERMINAL}
        </Typography>
      )}

      <Grid container className={cx("point-of-sales-container")}>
        {/* {Type of product and/or service} */}
        {_.has(pointOfSales, "typeOfProductAndService") && (
          <Grid item xs={12}>
            <Box className={cx("d-flex-column")}>
              <Box component="span" className={cx("text-item-input")}>
                {LABEL_TYPE_OF_PRODUCT_AND_SERVICE}
              </Box>
              <Box component="span" className={cx("text-item-value")}>
                {pointOfSales.typeOfProductAndService}
              </Box>
            </Box>
          </Grid>
        )}

        {/* {Order fulfilment} */}
        {_.has(pointOfSales, "orderFulfilment") && (
          <Grid item xs={12}>
            <Box className={cx("d-flex-column")}>
              <Box component="span" className={cx("text-item-input")}>
                {LABEL_ORDER_FULFILMENT}
              </Box>
              <Box component="span" className={cx("text-item-value")}>
                {pointOfSales.orderFulfilment}
              </Box>
            </Box>
          </Grid>
        )}

        {_.has(
          pointOfSales,
          "duration" || "percentageOfProductsNotFulfilledImmediately"
        ) && (
          <Grid item xs={12} className={cx("n-wrap")}>
            <Grid container className={cx("n-wrap")}>
              {/* {Average amount per credit card transaction} */}
              {_.has(pointOfSales, "duration") && (
                <Grid item xs={12} md={6}>
                  <Box className={cx("d-flex-column")}>
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_DURATION}
                    </Box>
                    <Box component="span" className={cx("text-item-value")}>
                      {pointOfSales.duration.charAt(0).toUpperCase() +
                        pointOfSales.duration.slice(1).replace(/-/g, " ")}
                    </Box>
                  </Box>
                </Grid>
              )}

              {/* {Percentage of products/services not fulfilled immediately} */}
              {_.has(
                pointOfSales,
                "percentageOfProductsNotFulfilledImmediately"
              ) && (
                <Grid item xs={12} md={6}>
                  <Box className={cx("d-flex-column")}>
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_PERCENTAGE_OF_SERVICES_NOT_FULFILLED_IMMEDIATELY}
                    </Box>
                    <Box component="span" className={cx("text-item-value")}>
                      {`${pointOfSales.percentageOfProductsNotFulfilledImmediately}%`}
                    </Box>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Grid>
        )}

        {_.has(
          pointOfSales,
          "averageAmountPerCreditCardTransaction" ||
            "annualCreditCardSalesForecast"
        ) && (
          <Grid item xs={12} className={cx("n-wrap")}>
            <Grid container className={cx("n-wrap")}>
              {/* {Average amount per credit card transaction} */}
              {_.has(pointOfSales, "averageAmountPerCreditCardTransaction") && (
                <Grid item xs={12} md={6}>
                  <Box className={cx("d-flex-column")}>
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_AVERAGE_AMOUNT_PER_CREDIT_CARD_TRANSACTION}
                    </Box>
                    <Box component="span" className={cx("text-item-value")}>
                      {`${LABEL_SGD} ${pointOfSales.averageAmountPerCreditCardTransaction}`}
                    </Box>
                  </Box>
                </Grid>
              )}

              {/* {Annual credit card sales forecast} */}
              {_.has(pointOfSales, "annualCreditCardSalesForecast") && (
                <Grid item xs={12} md={6}>
                  <Box className={cx("d-flex-column")}>
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_ANNUAL_CREDIT_CARD_SALES_FORECAST}
                    </Box>
                    <Box component="span" className={cx("text-item-value")}>
                      {`${LABEL_SGD} ${pointOfSales.annualCreditCardSalesForecast}`}
                    </Box>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Grid>
        )}
      </Grid>

      {/* {Ecommerce} */}
      {_.isEqual(optionSelected, "point-of-sales-e-commerce") && (
        <Typography className={cx("sub-section-title")}>
          {LABEL_ECOMMERCE}
        </Typography>
      )}

      <Grid container className={cx("ecommerce-container")}>
        {/* {Type of product and/or service} */}
        {_.has(eCommerce, "typeOfProductAndService") && (
          <Grid item xs={12}>
            <Box className={cx("d-flex-column")}>
              <Box component="span" className={cx("text-item-input")}>
                {LABEL_TYPE_OF_PRODUCT_AND_SERVICE}
              </Box>
              <Box component="span" className={cx("text-item-value")}>
                {eCommerce.typeOfProductAndService}
              </Box>
            </Box>
          </Grid>
        )}

        {_.has(
          eCommerce,
          "orderFulfilment" || "percentageOfProductsNotFulfilledImmediately"
        ) && (
          <Grid item xs={12} className={cx("n-wrap")}>
            <Grid container className={cx("n-wrap")}>
              {/* {Order fulfilment} */}
              {_.has(eCommerce, "orderFulfilment") && (
                <Grid item xs={12} md={6}>
                  <Box className={cx("d-flex-column")}>
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_ORDER_FULFILMENT}
                    </Box>
                    <Box component="span" className={cx("text-item-value")}>
                      {eCommerce.orderFulfilment}
                    </Box>
                  </Box>
                </Grid>
              )}

              {/* {Percentage of products/services not fulfilled immediately} */}
              {_.has(
                eCommerce,
                "percentageOfProductsNotFulfilledImmediately"
              ) && (
                <Grid item xs={12} md={6}>
                  <Box className={cx("d-flex-column")}>
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_PERCENTAGE_OF_SERVICES_NOT_FULFILLED_IMMEDIATELY}
                    </Box>
                    <Box component="span" className={cx("text-item-value")}>
                      {`${eCommerce.percentageOfProductsNotFulfilledImmediately}%`}
                    </Box>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Grid>
        )}

        {_.has(
          eCommerce,
          "productDeliveredFrom" || "deliveryTimeToCustomers"
        ) && (
          <Grid item xs={12} className={cx("n-wrap")}>
            <Grid container className={cx("n-wrap")}>
              {/* {Product delivered from} */}
              {_.has(eCommerce, "productDeliveredFrom") && (
                <Grid item xs={12} md={6}>
                  <Box className={cx("d-flex-column")}>
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
                </Grid>
              )}

              {/* {Delivery time to customers} */}
              {_.has(eCommerce, "deliveryTimeToCustomers") && (
                <Grid item xs={12} md={6}>
                  <Box className={cx("d-flex-column")}>
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
                </Grid>
              )}
            </Grid>
          </Grid>
        )}

        {/* {Product delivery} */}
        {_.has(eCommerce, "productDelivery") && (
          <Grid item xs={12}>
            <Box className={cx("d-flex-column")}>
              <Box component="span" className={cx("text-item-input")}>
                {LABEL_PRODUCT_DELIVERY}
              </Box>
              <Box component="span" className={cx("text-item-value")}>
                {eCommerce.productDelivery}
              </Box>
            </Box>
          </Grid>
        )}

        {_.has(
          eCommerce,
          "averageAmountPerCreditCardTransaction" ||
            "annualCreditCardSalesForecast"
        ) && (
          <Grid item xs={12} className={cx("n-wrap")}>
            <Grid container className={cx("n-wrap")}>
              {/* {Average amount per credit card transaction} */}
              {_.has(eCommerce, "averageAmountPerCreditCardTransaction") && (
                <Grid item xs={12} md={6}>
                  <Box className={cx("d-flex-column")}>
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_AVERAGE_AMOUNT_PER_CREDIT_CARD_TRANSACTION}
                    </Box>
                    <Box component="span" className={cx("text-item-value")}>
                      {`${LABEL_SGD} ${eCommerce.averageAmountPerCreditCardTransaction}`}
                    </Box>
                  </Box>
                </Grid>
              )}

              {/* {Annual credit card sales forecast} */}
              {_.has(eCommerce, "annualCreditCardSalesForecast") && (
                <Grid item xs={12} md={6}>
                  <Box className={cx("d-flex-column")}>
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_ANNUAL_CREDIT_CARD_SALES_FORECAST}
                    </Box>
                    <Box component="span" className={cx("text-item-value")}>
                      {`${LABEL_SGD} ${eCommerce.annualCreditCardSalesForecast}`}
                    </Box>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
export default ProductsAndServices;
