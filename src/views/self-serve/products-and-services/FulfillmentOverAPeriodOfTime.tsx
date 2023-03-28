// import modules
import React, { ChangeEvent, useEffect, useState } from "react";
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

// import icons
import ExpandMore from "@material-ui/icons/ExpandMore";

// import types
import { IProductsAndServices } from "./ProductsAndServices";

// render UI
const FulfillmentOverAPeriodOfTime: React.FC<IProductsAndServices.IFulfillmentOverAPeriodOfTime> = (props) => {
  const { PERCENT_CHARACTERS } = SELF_SERVE_PAGE;
  const { cx, data, register, errors, dataRedux } = props;
  const { listDropdown, textField } = data;
  const [inputValue, setInputValue] = useState(
    dataRedux.percentageOfProductsNotFulfilledImmediately || ""
  );

  /**
   * Prevent user typing non-number
   */
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value.replace(/\D/g, ""));
  }

  return (
    <Box className={cx("fulfillment-over-a-period-of-time-wrapper")}>
      {
        <Grid item xs={12}>
          <Grid container className={cx("mt-dt-40")}>
            {/* {Please indicate duration} */}
            <Grid item xs={5}>
              {/* {Description} */}
              {!_.isEmpty(listDropdown.description) && (
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
                    IconComponent={ExpandMore}
                    defaultValue={
                      _.has(dataRedux, "duration") ? dataRedux.duration : ""
                    }
                    {...register("POS.duration", {
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
              {!_.isEmpty(textField.description) && (
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
                  type="text"
                  className={cx("percentage-input-field")}
                  variant="filled"
                  label={textField.label}
                  value={inputValue}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {PERCENT_CHARACTERS}
                      </InputAdornment>
                    ),
                  }}
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
                  {...register(
                    "POS.percentageOfProductsNotFulfilledImmediately",
                    {
                      required: true,
                      pattern: {
                        // eslint-disable-next-line no-useless-escape
                        value: /^\b(0|[1-9][0-9]?|100)\b$/,
                        message: `${ERROR_ICON} ${textField.helperText}`,
                      },
                      onChange: handleChange,
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
