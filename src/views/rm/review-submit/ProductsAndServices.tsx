import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

// import types
import { IReviewSubmit } from "./ReviewSubmit";

const ProductsAndServices: React.FC<IReviewSubmit.IProductsAndServices> = (props) => {
  const { cx, data } = props;


  /**
   * render UI
   * @returns {HTML}
   */
  const renderContent = (title: string, content: string) => {
    return (
      <>
        <Typography className={cx("title")}>{title}</Typography> 
        <Typography className={cx("content")}>{content}</Typography> 
      </>
    )
  }

  return (
    <Box className={cx("products-and-services")}>
     <Grid container spacing={3}>
        <Grid item xs={12}>{renderContent("Type of product and/or service", data && data.typeOfProduct)}</Grid>
        <Grid item xs={12}>{renderContent("Order fulfilment", data && data.orderFulfiment)}</Grid>
        <Grid item xs={6}>{renderContent("Average amount per credit card transaction", data && data.averageAmountPerCreditCardTransaction)}</Grid>
        <Grid item xs={6}>{renderContent("Annual credit card sales forecast", data && data.annualCreditCardSalesForecast)}</Grid>
        <Grid item xs={12}>
          <Typography className={cx("sub-title")}>Refund policy</Typography>
        </Grid>
        <Grid item xs={6}>{renderContent("Refund policy", data && data.refundPolicy ? "Yes" : "No")}</Grid>
        <Grid item xs={6}>{renderContent("Copy of refund policy", data && data.copyOfRefundPolicy)}</Grid>

     </Grid>
    </Box>
  )
}

export default ProductsAndServices;