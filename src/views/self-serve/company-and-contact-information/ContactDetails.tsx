// import modules
import React, { ChangeEvent, useEffect, useState } from "react";
import _ from "lodash";

// import constant
import {
  ERROR_ICON,
  LIST_COUNTRIES_CODE,
  SELF_SERVE_PAGE,
} from "@/utils/constants";
import { ICompanyAndContactInformation } from "./CompanyAndContactInformation";

// import icons
import ExpandMore from "@material-ui/icons/ExpandMore";

// import components
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  InputAdornment,
} from "@material-ui/core";
import Select from "@/components/Select";
import ContactNumber from "@/components/ContactNumber";

// render UI
const ContactDetails: React.FC<
  ICompanyAndContactInformation.IContactDetails
> = (props) => {
  // props
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

  // states
  const [areaCode, setAreaCode] = useState<string>("+65");
  const [valueDefaultSalutation, setValueDefaultSalutation] =
    useState<string>("");

  /**
   * Prevent user typing non-number
   */
  function handleChangeContactNumber(event: ChangeEvent<HTMLInputElement>) {
    setNumberPhone(event.target.value.replace(/\D/g, ""));
  }

  /**
   * setState value default salutation
   */
  useEffect(() => {
    if (dataRedux && dataRedux.salutation) {
      setValueDefaultSalutation(dataRedux.salutation);
    } else {
      setValueDefaultSalutation(LIST_SALUTATION[0].name);
    }
  }, [dataRedux]);

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
          value: /^(?:\+65|65)?[689]\d{7}$/g,
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
            <Select
              fullWidth
              required
              register={register}
              label={salutation.label}
              listSelect={LIST_SALUTATION}
              name={`salutation`}
              defaultValue={_.get(dataRedux, `salutation`)}
            />
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
                <ContactNumber
                  label={contactNumber.label}
                  listCountry={LIST_COUNTRIES_CODE}
                  name="contactNumber"
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
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ContactDetails;
