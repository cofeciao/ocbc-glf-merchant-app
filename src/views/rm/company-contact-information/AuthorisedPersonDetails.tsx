// import modules
import React, { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Grid,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import _ from "lodash";

// import constant
import { ERROR_ICON, LIST_COUNTRIES_CODE } from "@/utils/constants";
import { STEP_RM } from "@/utils/constants-rm";

// import icons
import ExpandMore from "@material-ui/icons/ExpandMore";

// render UI
const AuthorisedPersonDetails: React.FC<any> = (props) => {
  const { cx, key, data, register, errors, setValue, setError, dataRedux } =
    props;
  const { salutation, name, designation, email, contactNumber } =
    data.inputFields;

  // states
  const [areaCode, setAreaCode] = useState<string>("+65");

  return (
    <Box className={cx("contact-details-wrapper")}>
      <Grid container>
        {/* {Top full row} */}
        {_.has(salutation, "label") && (
          <Grid item xs={3}>
            {/* {Salutation select field} */}
            <FormControl
              variant="filled"
              className={cx("company-type-select")}
              fullWidth
            >
              <InputLabel id="salutation-select-filled-label">
                {salutation.label}
              </InputLabel>
              <Select
                fullWidth
                labelId="salutation-select-filled-label"
                defaultValue={
                  _.has(dataRedux, "authorisedPersonDetails.salutation")
                    ? dataRedux.authorisedPersonDetails.salutation
                    : ""
                }
                id="salutation-select-filled"
                {...register("authorisedPersonDetails.salutation", {
                  required: true,
                })}
              >
                {_.map(STEP_RM.LIST_STEP.LIST_SALUTATION, (item, index) => {
                  return (
                    <MenuItem key={index} value={item.value}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
        )}

        <Grid container direction="row" wrap={"nowrap"}>
          {/* {Column left} */}
          <Grid item xs={12} md={6}>
            <Grid container>
              {_.has(name, "label") && (
                <Grid item xs={12}>
                  {/* {Name input field} */}
                  <TextField
                    fullWidth
                    defaultValue={
                      _.has(dataRedux, "authorisedPersonDetails.name")
                        ? dataRedux.authorisedPersonDetails.name
                        : ""
                    }
                    id={uuidv4()}
                    label={name.label}
                    variant="filled"
                    {...register("authorisedPersonDetails.name", {
                      required: true,
                    })}
                  />
                </Grid>
              )}

              {_.has(email, "label") && (
                <Grid item xs={12}>
                  {/* {Email input field} */}
                  <TextField
                    fullWidth
                    error={
                      errors.authorisedPersonDetails &&
                      errors.authorisedPersonDetails.email &&
                      true
                    }
                    defaultValue={
                      _.has(dataRedux, "authorisedPersonDetails.email")
                        ? dataRedux.authorisedPersonDetails.email
                        : ""
                    }
                    id={uuidv4()}
                    label={email.label}
                    key={null}
                    variant="filled"
                    helperText={
                      errors.authorisedPersonDetails &&
                      errors.authorisedPersonDetails.email &&
                      `${ERROR_ICON} ${
                        errors.authorisedPersonDetails &&
                        errors.authorisedPersonDetails.email.message
                      }`
                    }
                    {...register("authorisedPersonDetails.email", {
                      required: email.requiredText,
                      pattern: {
                        // eslint-disable-next-line no-useless-escape
                        value:
                          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: email.helperText,
                      },
                    })}
                  />
                </Grid>
              )}
            </Grid>
          </Grid>

          {/* {Column right} */}
          <Grid item xs={12} md={6}>
            <Grid container>
              {_.has(designation, "label") && (
                <Grid item xs={12}>
                  {/* {Designation input field} */}
                  <TextField
                    fullWidth
                    id={uuidv4()}
                    defaultValue={
                      _.has(dataRedux, "authorisedPersonDetails.designation")
                        ? dataRedux.authorisedPersonDetails.designation
                        : ""
                    }
                    label={designation.label}
                    variant="filled"
                    {...register("authorisedPersonDetails.designation", {
                      required: true,
                    })}
                  />
                </Grid>
              )}

              <Grid item lg={12} md={12} sm={12} xs={12}>
                {/* {Contact Number input field} */}
                {!_.isEmpty(LIST_COUNTRIES_CODE) &&
                  _.has(contactNumber, "label") && (
                    <TextField
                      key={key}
                      fullWidth
                      defaultValue={
                        _.has(
                          dataRedux,
                          "authorisedPersonDetails.contactNumber"
                        )
                          ? dataRedux.authorisedPersonDetails.contactNumber
                          : ""
                      }
                      type="number"
                      error={
                        _.has(
                          errors,
                          "authorisedPersonDetails.contactNumber"
                        ) &&
                        !_.isEqual(
                          errors.authorisedPersonDetails.contactNumber.type,
                          "required"
                        )
                          ? false
                          : _.has(
                              errors,
                              "authorisedPersonDetails.contactNumber"
                            ) &&
                            !_.isEqual(
                              errors.authorisedPersonDetails.contactNumber.type,
                              "required"
                            ) &&
                            true
                      }
                      name="numberformat"
                      className={cx("formatted-numberphone-input")}
                      label={contactNumber.label}
                      helperText={
                        _.has(errors.contactNumber, "type") &&
                        _.isEqual(
                          errors.authorisedPersonDetails.contactNumber.type,
                          "required"
                        )
                          ? ""
                          : _.has(errors.authorisedPersonDetails, "type") &&
                            _.has(
                              errors.authorisedPersonDetails.contactNumber,
                              "type"
                            ) &&
                            !_.isEqual(
                              errors.authorisedPersonDetails.contactNumber.type,
                              "required"
                            ) &&
                            `${ERROR_ICON} ${errors.authorisedPersonDetails.contactNumber.message}`
                      }
                      {...register("authorisedPersonDetails.contactNumber", {
                        required: true,
                        pattern: {
                          value: /^[0-9]{8}$/,
                          message: contactNumber.helperText,
                        },
                        onBlur: (event: ChangeEvent<HTMLInputElement>) => {
                          if (event.target.value === "") {
                            setValue(
                              "authorisedPersonDetails.contactNumber",
                              ""
                            );
                            setError("authorisedPersonDetails.contactNumber", {
                              type: "required",
                              message: "",
                            });
                          } else {
                            setValue(
                              "authorisedPersonDetails.contactNumber",
                              event.target.value
                            );
                          }
                        },
                      })}
                      InputProps={{
                        startAdornment: (
                          <Box className={cx("formatted-numberphone-select")}>
                            {/* {Phone Number select field} */}
                            <Select
                              renderValue={(value) => value}
                              IconComponent={ExpandMore}
                              defaultValue={
                                _.has(
                                  dataRedux,
                                  "authorisedPersonDetails.areaCode"
                                )
                                  ? dataRedux.authorisedPersonDetails.areaCode
                                  : LIST_COUNTRIES_CODE[0].value
                              }
                              error={errors.AreaCode && true}
                              {...register("authorisedPersonDetails.areaCode", {
                                required: false,
                                onChange: (
                                  event: ChangeEvent<HTMLInputElement>
                                ) => {
                                  setAreaCode(event.target.value);
                                },
                              })}
                            >
                              {_.map(LIST_COUNTRIES_CODE, (item, index) => {
                                return (
                                  <MenuItem key={index} value={item.value}>
                                    <span
                                      className={cx(
                                        areaCode === item.value
                                          ? "item-selected"
                                          : "item-unselected"
                                      )}
                                    >{`${item.name} (${item.value})`}</span>
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </Box>
                        ),
                      }}
                    />
                  )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default AuthorisedPersonDetails;
