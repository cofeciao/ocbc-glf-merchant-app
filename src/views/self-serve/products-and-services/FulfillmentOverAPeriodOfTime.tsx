// import modules
import React, { useEffect } from "react";
import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import _ from "lodash";

// import constants
import { ERROR_ICON, SELF_SERVE_PAGE } from "@/utils/constants";

// import types

// render UI
const FulfillmentOverAPeriodOfTime: React.FC<any> = (props) => {
  const { PERCENT_CHARACTERS } = SELF_SERVE_PAGE;
  const { cx, data, variant, register, errors, unregister, dataRedux } = props;
  const { listDropdown, textField } = data;

  /**
   * Handle unregister if fields are hidden
   */
  useEffect(() => {
    if (!_.isEqual(variant, "fulfillment-over-a-period-of-time")) {
      unregister([
        "POS.deliveryTimeToCustomers",
        "POS.percentageOfProductsNotFulfilledImmediately",
      ]);
    }
  }, [variant]);

  return (
    <Box className={cx("fulfillment-over-a-period-of-time-wrapper")}>
      {
        <Grid item xs={12}>
          <Grid container className={cx("mt-dt-40")}>
            {/* {Please indicate duration} */}
            <Grid item xs={6}>
              {/* {Description} */}
              {_.has(listDropdown, "description") && (
                <Typography
                  className={cx(
                    "fulfilment-information-description input-field-description"
                  )}
                >
                  {listDropdown.description}
                </Typography>
              )}

              {/* {Dropdown} */}
              {!_.isEmpty(listDropdown) && (
                <FormControl
                  variant="filled"
                  className={cx("duration-select")}
                  fullWidth
                >
                  {listDropdown.label && (
                    <InputLabel id="select-duration-label">
                      {listDropdown.label}
                    </InputLabel>
                  )}
                  <Select
                    fullWidth
                    labelId="select-duration-label"
                    id="select-duration"
                    defaultValue={
                      _.has(dataRedux, "deliveryTimeToCustomers")
                        ? dataRedux.deliveryTimeToCustomers
                        : ""
                    }
                    {...register("POS.deliveryTimeToCustomers", {
                      required: true,
                    })}
                  >
                    {_.map(listDropdown.list, (item, index) => {
                      return (
                        <MenuItem key={index} value={item.value}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              )}
            </Grid>

            {/* {Percentage of products/services not fulfilled immediately} */}
            <Grid item xs={12}>
              {/* {Description} */}
              {_.has(textField, "description") && (
                <Typography
                  className={cx(
                    "fulfilment-information-description input-field-description"
                  )}
                >
                  {textField.description}
                </Typography>
              )}

              {/* {Text field} */}
              <Grid item xs={12} md={5}>
                <TextField
                  fullWidth
                  type="number"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {PERCENT_CHARACTERS}
                      </InputAdornment>
                    ),
                  }}
                  className={cx("percentage-input-field")}
                  variant="filled"
                  label={textField.label}
                  error={
                    _.has(errors, "POS") &&
                    _.has(
                      errors.POS,
                      "percentageOfProductsNotFulfilledImmediately"
                    ) &&
                    !_.isEqual(
                      errors.POS.percentageOfProductsNotFulfilledImmediately
                        .type,
                      "required"
                    ) &&
                    errors.POS.percentageOfProductsNotFulfilledImmediately &&
                    true
                  }
                  helperText={
                    _.has(errors, "POS") &&
                    _.has(
                      errors.POS,
                      "percentageOfProductsNotFulfilledImmediately"
                    )
                      ? errors.POS.percentageOfProductsNotFulfilledImmediately
                          .message
                      : ""
                  }
                  defaultValue={
                    _.has(
                      dataRedux,
                      "percentageOfProductsNotFulfilledImmediately"
                    )
                      ? dataRedux.percentageOfProductsNotFulfilledImmediately
                      : ""
                  }
                  {...register(
                    "POS.percentageOfProductsNotFulfilledImmediately",
                    {
                      required: true,
                      pattern: {
                        // eslint-disable-next-line no-useless-escape
                        value: /^\b(0|[1-9][0-9]?|100)\b$/,
                        message: `${ERROR_ICON} ${textField.helperText}`,
                      },
                    }
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      }
    </Box>
  );
};
export default FulfillmentOverAPeriodOfTime;
