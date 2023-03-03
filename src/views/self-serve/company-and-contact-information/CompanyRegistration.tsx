// import modules
import React from "react";
import { v4 as uuidv4 } from "uuid";
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

// import constant
import { ERROR_ICON, SELF_SERVE_PAGE } from "@/utils/constants";

// render UI
const CompanyRegistration: React.FC<any> = (props) => {
  const { cx, data, register, errors } = props;
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
                  id={uuidv4()}
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
                  id={uuidv4()}
                  error={errors.uniqueEntityNumber && true}
                  label={uniqueEntityNumber.label}
                  variant="filled"
                  helperText={
                    errors.uniqueEntityNumber &&
                    `${ERROR_ICON} ${errors.uniqueEntityNumber.message}`
                  }
                  {...register("uniqueEntityNumber", {
                    required: uniqueEntityNumber.requiredText,
                    pattern: {
                      // eslint-disable-next-line no-useless-escape
                      value: /^[A-Za-z0-9]{9}[A-Za-z0-9]{1}$|^[A-Za-z0-9]{10}$/,
                      message: uniqueEntityNumber.helperText,
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
                labelId="select-company-type-label"
                id="select-company-type"
                {...register("companyType", {
                  required: true,
                })}
              >
                {_.map(SELF_SERVE_PAGE.list_company_type, (item, index) => {
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
