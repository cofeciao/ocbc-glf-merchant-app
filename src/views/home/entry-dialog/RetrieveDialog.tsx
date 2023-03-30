// import modules
import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  DialogContent,
  Dialog,
} from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import ExpiredDialog from "./ExpiredDialog";
import _ from "lodash";

// import images
import IconArrowRight from "@/assets/images/icon-arrow-right.svg";
import IconArrowLeft from "@/assets/images/icon-arrow-left.svg";

// import constants
import { ERROR_ICON, HOME_PAGE, NEXT } from "@/utils/constants";

// import style
import styles from "./EntryDialog.scss";

// import types
import { IEntryDialog } from "./EntryDialog";

// render UI
const RetrieveDialog: React.FC<IEntryDialog.IDialog> = (props) => {
  const { onCloseDialog } = props;
  const cx = classnames.bind(styles);
  const { PLEASE_FILL_IN_THE_DETAILS, TEXT_FIELD_REFERENCE_NUMBER } =
    HOME_PAGE.ENTRY_POINT;
  const [openExpiredDialog, setOpenExpiredDialog] = useState<boolean>(false);

  // react-hook-form
  const {
    register,
    formState: { errors, isValid, isDirty },
    getValues,
  } = useForm({
    mode: "onChange",
  });

  /**
   * Temporariy put here for dev
   */
  const handleClickNextButton = () => {
    const referenceNumber = getValues("referenceNumber");
    setOpenExpiredDialog(true);
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
                  label={TEXT_FIELD_REFERENCE_NUMBER.label}
                  error={
                    errors.referenceNumber &&
                    !_.isEqual(errors.referenceNumber.type, "required") &&
                    true
                  }
                  helperText={
                    errors.referenceNumber
                      ? errors.referenceNumber.message
                      : TEXT_FIELD_REFERENCE_NUMBER.description
                  }
                  variant="filled"
                  {...register(`referenceNumber`, {
                    required: true,
                    pattern: {
                      // eslint-disable-next-line no-useless-escape
                      value: /^[0-9]{8}[A-Z]{3}$/,
                      message: `${ERROR_ICON} ${TEXT_FIELD_REFERENCE_NUMBER.helperText}`,
                    },
                  })}
                />
              </Box>
            </Box>
          </Grid>{" "}
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
            disabled={!isValid || !isDirty}
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

      {/* {Dialog} */}
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
    </Box>
  );
};
export default RetrieveDialog;
