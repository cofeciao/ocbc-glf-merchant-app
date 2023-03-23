// import modules
import React, { ChangeEvent, useState } from "react";
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
  const { cx, data, register, errors, dataRedux } =
    props;
  const [isSelected1, setIsSelected1] = useState<boolean>(false);
  const [isSelected2, setIsSelected2] = useState<boolean>(false);
  const [value1, setValue1] = useState<string>("");
  const [value2, setValue2] = useState<string>("");

  /**
   * Handle numeric value from inputs
   * @param event
   */
  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    // Change value to thousand seperator, eg: 1000000 => 1,000,000
    const sanitizedText = event.target.value.replace(/[^0-9]/g, "");
    const formattedText = sanitizedText.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    index === 0 ? setValue1(formattedText) : setValue2(formattedText);
  };

  // render UI
  return (
    <Box className={cx("sales-forecast-wrapper")}>
      {_.has(data, "description") && (
        <Typography className={cx("section-description")}>
          {data.description}
        </Typography>
      )}
      <Grid item xs={12}>
        <Box className={cx("text-field-group")}>
          {_.map(data.listTextField, (textField, index: number) => {
            return (
              <Box key={index}>
                <Grid item xs={12} md={6} lg={5}>
                  <TextField
                    fullWidth
                    label={textField.description}
                    value={index === 0 ? value1 : value2}
                    InputProps={
                      (isSelected1 && index === 0) ||
                      (isSelected2 && index === 1)
                        ? {
                            startAdornment: (
                              <InputAdornment position="start">
                                {textField.label}
                              </InputAdornment>
                            )
                          }
                        : {}
                    }
                    onFocus={() => {
                      if (index === 0) {
                        setIsSelected1(true);
                      } else {
                        setIsSelected2(true);
                      }
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
                        value: /^[1-9]\d{0,2}(,\d{3})*$/,
                        message: `${ERROR_ICON} ${textField.helperText}`,
                      },
                      onChange: (event: ChangeEvent<HTMLInputElement>) =>
                        handleChange(event, index),
                      onBlur: (e: any) => {
                        e.target.value === ""
                          ? index === 0
                            ? setIsSelected1(false)
                            : setIsSelected2(false)
                          : null;
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
