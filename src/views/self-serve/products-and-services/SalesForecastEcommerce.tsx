// import modules
import React, { useState } from "react";

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
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);

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
                <Grid item xs={5}>
                  <TextField
                    fullWidth
                    label={textField.description}
                    InputProps={
                      isSelected1 ? (
                        {
                          startAdornment: (
                            <InputAdornment position="start">
                              {textField.label}
                            </InputAdornment>
                          ),
                        }
                      ) : (
                        <></>
                      )
                    }
                    onFocus={(e) => setIsSelected(true)}
                    onBlur={(e) => {
                      console.log("blur asdjadbabdjabdjasbdsj");
                      setIsSelected(false);
                    }}
                    error={
                      _.has(errors, "Ecom") &&
                      _.has(errors.Ecom, textField.keyName) &&
                      !_.isEqual(
                        errors.Ecom[textField.keyName].type,
                        "required"
                      ) &&
                      true
                    }
                    defaultValue={
                      _.has(dataRedux, textField.keyName)
                        ? dataRedux[textField.keyName]
                        : ""
                    }
                    helperText={
                      _.has(errors, "Ecom") &&
                      _.has(errors.Ecom, textField.keyName)
                        ? errors.Ecom[textField.keyName].message
                        : ""
                    }
                    variant="filled"
                    {...register(`Ecom.${textField.keyName}`, {
                      required: true,
                      pattern: {
                        // eslint-disable-next-line no-useless-escape
                        value: /^[1-9]\d*$/,
                        message: `${ERROR_ICON} ${textField.helperText}`,
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
