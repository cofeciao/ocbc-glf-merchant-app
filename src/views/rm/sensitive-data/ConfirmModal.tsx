import React from "react";
import classNames from "classnames/bind";

// import types
import { ISensitive } from "./Sensitive";

// import images
import CloseIcon from "@/assets/images/icon-close.svg"

// import styles
import styles from "./Sensitive.scss";

// import components
import {
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle ,
  Typography
} from "@material-ui/core";

// import constants
import { STEP_RM } from "@/utils/constants-rm";

const ConfirmModal: React.FC<ISensitive.IConfirmModal> = (props) => {
  // props
  const { open, onClose } = props;
  
  // classnames
  const cx = classNames.bind(styles);

  // constants
  const { LIST_STEP: { sensitiveData: { section: { contentDialog } } } } = STEP_RM;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      TransitionProps={{
        style: { backgroundColor: "rgba(177, 184, 197, 0.7)" },
      }}
    >
      <div className={cx("icon-close")}><img src={CloseIcon} alt="icon close" onClick={onClose} /></div>
      <DialogTitle id="alert-dialog-title">
        <Typography className={cx("title")}>{contentDialog.title}</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{contentDialog.description}</DialogContentText>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}

export default ConfirmModal;