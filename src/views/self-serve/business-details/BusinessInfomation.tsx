// import modules
import { Radio } from "@sectionsg/orc";
import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./BusinessDetails.scss";
import { ERROR_ICON, SELF_SERVE_PAGE } from "@/utils/constants";

// import types

// render UI
const BusinessInfomation: React.FC<any> = (props) => {
  const {
    listField,
    register,
    errors,
    unregister,
    setValue,
    dataRedux,
    optionSelected,
  } = props;
  const {
    LIST_RADIO_YES_NO,
    PLEASE_SELECT_LABEL,
  } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);
  const defaultValueListRadio = LIST_RADIO_YES_NO.filter(
    (item) => item.checked === true
  );
  const [businessReadyToOperate, setBusinessReadyToOperate] = useState<string>(
    defaultValueListRadio[0].text
  );

  /**
   * Handle unregister for fields
   */
  useEffect(() => {
    if (optionSelected === "e-commerce") {
      unregister("numberOfOutlets");
    }
  }, [businessReadyToOperate]);

  return (
    <Box className={cx("business-infomation-wrapper")}>
      <Grid container>
        {/* {Is your business ready for operation?} */}
        <Grid item xs={12}>
          {/* {Description} */}
          {_.has(listField.listRadio[0], "description") && (
            <Typography className={cx("sub-section-description")}>
              {listField.listRadio[0].description}
            </Typography>
          )}

          {/* {List Radio} */}
          {!_.isEmpty(LIST_RADIO_YES_NO) && (
            <Radio
              name="lockIn"
              listCheckBox={LIST_RADIO_YES_NO}
              radioKey={0}
              getValue={(value: any) => {
                setValue("businessReadyToOperate", value);
                setBusinessReadyToOperate(value);
              }}
            />
          )}
        </Grid>

        {/* {Please indicate when your business will start operations} */}
        {_.has(listField.dropdownField, "placeholder") &&
          _.isEqual(businessReadyToOperate, "No") && (
            <Grid item xs={12}>
              {/* {Description} */}
              {_.has(listField.dropdownField, "description") && (
                <Typography className={cx("sub-section-description mb-16")}>
                  {listField.dropdownField.description}
                </Typography>
              )}

              {/* {List Select} */}
              <Grid xs={12} md={4}>
                <FormControl
                  variant="filled"
                  className={cx("operation-starting-period-select")}
                  fullWidth
                >
                  {/* {Label} */}
                  {!_.isEmpty(listField.dropdownField.placeholder) && (
                    <InputLabel htmlFor="select-operation-starting-period-label">
                      {listField.dropdownField.placeholder}
                    </InputLabel>
                  )}

                  {/* {Select} */}
                  {!_.isEmpty(listField.dropdownField.list) && (
                    <Select
                      fullWidth
                      placeholder="Please"
                      defaultValue={
                        _.has(dataRedux, "operationStartingPeriod")
                          ? dataRedux.operationStartingPeriod
                          : ""
                      }
                      labelId="select-operation-starting-period-label"
                      id="select-operation-starting-period"
                      {...register("operationStartingPeriod", {
                        required: true,
                      })}
                    >
                      {_.map(listField.dropdownField.list, (item, index) => {
                        return (
                          <MenuItem key={index} value={item.value}>
                            {item.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  )}
                </FormControl>
              </Grid>
            </Grid>
          )}

        {/* {At how many outlets will you deploy Point-of-Sales terminals?} */}
        {_.has(listField, "textField") &&
          !_.isEqual(optionSelected, "e-commerce") && (
            <Grid item xs={12}>
              {/* {Description} */}
              {_.has(listField.textField, "description") && (
                <Typography className={cx("sub-section-description mb-16")}>
                  {listField.textField.description}
                </Typography>
              )}

              {/* {Text field} */}
              {
                <Grid item xs={4}>
                  {_.has(listField.textField, "label") && (
                    <TextField
                      fullWidth
                      placeholder={listField.textField.label}
                      variant="filled"
                      defaultValue={
                        _.has(dataRedux, "numberOfOutlets")
                          ? dataRedux.numberOfOutlets
                          : ""
                      }
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
              }
            </Grid>
          )}

        {/* {Do you currently have an OCBC business account?} */}
        <Grid item xs={12}>
          {/* {Description} */}
          {_.has(listField.listRadio[1], "description") && (
            <Typography className={cx("sub-section-description")}>
              {listField.listRadio[1].description}
            </Typography>
          )}

          {/* {List Radio} */}
          {!_.isEmpty(LIST_RADIO_YES_NO) && (
            <Radio
              name="lockIn"
              listCheckBox={LIST_RADIO_YES_NO}
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
