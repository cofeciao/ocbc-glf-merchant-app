import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

// import types
import { IReviewSubmit } from "./ReviewSubmit";

const SensitiveData: React.FC<IReviewSubmit.ISensitiveData> = (props) => {
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
    <Box className={cx("sensitive-data")}>
      <Grid container spacing={3}>
        <Grid item xs={12}>{renderContent("Store credit card in database", data && data.storeCreditCardInDatabase ? "Yes" : "No")}</Grid>
        <Grid item xs={6}>{renderContent("Data protected by Hierachical Storage Management", data && data.dataProtectedByHierachicalStorageManagment ? "Yes" : "No")}</Grid>
        <Grid item xs={6}>{renderContent("Encryption method", data && data.encryptionMethod)}</Grid>
        <Grid item xs={12}>{renderContent("Compliant with the Payment Card Industry Data Security Standard (PCI DSS)", data && data.compliantWithThePayment ? "Yes" : "No")}</Grid>
        <Grid item xs={6}>{renderContent("PCI DSS certificate", data && data.pciDSSCertificate)}</Grid>
      </Grid>
    </Box>
  )
}

export default SensitiveData;