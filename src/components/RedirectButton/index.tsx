// import modules
import React, { useState } from "react";
import { Box, Button, DialogContent, Dialog } from "@material-ui/core";
import _ from "lodash";
import { Link } from "react-router-dom";
import { CONTINUE_LATER, NEXT, START, SUBMIT } from "@/utils/constants";
import classnames from "classnames/bind";
import ContinueLaterDialog from "@/views/self-serve/continue-later-dialog";

// import icons
import CloseIcon from "@/assets/images/icon-close.svg";

// import styles
import styles from "./RedirectButton.scss";

// import images
import IconArrowRight from "@/assets/images/icon-arrow-right.svg";
import IconArrowLeft from "@/assets/images/icon-arrow-left.svg";

// import type
import { IRedirectButton } from "./RedirectButton";

const RedirectButton = (props: IRedirectButton) => {
  const {
    variant,
    continueLater,
    backButton,
    onClickNext,
    onClickBack,
    disabledNextButton,
    isIcon = true,
  } = props;

  // classnames
  const cx = classnames.bind(styles);

  //states
  const [openContinueLaterDialog, setOpenContinueLaterDialog] =
    useState<boolean>(false);

  /**
   * Handle toggle Dialog
   */
  const handleOpenContinueLaterDialog = () => {
    setOpenContinueLaterDialog(true);
  };
  const handleCloseContinueLaterDialog = () => {
    setOpenContinueLaterDialog(false);
  };

  return (
    <Box className={cx("button-wrapper")}>
      {/* {Back Button} */}
      {!_.isNil(backButton) && (
        <Button onClick={onClickBack} variant="outlined">
          <img src={IconArrowLeft} alt="icon arrow left" />
        </Button>
      )}

      <Box>
        {/* {Continue Later Button} */}
        {!_.isNil(continueLater) && (
          <Box className={cx("d-inline")}>
            <Link
              to="/"
              onClick={(event: any) => {
                event.preventDefault();
                setOpenContinueLaterDialog(true);
              }}
            >
              {CONTINUE_LATER}
            </Link>
          </Box>
        )}

        {/* {Main Button} */}
        <Box className="ml-dt-30 d-inline">
          <Button
            variant="contained"
            disabled={disabledNextButton}
            onClick={onClickNext}
          >
            <>
              {(_.isEqual(variant, "next") && NEXT) ||
                (_.isEqual(variant, "submit") && SUBMIT) ||
                (_.isEqual(variant, "start") && START)}
              {isIcon && (
                <img
                  src={IconArrowRight}
                  alt="icon arrow right"
                  className={cx("arrow", "mrl-dt-5")}
                />
              )}
            </>
          </Button>
        </Box>
      </Box>

      {/* {ContinueLater Dialog} */}
      <Dialog
        open={openContinueLaterDialog}
        onClose={handleCloseContinueLaterDialog}
        maxWidth="md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionProps={{
          style: { backgroundColor: "rgba(177, 184, 197, 0.7)" },
        }}
      >
        {/* {Icon} */}
        <Box className={cx("icon-close")}>
          <img
            src={CloseIcon}
            alt="icon close"
            onClick={handleCloseContinueLaterDialog}
          />
        </Box>

        {/* {Content} */}
        <DialogContent>
          <ContinueLaterDialog
            handleOpenContinueLaterDialog={handleOpenContinueLaterDialog}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default RedirectButton;
