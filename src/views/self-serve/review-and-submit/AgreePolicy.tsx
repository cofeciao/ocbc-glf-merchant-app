// import modules
import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import { SELF_SERVE_PAGE } from "@/utils/constants";
import _ from "lodash";
import GroupCheckBox from "@/components/GroupCheckBox";

// import styles
import styles from "./ReviewAndSubmit.scss";

// import types
import { IReviewAndSubmit } from "./ReviewAndSubmit";
import { ICheckBox } from "@/components/GroupCheckBox/GroupCheckBox";

// render UI
const AgreePolicy: React.FC<IReviewAndSubmit.IAgreePolicy> = (props) => {
  const { LIST_CHECKBOX_AGREE_POLICY } = SELF_SERVE_PAGE;
  const { onGetValue } = props;
  const cx = classnames.bind(styles);
  const [listPolicy, setListPolicy] = useState<ICheckBox[]>(
    LIST_CHECKBOX_AGREE_POLICY.listCheckbox
  );

  /**
   * Check policy checkbox to handling submit button
   */
  useEffect(() => {
    if (!_.isNil(listPolicy)) {
      const filter = listPolicy.filter((item) => item.checked);
      if (_.size(filter) === _.size(LIST_CHECKBOX_AGREE_POLICY.listCheckbox)) {
        onGetValue(true);
      } else {
        onGetValue(false);
      }
    }
  }, [listPolicy]);

  return (
    <Box className={cx("agree-policy-wrapper")}>
      <Grid container>
        <Grid item xs={12}>
          {/* {Description} */}
          {_.has(LIST_CHECKBOX_AGREE_POLICY, "description") && (
            <Typography className={cx("description")}>
              {LIST_CHECKBOX_AGREE_POLICY.description}
            </Typography>
          )}

          {/* {Checkbox} */}
          <GroupCheckBox
            listCheckbox={listPolicy}
            getValueOnChange={(value: ICheckBox[]) => {
              setListPolicy(value);
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default AgreePolicy;
