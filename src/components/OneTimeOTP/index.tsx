// import modules
import { Box, Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import classnames from "classnames";

// styles
import styles from "./OneTimeOTP.scss";

// import utils
import {
  LABEL_ONE_TIME_PASSWORD_DESCRIPTION,
  LABEL_ONE_TIME_PASSWORD_ERROR,
  LABEL_ONE_TIME_PASSWORD_RESEND_LINK,
  LABEL_ONE_TIME_PASSWORD_TITLE,
  LABEL_SUBMIT,
} from "@/utils/constants";
import { generateRandomNumber } from "@/utils/utils";

// import type
import { IOneTimeOTP } from "./OneTimeOTP";

const OneTimeOTP = (props: IOneTimeOTP) => {
  const { successful } = props;
  const sizeInput = 6;

  // states
  const [otpValue, setOtpValue] = useState("");
  const [error, setError] = useState("");
  const [randomOTP, setRandomOTP] = useState(generateRandomNumber(6));

  // classnames
  const cx = classnames.bind(styles);

  useEffect(() => {
    // A temporary hold is placed here to display a random OTP
    console.log("random OTP:", randomOTP);
  }, [randomOTP]);

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
    } else {
      successful(true);
      setError("");
    }
  };

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
        <Typography className={cx("resend-link")}>
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
