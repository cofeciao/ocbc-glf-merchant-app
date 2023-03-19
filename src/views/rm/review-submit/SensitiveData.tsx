import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

// import types
import { IReviewSubmit } from "./ReviewSubmit";

const SensitiveData: React.FC<IReviewSubmit.ISensitiveData> = (props) => {
  const { cx, titles, data } = props;
  const {
    titleStoreCreditCard,
    titleDataProtectedByHierachical,
    titleEncryptionMothod,
    titleCompliantWithThePaymentCard,
    titlePCIDSSCertificate,
  } = titles

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
      <Grid container spacing={5}>
        <Grid item xs={12}>{renderContent(titleStoreCreditCard, data && data.storeCreditCardInDatabase ? "Yes" : "No")}</Grid>
        <Grid item xs={6}>{renderContent(titleDataProtectedByHierachical, data && data.dataProtectedByHierachicalStorageManagment ? "Yes" : "No")}</Grid>
        <Grid item xs={6}>{renderContent(titleEncryptionMothod, data && data.encryptionMethod)}</Grid>
        <Grid item xs={12}>{renderContent(titleCompliantWithThePaymentCard, data && data.compliantWithThePayment ? "Yes" : "No")}</Grid>
        <Grid item xs={6}>{renderContent(titlePCIDSSCertificate, data && data.pciDSSCertificate)}</Grid>
      </Grid>
    </Box>
  )
}

export default SensitiveData;