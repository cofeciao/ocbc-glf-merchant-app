import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

// import types
import { IReviewSubmit } from "./ReviewSubmit";

// constants
import { STEP_RM } from "@/utils/constants-rm";

const MaintenanceFeeAuthorisation: React.FC<IReviewSubmit.IMaintenanceFeeAuthorisation> = (props) => {
  // props
  const { cx, feeAuthorisationData, titles } = props;
  const { titleFirstYearPayment, titleSubsequentYearsPayment } = titles;

  console.log(feeAuthorisationData);
  // constants
  const { LIST_STEP: {
    feeAuthorisation: {
      section: {
        paymentForSubsequentYears,
      }
    }
  }} = STEP_RM;

  /**
   * render UI
   * @returns {HTML}
   */
  const renderContent = (title: string, content: string) => {
    const findContent = paymentForSubsequentYears.listRadio.find((item: any) => item.value === content);
    if (feeAuthorisationData && feeAuthorisationData.paymentForTheFirstYear && feeAuthorisationData.paymentForSubsequentYears) {
      return (
        <>
          <Typography className={cx("title")}>{title}</Typography> 
          <Typography className={cx("content")}>{findContent.label}</Typography> 
        </>
      )
    } else {
      return (
        <>
          <Typography className={cx("title")}>{title}</Typography> 
        </>
      )
    }
  }

  return (
    <Box className={cx("maintenance-fee-authorisation")}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {renderContent(titleFirstYearPayment, feeAuthorisationData.paymentForTheFirstYear && feeAuthorisationData.paymentForTheFirstYear.valueRadio)}
        </Grid>
        <Grid item xs={12}>
          {renderContent(titleSubsequentYearsPayment, feeAuthorisationData.paymentForSubsequentYears && feeAuthorisationData.paymentForSubsequentYears.valueRadio)}
        </Grid>
      </Grid>
    </Box>
  )
}

export default MaintenanceFeeAuthorisation;