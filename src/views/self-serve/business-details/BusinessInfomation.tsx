// import modules
import { Radio } from "@sectionsg/orc";
import React, { useState } from "react";
import { Box, Grid, TextField, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./BusinessDetails.scss";
import { ERROR_ICON, SELF_SERVE_PAGE } from "@/utils/constants";

// import types

// render UI
const BusinessInfomation: React.FC<any> = (props) => {
  const { listField, register, errors, setValue } = props;
  const { list_radio_yes_no } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);
  const defaultValueListRadio = list_radio_yes_no.filter(
    (item) => item.checked === true
  );
  const [businessReadyToOperate, setBusinessReadyToOperate] = useState<string>(
    defaultValueListRadio[0].text
  );
    
  return (
    <Box className={cx("business-infomation-wrapper")}>
      <Grid container>
        {/* {Description & Radio checkbox} */}
        <Grid item xs={12}>
          {_.has(listField.listRadio[0], "description") && (
            <Typography className={cx("sub-section-description")}>
              {listField.listRadio[0].description}
            </Typography>
          )}

          {!_.isEmpty(list_radio_yes_no) && (
            <Radio
              name="lockIn"
              listCheckBox={list_radio_yes_no}
              radioKey={0}
              getValue={(value: any) => {
                setValue("businessReadyToOperate", value);
                setBusinessReadyToOperate(value);
              }}
            />
          )}
        </Grid>

        {/* {Description & Textfield} */}
        {_.has(listField, "textField") &&
          _.isEqual(businessReadyToOperate, "Yes") && (
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
                    placeholder={listField.textField.label}
                    variant="filled"
                    error={errors.numberOutlets && true}
                    helperText={
                      errors.numberOfOutlets && errors.numberOfOutlets.message
                    }
                    {...register("numberOfOutlets", {
                      required: true,
                      pattern: {
                        // eslint-disable-next-line no-useless-escape
                        value: /^\d+$/,
                        message: `${ERROR_ICON} ${listField.textField.helperText}`,
                      },
                    })}
                  />
                )}
              </Grid>
            </Grid>
          )}

        {/* {Description & Radio checkbox} */}
        <Grid item xs={12}>
          {_.has(listField.listRadio[1], "description") && (
            <Typography className={cx("sub-section-description")}>
              {listField.listRadio[1].description}
            </Typography>
          )}

          {!_.isEmpty(list_radio_yes_no) && (
            <Radio
              name="lockIn"
              listCheckBox={list_radio_yes_no}
              radioKey={0}
              getValue={(value: any) => setValue("businessAccount", value)}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default BusinessInfomation;
