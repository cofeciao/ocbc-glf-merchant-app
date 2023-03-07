// import modules
import React from "react";
import { Box, Grid } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./ReviewAndSubmit.scss";
import { SELF_SERVE_PAGE } from "@/utils/constants";

// render UI
const CashlessPaymentMethod: React.FC<any> = (props) => {
  const { data } = props;
  const { LABEL_MODE } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Box className={cx("d-flex-column")}>
            <Box component="span" className={cx("text-item-input")}>
             {LABEL_MODE}
            </Box>
            {_.map(data, (item) => {
              return (
                <Box component="span" className={cx("text-item-value")}>
                  {item.label}
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default CashlessPaymentMethod;
