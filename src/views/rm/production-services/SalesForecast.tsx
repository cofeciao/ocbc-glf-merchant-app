// import modules
import {
  Box,
  Typography,
  TextField,
  Grid,
  InputAdornment,
} from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import _ from "lodash";

// import icons
import { ERROR_ICON, STEP_RM } from "@/utils/constants-rm";

// render UI
const SalesForecast: React.FC<any> = (props) => {
  const { cx, dataRedux, register, errors } = props;
  const {
    LIST_STEP: {
      productAndService: {
        section: { salesForecast },
      },
    },
  } = STEP_RM;

  // states
  const [openAdornmentFirst, setOpenAdornmentFirst] = useState<boolean>(false);
  const [openAdornmentSecond, setOpenAdornmentSecond] =
    useState<boolean>(false);
  const [
    valueAverageAmountPerCreditCardTransaction,
    setValueAverageAmountPerCreditCardTransaction,
  ] = useState<string>("");
  const [
    valueAnnualCreditCardSalesForecast,
    setValueAnnualCreditCardSalesForecast,
  ] = useState<string>("");

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

  return (
    <Box className={cx("sales-forecast-wrapper")}>
      {/* {Description} */}
      <Typography className={cx("title mb-24")}>
        {salesForecast.labelBasedOnYourProducts}
      </Typography>

      {/* {TextField} */}
      <Grid item xs={12}>
        <Box className={cx("text-field-group")}>
          {_.map(salesForecast.listTextField, (textField, index: number) => {
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
