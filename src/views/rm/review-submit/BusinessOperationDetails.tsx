import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

// import types
import { IReviewSubmit } from "./ReviewSubmit";

const BusinessOperationDetails: React.FC<IReviewSubmit.IBusinessOperationDetails> = (props) => {
  const { cx, data, titles } = props;
  const {
    titleNumberOfOutlets,
    titleBusinessReadyToOperate,
    titleOCBCBusinessAccount,
    titleOCBCCusinessAccountNumber,
    titleExistingWebsite,
    titleWebsiteURL,
    titlePlaceOrderThroughWebsite,
    titleBusinessOfferings,
    titleAvailableSpaces,
    titleCardPaymentAvailable,
    outlet: {
      titleTradeName,
      titlePostalCode,
      titleBlockNumber,
      titleStreetName,
      titleUnitNumber,
    }
  } = titles;
  /**
   * render UI
   * @returns {HTML}
   */
  const renderContent = (title: string, content: string | []) => {
    return (
      <>
        <Typography className={cx("title")}>{title}</Typography> 
        {Array.isArray(content) ? (
          content.map((item: string, index: number) => (
            <Typography key={index} className={cx("content")}>&#8226; {item}</Typography> 
            ))
          ) : (
          <Typography className={cx("content")}>{content}</Typography> 
        )}
      </>
    )
  }

  return (
    <Box className={cx("company-registration")}>
      <Grid container spacing={3}>
        <Grid item xs={12}>{renderContent(titleNumberOfOutlets, data && data.numberOfOutletWithPointOfSalesTerminals)}</Grid>
        <Grid item xs={12}>{renderContent(titleBusinessReadyToOperate, data && data.businessReadyToOperate ? "Yes" : "false")}</Grid>
        <Grid item xs={6}>{renderContent(titleOCBCBusinessAccount, data && data.businessReadyToOperate ? "Yes" : "false")}</Grid>
        <Grid item xs={6}>{renderContent(titleOCBCCusinessAccountNumber, data && data.ocbcBusinessAccountNumber)}</Grid>
        <Grid item xs={6}>{renderContent(titleBusinessReadyToOperate, data && data.businessReadyToOperate ? "Yes" : "No")}</Grid>
        <Grid item xs={6}>{renderContent(titleWebsiteURL, data && data.websiteURL)}</Grid>
        <Grid item xs={12}>{renderContent(titlePlaceOrderThroughWebsite, data && data.businessReadyToOperate ? "Yes" : "No")}</Grid>
        <Grid item xs={12}>{renderContent(titleBusinessOfferings, data && data.businessOfferings)}</Grid>
        <Grid item xs={6}>{renderContent(titleAvailableSpaces, data && data.avaliableSpaces)}</Grid>
        <Grid item xs={6}>{renderContent(titleCardPaymentAvailable, data && data.cardPaymentAvailable ? "Yes" : "No")}</Grid>
      </Grid>
      {data && data.outletDetails.map((item: any, index: number) => (
        <Grid container spacing={3} key={index}>
          <Grid item xs={12}><Typography className={cx("sub-title")}>{`Outlet ${index + 1}`}</Typography></Grid>
          <Grid item xs={12}>{renderContent(titleTradeName, item && item.tradeName)}</Grid>
          <Grid item xs={6}>{renderContent(titlePostalCode, item && item.postalCode)}</Grid>
          <Grid item xs={6}>{renderContent(titleBlockNumber, item && item.blockHouseNumber)}</Grid>
          <Grid item xs={6}>{renderContent(titleStreetName, item && item.streetName)}</Grid>
          <Grid item xs={6}>{renderContent(titleUnitNumber, item && item.unitNumber)}</Grid>
        </Grid>
      ))}
    </Box>
  )
}

export default BusinessOperationDetails;