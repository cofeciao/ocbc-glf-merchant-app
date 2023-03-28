// import modules
import React, { useState } from "react";
import { 
  Box, 
  FormControl, 
  FormControlLabel, 
  Radio, 
  Grid, 
  RadioGroup,
  Typography,
  Button,
  DialogContent,
  Dialog
} from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import images
import IconArrowRight from "@/assets/images/icon-arrow-right.svg";
import IconRadioBorder from '@/assets/images/icon-radio-border.svg';
import IconRadioCheckedWhite from '@/assets/images/icon-radio-checked-white.svg';
import CloseIcon from "@/assets/images/icon-close.svg";

// import constant
import { HOME_PAGE, NEXT } from "@/utils/constants";

// import style
import styles from "./EntryDialog.scss";

// import icons
import RetrieveDialog from "./RetrieveDialog";

// import types
import { IGroupRadios } from "@/components/GroupRadio/GroupRadio";

// render UI
const EntryDialog: React.FC<any> = (props) => {

  // props
  const { onCloseDialog } = props;
  const { LABEL_WHAT_ARE_YOU_HERE_FOR, LIST_RADIO_ENTRY_POINT } =
    HOME_PAGE.ENTRY_POINT;

  const startUpValue = LIST_RADIO_ENTRY_POINT[0].value;
  const retrieveValue = LIST_RADIO_ENTRY_POINT[1].value;
  
  // classnames
  const cx = classnames.bind(styles);

  // States
  const [openRetrieveDialog, setOpenRetrieveDialog] = useState<boolean>(false);
  const [disabledNextButton, setDisabledNextButton] = useState<boolean>(true);
  const [valueEntryPoint, setValueEntryPoint] = useState<string>("");

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
  const handleGetValueFromRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      setOpenRetrieveDialog(true);
    }
  };

  const renderGroupRadio = () => {
    return (
      <FormControl component="fieldset" className={cx("group-radio")}>
        <RadioGroup 
          name="dataEntryPoint" 
          value={valueEntryPoint} 
          onChange={handleGetValueFromRadio} 
        >
          {Array.isArray(LIST_RADIO_ENTRY_POINT) && LIST_RADIO_ENTRY_POINT.map((item: IGroupRadios.IRadio, index: number) => (
            <FormControlLabel
              className={cx(valueEntryPoint ===  item.value ? "active" : "inactive")}
              key={index}
              value={item.value} 
              control={
                <Radio 
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                  icon={<img src={IconRadioBorder} alt="icon radio border" />}
                  checkedIcon={<img src={IconRadioCheckedWhite} alt="icon radio checked white" />}
                />
              } 
              label={item.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    )
  }

  return (
    <Box className={cx("entry-dialog-wrapper")}>
      {/* {Title} */}
      <Box className={cx("header-dialog-wrapper")}>
        <Typography className={cx("title mb-dt-40")}>
          {LABEL_WHAT_ARE_YOU_HERE_FOR}
        </Typography>

        <Grid container className={cx("radio-group-container")}>
          <Grid item xs={9} className={cx("radio-group-entry-dialog")}>
            {/* {List Radio} */}
            {!_.isEmpty(LIST_RADIO_ENTRY_POINT) && (
              renderGroupRadio()
            )}
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
            <img src={IconArrowRight} alt="icon arrow right" className={cx("arrow", "mrl-dt-5")} />
          </Button>
        </Box>
      </Box>

      {/* {Dialog} */}
      <Dialog
        open={openRetrieveDialog}
        onClose={handleCloseRetrieveDialog}
        maxWidth="md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={cx("icon-close")}><img src={CloseIcon} alt="icon close" onClick={handleCloseRetrieveDialog} /></div>
        <DialogContent>
          <RetrieveDialog onCloseDialog={handleCloseRetrieveDialog} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};
export default EntryDialog;
