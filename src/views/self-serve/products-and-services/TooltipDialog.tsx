// import modules
import React, { useState } from "react";
import { Box, Typography, Dialog, DialogContent } from "@material-ui/core";
import _ from "lodash";
import classnames from "classnames/bind";

// import icons
import CloseIcon from "@material-ui/icons/Close";

// import constants
import { SELF_SERVE_PAGE } from "@/utils/constants";

// import icons
import IconTooltip from "@/assets/images/icon-tooltip.svg";

// import style
import styles from "./ProductsAndServices.scss";

// render UI
const TooltipDialog: React.FC = () => {
  const cx = classnames.bind(styles);
  const [open, setOpen] = useState<boolean>(false);
  const { TOOLTIP_CONTENT } = SELF_SERVE_PAGE;
  const { fulfilmentPeriod, imediateFulfilment, fulfilmentOver } = TOOLTIP_CONTENT;

  /**
   * Handle click to show dialog
   */
  const handleClickTooltip = () => {
    setOpen(true);
  };

  /**
   * Handle click to close dialog
   */
  const handleCloseDialog = () => {
    setOpen(false);
  };

  const renderContentTooltip = (isSectionFirst: boolean, content: { title: string, description: string }) => {
    return (
      <>
        <Box>
          <Typography 
            style={{
              fontWeight: '700',
              fontSize: isSectionFirst ? '24px' : '20px',
              lineHeight: '32px',
              color: "#363B40"
            }}
          >
            {content.title}
          </Typography>
          <Typography
            style={{
              fontWeight: '400',
              fontSize: '18px',
              lineHeight: '28px',
              color: "#777E87",
              marginBottom: '40px'
            }}
          >
            {content.description}
          </Typography>
        </Box>
      </>
    )
  }

  return (
    <Box className={cx("tooltip-dialog-wrapper")}>
      {/* {Icon} */}
      <img
        onClick={handleClickTooltip}
        src={IconTooltip}
        alt="icon"
        className={cx("icon-tooltip")}
      />

      {/* {Dialog} */}
      <Dialog
        open={open}
        onClose={handleCloseDialog}
        maxWidth="md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionProps={{ style: { backgroundColor: "rgba(177, 184, 197, 0.7)" }}}
      >
        <div className={cx("icon-close")}><CloseIcon onClick={handleCloseDialog} /></div>
        <DialogContent>
          {renderContentTooltip(true, fulfilmentPeriod)}
          {renderContentTooltip(false, imediateFulfilment)}
          {renderContentTooltip(false, fulfilmentOver)}
        </DialogContent>
      </Dialog>
    </Box>
  );
};
export default TooltipDialog;
