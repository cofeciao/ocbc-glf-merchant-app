// import modules
import { Button, Dialog, Radio } from "@sectionsg/orc";
import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import constant
import { HOME_PAGE, NEXT } from "@/utils/constants";

// import style
import styles from "./EntryDialog.scss";

// import icons
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import RetrieveDialog from "./RetrieveDialog";

// import types

// render UI
const EntryDialog: React.FC<any> = (props) => {
  const { onCloseDialog } = props;
  const { LABEL_WHAT_ARE_YOU_HERE_FOR, LIST_RADIO_ENTRY_POINT } =
    HOME_PAGE.ENTRY_POINT;
  const cx = classnames.bind(styles);
  const [openRetrieveDialog, setOpenRetrieveDialog] = useState<boolean>(false);
  const [disabledNextButton, setDisabledNextButton] = useState<boolean>(true);
  const [value, setValue] = useState<string>("");

  /**
   * Handle close dialog
   */
  const handleCloseDialog = () => {
    onCloseDialog(true);
  };

  /**
   * Handle close dialog
   */
  const handleCloseRetrieveDialog = () => {
    setOpenRetrieveDialog(false);
  };

  /**
   * Get value from Radio
   */
  const handleGetValueFromRadio = (value: string) => {
    if (!_.isNil(value)) {
      setValue(value);
      setDisabledNextButton(false);
    }
  };

  /**
   * Handle after clicking the next button
   */
  const handleClickNextButton = () => {
    const startUpValue = LIST_RADIO_ENTRY_POINT[0].text;
    const retrieveValue = LIST_RADIO_ENTRY_POINT[1].text;
    if (value === startUpValue) {
      handleCloseDialog();
    }
    if (value === retrieveValue) {
      setOpenRetrieveDialog(true);
    }
  };

  return (
    <Box className={cx("entry-dialog-wrapper")}>
      {/* {Title} */}
      <Box className={cx("header-dialog-wrapper")}>
        <Typography className={cx("title mb-dt-40")}>
          {LABEL_WHAT_ARE_YOU_HERE_FOR}
        </Typography>

        <Grid container>
          <Grid item xs={12} className={cx("radio-group-entry-dialog")}>
            {/* {List Radio} */}
            {!_.isEmpty(LIST_RADIO_ENTRY_POINT) && (
              <Radio
                vertical
                name="lockIn"
                listCheckBox={LIST_RADIO_ENTRY_POINT}
                radioKey={0}
                getValue={handleGetValueFromRadio}
              />
            )}
          </Grid>
        </Grid>
      </Box>

      {/* {Next Button} */}
      <Box className={cx("group-button mt-dt-40")}>
        <Box className="d-inline">
          <Button
            backgroundClass="bgGunmetalBluegrey"
            disabled={disabledNextButton}
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
      <Dialog isOpen={openRetrieveDialog} onRequestClose={handleCloseRetrieveDialog}>
        <RetrieveDialog onCloseDialog={handleCloseRetrieveDialog} />
      </Dialog>
    </Box>
  );
};
export default EntryDialog;
