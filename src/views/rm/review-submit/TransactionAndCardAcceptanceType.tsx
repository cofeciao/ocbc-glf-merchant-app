import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

// import types
import { IReviewSubmit } from "./ReviewSubmit";

const TransactionAndCardAcceptanceType: React.FC<IReviewSubmit.ITransactionAndCardAcceptanceType> = (props) => {
  const { cx, data } = props;

  /**
   * render UI
   * @returns {HTML}
   */
  const renderPaymentOptions = (values: any[]) => {
    if (values && values.length > 0) {
      return (
        <div className={cx("group-item-payment-options")}>
          {values.map((item: string, index: number) => (
            <div key={index}>
              <Typography className={cx("content")}>&#8226; {item}</Typography> 
            </div>
          ))}
        </div>
      ) 
    }
  }

  /**
   * render UI
   * @returns {HTML}
   */
  const renderContent = (title: string, content: string) => {
    return (
      <div className={cx("group-item")}>
        <Typography className={cx("title")}>{title}</Typography> 
        <Typography className={cx("content")}>{content}</Typography> 
      </div>
    )
  }

  /**
   * render UI
   * @returns {HTML}
   */
  const renderRepaymentPeriodsOffered = (title: string, values: any[]) => {
    return (
      <>
        <Typography className={cx("title")}>{title}</Typography> 
        <div className={cx("group-item-repayment")}>
          {values.map((item: string, index: number) => (
            <Typography key={index} className={cx("content")}>&#8226; {item}</Typography>
          ))} 
        </div>
      </>
    )
  }

  return (
    <Box className={cx("transaction-card-acceptance-type")}>
      <Grid container>
        <Grid item xs={6}>
          <Typography className={cx("title")}>Service</Typography> 
          <Typography className={cx("content")}>{data && data.service}</Typography> 
        </Grid>
        <Grid item xs={6}>
          <Typography className={cx("title")}>Payment options</Typography>
          {renderPaymentOptions(data.paymentOptions)}
        </Grid>
      </Grid>

      {/* Other services Section */}
      <Typography className={cx("sub-title")}>Other services</Typography>
      
      {renderContent("Instalment Payment Plan (IPP) for OCBC credit cards", data && data.otherServices && data.otherServices.instalmentPaymentPlan ? "Yes" : "No")}
      
      {renderRepaymentPeriodsOffered("Repayment periods offered", data && data.otherServices && data.otherServices.repaymentPeriodOffered)}
      
      {renderContent("Direct Currency Conversion (DCC) for Visa/Mastercard", data && data.otherServices && data.otherServices.directCurrencyConversionForVisa ? "Yes" : "No")}
      
      {renderContent("Mail Order/Telephone Order", data && data.otherServices && data.otherServices.mailOrder ? "Yes" : "No")}
    </Box>
  )
}

export default TransactionAndCardAcceptanceType;