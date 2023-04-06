import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

// import types
import { IReviewSubmit } from "./ReviewSubmit";

// redux
import { useSelector } from "react-redux";

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

  /**
    * Retrieves data of Sensitive section from Store
  */
  const sensitiveData = useSelector(
    (state: any) => state.form.sensitiveStep
  );

  /**
    * Handle render value
  */
  const renderValue = (value: string) => {
    if (!value) return '';
    
    if (value === 'yes') {
      return "Yes";
    } else {
      return "No";
    }
  }

  /**
    * Handle render name file
  */
  const renderFileName = (file: any) => {
    if(!file) return null;
    return `${file.name} ${file.size} KB`
  }

  return (
    <Box className={cx("sensitive-data")}>
      <Grid container spacing={5}>
        <Grid item xs={12}>{renderContent(titleStoreCreditCard, renderValue(sensitiveData && sensitiveData.storeCreditCard))}</Grid>
        <Grid item xs={6}>{renderContent(titleDataProtectedByHierachical, renderValue(sensitiveData && sensitiveData.dataProtectedByHierachical))}</Grid>
        <Grid item xs={6}>{renderContent(titleEncryptionMothod, sensitiveData && sensitiveData.encryptionMethod)}</Grid>
        <Grid item xs={12}>{renderContent(titleCompliantWithThePaymentCard, renderValue(sensitiveData && sensitiveData.compliantWithThePaymentCardIndustry))}</Grid>
        <Grid item xs={6}>{renderContent(titlePCIDSSCertificate, renderFileName(sensitiveData && sensitiveData.certificate))}</Grid>
      </Grid>
    </Box>
  )
}

export default SensitiveData;