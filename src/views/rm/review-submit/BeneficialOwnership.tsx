import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

// import types
import { IReviewSubmit } from "./ReviewSubmit";

const BeneficialOwnership: React.FC<IReviewSubmit.IBeneficialOwnership> = (props) => {
  const { cx, titles, beneficialOwnershipData } = props;
  const { 
    titleSalutation,
    titleName,
    titleDesignation,
    titleNRIC,
    titleDateOfBirth,
    titleNationality,
    titleAddress,
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
    <Box className={cx("beneficial-ownership")}>
      {beneficialOwnershipData && beneficialOwnershipData.beneficialOwner && beneficialOwnershipData.beneficialOwner.items.map((item: any, index: number) => (
        <div className={cx("beneficial-ownership__group-item")} key={index}>
          <Typography className={cx("sub-title")}>{`Beneficial owner ${index + 1}`}</Typography> 
          <Grid container spacing={1}>
            <Grid item xs={12}>{renderContent(titleSalutation, item.salutation)}</Grid>
            <Grid item xs={6}>{renderContent(titleName, item.name)}</Grid>
            <Grid item xs={6}>{renderContent(titleDesignation, item.designation)}</Grid>
            <Grid item xs={6}>{renderContent(titleNRIC, item.nricPassport)}</Grid>
            <Grid item xs={6}>{renderContent(titleDateOfBirth, item.dateOfBirth)}</Grid>
            <Grid item xs={12}>{renderContent(titleNationality, item.nationality)}</Grid>
            <Grid item xs={12}>{renderContent(titleAddress, item.streetName)}</Grid>
          </Grid>
        </div>
      ))}
    </Box>
  )
}

export default BeneficialOwnership;