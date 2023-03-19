import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

// import types
import { IReviewSubmit } from "./ReviewSubmit";

const ProductsAndServices: React.FC<IReviewSubmit.IProductsAndServices> = (props) => {
  const { cx, data, titles } = props;
  const {
    titleTypeOfProduct,
    titleOrderFulfilment,
    titleAverageAmountPerCreditCardTransaction,
    titleAnnualCreditCardSalesForecast,
    refundPolicy: {
      titleRefundPolicy, titleCopyOfRefundPolicy
    }
  } = titles; 

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
        <Grid item xs={12}>{renderContent(titleTypeOfProduct, data && data.typeOfProduct)}</Grid>
        <Grid item xs={12}>{renderContent(titleOrderFulfilment, data && data.orderFulfiment)}</Grid>
        <Grid item xs={6}>{renderContent(titleAverageAmountPerCreditCardTransaction, data && data.averageAmountPerCreditCardTransaction)}</Grid>
        <Grid item xs={6}>{renderContent(titleAnnualCreditCardSalesForecast, data && data.annualCreditCardSalesForecast)}</Grid>
        <Grid item xs={12}>
          <Typography className={cx("sub-title")}>{titleRefundPolicy}</Typography>
        </Grid>
        <Grid item xs={6}>{renderContent(titleRefundPolicy, data && data.refundPolicy ? "Yes" : "No")}</Grid>
        <Grid item xs={6}>{renderContent(titleCopyOfRefundPolicy, data && data.copyOfRefundPolicy)}</Grid>

     </Grid>
    </Box>
  )
}

export default ProductsAndServices;