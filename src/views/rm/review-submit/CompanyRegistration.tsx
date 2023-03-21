import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

// import types
import { IReviewSubmit } from "./ReviewSubmit";
import { useSelector } from "react-redux";

const CompanyRegistration: React.FC<IReviewSubmit.ICompanyRegistration> = (props) => {
  const { cx, titles } = props;
  const {
    titleRegisteredEntityName,
    titleUniqueEntityNumber,
    titleEntityType,
    titleNatureOfBusiness,
    titleRegisteredAddress,
    titleMailingAddress,
    titleDirectors,
    contactDetail,
    authorisedPersonDetails,
  } = titles;

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

  /**
    * Retrieves data of Company Registration section from Store
   */
  const acraDetailData = useSelector(
    (state: any) => state.form.dataAcraDetail
  );
  const companyRegistrationData = useSelector(
    (state: any) => state.form.acraAndContactInformationStep
  );

  return (
    <Box className={cx("company-registration")}>
      <Grid container spacing={3}>
        <Grid item xs={6}>{renderContent(titleRegisteredEntityName, acraDetailData && acraDetailData.dataDetail && acraDetailData.dataDetail.businessName)}</Grid>
        <Grid item xs={6}>{renderContent(titleUniqueEntityNumber, acraDetailData && acraDetailData.dataDetail && acraDetailData.dataDetail.uniqueEntityNumber)}</Grid>
        <Grid item xs={6}>{renderContent(titleEntityType, acraDetailData && acraDetailData.dataDetail && acraDetailData.dataDetail.entityType)}</Grid>
        <Grid item xs={6}>{renderContent(titleNatureOfBusiness, acraDetailData && acraDetailData.dataDetail && acraDetailData.dataDetail.natureOfBusiness)}</Grid>
        <Grid item xs={6}>{renderContent(titleRegisteredAddress, acraDetailData && acraDetailData.dataDetail && acraDetailData.dataDetail.registeredAddress)}</Grid>
        <Grid item xs={6}>{renderContent(titleMailingAddress, acraDetailData && acraDetailData.dataDetail && acraDetailData.dataDetail.mailingAddress)}</Grid>
        <Grid item xs={12}>{renderContent(titleDirectors, acraDetailData && acraDetailData.dataDetail && acraDetailData.dataDetail.directors)}</Grid>

        <Grid item xs={12}><Typography className={cx("sub-title")}>{contactDetail.titleContactDetails}</Typography></Grid>
        <Grid item xs={4}>{renderContent(contactDetail.titleSalutation, companyRegistrationData && companyRegistrationData.contactDetail && companyRegistrationData.contactDetail.salutation)}</Grid>
        <Grid item xs={4}>{renderContent(contactDetail.titleName, companyRegistrationData && companyRegistrationData.contactDetail && companyRegistrationData.contactDetail.name)}</Grid>
        <Grid item xs={4}>{renderContent(contactDetail.titleDesignation, companyRegistrationData && companyRegistrationData.contactDetail && companyRegistrationData.contactDetail.designation)}</Grid>
        <Grid item xs={4}>{renderContent(contactDetail.titleEmail, companyRegistrationData && companyRegistrationData.contactDetail && companyRegistrationData.contactDetail.email)}</Grid>
        <Grid item xs={4}>{renderContent(contactDetail.titleContactNumber, companyRegistrationData && companyRegistrationData.contactDetail && companyRegistrationData.contactDetail.contactNumber)}</Grid>

        <Grid item xs={12}><Typography className={cx("sub-title")}>{authorisedPersonDetails.titleAuthorisedPersonDetails}</Typography></Grid>
        <Grid item xs={4}>{renderContent(authorisedPersonDetails.titleSalutation, companyRegistrationData && companyRegistrationData.authorisedPersonDetails && companyRegistrationData.authorisedPersonDetails.salutation)}</Grid>
        <Grid item xs={4}>{renderContent(authorisedPersonDetails.titleName, companyRegistrationData && companyRegistrationData.authorisedPersonDetails && companyRegistrationData.authorisedPersonDetails.name)}</Grid>
        <Grid item xs={4}>{renderContent(authorisedPersonDetails.titleDesignation, companyRegistrationData && companyRegistrationData.authorisedPersonDetails && companyRegistrationData.authorisedPersonDetails.designation)}</Grid>
        <Grid item xs={4}>{renderContent(authorisedPersonDetails.titleEmail, companyRegistrationData && companyRegistrationData.authorisedPersonDetails && companyRegistrationData.authorisedPersonDetails.email)}</Grid>
        <Grid item xs={4}>{renderContent(authorisedPersonDetails.titleContactNumber, companyRegistrationData && companyRegistrationData.authorisedPersonDetails && companyRegistrationData.authorisedPersonDetails.contactNumber)}</Grid>
      </Grid>
    </Box>
  )
}

export default CompanyRegistration;