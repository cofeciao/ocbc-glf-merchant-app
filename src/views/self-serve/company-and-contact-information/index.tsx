// import modules
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import classnames from "classnames/bind";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { saveDataCompanyAndContactInformationStep } from "@/store/form";
import { useSelector } from "react-redux";
import _ from "lodash";

// import constants
import {
  LABEL_CONTINUE_WITH_SAVED_APPLICATION,
  LABEL_YOU_HAVE_AN_EXISTING_SAVED_APPLICATION,
  LIST_COUNTRIES_CODE,
  LIST_ROUTER,
  SELF_SERVE_PAGE,
} from "@/utils/constants";

// import styles
import styles from "./CompanyAndContactInformation.scss";

// import components
import { Box, Button, Dialog, DialogContent, Typography } from "@material-ui/core";
import Category from "@/components/Category";
import RedirectButton from "@/components/RedirectButton";
import SectionWrapper from "../SectionWrapper";
import OneTimeOTP from "@/components/OneTimeOTP";
import CompanyRegistration from "./CompanyRegistration";
import ContactDetails from "./ContactDetails";

// import icons
import CloseIcon from "@/assets/images/icon-close.svg";

// render UI
const CompanyAndContactInformation: React.FC = () => {
  const {
    LIST_STEP: {
      companyAndContactInformation: {
        text,
        section: { companyRegistration, contactDetails },
      },
    },
  } = SELF_SERVE_PAGE;
  const EXISTING_APPLICATION_NUMBER = "000000000N"
  const UNABLE_TO_SEND_OTP_NUMBER = "100000000N"

  // states
  const [openOneTimeOTPDialog, setOpenOneTimeOTPDialog] =
    useState<boolean>(false);
  const [openExistingApplication, setOpenExistingApplication] =
    useState<boolean>(false);
  const [renderFailureOtpContent, setRenderFailureOtpContent] =
    useState<boolean>(false);

  // classnames
  const cx = classnames.bind(styles);

  // hooks
  const dispatch = useDispatch();
  const history = useHistory();

  /**
   * Retrieves data of Company And Contact Information step from Store
   */
  const dataCompanyAndContactInformationStep = useSelector(
    (state: any) => state.form.companyAndContactInformationStep
  );

  // React-hook-form
  const {
    register,
    unregister,
    formState: { errors, isValid },
    setValue,
    getValues,
    setError,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      contactNumber: dataCompanyAndContactInformationStep.contactNumber,
      registeredEntityName:
        dataCompanyAndContactInformationStep.registeredEntityName,
      uniqueEntityNumber:
        dataCompanyAndContactInformationStep.uniqueEntityNumber,
      companyType: dataCompanyAndContactInformationStep.companyType,
      salutation: dataCompanyAndContactInformationStep.salutation,
      name: dataCompanyAndContactInformationStep.name,
      email: dataCompanyAndContactInformationStep.email,
      designation: dataCompanyAndContactInformationStep.designation,
      areaCode: LIST_COUNTRIES_CODE[0].value,
    },
  });

  /**
   * Handle when users click next button
   * @returns
   */
  const handleClickNext = () => {
    console.log(getValues("uniqueEntityNumber"));

    // save to Redux
    dispatch(saveDataCompanyAndContactInformationStep(getValues()));

    const edit = localStorage.getItem("edit");
    if (getValues("uniqueEntityNumber") === EXISTING_APPLICATION_NUMBER || getValues("uniqueEntityNumber") === UNABLE_TO_SEND_OTP_NUMBER) {
      // set open dialog
      setOpenExistingApplication(true);
      return;
    }
    if (edit === "true") {
       // redirect
      history.push(LIST_ROUTER.review_and_submit);
    } else {
      // open dialog
      setOpenOneTimeOTPDialog(true);
    }
  }

  useEffect(() => {
    if (getValues("uniqueEntityNumber") === UNABLE_TO_SEND_OTP_NUMBER) {
      setRenderFailureOtpContent(true)
    } else {
      setRenderFailureOtpContent(false)
    }
  },[getValues("uniqueEntityNumber")])

  console.log("remderfail", renderFailureOtpContent);


  /**
   * Handle scrolling to top on page load
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // remove edit from localStorage
    return () => localStorage.removeItem("edit");
  }, []);

  /**
   *  Handle One Time OTP successful
   * @param {boolean} result
   */
  const handleOneTimeOTPSucessful = (result: boolean) => {
    if (result === true) {
      history.push(LIST_ROUTER.transaction_and_card_acceptance_type);
    }
  };

  return (
    <Box className={cx("company-and-contact-information-wrapper step-wrapper")}>
      {/* {Category} */}
      <Category>{text}</Category>

      {/* {Company registration} */}
      <SectionWrapper
        cx={cx}
        title={companyRegistration.title}
        description={companyRegistration.description}
        className="company-registration-section"
      >
        <CompanyRegistration
          cx={cx}
          errors={errors}
          register={register}
          data={companyRegistration}
          dataRedux={dataCompanyAndContactInformationStep}
        />
      </SectionWrapper>

      {/* {Contact details} */}
      <SectionWrapper
        cx={cx}
        title={contactDetails.title}
        description={contactDetails.description}
        className="contact-details-section"
      >
        <ContactDetails
          cx={cx}
          errors={errors}
          register={register}
          unregister={unregister}
          setValue={setValue}
          setError={setError}
          data={contactDetails}
          dataRedux={dataCompanyAndContactInformationStep}
        />
      </SectionWrapper>

      {/* {Redirect Button} */}
      <RedirectButton
        disabledNextButton={!isValid}
        variant="next"
        onClickNext={() => handleClickNext()}
      />

      {/* {One Time OTP Dialog} */}
      <Dialog
        open={openOneTimeOTPDialog}
        maxWidth="md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={cx("icon-close")}>
          <img
            src={CloseIcon}
            alt="icon close"
            onClick={() => setOpenOneTimeOTPDialog(false)}
          />
        </div>
        <DialogContent>
          <OneTimeOTP successful={handleOneTimeOTPSucessful} renderFailure={renderFailureOtpContent}  />
        </DialogContent>
      </Dialog>

      {/* {Existing Saved Application Dialog} */}
      <Dialog
        open={openExistingApplication} //openExistingApplication
        maxWidth="md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={cx("icon-close")}>
          <img
            src={CloseIcon}
            alt="icon close"
            onClick={() => setOpenExistingApplication(false)}
          />
        </div>
        <DialogContent>
          <Box className={cx("failure-content-wrapper")}>
            <Box className={cx("content-wrapper")}>
              {/* {Title} */}
              <Typography className={cx("title")}>
                {LABEL_YOU_HAVE_AN_EXISTING_SAVED_APPLICATION}
              </Typography>
            </Box>

            <Box className={cx("divider")}></Box>

            {/* {Continue Button} */}
            <Box className={cx("next-button")}>
              <Box className="d-inline">
                <Button
                  variant="contained"
                  onClick={() => {
                    setOpenExistingApplication(false)
                    setOpenOneTimeOTPDialog(true)
                  }}
                >
                  {LABEL_CONTINUE_WITH_SAVED_APPLICATION}
                </Button>
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default CompanyAndContactInformation;
