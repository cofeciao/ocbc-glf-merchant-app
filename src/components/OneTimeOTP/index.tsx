// import modules
import { Box, Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import classnames from "classnames";

// import styles
import styles from "./OneTimeOTP.scss";

// import utils
import {
  HOME_PAGE,
  LABEL_ONE_TIME_PASSWORD_DESCRIPTION,
  LABEL_ONE_TIME_PASSWORD_ERROR,
  LABEL_ONE_TIME_PASSWORD_RESEND_LINK,
  LABEL_ONE_TIME_PASSWORD_TITLE,
  LABEL_SUBMIT,
} from "@/utils/constants";
import { generateRandomNumber } from "@/utils/utils";

// import type
import { IOneTimeOTP } from "./OneTimeOTP";

// render UI
const OneTimeOTP = (props: IOneTimeOTP) => {
  const { successful } = props;
  const {
    LABEL_EXCEEDED_NUMBER_OF_TRIES,
    LABEL_PLEASE_TRY_AGAIN_LATER,
    LABEL_BACK_TO_CARD_ACCEPTANCE,
  } = HOME_PAGE.ENTRY_POINT;
  const sizeInput = 6;

  // states
  const [otpValue, setOtpValue] = useState("");
  const [error, setError] = useState("");
  const [counterError, setCounterError] = useState<number>(0);
  const [randomOTP, setRandomOTP] = useState(generateRandomNumber(6));

  // classnames
  const cx = classnames.bind(styles);

  useEffect(() => {
    // A temporary hold is placed here to display a random OTP
    console.log("random OTP:", randomOTP);
  }, [randomOTP]);

  /**
   * Handle click resend link
   */
  const handleClickResendLink = () => {
    setRandomOTP(generateRandomNumber(6));
  };

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
    if (otpValue !== randomOTP) {
      setError(LABEL_ONE_TIME_PASSWORD_ERROR);
      setCounterError(counterError + 1);
    } else {
      successful(true);
      setError("");
    }
  };

  if (counterError >= 5) {
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
              onClick={() => window.location.reload()}
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
          <Typography className={cx("error-message")}>{error}</Typography>
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
