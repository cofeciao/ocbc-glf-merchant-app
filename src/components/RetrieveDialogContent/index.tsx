// import modules
import React, { ChangeEvent, useState } from "react";
import classnames from "classnames/bind";
import _ from "lodash";

// import images
import IconArrowRight from "@/assets/images/icon-arrow-right.svg";
import IconArrowLeft from "@/assets/images/icon-arrow-left.svg";

// import utils
import { ERROR_ICON, HOME_PAGE, NEXT } from "@/utils/constants";

// import style
import styles from "./RetrieveDialogContent.scss";

// import types
import { IRetrieveDialogContent } from "./RetrieveDialogContent";

// import components
import { Box, Grid, TextField, Typography, Button } from "@material-ui/core";

// render UI
const RetrieveDialogContent: React.FC<IRetrieveDialogContent> = (props) => {
  const { onCloseDialog, successful } = props;
  const {
    PLEASE_FILL_IN_THE_DETAILS,
    TEXT_FIELD_REFERENCE_NUMBER,
    LABEL_YOUR_SAVED_APPLICATION_HAS_EXPIRED,
    LABEL_PLEASE_RESTART_YOUR_APPLICATION,
    LABEL_START_OVER,
    LABEL_YOU_HAVE_ALREADY_SUBMITTED_AN_APPLICATION,
    LABEL_PLEASE_START_A_NEW_APPLICATION,
    LABEL_START_NEW_APPLICATION,
    LABEL_BACK_TO_HOME,
  } = HOME_PAGE.ENTRY_POINT;

  // states
  const [expiredReferenceNumber] = useState("666666AAA");
  const [alreadySubmittedNumber] = useState("555555AAA");
  const [renderExpired, setRenderExpired] = useState<boolean>(false);
  const [renderAlreadySubmitted, setRenderAlreadySubmitted] =
    useState<boolean>(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  // classnames
  const cx = classnames.bind(styles);

  /**
   * Handle click next
   */
  const handleClickNextButton = () => {
    const regex = /^\d{6}[A-Z]{3}$/;
    if (regex.test(value)) {
      if (value === expiredReferenceNumber) {
        setRenderExpired(true);
        return;
      }
      if (value === alreadySubmittedNumber) {
        setRenderAlreadySubmitted(true);
        return;
      }
      successful(true);
    } else {
      setError(`${ERROR_ICON} ${TEXT_FIELD_REFERENCE_NUMBER.helperText}`);
    }
  };

  // Already Submitted UI
  if (renderAlreadySubmitted) {
    return (
      <Box className={cx("failure-content-wrapper")}>
        <Box className={cx("content-wrapper")}>
          {/* {Title} */}
          <Typography className={cx("title mb-16")}>
            {LABEL_YOU_HAVE_ALREADY_SUBMITTED_AN_APPLICATION}
          </Typography>

          {/* {Description} */}
          <Typography className={cx("description")}>
            {LABEL_PLEASE_START_A_NEW_APPLICATION}
          </Typography>
        </Box>

        <Box className={cx("divider")}></Box>

        {/* {Next Button} */}
        <Box className={cx("next-button mt-dt-40")}>
          <Box className="button-group">
            <Button
              variant="contained"
              onClick={() => window.location.reload()}
            >
              {LABEL_START_NEW_APPLICATION}
            </Button>

            <Typography component="a" href="/" className={cx("back-to-home-button")}>
              {LABEL_BACK_TO_HOME}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }

  // Render Expired UI
  if (renderExpired) {
    return (
      <Box className={cx("failure-content-wrapper")}>
        <Box className={cx("content-wrapper")}>
          {/* {Title} */}
          <Typography className={cx("title mb-16")}>
            {LABEL_YOUR_SAVED_APPLICATION_HAS_EXPIRED}
          </Typography>

          {/* {Description} */}
          <Typography className={cx("description")}>
            {LABEL_PLEASE_RESTART_YOUR_APPLICATION}
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
              {LABEL_START_OVER}
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box className={cx("retrieve-dialog-content-wrapper")}>
      <Box className={cx("content-wrapper")}>
        {/* {Title} */}
        <Typography className={cx("title")}>
          {PLEASE_FILL_IN_THE_DETAILS}
        </Typography>

        {/* {Text Field} */}
        <Grid item xs={8}>
          <TextField
            fullWidth
            name="referenceNumber"
            variant="filled"
            value={value}
            label={TEXT_FIELD_REFERENCE_NUMBER.label}
            error={_.size(error) > 0 && true}
            helperText={
              _.size(error) > 0
                ? error
                : TEXT_FIELD_REFERENCE_NUMBER.description
            }
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
          />
        </Grid>
      </Box>

      <Box className={cx("divider")}></Box>

      {/* {Next Button} */}
      <Box className={cx("group-button")}>
        <Box className="d-flex space-between">
          {/* {Back Button} */}
          <Button onClick={() => onCloseDialog(true)} variant="outlined">
            <img src={IconArrowLeft} alt="icon arrow left" />
          </Button>

          {/* {Next Button} */}
          <Button variant="contained" onClick={handleClickNextButton}>
            {NEXT}
            <img
              src={IconArrowRight}
              alt="icon arrow right"
              className={cx("arrow")}
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default RetrieveDialogContent;
