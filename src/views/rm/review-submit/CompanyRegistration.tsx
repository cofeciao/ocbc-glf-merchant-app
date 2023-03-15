import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

// import types
import { IReviewSubmit } from "./ReviewSubmit";

const CompanyRegistration: React.FC<IReviewSubmit.ICompanyRegistration> = (props) => {
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
            <Typography key={index} className={cx("content")}>&#8226; {item}</Typography> 
            ))
          ) : (
          <Typography className={cx("content")}>{content}</Typography> 
        )}
      </>
    )
  }

  return (
    <Box className={cx("company-registration")}>
      <Grid container spacing={3}>
        <Grid item xs={6}>{renderContent("Registered entity name", data && data.companyRegistration && data.companyRegistration.registeredEntityName)}</Grid>
        <Grid item xs={6}>{renderContent("Unique Entity Number (UEN)", data && data.companyRegistration && data.companyRegistration.uniqueEntityNumber)}</Grid>
        <Grid item xs={6}>{renderContent("Entity type", data && data.companyRegistration && data.companyRegistration.entityType)}</Grid>
        <Grid item xs={6}>{renderContent("Nature of business", data && data.companyRegistration && data.companyRegistration.natureOfBusiness)}</Grid>
        <Grid item xs={6}>{renderContent("Registered address", data && data.companyRegistration && data.companyRegistration.registeredAddress)}</Grid>
        <Grid item xs={6}>{renderContent("Mailing address", data && data.companyRegistration && data.companyRegistration.mailingAddress)}</Grid>
        <Grid item xs={12}>{renderContent("Directors", data && data.companyRegistration && data.companyRegistration.directors)}</Grid>

        <Grid item xs={12}><Typography className={cx("sub-title")}>Contact details</Typography></Grid>
        <Grid item xs={4}>{renderContent("Salutation", data && data.contactDetail && data.contactDetail.salutation)}</Grid>
        <Grid item xs={4}>{renderContent("Name", data && data.contactDetail && data.contactDetail.name)}</Grid>
        <Grid item xs={4}>{renderContent("Designation", data && data.contactDetail && data.contactDetail.designation)}</Grid>
        <Grid item xs={4}>{renderContent("Email", data && data.contactDetail && data.contactDetail.email)}</Grid>
        <Grid item xs={4}>{renderContent("Contact number", data && data.contactDetail && data.contactDetail.contactNumber)}</Grid>

        <Grid item xs={12}><Typography className={cx("sub-title")}>Authorised person details</Typography></Grid>
        <Grid item xs={4}>{renderContent("Salutation", data && data.authorisedPersonDetails && data.authorisedPersonDetails.salutation)}</Grid>
        <Grid item xs={4}>{renderContent("Name", data && data.authorisedPersonDetails && data.authorisedPersonDetails.name)}</Grid>
        <Grid item xs={4}>{renderContent("Designation", data && data.authorisedPersonDetails && data.authorisedPersonDetails.designation)}</Grid>
        <Grid item xs={4}>{renderContent("Email", data && data.authorisedPersonDetails && data.authorisedPersonDetails.email)}</Grid>
        <Grid item xs={4}>{renderContent("Contact number", data && data.authorisedPersonDetails && data.authorisedPersonDetails.contactNumber)}</Grid>
      </Grid>
    </Box>
  )
}

export default CompanyRegistration;