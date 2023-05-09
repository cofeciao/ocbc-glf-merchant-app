// import modules
import React, { useState } from "react";
import classnames from "classnames/bind";
import _ from "lodash";

// import images
import IconArrowRight from "@/assets/images/icon-arrow-right.svg";
import IconRadioBorder from "@/assets/images/icon-radio-border.svg";
import IconRadioCheckedBlack from "@/assets/images/icon-radio-checked-black.svg";

// import constant
import { HOME_PAGE, NEXT } from "@/utils/constants";

// import style
import styles from "./EntryDialogContent.scss";

// import types
import { IGroupRadios } from "@/components/GroupRadio/GroupRadio";
import { IEntryDialog } from "./EntryDialogContent";

// import components
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  Grid,
  RadioGroup,
  Typography,
  Button,
} from "@material-ui/core";

// render UI
const EntryDialog: React.FC<IEntryDialog> = (props) => {
  // props
  const { onCloseDialog, successful } = props;
  const { LABEL_WHAT_ARE_YOU_HERE_FOR, LIST_RADIO_ENTRY_POINT } =
    HOME_PAGE.ENTRY_POINT;
  const startUpValue = LIST_RADIO_ENTRY_POINT[0].value;
  const retrieveValue = LIST_RADIO_ENTRY_POINT[1].value;

  // classnames
  const cx = classnames.bind(styles);

  // states
  // const [openRetrieveDialog, setOpenRetrieveDialog] = useState<boolean>(false);
  const [disabledNextButton, setDisabledNextButton] = useState<boolean>(true);
  const [valueEntryPoint, setValueEntryPoint] = useState<string>("");

  /**
   * Handle close dialog
   */
  const handleCloseDialog = () => {
    onCloseDialog(true);
  };

  /**
   * Get value from Radio
   */
  const handleGetValueFromRadio = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    if (!_.isNil(value)) {
      setValueEntryPoint(value);
      setDisabledNextButton(false);
    }
  };

  /**
   * Handle after clicking the next button
   */
  const handleClickNextButton = () => {
    if (valueEntryPoint === startUpValue) {
      handleCloseDialog();
    }
    if (valueEntryPoint === retrieveValue) {
      successful(true);
    }
  };

  /**
   * render Group Radio
   * @returns
   */
  const renderGroupRadio = () => {
    return (
      <FormControl component="fieldset" className={cx("group-radio")}>
        <RadioGroup
          name="dataEntryPoint"
          value={valueEntryPoint}
          onChange={handleGetValueFromRadio}
        >
          {Array.isArray(LIST_RADIO_ENTRY_POINT) &&
            LIST_RADIO_ENTRY_POINT.map(
              (item: IGroupRadios.IRadio, index: number) => (
                <FormControlLabel
                  className={cx(
                    valueEntryPoint === item.value ? "active" : "inactive"
                  )}
                  key={index}
                  value={item.value}
                  control={
                    <Radio
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      icon={
                        <img src={IconRadioBorder} alt="icon radio border" />
                      }
                      checkedIcon={
                        <img
                          src={IconRadioCheckedBlack}
                          alt="icon checkedbox black"
                        />
                      }
                    />
                  }
                  label={item.label}
                />
              )
            )}
        </RadioGroup>
      </FormControl>
    );
  };

  return (
    <Box className={cx("entry-dialog-content-wrapper")}>
      <Box className={cx("content-wrapper")}>
        {/* {Title} */}
        <Typography className={cx("title mb-dt-40")}>
          {LABEL_WHAT_ARE_YOU_HERE_FOR}
        </Typography>

        {/* {List Radio} */}
        <Grid container className={cx("radio-group-container")}>
          <Grid item xs={9} className={cx("radio-group-entry-dialog")}>
            {!_.isEmpty(LIST_RADIO_ENTRY_POINT) && renderGroupRadio()}
          </Grid>
        </Grid>
      </Box>

      {/* {Next Button} */}
      <Box className={cx("group-button mt-dt-40")}>
        <Box className="d-inline">
          <Button
            variant="contained"
            disabled={disabledNextButton}
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
    </Box>
  );
};
export default EntryDialog;
