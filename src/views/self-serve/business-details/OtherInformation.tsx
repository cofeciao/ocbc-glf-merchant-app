// import modules
import React from "react";
import { Checkbox } from "@sectionsg/orc";
import {
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./BusinessDetails.scss";

// import types

// render UI
const OtherInformation: React.FC<any> = (props) => {
  const { sections, setValue, dataRedux } = props;
  const { listCheckboxBusinessOfferings, listCheckboxAvailableSpaces } =
    sections;
  const cx = classnames.bind(styles);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gridRowGap="40px"
      className={cx("other-information-wrapper")}
    >
      <Grid container>
        <Grid item xs={12}>
          {/* {Description} */}
          {_.isEmpty(listCheckboxBusinessOfferings.description) && (
            <Typography className={cx("sub-section-description")}>
              {listCheckboxBusinessOfferings.description}
            </Typography>
          )}

          {/* {List Checkbox} */}
          {!_.isEmpty(listCheckboxBusinessOfferings.list) && (
            <Checkbox
              isFullWidth
              list={
                !_.isEmpty(dataRedux.businessOfferings)
                  ? dataRedux.businessOfferings
                  : listCheckboxBusinessOfferings.list
              }
              checkBoxClass={cx("business-offerings-checkbox")}
              getValue={(value: any) => {
                setValue("businessOfferings", value);
              }}
            />
          )}
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          {/* {Description} */}
          {listCheckboxAvailableSpaces.description && (
            <Typography className={cx("sub-section-description")}>
              {listCheckboxAvailableSpaces.description}
            </Typography>
          )}

          {/* {List Checkbox} */}
          {!_.isEmpty(listCheckboxAvailableSpaces.list) && (
            <Checkbox
              isFullWidth
              list={
                !_.isEmpty(dataRedux.availableSpaces)
                  ? dataRedux.availableSpaces
                  : listCheckboxAvailableSpaces.list
              }
              checkBoxClass={cx("available-spaces-checkbox")}
              getValue={(value: any) => {
                setValue("availableSpaces", value);
              }}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default OtherInformation;
