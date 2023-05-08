// import modules
import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import _ from "lodash";

// import images
import IconArrowRight from "@/assets/images/icon-arrow-right.svg";
import IconArrowLeft from "@/assets/images/icon-arrow-left.svg";
import CloseIcon from "@/assets/images/icon-close.svg";

// import utils
import { ERROR_ICON, HOME_PAGE, LIST_ROUTER, NEXT } from "@/utils/constants";
import { generateRandomReferenceNumber } from "@/utils/utils";

// import style
import styles from "./EntryDialog.scss";

// import types
import { IEntryDialog } from "./EntryDialog";

// import components
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  DialogContent,
  Dialog,
} from "@material-ui/core";
import OneTimeOTP from "@/components/OneTimeOTP";
import ExpiredDialog from "./ExpiredDialog";

// render UI
const RetrieveDialog: React.FC<IEntryDialog.IDialog> = (props) => {
  const { onCloseDialog } = props;
  const { PLEASE_FILL_IN_THE_DETAILS, TEXT_FIELD_REFERENCE_NUMBER } =
    HOME_PAGE.ENTRY_POINT;
  const [referenceNumber, setReferenceNumber] = useState(
    generateRandomReferenceNumber()
  );

  // states
  const [openExpiredDialog, setOpenExpiredDialog] = useState<boolean>(false);
  const [openOneTimeOTPDialog, setOpenOneTimeOTPDialog] =
    useState<boolean>(false);
  const [error, setError] = useState("");

  // hooks
  const history = useHistory();

  // classnames
  const cx = classnames.bind(styles);

  // react-hook-form
  const {
    register,
    formState: { errors, isValid, isDirty },
    getValues,
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    // A temporary hold is placed here to display a random Reference Number
    console.log("Reference Number: ", referenceNumber);
  }, []);

  /**
   * Temporariy put here for dev
   * Handle click next
   */
  const handleClickNextButton = () => {
    if (getValues("referenceNumber") !== referenceNumber) {
      setError(`${ERROR_ICON} ${TEXT_FIELD_REFERENCE_NUMBER.helperText}`);
    } else {
      setOpenOneTimeOTPDialog(true);
    }
  };

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
    <Box className={cx("retrieve-dialog-wrapper")}>
      <Box className={cx("header-dialog-wrapper")}>
        {/* {Title} */}
        <Typography className={cx("title mb-dt-40")}>
          {PLEASE_FILL_IN_THE_DETAILS}
        </Typography>

        <Grid container>
          <Grid item xs={8} className={cx("radio-group-entry-dialog")}>
            {/* {List Radio} */}
            <Box className={cx("text-field-group-wrapper")}>
              <Box className={cx("text-field-item")}>
                <TextField
                  fullWidth
                  variant="filled"
                  label={TEXT_FIELD_REFERENCE_NUMBER.label}
                  error={_.size(error) > 0 && true}
                  helperText={
                    _.size(error) > 0
                      ? error
                      : TEXT_FIELD_REFERENCE_NUMBER.description
                  }
                  {...register(`referenceNumber`, {
                    required: true,
                  })}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* {Next Button} */}
      <Box className={cx("group-button mt-dt-40 mb-dt-56")}>
        <Box className="d-flex space-between">
          {/* {Back Button} */}

          <Button onClick={() => onCloseDialog(true)} variant="outlined">
            <img src={IconArrowLeft} alt="icon arrow left" />
          </Button>

          {/* {Next Button} */}
          <Button
            variant="contained"
            // disabled={getValues("referenceNumber") !== referenceNumber}
            onClick={handleClickNextButton}
          >
            {NEXT}
            <img
              src={IconArrowRight}
              alt="icon arrow right"
              className={cx("arrow", "mrl-dt-5")}
            />
          </Button>
        </Box>
      </Box>

      {/* {Expired Dialog} */}
      <Dialog
        open={openExpiredDialog}
        onClose={() => {}}
        maxWidth="md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <ExpiredDialog />
        </DialogContent>
      </Dialog>

      {/* {One Time OTP Dialog} */}
      <Dialog
        open={openOneTimeOTPDialog}
        onClose={() => {}}
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
          <OneTimeOTP successful={handleOneTimeOTPSucessful} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};
export default RetrieveDialog;
