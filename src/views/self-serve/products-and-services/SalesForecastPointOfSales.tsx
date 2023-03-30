// import modules
import React, { ChangeEvent, useEffect, useState } from "react";
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
const SalesForecast: React.FC<any> = (props) => {
  const { cx, data, register, errors, dataRedux } = props;
  const [openAdornmentFirst, setOpenAdornmentFirst] = useState<boolean>(false);
  const [openAdornmentSecond, setOpenAdornmentSecond] =
    useState<boolean>(false);
  const [
    valueAverageAmountPerCreditCardTransaction,
    setValueAverageAmountPerCreditCardTransaction,
  ] = useState<string>(dataRedux.averageAmountPerCreditCardTransaction || "");
  const [
    valueAnnualCreditCardSalesForecast,
    setValueAnnualCreditCardSalesForecast,
  ] = useState<string>(dataRedux.annualCreditCardSalesForecast || "");

  /**
   * Check data from redux and dump data into input fields
   */
  useEffect(() => {
    if (_.has(dataRedux, "averageAmountPerCreditCardTransaction")) {
      setOpenAdornmentFirst(true);
    }

    if (_.has(dataRedux, "annualCreditCardSalesForecast")) {
      setOpenAdornmentSecond(true);
    }
  }, [dataRedux]);

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
    index === 0
      ? setValueAverageAmountPerCreditCardTransaction(formattedText)
      : setValueAnnualCreditCardSalesForecast(formattedText);
  };

  // render UI
  return (
    <Box className={cx("sales-forecast-wrapper")}>
      {/* {Description} */}
      {_.has(data, "description") && (
        <Typography className={cx("section-description")}>
          {data.description}
        </Typography>
      )}

      {/* {TextField} */}
      <Grid item xs={12}>
        <Box className={cx("text-field-group")}>
          {_.map(data.listTextField, (textField, index: number) => {
            return (
              <Box key={index}>
                <Grid item xs={12} md={6} lg={5}>
                  <TextField
                    fullWidth
                    value={
                      index === 0
                        ? valueAverageAmountPerCreditCardTransaction
                        : valueAnnualCreditCardSalesForecast
                    }
                    variant="filled"
                    label={textField.description}
                    InputProps={
                      (openAdornmentFirst && index === 0) ||
                      (openAdornmentSecond && index === 1)
                        ? {
                            startAdornment: (
                              <InputAdornment position="start">
                                {textField.label}
                              </InputAdornment>
                            ),
                          }
                        : {}
                    }
                    onFocus={() => {
                      index === 0
                        ? setOpenAdornmentFirst(true)
                        : setOpenAdornmentSecond(true);
                    }}
                    error={
                      _.has(errors, "POS") &&
                      _.has(errors.POS, textField.keyName) &&
                      !_.isEqual(
                        errors.POS[textField.keyName].type,
                        "required"
                      ) &&
                      true
                    }
                    {...register(`POS.${textField.keyName}`, {
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
                            ? setOpenAdornmentFirst(false)
                            : setOpenAdornmentSecond(false)
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
export default SalesForecast;
