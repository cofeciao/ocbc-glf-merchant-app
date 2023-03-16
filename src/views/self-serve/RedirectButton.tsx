// import modules
import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { Button, Dialog } from "@sectionsg/orc";
import _ from "lodash";
import { Link } from "react-router-dom";
import { CONTINUE_LATER, NEXT, SUBMIT } from "@/utils/constants";
import classnames from "classnames/bind";
import ContinueLaterDialog from "@/views/self-serve/continue-later-dialog";

// import styles
import styles from "./SelfServe.scss";

// import icons
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const RedirectButton = (props: any) => {
  const {
    variant,
    continueLater,
    backButton,
    onClickNext,
    onClickBack,
    disabledNextButton,
  } = props;
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const cx = classnames.bind(styles);

  /**
   * Handle close Dialog
   */
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box className={cx("button-wrapper", "d-flex justify-end mt-dt-40")}>
      {/* {Back Button} */}
      {!_.isNil(backButton) && (
        <Button backgroundClass="square" onClick={onClickBack}>
          <ArrowBackIcon className={cx("arrow")} />
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
                setOpenDialog(true);
              }}
            >
              {CONTINUE_LATER}
            </Link>
          </Box>
        )}

        {/* {Main Button} */}
        <Box className="ml-dt-30 d-inline">
          <Button
            backgroundClass="bgGunmetalBluegrey"
            disabled={disabledNextButton}
            onClick={onClickNext}
          >
            <>
              {(_.isEqual(variant, "next") && NEXT) ||
                (_.isEqual(variant, "submit") && SUBMIT)}
              <ArrowForwardIcon className={cx("arrow", "mrl-dt-5")} />
            </>
          </Button>
        </Box>
      </Box>

      {/* {Continue later Dialog} */}
      <Dialog isOpen={openDialog} onRequestClose={handleCloseDialog}>
        <ContinueLaterDialog onCloseDialog={handleCloseDialog} />
      </Dialog>
    </Box>
  );
};

export default RedirectButton;
