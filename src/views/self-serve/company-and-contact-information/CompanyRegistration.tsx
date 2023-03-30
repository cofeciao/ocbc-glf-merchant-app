// import modules
import React from "react";
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  TextField,
  Select,
  InputLabel,
} from "@material-ui/core";
import _ from "lodash";
import { ICompanyAndContactInformation } from "./CompanyAndContactInformation";

// import constant
import { ERROR_ICON, SELF_SERVE_PAGE } from "@/utils/constants";

// import icons
import ExpandMore from "@material-ui/icons/ExpandMore";

// render UI
const CompanyRegistration: React.FC<
  ICompanyAndContactInformation.ICompanyRegistration
> = (props) => {
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
          {/* {Company Type select field} */}
          {_.has(companyType, "label") && (
            <FormControl
              variant="filled"
              className={cx("company-type-select")}
              fullWidth
            >
              <InputLabel id="select-company-type-label">
                {companyType.label}
              </InputLabel>
              <Select
                fullWidth
                defaultValue={
                  _.has(dataRedux, "companyType") ? dataRedux.companyType : ""
                }
                labelId="select-company-type-label"
                id="select-company-type"
                IconComponent={ExpandMore}
                {...register("companyType", {
                  required: true,
                })}
              >
                {_.map(LIST_COMPANY_TYPE, (item, index) => {
                  return (
                    <MenuItem key={index} value={item.name}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default CompanyRegistration;
