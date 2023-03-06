// import modules
import React, { useState, useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./ReviewAndSubmit.scss";

// render UI
const TransactionAndCardAcceptanceType: React.FC<any> = (props) => {
  const { data } = props;
  const cx = classnames.bind(styles);
  const listItemChecked = data.filter((item: any) => item.checked === true); // Filter from the data list to get checked items

  return (
    <Box>
      <Grid item xs={12} className={cx("n-wrap")}>
        <Grid container>
          {_.map(listItemChecked, (item) => {
            return (
              <Grid container className={cx("n-wrap")}>
                <Grid xs={12} md={6}>
                  <Box className={cx("d-flex-column")}>
                    <Box component="span" className={cx("text-item-input")}>
                      Service
                    </Box>
                    <Box component="span" className={cx("text-item-value")}>
                      {item.label}
                    </Box>
                  </Box>
                </Grid>

                <Grid xs={12} md={6}>
                  <Box className={cx("d-flex-column")}>
                    <Box component="span" className={cx("text-item-input")}>
                      Payment options (Includes Mastercard and Visa)
                    </Box>
                    {_.map(
                      item.expandedListCheckbox.listCheckbox,
                      (subItem) => {
                        if (subItem.checked === true) {
                          return (
                            <Box
                              component="span"
                              className={cx("text-item-value")}
                            >
                              {subItem.label}
                            </Box>
                          );
                        }
                      }
                    )}
                  </Box>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};
export default TransactionAndCardAcceptanceType;
