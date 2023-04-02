import React from "react";
import classNames from "classnames/bind";

// import types
import { IWelcome } from "../welcome/Welcome";

// import images
import CloseIcon from "@/assets/images/icon-close.svg"

// import styles
import styles from "./Welcome.scss";

// import components
import {
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle ,
  Divider,
  Grid,
  Typography
} from "@material-ui/core";
import { Button } from "@sectionsg/orc"

const LaunchModal: React.FC<IWelcome.ILaunchModal> = (props) => {
  const { open, onClose, onSubmit, data } = props;
  const cx = classNames.bind(styles);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      TransitionProps={{
        style: { backgroundColor: "rgba(177, 184, 197, 0.7)" },
      }}  
    >
      <div className={cx("icon-close")}><img src={CloseIcon} alt="icon close" onClick={onClose} /></div>
      <DialogTitle id="alert-dialog-title">
        <Typography className={cx("title")}>Launch company's application?</Typography>
        <Typography className={cx("sub-title")}>You may use the following pages to gather information about the company.</Typography>      
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Grid container>
            <Grid item xs={6} direction="column">
              <div className={cx("title")}>Company</div>
              <div className={cx("content")}>{data.company}</div>
            </Grid>
            <Grid item xs={6} direction="column">
              <div className={cx("title")}>UEN</div>
              <div className={cx("content")}>{data.uen}</div>
            </Grid>          
          </Grid>
          <Divider />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button 
          backgroundClass="bgGunmetalBluegrey"
          onClick={onSubmit}
        >
          Yes, launch the form
        </Button>
        <Typography className={cx("back")} onClick={onClose}>Back</Typography>
      </DialogActions>
    </Dialog>
  );
}

export default LaunchModal;