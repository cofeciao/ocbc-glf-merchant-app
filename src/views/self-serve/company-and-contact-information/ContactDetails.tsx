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
import {
  ERROR_ICON,
  LIST_COUNTRIES_CODE,
  SELF_SERVE_PAGE,
} from "@/utils/constants";
import { ICompanyAndContactInformation } from "./CompanyAndContactInformation";

// render UI
const ContactDetails: React.FC<
  ICompanyAndContactInformation.IContactDetails
> = (props) => {
  const { cx, data, dataRedux, register, errors, setValue, setError } = props;
  const { LIST_SALUTATION } = SELF_SERVE_PAGE;
  const { salutation, name, designation, email, contactNumber } =
    data.inputFields;

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
                defaultValue={
                  _.has(dataRedux, "salutation") ? dataRedux.salutation : ""
                }
                labelId="salutation-select-filled-label"
                id="salutation-select-filled"
                {...register("salutation", {
                  required: true,
                })}
              >
                {_.map(LIST_SALUTATION, (item, index) => {
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
                      _.has(dataRedux, "name") ? dataRedux.name : ""
                    }
                    id={uuidv4()}
                    label={name.label}
                    variant="filled"
                    {...register("name", {
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
                    error={errors.email && true}
                    defaultValue={
                      _.has(dataRedux, "email") ? dataRedux.email : ""
                    }
                    id={uuidv4()}
                    label={email.label}
                    key={null}
                    variant="filled"
                    helperText={
                      errors.email && `${ERROR_ICON} ${errors.email.message}`
                    }
                    {...register("email", {
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
                    defaultValue={
                      _.has(dataRedux, "designation")
                        ? dataRedux.designation
                        : ""
                    }
                    label={designation.label}
                    variant="filled"
                    {...register("designation", {
                      required: true,
                    })}
                  />
                </Grid>
              )}

              {_.has(errors.contactNumber, "type") &&
                _.isEqual(errors.contactNumber.type, "required")}
              <Grid item lg={12} md={12} sm={12} xs={12}>
                {/* {Contact Number input field} */}
                {!_.isEmpty(LIST_COUNTRIES_CODE) &&
                  _.has(contactNumber, "label") && (
                    <TextField
                      fullWidth
                      defaultValue={
                        _.has(dataRedux, "contactNumber")
                          ? dataRedux.contactNumber
                          : ""
                      }
                      type="number"
                      error={
                        _.has(errors, "contactNumber") &&
                        !_.isEqual(errors.contactNumber.type, "required")
                          ? true
                          : false
                      }
                      className={cx("formatted-numberphone-input")}
                      label={contactNumber.label}
                      helperText={
                        _.has(errors.contactNumber, "type") &&
                        !_.isEqual(errors.contactNumber.type, "required")
                          ? errors.contactNumber.message
                          : ""
                      }
                      {...register("contactNumber", {
                        required: true,
                        pattern: {
                          value: /^[0-9]{8}$/,
                          message: `${ERROR_ICON} ${contactNumber.helperText}`,
                        },
                        onBlur: (event: ChangeEvent<HTMLInputElement>) => {
                          if (event.target.value === "") {
                            setValue("contactNumber", "");
                            setError("contactNumber", {
                              type: "required",
                              message: "",
                            });
                          } else {
                            setValue("contactNumber", event.target.value);
                          }
                        },
                      })}
                      InputProps={{
                        startAdornment: (
                          <Box className={cx("formatted-numberphone-select")}>
                            {/* {Phone Number select field} */}
                            <Select
                              renderValue={(value) => value}
                              defaultValue={
                                _.has(dataRedux, "areaCode")
                                  ? dataRedux.areaCode
                                  : LIST_COUNTRIES_CODE[0].value
                              }
                              error={errors.AreaCode && true}
                              {...register("areaCode", {
                                required: true,
                              })}
                            >
                              {_.map(LIST_COUNTRIES_CODE, (item, index) => {
                                return (
                                  <MenuItem key={index} value={item.value}>
                                    {`${item.value} ${item.name}`}
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
export default ContactDetails;
