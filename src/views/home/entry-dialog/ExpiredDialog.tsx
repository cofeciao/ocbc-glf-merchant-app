// import modules
import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import constant
import { HOME_PAGE } from "@/utils/constants";

// import style
import styles from "./EntryDialog.scss";

// import types
import { IEntryDialog } from "./EntryDialog";

// render UI
const ExpiredDialog: React.FC<IEntryDialog.IDialog> = () => {
  const {
    LABEL_YOUR_SAVED_APPLICATION_HAS_EXPIRED,
    LABEL_PLEASE_RESTART_YOUR_APPLICATION,
    LABEL_START_OVER,
  } = HOME_PAGE.ENTRY_POINT;
  const cx = classnames.bind(styles);

  /**
   * Handle after clicking the star over button
   */
  const handleClickNextButton = () => {
    window.location.reload();
  };

  return (
    <Box className={cx("entry-dialog-wrapper")}>
      {/* {Title} */}
      <Box className={cx("header-dialog-wrapper")}>
        <Typography className={cx("title-start-over mb-16")}>
          {LABEL_YOUR_SAVED_APPLICATION_HAS_EXPIRED}
        </Typography>
        <Typography className={cx("description")}>
          {LABEL_PLEASE_RESTART_YOUR_APPLICATION}
        </Typography>
      </Box>

      {/* {Next Button} */}
      <Box className={cx("group-button mt-dt-40")}>
        <Box className="d-inline">
          <Button variant="contained" onClick={handleClickNextButton}>
            {LABEL_START_OVER}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default ExpiredDialog;
