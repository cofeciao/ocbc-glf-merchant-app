// import modules
import React, { ChangeEvent } from "react";
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
} from "@/utils/constants";

import { STEP_RM } from "@/utils/constants-rm";

// render UI
const ContactDetails: React.FC<any> = (props) => {
  const { cx, key, data, register, errors, setValue, setError, dataRedux } = props;
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
                labelId="salutation-select-filled-label"
                defaultValue={
                  _.has(dataRedux, "contact_detail.salutation") ? dataRedux.salutation : ""
                }
                id="salutation-select-filled"
                {...register("contact_detail.salutation", {
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
                      _.has(dataRedux, "contact_detail.name") ? dataRedux.name : ""
                    }
                    id={uuidv4()}
                    label={name.label}
                    variant="filled"
                    {...register("contact_detail.name", {
                      required: true,
                    })}
                  />
                </Grid>
              )}

{             _.has(email, "label") && (
                <Grid item xs={12}>
                  {/* {Email input field} */}
                  <TextField
                    fullWidth
                    error={errors.contact_detail && errors.contact_detail.email && true}
                    defaultValue={
                      _.has(dataRedux, "contact_detail.email") ? dataRedux.contact_detail.email : ""
                    }
                    id={uuidv4()}
                    label={email.label}
                    key={null}
                    variant="filled"
                    helperText={
                      errors.contact_detail && errors.contact_detail.email && `${ERROR_ICON} ${errors.contact_detail && errors.contact_detail.email.message}`
                    }
                    {...register("contact_detail.email", {
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
                      _.has(dataRedux, "contact_detail.designation")
                        ? dataRedux.designation
                        : ""
                    }
                    label={designation.label}
                    variant="filled"
                    {...register("contact_detail.designation", {
                      required: true,
                    })}
                  />
                </Grid>
              )}

              {_.has(errors.contact_detail, "type") &&
              _.has(errors.contact_detail.contactNumber, "type") &&
              _.isEqual(errors.contact_detail.contactNumber.type, "required")}
              <Grid item lg={12} md={12} sm={12} xs={12}>
                {/* {Contact Number input field} */}
                {!_.isEmpty(LIST_COUNTRIES_CODE) &&
                  _.has(contactNumber, "label") && (
                    <TextField
                      key={key}
                      fullWidth
                      defaultValue={
                        _.has(dataRedux, "contact_detail.contactNumber")
                          ? dataRedux.contactNumber
                          : ""
                      }
                      type="number"
                      error={
                          _.has(errors, "contact_detail.contactNumber") &&
                          !_.isEqual(errors.contact_detail.contactNumber.type, "required")
                            ? false
                            : _.has(errors, "contact_detail.contactNumber") &&
                              !_.isEqual(errors.contact_detail.contactNumber.type, "required") &&
                              true
                      }
                      name="numberformat"
                      className={cx("formatted-numberphone-input")}
                      label={contactNumber.label}
                      helperText={
                        _.has(errors.contact_detail, "type") &&
                        _.has(errors.contact_detail.contactNumber, "type") &&
                        _.isEqual(errors.contact_detail.contactNumber.type, "required")
                          ? ""
                          : _.has(errors.contactNumber, "type") &&
                            !_.isEqual(errors.contact_detail.contactNumber.type, "required") &&
                            `${ERROR_ICON} ${errors.contact_detail.contactNumber.message}`
                      }
                      {...register("contact_detail.contactNumber", {
                        required: true,
                        pattern: {
                          value: /^[0-9]{8}$/,
                          message: contactNumber.helperText,
                        },
                        onBlur: (event: ChangeEvent<HTMLInputElement>) => {
                          if (event.target.value === "") {
                            setValue("contact_detail.contactNumber", "");
                            setError("contact_detail.contactNumber", {
                              type: "required",
                              message: "",
                            });
                          } else {
                            setValue("contact_detail.contactNumber", event.target.value);
                          }
                        },
                      })}
                      InputProps={{
                        startAdornment: (
                          <Box className={cx("formatted-numberphone-select")}>
                            {/* {Phone Number select field} */}
                            <Select
                              defaultValue={
                                _.has(dataRedux, "contact_detail.areaCode")
                                  ? dataRedux.areaCode
                                  : LIST_COUNTRIES_CODE[0].value
                              }
                              error={errors.AreaCode && true}
                              {...register("contact_detail.areaCode", {
                                required: false,
                              })}
                            >
                              {_.map(LIST_COUNTRIES_CODE, (item, index) => {
                                return (
                                  <MenuItem key={index} value={item.value}>
                                    {item.value}
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
