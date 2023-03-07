// import modules
import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./ReviewAndSubmit.scss";
import { SELF_SERVE_PAGE } from "@/utils/constants";

// render UI
const ProductsAndServices: React.FC<any> = (props) => {
  const { data, optionSelected } = props;
  const { LABEL_POINT_OF_SALES_TERMINAL, LABEL_ECOMMERCE } = SELF_SERVE_PAGE;
  const { eCommerce, pointOfSales } = data;
  const cx = classnames.bind(styles);

  return (
    <Box>
      <Grid container>
        {/* {Section Title} */}
        {_.isEqual(optionSelected, "point-of-sales-e-commerce") && (
          <Typography className={cx("section-title")}>
            {LABEL_POINT_OF_SALES_TERMINAL}
          </Typography>
        )}

        {_.has(pointOfSales, "typeOfProductAndService") && (
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
        )}

        {_.has(pointOfSales, "orderFulfilment") && (
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
        )}

        <Grid item xs={12} className={cx("n-wrap")}>
          <Grid container className={cx("n-wrap")}>
            {_.has(pointOfSales, "averageAmountPerCreditCardTransaction") && (
              <Grid item xs={12} md={6}>
                <Box className={cx("d-flex-column")}>
                  <Box component="span" className={cx("text-item-input")}>
                    Average amount per credit card transaction
                  </Box>
                  <Box component="span" className={cx("text-item-value")}>
                    {pointOfSales.averageAmountPerCreditCardTransaction}
                  </Box>
                </Box>
              </Grid>
            )}
            {_.has(pointOfSales, "annualCreditCardSalesForecast") && (
              <Grid item xs={12} md={6}>
                <Box className={cx("d-flex-column")}>
                  <Box component="span" className={cx("text-item-input")}>
                    Annual credit card sales forecast
                  </Box>
                  <Box component="span" className={cx("text-item-value")}>
                    {pointOfSales.annualCreditCardSalesForecast}
                  </Box>
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>

        {/* {Section Title} */}
        {_.isEqual(optionSelected, "point-of-sales-e-commerce") && (
          <Typography className={cx("section-title")}>
            {LABEL_ECOMMERCE}
          </Typography>
        )}

        {_.has(eCommerce, "typeOfProductAndService") && (
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
        )}

        {_.has(eCommerce, "orderFulfilment") && (
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
        )}

        {_.has(eCommerce, "productDeliveredFrom") && (
          <Grid item xs={12}>
            <Box className={cx("d-flex-column")}>
              <Box component="span" className={cx("text-item-input")}>
                Product delivered from
              </Box>
              {_.map(eCommerce.productDeliveredFrom, (item) => {
                <Box component="span" className={cx("text-item-value")}>
                  {item.name}
                </Box>;
              })}
            </Box>
          </Grid>
        )}

        {_.has(eCommerce, "productDelivery") && (
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
        )}

        <Grid item xs={12} className={cx("n-wrap")}>
          <Grid container className={cx("n-wrap")}>
            {_.has(eCommerce, "averageAmountPerCreditCardTransaction") && (
              <Grid item xs={12} md={6}>
                <Box className={cx("d-flex-column")}>
                  <Box component="span" className={cx("text-item-input")}>
                    Average amount per credit card transaction
                  </Box>
                  <Box component="span" className={cx("text-item-value")}>
                    {eCommerce.averageAmountPerCreditCardTransaction}
                  </Box>
                </Box>
              </Grid>
            )}

            {_.has(eCommerce, "annualCreditCardSalesForecast") && (
              <Grid item xs={12} md={6}>
                <Box className={cx("d-flex-column")}>
                  <Box component="span" className={cx("text-item-input")}>
                    Annual credit card sales forecast
                  </Box>
                  <Box component="span" className={cx("text-item-value")}>
                    {eCommerce.annualCreditCardSalesForecast}s
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
