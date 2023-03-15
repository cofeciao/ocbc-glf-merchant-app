import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

// import types
import { IReviewSubmit } from "./ReviewSubmit";

const MaintenanceFeeAuthorisation: React.FC<IReviewSubmit.IMaintenanceFeeAuthorisation> = (props) => {
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
    <Box className={cx("maintenance-fee-authorisation")}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {data && 
            data.firstYearPayment && 
            renderContent("First year payment", data.firstYearPayment)}
        </Grid>
        <Grid item xs={12}>
          {data &&
            data.subsequentYearsPayment && 
            renderContent("Subsequent years payment", data.subsequentYearsPayment)}
        </Grid>
      </Grid>

    </Box>
  )
}

export default MaintenanceFeeAuthorisation;