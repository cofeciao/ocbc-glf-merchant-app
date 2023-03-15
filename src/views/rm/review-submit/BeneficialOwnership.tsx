import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

// import types
import { IReviewSubmit } from "./ReviewSubmit";

const BeneficialOwnership: React.FC<IReviewSubmit.IBeneficialOwnership> = (props) => {
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
    <Box className={cx("beneficial-ownership")}>
      {data && data.map((item: any, index: number) => (
        <div className={cx("group-item")} key={index}>
          <Typography className={cx("sub-title")}>{`Beneficial owner ${index + 1}`}</Typography> 
          <Grid container spacing={1}>
            <Grid item xs={12}>{renderContent("Salutation", item.salutation)}</Grid>
            <Grid item xs={6}>{renderContent("Name", item.name)}</Grid>
            <Grid item xs={6}>{renderContent("Designation", item.designation)}</Grid>
            <Grid item xs={6}>{renderContent("NRIC", item.NRIC)}</Grid>
            <Grid item xs={6}>{renderContent("Date of birth", item.dateOfBirth)}</Grid>
            <Grid item xs={12}>{renderContent("Nationality", item.nationality)}</Grid>
            <Grid item xs={12}>{renderContent("Address", item.address)}</Grid>
          </Grid>
        </div>
      ))}
    </Box>
  )
}

export default BeneficialOwnership;