import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

// import types
import { IReviewSubmit } from "./ReviewSubmit";
import { useSelector } from "react-redux";
import { STEP_RM } from "@/utils/constants-rm";

const SupplementaryDocuments: React.FC<IReviewSubmit.ISupplementaryDocuments> = (props) => {
  const { cx, titles } = props;
  const { 
    titleAuthorisedSignatory,
    titleTenancyDocument,
    titleCopyOfBankStatement,
    titleAnyOtherSupportingDocuments,
   } = titles;

  /**
    * Retrieves data of Supplementary documents section from Store
   */
  const supplementaryDocumentData = useSelector(
    (state: any) => state.form.supplementaryDocumentStep
  );

  /**
   * render UI
   * @returns {HTML}
   */
  const renderContent = (title: string, content: string | []) => {
    return (
      <>
        <Typography className={cx("title")}>{title}</Typography> 
        {Array.isArray(content) ? (
          content.map((item: any, index: number) => (
            <Typography key={index} className={cx("content")}>
              {`${item.name} (${Math.round(item.size / 1000)} KB)`}
            </Typography> 
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
          {supplementaryDocumentData && 
            supplementaryDocumentData.authorisedSignatoryNRIC && 
            renderContent(titleAuthorisedSignatory, supplementaryDocumentData.authorisedSignatoryNRIC)}
        </Grid>
        <Grid item xs={12}>
          {supplementaryDocumentData && 
            supplementaryDocumentData.tenacyDocumentOrSiteVisitPhotos && 
            renderContent(titleTenancyDocument, supplementaryDocumentData.tenacyDocumentOrSiteVisitPhotos)}
        </Grid>
        <Grid item xs={12}>
          {supplementaryDocumentData && 
            supplementaryDocumentData.copyOfBankStatement && 
            renderContent(titleCopyOfBankStatement, supplementaryDocumentData.copyOfBankStatement)}
        </Grid>
        <Grid item xs={12}>
          {supplementaryDocumentData && 
            supplementaryDocumentData.anyOtherSupportingDocuments && 
            renderContent(titleAnyOtherSupportingDocuments, supplementaryDocumentData.anyOtherSupportingDocuments)}
        </Grid>
      </Grid>
    </Box>
  )
}

export default SupplementaryDocuments;