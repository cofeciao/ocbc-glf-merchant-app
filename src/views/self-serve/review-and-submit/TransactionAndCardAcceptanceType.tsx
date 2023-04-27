// import modules
import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./ReviewAndSubmit.scss";

// import type
import { IReviewAndSubmit } from "./ReviewAndSubmit";
import { ICheckBox } from "@/components/ListCheckBox/ListCheckBox";

// render UI
const TransactionAndCardAcceptanceType: React.FC<
  IReviewAndSubmit.ITransactionAndCardAcceptanceType
> = (props) => {
  const { data } = props;

  // classnames
  const cx = classnames.bind(styles);

  // Filter from the data list to get checked items
  const listItemChecked = data.filter(
    (item) => item.checked === true
  );

  return (
    <Box
      className={cx(
        "transaction-and-card-acceptance-type-container d-flex-column"
      )}
    >
      {_.map(listItemChecked, (item: ICheckBox, index: number) => {
        return (
          <Box key={index}>
            {/* {Option} */}
            <Grid item xs={12}>
              <Box className={cx("mb-32")}>
                <Box component="span" className={cx("sub-section-title")}>
                  {item.label}
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                {_.map(item.expandedListCheckbox, (expandedItem, idx) => {
                  const filter = expandedItem.listCheckbox.filter(
                    (filterItem) => filterItem.checked === true
                  );
                  return (
                    <Grid item key={idx} xs={12} md={4}>
                      <Box className={cx("w70p")}>
                        <Typography
                          component="span"
                          className={cx("text-item-input")}
                        >
                          {expandedItem.description}
                        </Typography>

                        {_.size(filter) ? (
                          <Box component="ul" className={cx("text-item-value")}>
                            {_.map(
                              expandedItem.listCheckbox,
                              (subItem, index) => {
                                if (subItem.checked === true) {
                                  return (
                                    <Box key={index} component="li">
                                      {subItem.label}
                                    </Box>
                                  );
                                }
                              }
                            )}
                          </Box>
                        ) : (
                          <Box>{"-"}</Box>
                        )}
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
};
export default TransactionAndCardAcceptanceType;
