// import modules
import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./ReviewAndSubmit.scss";
import { SELF_SERVE_PAGE } from "@/utils/constants";

// render UI
const ProductsAndServices: React.FC<any> = (props) => {
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
  } = SELF_SERVE_PAGE;
  const { eCommerce, pointOfSales } = data;
  const cx = classnames.bind(styles);

  return (
    <Box>
      {/* {Section Title} */}
      {_.isEqual(optionSelected, "point-of-sales-e-commerce") && (
        <Typography className={cx("sub-section-title")}>
          {LABEL_POINT_OF_SALES_TERMINAL}
        </Typography>
      )}

      <Grid container className={cx("point-of-sales-container")}>
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

        <Grid item xs={12} className={cx("n-wrap")}>
          <Grid container className={cx("n-wrap")}>
            {_.has(pointOfSales, "deliveryTimeToCustomers") && (
              <Grid item xs={12} md={6}>
                <Box className={cx("d-flex-column")}>
                  <Box component="span" className={cx("text-item-input")}>
                    {LABEL_AVERAGE_AMOUNT_PER_CREDIT_CARD_TRANSACTION}
                  </Box>
                  <Box component="span" className={cx("text-item-value")}>
                    {pointOfSales.deliveryTimeToCustomers}
                  </Box>
                </Box>
              </Grid>
            )}
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

        <Grid item xs={12} className={cx("n-wrap")}>
          <Grid container className={cx("n-wrap")}>
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
      </Grid>

      {/* {Section Title} */}
      {_.isEqual(optionSelected, "point-of-sales-e-commerce") && (
        <Typography className={cx("sub-section-title")}>
          {LABEL_ECOMMERCE}
        </Typography>
      )}

      <Grid container className={cx("ecommerce-container")}>
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

        <Grid item xs={12} className={cx("n-wrap")}>
          <Grid container className={cx("n-wrap")}>
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
                    {`${eCommerce.percentageOfProductsNotFulfilledImmediately}%`}
                  </Box>
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>

        <Grid item xs={12} className={cx("n-wrap")}>
          <Grid container className={cx("n-wrap")}>
            {_.has(eCommerce, "productDeliveredFrom") && (
              <Grid item xs={12} md={6}>
                <Box className={cx("d-flex-column")}>
                  <Box component="span" className={cx("text-item-input")}>
                    {LABEL_PRODUCT_DELIVERED_FROM}
                  </Box>
                  {_.map(eCommerce.productDeliveredFrom, (item, index) => {
                    return _.size(eCommerce.productDeliveredFrom) > 1 ? (
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

            {_.has(pointOfSales, "deliveryTimeToCustomers") && (
              <Grid item xs={12} md={6}>
                <Box className={cx("d-flex-column")}>
                  <Box component="span" className={cx("text-item-input")}>
                    {LABEL_AVERAGE_AMOUNT_PER_CREDIT_CARD_TRANSACTION}
                  </Box>
                  <Box component="span" className={cx("text-item-value")}>
                    {eCommerce.deliveryTimeToCustomers}
                  </Box>
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>

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

        <Grid item xs={12} className={cx("n-wrap")}>
          <Grid container className={cx("n-wrap")}>
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
      </Grid>
    </Box>
  );
};
export default ProductsAndServices;
