import React from "react";
import classNames from "classnames/bind";

// import types
import { ISensitive } from "./Sensitive";

// import icons
import CloseIcon from '@material-ui/icons/Close';

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

const ConfirmModal: React.FC<ISensitive.IConfirmModal> = (props) => {
  const { open, onClose } = props;
  const cx = classNames.bind(styles);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className={cx("icon-close")}><CloseIcon onClick={onClose} /></div>
      <DialogTitle id="alert-dialog-title">
        <Typography className={cx("title")}>Payment Card Industry Data Security Standard</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        The Payment Card Industry Data Security Standard (PCI DSS) is a set of requirements intended to ensure that all companies that process, store, or transmit credit card information maintain a secure environment.
        </DialogContentText>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}

export default ConfirmModal;