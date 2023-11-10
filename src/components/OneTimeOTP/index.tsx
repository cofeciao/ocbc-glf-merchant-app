// import modules
import { Box, Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import classnames from "classnames";

// import styles
import styles from "./OneTimeOTP.scss";

// import utils
import {
  HOME_PAGE,
  LABEL_ONE_TIME_PASSWORD_DESCRIPTION,
  LABEL_ONE_TIME_PASSWORD_INVALID_ERROR,
  LABEL_ONE_TIME_PASSWORD_EXPIRED_ERROR,
  LABEL_ONE_TIME_PASSWORD_RESEND_LINK,
  LABEL_ONE_TIME_PASSWORD_TITLE,
  LABEL_SUBMIT,
  ERROR_ICON,
  LABEL_ONE_TIME_PASSWORD_ALREADY_ERROR,
  LINK_EXTERNAL_OCBC_BUSINESS_BANKING_PAGE,
  LINK_EXTERNAL_OCBC_ACCEPTANCE_TYPE,
} from "@/utils/constants";

// import type
import { IOneTimeOTP } from "./OneTimeOTP";

// render UI
const OneTimeOTP = (props: IOneTimeOTP) => {
  const { successful, renderFailure = false } = props;
  const {
    LABEL_EXCEEDED_NUMBER_OF_TRIES,
    LABEL_PLEASE_TRY_AGAIN_LATER,
    LABEL_BACK_TO_CARD_ACCEPTANCE,
    LABEL_BACK_TO_HOME,
    LABEL_UNABLE_TO_SEND,
    LABEL_TRY_AGAIN_LATER,
  } = HOME_PAGE.ENTRY_POINT;
  const sizeInput = 6;
  const exceededNumber = "777777";
  const failureNumber = "666666";
  const invalidNumber = "555555";
  const expiredNumber = "444444";
  const alreadyNumber = "333333";

  // states
  const [otpValue, setOtpValue] = useState("");
  const [error, setError] = useState("");
  const [renderExceededContent, setRenderExceededContent] =
    useState<boolean>(false);
  const [renderFailureContent, setRenderFailureContent] =
    useState<boolean>(renderFailure);

  // classnames
  const cx = classnames.bind(styles);

  /**
   * Handle click resend link
   */
  const handleClickResendLink = () => {};

  /**
   * Handle otp inputs change
   * @param {string} otpValue
   */
  const handleChange = (otpValue: string) => {
    setOtpValue(otpValue);
  };

  /**
   * Handle submit button
   */
  const handleSubmit = () => {
    if (otpValue === invalidNumber) {
      setError(LABEL_ONE_TIME_PASSWORD_INVALID_ERROR);
      return;
    }
    if (otpValue === expiredNumber) {
      setError(LABEL_ONE_TIME_PASSWORD_EXPIRED_ERROR);
      return;
    }
    if (otpValue === alreadyNumber) {
      setError(LABEL_ONE_TIME_PASSWORD_ALREADY_ERROR);
      return;
    }
    if (otpValue === failureNumber) {
      setRenderFailureContent(true);
      return;
    }
    if (otpValue === exceededNumber) {
      setRenderExceededContent(true);
      return;
    }
    successful(true);
  };

  // Unable to send UI
  if (renderFailureContent) {
    return (
      <Box className={cx("failure-content-wrapper")}>
        <Box className={cx("content-wrapper")}>
          {/* {Title} */}
          <Typography className={cx("title mb-16")}>
            {LABEL_UNABLE_TO_SEND}
          </Typography>

          {/* {Description} */}
          <Typography className={cx("description")}>
            {LABEL_TRY_AGAIN_LATER}
          </Typography>
        </Box>

        <Box className={cx("divider")}></Box>

        {/* {Next Button} */}
        <Box className={cx("next-button mt-dt-40")}>
          <Box className="d-inline">
            <Button
              variant="contained"
              href={LINK_EXTERNAL_OCBC_BUSINESS_BANKING_PAGE}
            >
              {LABEL_BACK_TO_HOME}
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }

  // Exceeded UI
  if (renderExceededContent) {
    return (
      <Box className={cx("failure-content-wrapper")}>
        <Box className={cx("content-wrapper")}>
          {/* {Title} */}
          <Typography className={cx("title mb-16")}>
            {LABEL_EXCEEDED_NUMBER_OF_TRIES}
          </Typography>

          {/* {Description} */}
          <Typography className={cx("description")}>
            {LABEL_PLEASE_TRY_AGAIN_LATER}
          </Typography>
        </Box>

        <Box className={cx("divider")}></Box>

        {/* {Next Button} */}
        <Box className={cx("next-button mt-dt-40")}>
          <Box className="d-inline">
            <Button
              variant="contained"
              href={LINK_EXTERNAL_OCBC_ACCEPTANCE_TYPE}
            >
              {LABEL_BACK_TO_CARD_ACCEPTANCE}
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box className={cx("one-time-otp-wrapper")}>
      <Box className={cx("content")}>
        {/* {Title} */}
        <Typography className={cx("title")}>
          {LABEL_ONE_TIME_PASSWORD_TITLE}
        </Typography>

        {/* {Inputs} */}
        <Box className={cx("group-otp-input")}>
          <OtpInput
            value={otpValue}
            onChange={handleChange}
            numInputs={sizeInput}
            renderInput={(props) => <input {...props} />}
          />

          {/* {Error} */}
          {error && (
            <Typography
              className={cx("error-message")}
            >{`${ERROR_ICON} ${error}`}</Typography>
          )}
        </Box>

        {/* {Description} */}
        <Typography className={cx("description")}>
          {LABEL_ONE_TIME_PASSWORD_DESCRIPTION}
        </Typography>

        {/* {Resend Link} */}
        <Typography
          component="a"
          onClick={() => handleClickResendLink()}
          className={cx("resend-link")}
        >
          {LABEL_ONE_TIME_PASSWORD_RESEND_LINK}
        </Typography>
      </Box>

      {/* {Submit Button} */}
      <Box className={cx("submit-button")}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={otpValue.length < sizeInput}
        >
          {LABEL_SUBMIT}
        </Button>
      </Box>
    </Box>
  );
};

export default OneTimeOTP;
