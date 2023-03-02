// import modules
import { Radio } from "@sectionsg/orc";
import React from "react";
import { Box, Grid, TextField, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./BusinessDetails.scss";

// import types

// render UI
const WebsiteInformation: React.FC<any> = (props) => {
  const { listField } = props;
  const cx = classnames.bind(styles);

  return (
    <Box className={cx("website-information-wrapper")}>
      <Grid container>
        {/* {Is your business ready for operation?} */}
        <Grid item xs={12}>
          {_.has(listField.listRadio[0], "description") && (
            <Typography className={cx("sub-section-description")}>
              {listField.listRadio[0].description}
            </Typography>
          )}

          {_.has(listField.listRadio[0], "list") && (
            <Radio
              name="lockIn"
              listCheckBox={listField.listRadio[0].list}
              radioKey={0}
            />
          )}
        </Grid>

        {/* {Is your business ready for operation?} */}
        {_.has(listField, "textField") && (
          <Grid item xs={12}>
            {_.has(listField.textField, "description") && (
              <Typography className={cx("sub-section-description")}>
                {listField.textField.description}
              </Typography>
            )}

            <Grid item xs={4}>
              {_.has(listField.textField, "label") && (
                <TextField
                  fullWidth
                  id={`uuidv4()`}
                  label={listField.textField.label}
                  variant="filled"
                />
              )}
            </Grid>
          </Grid>
        )}

        {/* {Is your business ready for operation?} */}
        <Grid item xs={12}>
          {_.has(listField.listRadio[1], "description") && (
            <Typography className={cx("sub-section-description")}>
              {listField.listRadio[1].description}
            </Typography>
          )}

          {_.has(listField.listRadio[1], "list") && (
            <Radio
              name="lockIn"
              listCheckBox={listField.listRadio[1].list}
              radioKey={0}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default WebsiteInformation;
