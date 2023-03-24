// import modules
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
import { updateDataListRadio } from "@/utils/utils";

// import constants
import { ERROR_ICON, SELF_SERVE_PAGE } from "@/utils/constants";

// import style
import styles from "./BusinessDetails.scss";
import GroupRadio from "@/components/GroupRadio";

// import types

// render UI
const BusinessInfomation: React.FC<any> = (props) => {
  // props
  const {
    listField,
    register,
    errors,
    unregister,
    setValue,
    dataRedux,
    optionSelected,
  } = props;
  const { LIST_RADIO_YES_NO } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);

  // States
  const [businessReadyToOperate, setBusinessReadyToOperate] = useState<string>(
    LIST_RADIO_YES_NO[0].value
  );
  const [currentlyHaveAnOCBCBussinessAccount, setCurrentlyHaveAnOCBCBussinessAccount] = useState<string>("yes");
  const [listRadiobusinessReadyToOperate, setListRadiobusinessReadyToOperate] =
    useState(LIST_RADIO_YES_NO);
  const [listRadioBusinessAccount, setListRadioBusinessAccount] =
    useState(LIST_RADIO_YES_NO);

  /**
   * Check data from redux and dump data into fields
   */
  useEffect(() => {
    if (
      _.has(dataRedux, "businessReadyToOperate") &&
      !_.isEmpty(dataRedux.businessReadyToOperate)
    ) {
      setListRadiobusinessReadyToOperate(
        updateDataListRadio(
          dataRedux.businessReadyToOperate,
          listRadiobusinessReadyToOperate
        )
      );
    }

    if (
      _.has(dataRedux, "businessAccount") &&
      !_.isEmpty(dataRedux.businessAccount)
    ) {
      setListRadioBusinessAccount(
        updateDataListRadio(dataRedux.businessAccount, listRadioBusinessAccount)
      );
    }
  }, [dataRedux]);

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
          {!_.isEmpty(listRadiobusinessReadyToOperate) && (
            <GroupRadio
              cx={cx}
              name="businessReadyToOperate"
              value={businessReadyToOperate}
              listRadio={listRadiobusinessReadyToOperate}
              onChange={(event) => {
                const { value } = event.target;
                setValue("businessReadyToOperate", value);
                setBusinessReadyToOperate(value);
              }}
            />
          )}
        </Grid>

        {/* {Please indicate when your business will start operations} */}
        {_.has(listField.dropdownField, "placeholder") &&
          _.isEqual(businessReadyToOperate, "no") && (
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
                <Grid item xs={12} lg={4}>
                  {_.has(listField.textField, "label") && (
                    <TextField
                      fullWidth
                      label={listField.textField.label}
                      variant="filled"
                      defaultValue={
                        _.has(dataRedux, "numberOfOutlets")
                          ? dataRedux.numberOfOutlets
                          : ""
                      }
                      error={
                        _.has(errors, "numberOfOutlets") &&
                        _.has(errors.numberOfOutlets, "type") &&
                        !_.isEqual(errors.numberOfOutlets.type, "required") &&
                        true
                      }
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
          {!_.isEmpty(listRadioBusinessAccount) && (
            <GroupRadio
              cx={cx}
              name="businessAccount"
              value={currentlyHaveAnOCBCBussinessAccount}
              listRadio={listRadioBusinessAccount}
              onChange={(event) => {
                const { value } = event.target;
                setValue("businessAccount", value);
                setCurrentlyHaveAnOCBCBussinessAccount(value);
              }}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default BusinessInfomation;
