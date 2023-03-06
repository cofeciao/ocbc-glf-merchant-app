// import modules
import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./ReviewAndSubmit.scss";

// render UI
const ProductsAndServices: React.FC<any> = (props) => {
  const { data } = props;
  const { eCommerce, pointOfSales } = data;
  const cx = classnames.bind(styles);

  //   "pointOfSales": {
  //     "typeOfProductAndService-pos": "Bistro",
  //     "averageAmountPerCreditCardTransaction-pos": "1000",
  //     "annualCreditCardSalesForecast-pos": "1000",
  //     "orderFulfilment": "Fulfillment over a period of time",
  //     "deliveryTimeToCustomers": "within-a-month",
  //     "percentageOfProductsNotFulfilledImmediately": "100"
  // },

  return (
    <Box>
      <Grid container>
        <Typography>Point-of-Sales terminal</Typography>

        <Grid item xs={12}>
          <Box className={cx("d-flex-column")}>
            <Box component="span" className={cx("text-item-input")}>
              Type of product and/or service
            </Box>
            <Box component="span" className={cx("text-item-value")}>
              {pointOfSales.typeOfProductAndService}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box className={cx("d-flex-column")}>
            <Box component="span" className={cx("text-item-input")}>
              Order fulfilment
            </Box>
            <Box component="span" className={cx("text-item-value")}>
              {pointOfSales.orderFulfilment}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} className={cx("n-wrap")}>
          <Grid container className={cx("n-wrap")}>
            <Grid xs={12} md={6}>
              <Box className={cx("d-flex-column")}>
                <Box component="span" className={cx("text-item-input")}>
                  Average amount per credit card transaction
                </Box>
                <Box component="span" className={cx("text-item-value")}>
                  {pointOfSales.averageAmountPerCreditCardTransaction}
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} md={6}>
              <Box className={cx("d-flex-column")}>
                <Box component="span" className={cx("text-item-input")}>
                  Annual credit card sales forecast
                </Box>
                <Box component="span" className={cx("text-item-value")}>
                  {pointOfSales.annualCreditCardSalesForecast}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Box className={cx("section-title")}>eCommerce</Box>

        <Grid item xs={12}>
          <Box className={cx("d-flex-column")}>
            <Box component="span" className={cx("text-item-input")}>
              Type of product and/or service
            </Box>
            <Box component="span" className={cx("text-item-value")}>
              {eCommerce.typeOfProductAndService}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={cx("d-flex-column")}>
            <Box component="span" className={cx("text-item-input")}>
              Order fulfilment
            </Box>
            <Box component="span" className={cx("text-item-value")}>
              {eCommerce.orderFulfilment}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={cx("d-flex-column")}>
            <Box component="span" className={cx("text-item-input")}>
              Product delivered from
            </Box>
            <Box component="span" className={cx("text-item-value")}>
              {pointOfSales.productDeliveredFrom}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={cx("d-flex-column")}>
            <Box component="span" className={cx("text-item-input")}>
              Product delivery
            </Box>
            <Box component="span" className={cx("text-item-value")}>
              {eCommerce.productDelivery}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} className={cx("n-wrap")}>
          <Grid container className={cx("n-wrap")}>
            <Grid xs={12} md={6}>
              <Box className={cx("d-flex-column")}>
                <Box component="span" className={cx("text-item-input")}>
                  Average amount per credit card transaction
                </Box>
                <Box component="span" className={cx("text-item-value")}>
                  {eCommerce.averageAmountPerCreditCardTransaction}
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} md={6}>
              <Box className={cx("d-flex-column")}>
                <Box component="span" className={cx("text-item-input")}>
                  Annual credit card sales forecast
                </Box>
                <Box component="span" className={cx("text-item-value")}>
                  {eCommerce.annualCreditCardSalesForecast}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ProductsAndServices;
