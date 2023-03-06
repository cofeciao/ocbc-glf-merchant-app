// import modules
import React, { useState, useEffect } from "react";
import { Checkbox } from "@sectionsg/orc";
import { Box, Grid, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./ReviewAndSubmit.scss";
import { SELF_SERVE_PAGE } from "@/utils/constants";

// render UI
const AgreePolicy: React.FC<any> = (props) => {
  const { LIST_CHECKBOX_AGREE_POLICY } = SELF_SERVE_PAGE;
  const { getValue } = props;
  const cx = classnames.bind(styles);
  const [valueCheckbox, setValueCheckbox] = useState();

  useEffect(() => {
    if (!_.isNil(valueCheckbox) && _.size(valueCheckbox) >= 3) {
      getValue(true);
    } else {
      getValue(false);
    }
  }, [valueCheckbox]);

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          {/* {Description} */}
          {_.has(LIST_CHECKBOX_AGREE_POLICY, "description") && (
            <Typography
              className={cx(
                "fulfilment-information-description input-field-description"
              )}
            >
              {LIST_CHECKBOX_AGREE_POLICY.description}
            </Typography>
          )}

          {/* {Radio} */}
          <Checkbox
            isFullWidth
            list={LIST_CHECKBOX_AGREE_POLICY.listCheckbox}
            checkBoxClass={cx("your-product-come-from-checkbox")}
            getValue={(value: any) => {
              setValueCheckbox(value);
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default AgreePolicy;
