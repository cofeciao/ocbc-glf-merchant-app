// import modules
import React from "react";

import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import _ from "lodash";
import { ERROR_ICON } from "@/utils/constants";

// import types

// render UI
const SalesForecastEcommerce: React.FC<any> = (props) => {
  const { cx, data, register, errors, dataRedux } = props;

  return (
    <Box className={cx("sales-forecast-wrapper")}>
      {_.has(data, "description") && (
        <Typography className={cx("section-description")}>
          {data.description}
        </Typography>
      )}
      <Grid item xs={12}>
        <Box className={cx("text-field-group")}>
          {_.map(data.listTextField, (textField, index) => {
            return (
              <Box key={index}>
                <Typography
                  className={cx(
                    "sales-forecast-description input-field-description"
                  )}
                >
                  {textField.description}
                </Typography>

                <Grid item xs={3}>
                  <TextField
                    name="numberformat"
                    id="formatted-numberformat-input"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {textField.label}
                        </InputAdornment>
                      ),
                    }}
                    defaultValue={
                      _.has(dataRedux, textField.keyName)
                        ? dataRedux[textField.keyName]
                        : ""
                    }
                    helperText={
                      _.has(errors, "Ecom") &&
                      _.has(errors.Ecom, textField.keyName) &&
                      `${ERROR_ICON} ${errors.Ecom[textField.keyName].message}`
                    }
                    {...register(`Ecom.${textField.keyName}`, {
                      required: true,
                      pattern: {
                        // eslint-disable-next-line no-useless-escape
                        value: /^[1-9]\d*$/,
                        message: textField.helperText,
                      },
                    })}
                  />
                </Grid>
              </Box>
            );
          })}
        </Box>
      </Grid>
    </Box>
  );
};
export default SalesForecastEcommerce;
