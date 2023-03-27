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
const SalesForecastEcommerce: React.FC<any> = (props) => {
  const { cx, data, register, errors, dataRedux } = props;
  const [openAdornmentFirst, setOpenAdornmentFirst] = useState<boolean>(false);
  const [openAdornmentFirstSecond, setOpenAdornmentFirstSecond] = useState<boolean>(false);
  const [
    valueAverageAmountPerCreditCardTransaction,
    setValueAverageAmountPerCreditCardTransaction,
  ] = useState<string>("");
  const [
    valueAnnualCreditCardSalesForecast,
    setValueAnnualCreditCardSalesForecast,
  ] = useState<string>("");

  /**
   * Check data from redux and dump data into input fields
   */
  useEffect(() => {
    if (_.has(dataRedux, "averageAmountPerCreditCardTransaction")) {
      setValueAverageAmountPerCreditCardTransaction(
        dataRedux.averageAmountPerCreditCardTransaction
      );
      setOpenAdornmentFirst(true);
    }
    if (_.has(dataRedux, "annualCreditCardSalesForecast")) {
      setValueAnnualCreditCardSalesForecast(
        dataRedux.annualCreditCardSalesForecast
      );
      setOpenAdornmentFirstSecond(true);
    }
  }, [dataRedux]);

  /**
   * Replace numeric values ​​from input
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
                    value={
                      index === 0
                        ? valueAverageAmountPerCreditCardTransaction
                        : valueAnnualCreditCardSalesForecast
                    }
                    InputProps={
                      (openAdornmentFirst && index === 0) ||
                      (openAdornmentFirstSecond && index === 1)
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
                      if (index === 0) {
                        setOpenAdornmentFirst(true);
                      } else {
                        setOpenAdornmentFirstSecond(true);
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
                            ? setOpenAdornmentFirst(false)
                            : setOpenAdornmentFirstSecond(false)
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
