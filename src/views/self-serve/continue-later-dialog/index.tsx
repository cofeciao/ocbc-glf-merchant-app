// import modules
import { Button, Dialog } from "@sectionsg/orc";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import ReviewAndSaveDialog from "./ReviewAndSaveDialog";
import _ from "lodash";

// import style
import styles from "./ContinueLaterDialog.scss";
import { SELF_SERVE_PAGE } from "@/utils/constants";

// import types

// render UI
const ContinueLaterDialog: React.FC<any> = (props) => {
  const { onCloseDialog } = props;
  const {
    LABEL_YOU_ARE_LEAVING_THIS_APPLICATION,
    LABEL_SAVE_YOUR_PROGRESS_AND_CONTINUE_LATER,
    LABEL_YES_SAVE_APPLICATION,
    LABEL_LEAVE_ANYWAY,
  } = SELF_SERVE_PAGE.CONTINUE_LATER_DIALOG;
  const cx = classnames.bind(styles);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  /**
   * Retrieves data of Company And Contact Information step from Store
   */
  const dataCompanyAndContactInformationStep = useSelector(
    (state: any) => state.form.companyAndContactInformationStep
  );

  /**
   * Handle close dialog
   */
  const handleCloseDialog = () => {
    onCloseDialog(true);
    setOpenDialog(false);
  };

  /**
   * Handle to show form dialog
   */
  const handleYesButton = () => {
    setOpenDialog(true);
  };

  return (
    <Box className={cx("continue-later-dialog-wrapper")}>
      <Box className={cx("header-dialog-wrapper")}>
        <Typography className={cx("title")}>
          {LABEL_YOU_ARE_LEAVING_THIS_APPLICATION}
        </Typography>
        <Typography className={cx("description")}>
          {LABEL_SAVE_YOUR_PROGRESS_AND_CONTINUE_LATER}
        </Typography>
      </Box>
      <Box className={cx("group-button")}>
        <Button
          id={cx("yes-button")}
          variant="contained"
          onClick={handleYesButton}
        >
          {LABEL_YES_SAVE_APPLICATION}
        </Button>
        <Box className={cx("d-inline")}>
          <Link
            to="/"
            id={cx("leave-button")}
            onClick={(event: any) => {
              event.preventDefault();
              window.location.href = (process.env.myinfo as any).redirectUri;
            }}
          >
            {LABEL_LEAVE_ANYWAY}
          </Link>
        </Box>
      </Box>

      {/* {Dialog} */}
      <Dialog isOpen={openDialog} onRequestClose={handleCloseDialog}>
        <ReviewAndSaveDialog
          dataRedux={dataCompanyAndContactInformationStep}
          onCloseDialog={handleCloseDialog}
        />
      </Dialog>
    </Box>
  );
};
export default ContinueLaterDialog;
