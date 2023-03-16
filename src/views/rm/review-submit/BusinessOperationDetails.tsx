import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

// import types
import { IReviewSubmit } from "./ReviewSubmit";

const BusinessOperationDetails: React.FC<IReviewSubmit.IBusinessOperationDetails> = (props) => {
  const { cx, data } = props;

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
        <Grid item xs={12}>{renderContent("Number of outlets with Point-of-Sales termimals", data && data.numberOfOutletWithPointOfSalesTerminals)}</Grid>
        <Grid item xs={12}>{renderContent("Business ready to operate", data && data.businessReadyToOperate ? "Yes" : "false")}</Grid>
        <Grid item xs={6}>{renderContent("OCBC business account", data && data.businessReadyToOperate ? "Yes" : "false")}</Grid>
        <Grid item xs={6}>{renderContent("OCBC business account number", data && data.ocbcBusinessAccountNumber)}</Grid>
        <Grid item xs={6}>{renderContent("Existing website", data && data.businessReadyToOperate ? "Yes" : "No")}</Grid>
        <Grid item xs={6}>{renderContent("Website’s URL", data && data.websiteURL)}</Grid>
        <Grid item xs={12}>{renderContent("Place order through website", data && data.businessReadyToOperate ? "Yes" : "No")}</Grid>
        <Grid item xs={12}>{renderContent("Business offerings", data && data.businessOfferings)}</Grid>
        <Grid item xs={6}>{renderContent("Available spaces", data && data.avaliableSpaces)}</Grid>
        <Grid item xs={6}>{renderContent("Card payment available at retail store", data && data.cardPaymentAvailable ? "Yes" : "No")}</Grid>
      </Grid>
      {data && data.outletDetails.map((item: any, index: number) => (
        <Grid container spacing={3} key={index}>
          <Grid item xs={12}><Typography className={cx("sub-title")}>{`Outlet ${index + 1}`}</Typography></Grid>
          <Grid item xs={12}>{renderContent("Trade name", item && item.tradeName)}</Grid>
          <Grid item xs={6}>{renderContent("Postal code", item && item.postalCode)}</Grid>
          <Grid item xs={6}>{renderContent("Block / House number ", item && item.blockHouseNumber)}</Grid>
          <Grid item xs={6}>{renderContent("Street name", item && item.streetName)}</Grid>
          <Grid item xs={6}>{renderContent("Unit number (if applicable)", item && item.unitNumber)}</Grid>
        </Grid>
      ))}
    </Box>
  )
}

export default BusinessOperationDetails;