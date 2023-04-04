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
  InputAdornment,
} from "@material-ui/core";
import _ from "lodash";

// import constant
import { STEP_RM, ERROR_ICON, LIST_COUNTRIES_CODE } from "@/utils/constants-rm";

// import icons
import ExpandMore from "@material-ui/icons/ExpandMore";

// render UI
const ContactDetails: React.FC<any> = (props) => {
  const { cx, key, data, register, errors, setValue, setError, dataRedux } =
    props;
  const { salutation, name, designation, email, contactNumber } =
    data.inputFields;

  // states
  const [areaCode, setAreaCode] = useState<string>("+65");

  return (
    <Box className={cx("contact-details-wrapper")}>
      <Grid container>
        {/* {Salutation select field} */}
        {_.has(salutation, "label") && (
          <Grid item xs={3}>
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
                IconComponent={ExpandMore}
                labelId="salutation-select-filled-label"
                defaultValue={
                  _.has(dataRedux, "contactDetail.salutation")
                    ? dataRedux.salutation
                    : ""
                }
                id="salutation-select-filled"
                {...register("contactDetail.salutation", {
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
              {/* {Name} */}
              {_.has(name, "label") && (
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    defaultValue={
                      _.has(dataRedux, "contactDetail.name")
                        ? dataRedux.name
                        : ""
                    }
                    id={uuidv4()}
                    label={name.label}
                    variant="filled"
                    {...register("contactDetail.name", {
                      required: true,
                    })}
                  />
                </Grid>
              )}

              {/* {Email} */}
              {_.has(email, "label") && (
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={email.label}
                    key={null}
                    variant="filled"
                    error={
                      _.has(errors, "contactDetail") &&
                      _.has(errors.contactDetail, "email") &&
                      _.has(errors.contactDetail.email, "type") &&
                      !_.isEqual(errors.contactDetail.email.type, "required") &&
                      true
                    }
                    defaultValue={
                      _.has(dataRedux, "email") ? dataRedux.email : ""
                    }
                    helperText={
                      _.has(errors, "contactDetail") &&
                      _.has(errors.contactDetail, "email") &&
                      errors.contactDetail.email.message
                    }
                    {...register("contactDetail.email", {
                      required: true,
                      pattern: {
                        // eslint-disable-next-line no-useless-escape
                        value:
                          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: `${ERROR_ICON} ${email.helperText}`,
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
              {/* {Designation} */}
              {_.has(designation, "label") && (
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id={uuidv4()}
                    defaultValue={
                      _.has(dataRedux, "contactDetail.designation")
                        ? dataRedux.designation
                        : ""
                    }
                    label={designation.label}
                    variant="filled"
                    {...register("contactDetail.designation", {
                      required: true,
                    })}
                  />
                </Grid>
              )}

              <Grid item lg={12} md={12} sm={12} xs={12}>
                {/* {Contact Number} */}
                {!_.isEmpty(LIST_COUNTRIES_CODE) &&
                  _.has(contactNumber, "label") && (
                    <TextField
                      key={key}
                      fullWidth
                      defaultValue={
                        _.has(dataRedux, "contactDetail.contactNumber")
                          ? dataRedux.contactNumber
                          : ""
                      }
                      type="number"
                      error={
                        _.has(errors, "contactDetail.contactNumber") &&
                        !_.isEqual(
                          errors.contactDetail.contactNumber.type,
                          "required"
                        )
                          ? false
                          : _.has(errors, "contactDetail.contactNumber") &&
                            !_.isEqual(
                              errors.contactDetail.contactNumber.type,
                              "required"
                            ) &&
                            true
                      }
                      name="numberformat"
                      className={cx("formatted-numberphone-input")}
                      label={contactNumber.label}
                      helperText={
                        _.has(errors.contactDetail, "type") &&
                        _.has(errors.contactDetail.contactNumber, "type") &&
                        _.isEqual(
                          errors.contactDetail.contactNumber.type,
                          "required"
                        )
                          ? ""
                          : _.has(errors.contactNumber, "type") &&
                            !_.isEqual(
                              errors.contactDetail.contactNumber.type,
                              "required"
                            ) &&
                            `${ERROR_ICON} ${errors.contactDetail.contactNumber.message}`
                      }
                      {...register("contactDetail.contactNumber", {
                        required: true,
                        pattern: {
                          value: /^[0-9]{8}$/,
                          message: contactNumber.helperText,
                        },
                        onBlur: (event: ChangeEvent<HTMLInputElement>) => {
                          if (event.target.value === "") {
                            setValue("contactDetail.contactNumber", "");
                            setError("contactDetail.contactNumber", {
                              type: "required",
                              message: "",
                            });
                          } else {
                            setValue(
                              "contactDetail.contactNumber",
                              event.target.value
                            );
                          }
                        },
                      })}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={cx("formatted-numberphone-select")}
                          >
                            {/* {Area Code} */}
                            <Select
                              renderValue={(value) => value}
                              IconComponent={ExpandMore}
                              defaultValue={
                                _.has(dataRedux, "contactDetail.areaCode")
                                  ? dataRedux.areaCode
                                  : LIST_COUNTRIES_CODE[0].value
                              }
                              error={errors.AreaCode && true}
                              {...register("contactDetail.areaCode", {
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
                          </InputAdornment>
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
export default ContactDetails;
