import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

// import types
import { IReviewSubmit } from "./ReviewSubmit";

const SupplementaryDocuments: React.FC<IReviewSubmit.ISupplementaryDocuments> = (props) => {
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
            <Typography key={index} className={cx("content")}>{item}</Typography> 
            ))
          ) : (
          <Typography className={cx("content")}>{content}</Typography> 
        )}
      </>
    )
  }

  return (
    <Box className={cx("supplement-documents")}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {data && 
            data.authorisedSignatory && 
            renderContent("Authorised signatory’s NRIC or passport", data.authorisedSignatory)}
        </Grid>
        <Grid item xs={12}>
          {data && 
            data.tenancyDocumentOrSiteVisitPhotos && 
            renderContent("Tenancy document or site visit photos", data.tenancyDocumentOrSiteVisitPhotos)}
        </Grid>
        <Grid item xs={12}>          
          {data && 
            data.licenses && 
            renderContent("Licenses", data.licenses)}
        </Grid>
        <Grid item xs={12}>
          {data && 
            data.copyOfBankStatement && 
            renderContent("Copy of bank statement", data.copyOfBankStatement)}
        </Grid>
        <Grid item xs={12}>
          {data && 
            data.anyOtherSupportingDocuments && 
            renderContent("Any other supporting documents", data.anyOtherSupportingDocuments)}
        </Grid>
      </Grid>
    </Box>
  )
}

export default SupplementaryDocuments;