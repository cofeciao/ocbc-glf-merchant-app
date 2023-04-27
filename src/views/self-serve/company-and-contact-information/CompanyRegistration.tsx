// import modules
import React from "react";
import _ from "lodash";

// import type
import { ICompanyAndContactInformation } from "./CompanyAndContactInformation";

// import constant
import { ERROR_ICON, SELF_SERVE_PAGE } from "@/utils/constants";

// import components
import { Box, Grid, TextField } from "@material-ui/core";
import Select from "@/components/Select";

// render UI
const CompanyRegistration: React.FC<
  ICompanyAndContactInformation.ICompanyRegistration
> = (props) => {
  // props
  const { cx, data, register, errors, dataRedux } = props;
  const { LIST_COMPANY_TYPE } = SELF_SERVE_PAGE;
  const { registeredEntityName, uniqueEntityNumber, companyType } =
    data.inputFields;

  return (
    <Box className={cx("company-registration-wrapper")}>
      <Grid container direction="row" wrap={"nowrap"}>
        {/* {Column left} */}
        <Grid item xs={12} md={6}>
          <Grid container>
            {/* {Registered Entity Name input field} */}
            {_.has(registeredEntityName, "label") && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  defaultValue={
                    _.has(dataRedux, "registeredEntityName")
                      ? dataRedux.registeredEntityName
                      : ""
                  }
                  label={registeredEntityName.label}
                  variant="filled"
                  {...register("registeredEntityName", {
                    required: true,
                  })}
                />
              </Grid>
            )}

            {/* {Unique Entity Number (UEN) input field} */}
            {_.has(uniqueEntityNumber, "label") && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  defaultValue={
                    _.has(dataRedux, "uniqueEntityNumber")
                      ? dataRedux.uniqueEntityNumber
                      : ""
                  }
                  label={uniqueEntityNumber.label}
                  variant="filled"
                  error={
                    _.has(errors, "uniqueEntityNumber") &&
                    _.has(errors.uniqueEntityNumber, "type") &&
                    !_.isEqual(errors.uniqueEntityNumber.type, "required") &&
                    true
                  }
                  helperText={
                    errors.uniqueEntityNumber &&
                    errors.uniqueEntityNumber.message
                  }
                  {...register("uniqueEntityNumber", {
                    required: true,
                    pattern: {
                      // eslint-disable-next-line no-useless-escape
                      value: /^[A-Za-z0-9]{9}[A-Za-z0-9]{1}$|^[A-Za-z0-9]{10}$/,
                      message: `${ERROR_ICON} ${uniqueEntityNumber.helperText}`,
                    },
                  })}
                />
              </Grid>
            )}
          </Grid>
        </Grid>

        {/* {Column right} */}
        <Grid item xs={12} md={6}>
          {/* {Select */}
          <Select
            fullWidth
            required
            register={register}
            label={companyType.label}
            listSelect={LIST_COMPANY_TYPE}
            name={`companyType`}
            defaultValue={_.get(dataRedux, `companyType`)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default CompanyRegistration;
