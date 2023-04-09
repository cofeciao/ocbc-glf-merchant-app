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
import ContactNumber from "@/components/ContactNumber";

// import constant
import { STEP_RM, ERROR_ICON, LIST_COUNTRIES_CODE } from "@/utils/constants-rm";

// import icons
import ExpandMore from "@material-ui/icons/ExpandMore";

// render UI
const AuthorisedPersonDetails: React.FC<any> = (props) => {
  const {
    cx,
    data,
    register,
    unregister,
    errors,
    setValue,
    setError,
    dataRedux,
  } = props;
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
          {/* {Column Left} */}
          <Grid item xs={12} md={6}>
            <Grid container>
              {/* {Name} */}
              {_.has(name, "label") && (
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    defaultValue={
                      _.has(dataRedux, "authorisedPersonDetails.name")
                        ? dataRedux.authorisedPersonDetails.name
                        : ""
                    }
                    label={name.label}
                    variant="filled"
                    {...register("authorisedPersonDetails.name", {
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
                      _.has(errors, "authorisedPersonDetails") &&
                      _.has(errors.authorisedPersonDetails, "email") &&
                      _.has(errors.authorisedPersonDetails.email, "type") &&
                      !_.isEqual(
                        errors.authorisedPersonDetails.email.type,
                        "required"
                      ) &&
                      true
                    }
                    defaultValue={
                      _.has(dataRedux, "authorisedPersonDetails") &&
                      _.has(dataRedux.authorisedPersonDetails, "email")
                        ? dataRedux.authorisedPersonDetails.email
                        : ""
                    }
                    helperText={
                      _.has(errors, "authorisedPersonDetails") &&
                      _.has(errors.authorisedPersonDetails, "email") &&
                      errors.authorisedPersonDetails.email.message
                    }
                    {...register("authorisedPersonDetails.email", {
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

              {/* {Contact Number} */}
              {!_.isEmpty(LIST_COUNTRIES_CODE) &&
                _.has(contactNumber, "label") && (
                  <Grid item xs={12}>
                    <ContactNumber
                      label={contactNumber.label}
                      listCountry={LIST_COUNTRIES_CODE}
                      name="authorisedPersonDetails.contactNumber"
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
export default AuthorisedPersonDetails;
