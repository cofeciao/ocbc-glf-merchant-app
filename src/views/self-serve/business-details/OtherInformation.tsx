// import modules
import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
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
  const { sections } = props;
  const cx = classnames.bind(styles);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gridRowGap="40px"
      className={cx("other-information-wrapper")}
    >
      {_.map(sections, (section: any, index: number) => {
        return (
          <Grid key={index} container>
            <Grid item xs={12}>
              {/* {Description} */}
              {section.listCheckboxDescription && (
                <Typography className={cx("sub-section-description")}>
                  {section.listCheckboxDescription}
                </Typography>
              )}

              {/* {List Checkbox} */}
              {section.listCheckbox && (
                <Box display="flex" flexDirection="column">
                  {section.listCheckbox.map((checkbox: any, idx: number) => {
                    return (
                      <FormControlLabel
                        key={idx}
                        control={
                          <Checkbox
                            checked={checkbox.checked}
                            name="checked"
                            color="primary"
                          />
                        }
                        label={checkbox.label}
                      />
                    );
                  })}
                </Box>
              )}
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};
export default OtherInformation;
