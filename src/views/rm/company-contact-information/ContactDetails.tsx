// import modules
import React from "react";
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
import { ERROR_ICON, LIST_COUNTRIES_CODE } from "@/utils/constants-rm";

// import icons
import ExpandMore from "@material-ui/icons/ExpandMore";

// import types
import { STEP_RM } from "@/utils/constants-rm";
import ContactNumber from "@/components/ContactNumber";

// render UI
const ContactDetails: React.FC<any> = (props) => {
  const { cx, data, register, unregister, errors, setValue, setError, dataRedux } =
    props;
  const { salutation, name, designation, email, contactNumber } =
    data.inputFields;

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
          {/* {Column Left} */}
          <Grid item xs={12} md={6}>
            <Grid container>
              {/* {Name} */}
              {_.has(name, "label") && (
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={name.label}
                    variant="filled"
                    defaultValue={
                      _.has(dataRedux, "contactDetail.name")
                        ? dataRedux.name
                        : ""
                    }
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
                      _.has(dataRedux, "contactDetail.email")
                        ? dataRedux.contactDetail.email
                        : ""
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

          {/* {Column Right} */}
          <Grid item xs={12} md={6}>
            <Grid container>
              {/* {Designation */}
              {_.has(designation, "label") && (
                <Grid item xs={12}>
                  <TextField
                    fullWidth
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

              {/* {Contact Number} */}
              {!_.isEmpty(LIST_COUNTRIES_CODE) &&
                _.has(contactNumber, "label") && (
                  <Grid item xs={12}>
                    <ContactNumber
                      label={contactNumber.label}
                      listCountry={LIST_COUNTRIES_CODE}
                      name="contactDetail.contactNumber"
                      helperText={contactNumber.helperText}
                      required
                      register={register}
                      unregister={unregister}
                      errors={errors}
                      setValue={setValue}
                      setError={setError}
                      dataRedux={dataRedux}
                    />
                  </Grid>
                )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ContactDetails;
