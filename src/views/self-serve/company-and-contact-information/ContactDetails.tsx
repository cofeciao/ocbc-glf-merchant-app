// import modules
import React, { ChangeEvent, useEffect, useState } from "react";
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

// import icons
import CheckIcon from '@material-ui/icons/Check';

// import constant
import {
  ERROR_ICON,
  LIST_COUNTRIES_CODE,
  SELF_SERVE_PAGE,
} from "@/utils/constants";
import { ICompanyAndContactInformation } from "./CompanyAndContactInformation";

// import icons
import ExpandMore from "@material-ui/icons/ExpandMore";

// render UI
const ContactDetails: React.FC<ICompanyAndContactInformation.IContactDetails> = (props) => {
  const {
    cx,
    data,
    dataRedux,
    register,
    unregister,
    errors,
    setValue,
    setError,
  } = props;
  const { LIST_SALUTATION } = SELF_SERVE_PAGE;
  const { salutation, name, designation, email, contactNumber } =
    data.inputFields;
  const [numberPhone, setNumberPhone] = useState<string>(
    dataRedux.contactNumber || ""
  );
  const [areaCode, setAreaCode] = useState<string>("+65");

  /**
   * Prevent user typing non-number
   */
  function handleChangeContactNumber(event: ChangeEvent<HTMLInputElement>) {
    setNumberPhone(event.target.value.replace(/\D/g, ""));
  }

  /**
   * contact number validation only apply for area code +65 (SG)
   */
  useEffect(() => {
    const handleUnregisterPattern = () => {
      unregister("contactNumber");
    };
    if (areaCode === "+65") {
      if (!_.isEmpty(numberPhone) && numberPhone.length !== 8) {
        setError("contactNumber", {
          type: "pattern",
          message: `${ERROR_ICON} ${contactNumber.helperText}`,
        });
      }
      register("contactNumber", {
        required: true,
        pattern: {
          value: /^[0-9]{8}$/,
          message: `${ERROR_ICON} ${contactNumber.helperText}`,
        },
      });
    } else {
      handleUnregisterPattern();
      register("contactNumber", {
        required: true,
      });
    }
  }, [areaCode]);

  return (
    <Box className={cx("contact-details-wrapper")}>
      <Grid container>
        {/* {Salutation} */}
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
                labelId="salutation-select-filled-label"
                id="salutation-select-filled"
                IconComponent={ExpandMore}
                defaultValue={
                  _.has(dataRedux, "salutation") ? dataRedux.salutation : ""
                }
                {...register("salutation", {
                  required: true,
                })}
              >
                {_.map(LIST_SALUTATION, (item, index) => {
                  return (
                    <MenuItem key={index} value={item.name}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
        )}

        <Grid container direction="row" wrap={"nowrap"}>
          {/* {Column Reft} */}
          <Grid item xs={12} md={6}>
            <Grid container>
              {/* {Name} */}
              {_.has(name, "label") && (
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    defaultValue={
                      _.has(dataRedux, "name") ? dataRedux.name : ""
                    }
                    label={name.label}
                    variant="filled"
                    {...register("name", {
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
                    variant="filled"
                    error={
                      _.has(errors, "email") &&
                      _.has(errors.email, "type") &&
                      !_.isEqual(errors.email.type, "required") &&
                      true
                    }
                    defaultValue={
                      _.has(dataRedux, "email") ? dataRedux.email : ""
                    }
                    helperText={errors.email && errors.email.message}
                    {...register("email", {
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

          {/* {Column Right} */}
          <Grid item xs={12} md={6}>
            <Grid container>
              {/* {Designation} */}
              {_.has(designation, "label") && (
                <Grid item xs={12}>
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

              <Grid item xs={12}>
                {/* {Contact Number} */}
                {!_.isEmpty(LIST_COUNTRIES_CODE) &&
                  _.has(contactNumber, "label") && (
                    <TextField
                      fullWidth
                      className={cx("formatted-numberphone-input")}
                      type="text"
                      label={contactNumber.label}
                      name="contactNumber"
                      value={numberPhone}
                      error={
                        _.has(errors, "contactNumber") &&
                        !_.isEqual(errors.contactNumber.type, "required") &&
                        true
                      }
                      helperText={
                        _.has(errors, "contactNumber") &&
                        _.has(errors.contactNumber, "type") &&
                        !_.isEqual(errors.contactNumber.type, "required") &&
                        errors.contactNumber.message
                      }
                      {...register("contactNumber", {
                        onChange: handleChangeContactNumber,
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
                          <InputAdornment
                            position="start"
                            component="div"
                            className={cx("formatted-numberphone-select")}
                          >
                            {/* {Phone Number adorment} */}
                            <Select
                              renderValue={(value) => value}
                              IconComponent={ExpandMore}
                              defaultValue={
                                _.has(dataRedux, "areaCode")
                                  ? dataRedux.areaCode
                                  : LIST_COUNTRIES_CODE[0].value
                              }
                              {...register("areaCode", {
                                required: true,
                                onChange: (
                                  event: ChangeEvent<HTMLInputElement>
                                ) => {
                                  setAreaCode(event.target.value);
                                },
                              })}
                            >
                               <MenuItem disabled className={cx("item-selected")}>
                                  <div className={cx("group-item-select")}>
                                    <span>&nbsp;&nbsp;&emsp;</span>
                                    <span style={{
                                      color: "#97A1AE",
                                      fontWeight: "400",
                                      fontSize: "16px",
                                      lineHeight: "24px",
                                    }}>Please select</span>
                                  </div>
                               </MenuItem>
                              {_.map(LIST_COUNTRIES_CODE, (item, index) => {
                                return (
                                  <MenuItem
                                    className={cx("item-selected")}
                                    key={index} 
                                    value={item.value}
                                  >
                                    <div className={cx("group-item-select")}>
                                      {areaCode === item.value ? <CheckIcon /> : <span>&nbsp;&nbsp;&emsp;</span>}
                                      <span>{`${item.name} (${item.value})`}</span>
                                    </div>
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
