// import modules
import React, { ChangeEvent, useEffect, useState } from "react";
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
import GroupRadio from "@/components/GroupRadio";

// import constants
import { ERROR_ICON, SELF_SERVE_PAGE } from "@/utils/constants";

// import style
import styles from "./BusinessDetails.scss";

// import icons
import ExpandMore from "@material-ui/icons/ExpandMore";

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
  const { LIST_RADIO_YES_NO } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);

  // GroupRadio's state
  const [businessReadyToOperate, setBusinessReadyToOperate] = useState<string>(
    dataRedux.businessReadyToOperate || LIST_RADIO_YES_NO[0].value
  );
  const [
    currentlyHaveAnOCBCBussinessAccount,
    setCurrentlyHaveAnOCBCBussinessAccount,
  ] = useState<string>(dataRedux.businessAccount || LIST_RADIO_YES_NO[0].value);

  // TextField's state
  const [inputValue, setInputValue] = useState(dataRedux.numberOfOutlets || "");

  /**
   * Prevent user typing non-number
   */
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value.replace(/\D/g, ""));
  }

  // List GroupRadio's state
  const [listRadioBusinessReadyToOperate, setListRadioBusinessReadyToOperate] =
    useState(
      dataRedux.businessReadyToOperate
        ? updateDataListRadio(
            dataRedux.businessReadyToOperate,
            LIST_RADIO_YES_NO
          )
        : LIST_RADIO_YES_NO
    );
  const [listRadioBusinessAccount, setListRadioBusinessAccount] = useState(
    dataRedux.businessAccount
      ? updateDataListRadio(dataRedux.businessAccount, LIST_RADIO_YES_NO)
      : LIST_RADIO_YES_NO
  );

  /**
   * Handle unregister for fields when GroupRadio changes
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

          {/* {GroupRadio} */}
          {!_.isEmpty(listRadioBusinessReadyToOperate) && (
            <GroupRadio
              cx={cx}
              name="businessReadyToOperate"
              value={businessReadyToOperate}
              listRadio={listRadioBusinessReadyToOperate}
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
          _.isEqual(businessReadyToOperate, "No") && (
            <Grid item xs={12}>
              {/* {Description} */}
              {_.has(listField.dropdownField, "description") && (
                <Typography className={cx("sub-section-description mb-16")}>
                  {listField.dropdownField.description}
                </Typography>
              )}

              {/* {Select} */}
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
                      IconComponent={ExpandMore}
                      labelId="select-operation-starting-period-label"
                      id="select-operation-starting-period"
                      defaultValue={
                        _.has(dataRedux, "operationStartingPeriod")
                          ? dataRedux.operationStartingPeriod
                          : ""
                      }
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

              {/* {TextField} */}
              {
                <Grid item xs={12} lg={4}>
                  {_.has(listField.textField, "label") && (
                    <TextField
                      fullWidth
                      label={listField.textField.label}
                      variant="filled"
                      value={inputValue}
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
                        onChange: handleChange,
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

          {/* {GroupRadio} */}
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
