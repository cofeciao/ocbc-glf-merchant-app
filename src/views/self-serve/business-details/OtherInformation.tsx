// import modules
import React, { ChangeEvent, useState } from "react";
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
  const { sections, setValue } = props;
  const cx = classnames.bind(styles);
  const [dataBusinessOperationCheckbox, setDataBusinessOperationCheckbox] =
    useState<any>(sections[0].listCheckbox || []);
  const [dataCurrentlyFollowingCheckbox, setDataCurrentlyFollowingCheckbox] =
    useState<any>(sections[1].listCheckbox || []);

  /**
   * Clone data to avoid changing the original array, return new array after user clicked
   * @param event
   * @param data
   */
  const handleCloneData = (event: ChangeEvent<HTMLInputElement>, data: any) => {
    const newData: any = data.reduce((pre: any, item: any) => {
      const newItem: any = { ...item }; // Create a new object to avoid changing the original object
      if (newItem.label === event.target.name) {
        newItem.checked = event.target.checked;
      }
      pre.push(newItem);
      return pre;
    }, []);
    return newData;
  };

  /**
   *  handle on change after clicking checkbox
   * @param event
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const dataBusinessOperation = handleCloneData(
      event,
      dataBusinessOperationCheckbox
    );
    const dataCurrentlyFollowing = handleCloneData(
      event,
      dataCurrentlyFollowingCheckbox
    );
    setDataBusinessOperationCheckbox(dataBusinessOperation);
    setDataCurrentlyFollowingCheckbox(dataCurrentlyFollowing);
    setValue("businessOfferings", dataBusinessOperation);
    setValue("availableSpaces", dataCurrentlyFollowing);
  };

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
          {sections[0].listCheckboxDescription && (
            <Typography className={cx("sub-section-description")}>
              {sections[0].listCheckboxDescription}
            </Typography>
          )}

          {/* {List Checkbox} */}
          {dataBusinessOperationCheckbox && (
            <Box display="flex" flexDirection="column">
              {dataBusinessOperationCheckbox.map(
                (checkbox: any, idx: number) => {
                  return (
                    <FormControlLabel
                      key={idx}
                      control={
                        <Checkbox
                          name={checkbox.label}
                          // checked={checkbox.checked}
                          color="primary"
                          onChange={handleChange}
                        />
                      }
                      label={checkbox.label}
                    />
                  );
                }
              )}
            </Box>
          )}
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          {/* {Description} */}
          {sections[1].listCheckboxDescription && (
            <Typography className={cx("sub-section-description")}>
              {sections[1].listCheckboxDescription}
            </Typography>
          )}

          {/* {List Checkbox} */}
          {sections[1].listCheckbox && (
            <Box display="flex" flexDirection="column">
              {sections[1].listCheckbox.map((checkbox: any, idx: number) => {
                return (
                  <FormControlLabel
                    key={idx}
                    control={
                      <Checkbox
                        name={checkbox.label}
                        color="primary"
                        onChange={handleChange}
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
    </Box>
  );
};
export default OtherInformation;
