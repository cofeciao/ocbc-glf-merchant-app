// import modules
import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import _ from "lodash";
import classnames from "classnames/bind";
import { Dialog } from "@sectionsg/orc";

// import constants
import { SELF_SERVE_PAGE } from "@/utils/constants";

// import icons
import IconTooltip from "@/assets/images/icon-tooltip.svg";

// import style
import styles from "./ProductsAndServices.scss";

// import types
import { IProductsAndServices } from "./ProductsAndServices";

// render UI
const TooltipDialog: React.FC = () => {
  const cx = classnames.bind(styles);
  const [open, setOpen] = useState<boolean>(false);
  const { LIST_TOOLTIP_CONTENT } = SELF_SERVE_PAGE;

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
      <Dialog isOpen={open} onRequestClose={handleCloseDialog}>
        <Box>
          {_.map(
            LIST_TOOLTIP_CONTENT,
            (item: IProductsAndServices.ITooltipDialog, index: number) => {
              return (
                <Box key={index}>
                  {/* {Title} */}
                  <Typography className={cx("section-title")}>
                    {item.title}
                  </Typography>

                  {/* {Description} */}
                  <Typography
                    className={cx(
                      `section-description ${
                        index === LIST_TOOLTIP_CONTENT.length - 1
                          ? "last-description"
                          : ""
                      }`
                    )}
                  >
                    {item.description}
                  </Typography>
                </Box>
              );
            }
          )}
        </Box>
      </Dialog>
    </Box>
  );
};
export default TooltipDialog;
