// import modules
import { Button, Dialog } from "@sectionsg/orc";
import React, { useState } from "react";
import { Box, Grid, TextField, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import ExpiredDialog from "./ExpiredDialog";
import _ from "lodash";

// import constants
import {
  ERROR_ICON,
  HOME_PAGE,
  NEXT,
} from "@/utils/constants";

// import style
import styles from "./EntryDialog.scss";

// import icons
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";


// import types

// render UI
const RetrieveDialog: React.FC<any> = (props) => {
  const { dataRedux, onCloseDialog } = props;
  const cx = classnames.bind(styles);
  const { PLEASE_FILL_IN_THE_DETAILS, TEXT_FIELD_REFERENCE_NUMBER } =
    HOME_PAGE.ENTRY_POINT;
  const [openExpiredDialog, setOpenExpiredDialog] = useState<boolean>(false);
  const history = useHistory();
  const {
    register,
    formState: { errors, isValid, isDirty },
    getValues,
    setValue,
    unregister,
  } = useForm({
    mode: "onBlur",
  });

  const handleClickNextButton = () => {
    setOpenExpiredDialog(true);
  };

  return (
    <Box className={cx("retrieve-dialog-wrapper")}>
      <Box className={cx("header-dialog-wrapper")}>
        <Typography className={cx("title mb-dt-40")}>
          {PLEASE_FILL_IN_THE_DETAILS}
        </Typography>

        <Grid container>
          <Grid item xs={12} className={cx("radio-group-entry-dialog")}>
            {/* {List Radio} */}
            <Box className={cx("text-field-group-wrapper")}>
              <Box className={cx("text-field-item")}>
                <TextField
                  fullWidth
                  label={TEXT_FIELD_REFERENCE_NUMBER.label}
                  error={errors.referenceNumber && true}
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
                      value: /^\d{9}[0-9A-Z]{3}$/i,
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
      <Box className={cx("group-button mt-dt-40")}>
        <Box className="d-flex space-between">
          {/* {Back Button} */}
          {
            <Button
              backgroundClass="square"
              onClick={() => onCloseDialog(true)}
            >
              <ArrowBackIcon className={cx("arrow")} />
            </Button>
          }

          {/* {Next Button} */}
          <Button
            backgroundClass="bgGunmetalBluegrey"
            disabled={!isValid || !isDirty}
            onClick={handleClickNextButton}
          >
            <>
              {NEXT}
              <ArrowForwardIcon className={cx("arrow", "mrl-dt-5")} />
            </>
          </Button>
        </Box>
      </Box>

      {/* {Dialog} */}
      <Dialog
        isOpen={openExpiredDialog}
        // onRequestClose={handleCloseRetrieveDialog}
      >
        <ExpiredDialog onCloseDialog={() => {}} />
      </Dialog>
    </Box>
  );
};
export default RetrieveDialog;
