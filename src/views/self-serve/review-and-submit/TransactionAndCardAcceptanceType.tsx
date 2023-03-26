// import modules
import React from "react";
import { Box, Grid } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./ReviewAndSubmit.scss";

// import constants
import { SELF_SERVE_PAGE } from "@/utils/constants";

// render UI
const TransactionAndCardAcceptanceType: React.FC<any> = (props) => {
  const { data } = props;
  const { LABEL_PAYMENT_OPTIONS_INCLUDES_MASTERCARD_AND_VISA, LABEL_SERVICE } =
    SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);
  const listItemChecked = data.filter((item: any) => item.checked === true); // Filter from the data list to get checked items

  return (
    <Box>
      <Grid item xs={12} className={cx("n-wrap")}>
        <Grid
          container
          className={cx("transaction-and-card-acceptance-type-container")}
        >
          {_.map(listItemChecked, (item, index) => {
            return (
              <Grid key={index} container className={cx("n-wrap")}>
                <Grid item xs={12} md={6}>
                  <Box className={cx("d-flex-column")}>
                    {/* {Label} */}
                    {
                      <Box component="span" className={cx("text-item-input")}>
                        {LABEL_SERVICE}
                      </Box>
                    }

                    {/* {Item} */}
                    <Box component="span" className={cx("text-item-value")}>
                      {item.label}
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box className={cx("d-flex-column")}>
                    {/* {Label} */}
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_PAYMENT_OPTIONS_INCLUDES_MASTERCARD_AND_VISA}
                    </Box>

                    <Box display="flex" gridColumnGap={"71px"} flexWrap="wrap">
                      {/* {column Left} */}
                      <Box component="ul" className={cx("text-item-value")}>
                        {_.map(
                          item.expandedListCheckbox.listCheckbox,
                          (subItem, index: number) => {
                            if (subItem.checked === true && index <= 3) {
                              return (
                                <Box key={index} component="li">
                                  {subItem.label}
                                </Box>
                              );
                            }
                          }
                        )}
                      </Box>

                      {/* {column Right} */}
                      <Box component="ul" className={cx("text-item-value")}>
                        {_.map(
                          item.expandedListCheckbox.listCheckbox,
                          (subItem, index: number) => {
                            if (subItem.checked === true && index > 3) {
                              return (
                                <Box key={index} component="li">
                                  {subItem.label}
                                </Box>
                              );
                            }
                          }
                        )}
                      </Box>
                    </Box>
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
