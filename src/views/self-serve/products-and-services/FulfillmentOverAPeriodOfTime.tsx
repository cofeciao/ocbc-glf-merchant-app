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
  const {
    LIST_PLEASE_INDICATE_DURATION,
    PLEASE_SELECT_LABEL,
    LABEL_PERCENTAGE_OF_SERVICES_NOT_FULFILLED_IMMEDIATELY,
    PERCENT_CHARACTERS,
  } = SELF_SERVE_PAGE;
  const {
    cx,
    variant = "point-of-sales",
    register,
    unregister,
    dataRedux,
  } = props;

  /**
   * Unregister after unmount the component
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
              {_.has(LIST_PLEASE_INDICATE_DURATION, "description") && (
                <Typography
                  className={cx(
                    "fulfilment-information-description input-field-description"
                  )}
                >
                  {LIST_PLEASE_INDICATE_DURATION.description}
                </Typography>
              )}

              {/* {Dropdown} */}
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
                    _.has(dataRedux, "deliveryTimeToCustomers") ?
                    dataRedux.deliveryTimeToCustomers : ""
                  }
                  {...register("POS.deliveryTimeToCustomers", {
                    required: true,
                  })}
                >
                  {_.map(
                    LIST_PLEASE_INDICATE_DURATION.listDropdown,
                    (item, index) => {
                      return (
                        <MenuItem key={index} value={item.value}>
                          {item.name}
                        </MenuItem>
                      );
                    }
                  )}
                </Select>
              </FormControl>
            </Grid>

            {/* {Percentage of products/services not fulfilled immediately} */}
            <Grid item xs={12} md={6}>
              {/* {Description} */}
              {LABEL_PERCENTAGE_OF_SERVICES_NOT_FULFILLED_IMMEDIATELY && (
                <Typography
                  className={cx(
                    "fulfilment-information-description input-field-description"
                  )}
                >
                  {LABEL_PERCENTAGE_OF_SERVICES_NOT_FULFILLED_IMMEDIATELY}
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
