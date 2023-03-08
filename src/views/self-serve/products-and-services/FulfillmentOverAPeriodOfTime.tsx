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
import { SELF_SERVE_PAGE } from "@/utils/constants";

// import types

// render UI
const FulfillmentOverAPeriodOfTime: React.FC<any> = (props) => {
  const { PLEASE_SELECT_LABEL, PERCENT_CHARACTERS } = SELF_SERVE_PAGE;
  const {
    cx,
    data,
    variant,
    register,
    unregister,
    dataRedux,
  } = props;
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
          <Grid container className={cx("n-wrap mt-dt-40")}>
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
                  {PLEASE_SELECT_LABEL && (
                    <InputLabel id="select-duration-label">
                      {PLEASE_SELECT_LABEL}
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
            <Grid item xs={12} md={6}>
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

              {/* {TextField} */}
              <Grid item xs={12} md={6}>
                <TextField
                  name="numberformat"
                  id="formatted-numberformat-input"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {PERCENT_CHARACTERS}
                      </InputAdornment>
                    ),
                  }}
                  className={cx("percentage-input-field")}
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
